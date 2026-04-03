/**
 * SkyView Lead API — Cloudflare Pages Function
 * File: /functions/api/lead.js
 * Route: POST /api/lead
 *
 * Required env vars (set in Cloudflare Dashboard → Pages → Settings → Environment variables):
 *   WEBHOOK_URL      — Zapier / Make / n8n webhook endpoint
 *   SENDGRID_API_KEY  — SendGrid API key for email notifications
 *   NOTIFY_EMAIL      — Email to receive leads (default: skyview.co.il@gmail.com)
 */

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json; charset=utf-8',
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: CORS_HEADERS });
}

// OPTIONS (CORS preflight)
export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

// GET (health check)
export async function onRequestGet() {
  return json({ status: 'ok', service: 'skyview-leads' });
}

// POST (lead submission)
export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();

    // Honeypot
    if (body.website) {
      return json({ success: true });
    }

    // Validate phone
    const phone = (body.phone || '').replace(/[-\s]/g, '');
    if (!phone || !/^0[0-9]{8,9}$/.test(phone)) {
      return json({ error: 'מספר טלפון לא תקין' }, 400);
    }

    // Build lead
    const lead = {
      timestamp: new Date().toISOString(),
      name: String(body.name || '').trim().slice(0, 100),
      phone,
      email: String(body.email || '').trim().slice(0, 100),
      city: String(body.city || '').trim().slice(0, 50),
      room: String(body.room || '').trim().slice(0, 50),
      notes: String(body.notes || '').trim().slice(0, 500),
      source: String(body.source || 'website').slice(0, 50),
      page: String(body.page_title || body.source || '').slice(0, 200),
      form_type: String(body.form_type || 'general').slice(0, 50),
    };

    if (body.calculator) {
      lead.calculator_area = String(body.calculator.area || '');
      lead.calculator_package = String(body.calculator.package || '');
      lead.calculator_estimate = String(body.calculator.estimate || '');
    }

    // Deliver via all configured channels in parallel
    const results = await Promise.allSettled([
      deliverWebhook(lead, env),
      deliverEmail(lead, env),
    ]);

    // Log for Cloudflare dashboard (Workers → Logs)
    console.log('[SkyView Lead]', JSON.stringify(lead));

    const anyDelivered = results.some(r => r.status === 'fulfilled' && r.value === true);

    if (!anyDelivered && (env.WEBHOOK_URL || env.SENDGRID_API_KEY)) {
      // Channels configured but all failed
      console.error('[SkyView Lead] All delivery channels failed:', JSON.stringify(results));
    }

    return json({
      success: true,
      message: 'פנייתכם התקבלה — נחזור אליכם בקרוב',
    });

  } catch (err) {
    console.error('[SkyView Lead] Handler error:', err.message);
    return json({
      error: 'שגיאה בשליחה. נסו שוב או התקשרו ל-052-808-2988',
    }, 500);
  }
}

// === Webhook (Zapier / Make / n8n / custom CRM) ===
async function deliverWebhook(lead, env) {
  const url = env.WEBHOOK_URL;
  if (!url) return false;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
    });
    return res.ok;
  } catch (e) {
    console.error('[Webhook error]', e.message);
    return false;
  }
}

// === Email via SendGrid ===
async function deliverEmail(lead, env) {
  const apiKey = env.SENDGRID_API_KEY;
  if (!apiKey) return false;

  const toEmail = env.NOTIFY_EMAIL || 'skyview.co.il@gmail.com';

  const emailBody = [
    'ליד חדש מאתר SkyView',
    '─────────────────────',
    `שם: ${lead.name || '—'}`,
    `טלפון: ${lead.phone}`,
    lead.email ? `מייל: ${lead.email}` : null,
    lead.city ? `עיר: ${lead.city}` : null,
    lead.room ? `חדר: ${lead.room}` : null,
    lead.notes ? `הערות: ${lead.notes}` : null,
    `סוג טופס: ${lead.form_type}`,
    `מקור: ${lead.page}`,
    `זמן: ${lead.timestamp}`,
    lead.calculator_estimate ? `\nהערכת מחשבון: ${lead.calculator_estimate} (${lead.calculator_package})` : null,
  ].filter(Boolean).join('\n');

  try {
    const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: toEmail }] }],
        from: { email: 'leads@skyview.co.il', name: 'SkyView Leads' },
        subject: `ליד חדש — ${lead.name || lead.phone}`,
        content: [{ type: 'text/plain', value: emailBody }],
      }),
    });
    return res.status >= 200 && res.status < 300;
  } catch (e) {
    console.error('[SendGrid error]', e.message);
    return false;
  }
}
