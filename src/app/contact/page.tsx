import type { Metadata } from "next";
import { PHONE, PHONE_INTL, EMAIL, INSTAGRAM } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "צור קשר — SkyView תקרות מתוחות",
  description:
    "צרו קשר עם SkyView לייעוץ, הצעת מחיר או שירות. טלפון 052-808-2988, WhatsApp, אימייל. שירות בכל רחבי ישראל.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-sky-light">
        <div className="section-container max-w-prose">
          <h1 className="text-h1-mobile md:text-h1-desktop">צרו קשר</h1>
          <p className="mt-5 text-body-lg text-sky-muted">
            ייעוץ ראשוני ללא התחייבות. ספרו לנו על הפרויקט ונחזור עם הצעה
            תוך 24 שעות.
          </p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="section-container max-w-prose">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-h3-mobile md:text-h3-desktop">טלפון</h2>
                <a
                  href={`tel:${PHONE_INTL}`}
                  className="mt-1 block text-body text-sky-navy font-semibold hover:underline"
                >
                  {PHONE}
                </a>
              </div>
              <div>
                <h2 className="text-h3-mobile md:text-h3-desktop">WhatsApp</h2>
                <a
                  href="https://wa.me/972528082988"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-body text-sky-navy font-semibold hover:underline"
                >
                  שלחו הודעה ב-WhatsApp
                </a>
              </div>
              <div>
                <h2 className="text-h3-mobile md:text-h3-desktop">אימייל</h2>
                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-1 block text-body text-sky-navy font-semibold hover:underline"
                >
                  {EMAIL}
                </a>
              </div>
              <div>
                <h2 className="text-h3-mobile md:text-h3-desktop">Instagram</h2>
                <a
                  href="https://instagram.com/skyview.co.il"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-body text-sky-navy font-semibold hover:underline"
                >
                  {INSTAGRAM}
                </a>
              </div>
              <div>
                <h2 className="text-h3-mobile md:text-h3-desktop">אזור שירות</h2>
                <p className="mt-1 text-body text-sky-muted">כל רחבי ישראל</p>
              </div>
            </div>
            <div className="bg-sky-light p-8 border border-sky-border">
              <h2 className="text-h3-mobile md:text-h3-desktop">
                שלחו לנו פרטים
              </h2>
              <p className="mt-2 text-body text-sky-muted">
                טופס יצירת קשר יהיה זמין כאן בקרוב. בינתיים, צרו קשר
                בטלפון, WhatsApp או אימייל.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
