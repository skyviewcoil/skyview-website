import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Content-Type": "application/json; charset=utf-8",
};

serve(async (req: Request) => {
  // CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: CORS_HEADERS,
    });
  }

  try {
    const body = await req.json();

    // Honeypot
    if (body.website) {
      return new Response(JSON.stringify({ success: true }), {
        headers: CORS_HEADERS,
      });
    }

    // Validate phone
    const phone = (body.phone || "").replace(/[-\s]/g, "");
    if (!phone || !/^0[0-9]{8,9}$/.test(phone)) {
      return new Response(
        JSON.stringify({ error: "מספר טלפון לא תקין" }),
        { status: 400, headers: CORS_HEADERS }
      );
    }

    // Build lead
    const lead = {
      phone,
      email: String(body.email || "").trim().slice(0, 100),
      notes: String(body.notes || "").trim().slice(0, 500),
      source: String(body.source || "").slice(0, 200),
      form_type: String(body.form_type || "general").slice(0, 50),
      timestamp: new Date().toISOString(),
    };

    // ── Send email via Resend ──
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    const RESEND_DOMAIN = Deno.env.get("RESEND_DOMAIN") || "mail.skyview.co.il";
    const NOTIFY_EMAIL = "skyview.co.il@gmail.com";

    if (!RESEND_API_KEY) {
      console.error("[send-callback-email] RESEND_API_KEY not set");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        { status: 500, headers: CORS_HEADERS }
      );
    }

    const formLabel = lead.form_type === "contact-page" ? "דף צור קשר" : "טופס מהיר (פוטר)";

    const emailHtml = `
      <div dir="rtl" style="font-family:Arial,Helvetica,sans-serif;max-width:500px;margin:0 auto;padding:24px;background:#faf9f7;border-radius:8px;">
        <h2 style="color:#3A3A38;margin:0 0 16px;">ליד חדש מאתר SkyView</h2>
        <hr style="border:none;border-top:2px solid #8B734A;margin:0 0 20px;">
        <table style="width:100%;border-collapse:collapse;font-size:15px;color:#3A3A38;">
          <tr><td style="padding:8px 0;font-weight:bold;width:100px;">טלפון:</td><td style="padding:8px 0;" dir="ltr">${lead.phone}</td></tr>
          ${lead.email ? `<tr><td style="padding:8px 0;font-weight:bold;">מייל:</td><td style="padding:8px 0;" dir="ltr">${lead.email}</td></tr>` : ""}
          ${lead.notes ? `<tr><td style="padding:8px 0;font-weight:bold;vertical-align:top;">הערות:</td><td style="padding:8px 0;">${lead.notes}</td></tr>` : ""}
          <tr><td style="padding:8px 0;font-weight:bold;">מקור:</td><td style="padding:8px 0;">${formLabel}</td></tr>
          <tr><td style="padding:8px 0;font-weight:bold;">עמוד:</td><td style="padding:8px 0;" dir="ltr">${lead.source}</td></tr>
          <tr><td style="padding:8px 0;font-weight:bold;">זמן:</td><td style="padding:8px 0;" dir="ltr">${lead.timestamp}</td></tr>
        </table>
        <hr style="border:none;border-top:1px solid #e8e4df;margin:20px 0 12px;">
        <p style="font-size:12px;color:#888;margin:0;">נשלח אוטומטית מאתר skyview.co.il</p>
      </div>
    `;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `SkyView Leads <leads@${RESEND_DOMAIN}>`,
        to: [NOTIFY_EMAIL],
        subject: `ליד חדש — ${lead.phone}`,
        html: emailHtml,
      }),
    });

    if (!resendRes.ok) {
      const errBody = await resendRes.text();
      console.error("[send-callback-email] Resend error:", resendRes.status, errBody);
      return new Response(
        JSON.stringify({ error: "שגיאה בשליחת מייל" }),
        { status: 500, headers: CORS_HEADERS }
      );
    }

    const resendData = await resendRes.json();
    console.log("[send-callback-email] Email sent:", resendData.id, "to:", NOTIFY_EMAIL);

    // ── Optional: Save to Supabase DB ──
    try {
      const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
      const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
      if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
        await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
          method: "POST",
          headers: {
            apikey: SUPABASE_SERVICE_ROLE_KEY,
            Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
            "Content-Type": "application/json",
            Prefer: "return=minimal",
          },
          body: JSON.stringify({
            phone: lead.phone,
            email: lead.email || null,
            notes: lead.notes || null,
            source: lead.source,
            form_type: lead.form_type,
          }),
        });
      }
    } catch (dbErr) {
      // DB save failure does not break the lead
      console.warn("[send-callback-email] DB save failed:", dbErr.message);
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: CORS_HEADERS }
    );

  } catch (err) {
    console.error("[send-callback-email] Error:", err.message);
    return new Response(
      JSON.stringify({ error: "שגיאה בשליחה" }),
      { status: 500, headers: CORS_HEADERS }
    );
  }
});
