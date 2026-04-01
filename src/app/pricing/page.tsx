import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { ContentSection } from "@/components/content-blocks";

export const metadata: Metadata = {
  title: "מחיר תקרה מתוחה למ״ר — מחשבון מחירים 2026",
  description:
    "מחירי תקרות מתוחות בישראל: MSD Premium מ-₪179/מ״ר, RENOLIT מ-₪249/מ״ר. חישוב מהיר לפי שטח, סוג יריעה ותאורה.",
  alternates: { canonical: "/pricing" },
};

const tiers = [
  {
    name: "MSD Premium",
    price: "₪179",
    unit: "למ״ר",
    features: [
      "יריעת PVC איכותית",
      "מגוון צבעים וגימורים",
      "עמידות במים",
      "אחריות 10 שנים",
      "התקנה מקצועית כלולה",
    ],
  },
  {
    name: "RENOLIT",
    price: "₪249",
    unit: "למ״ר",
    features: [
      "יריעה אירופית פרימיום",
      "עובי ועמידות מוגברים",
      "תקן אקולוגי אירופי",
      "אחריות 15 שנים",
      "התקנה מקצועית כלולה",
    ],
    highlighted: true,
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        title="מחיר תקרה מתוחה — שקיפות מלאה"
        subtitle="מחירון ברור ופשוט ללא הפתעות. המחיר כולל חומר, ייצור, התקנה ואחריות — הכל במחיר אחד למ״ר."
        ctaText="צרו קשר להצעה"
      />

      <section className="section-spacing">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`p-8 border-2 ${
                  t.highlighted
                    ? "border-sky-navy bg-sky-navy/[0.02]"
                    : "border-sky-border"
                }`}
              >
                {t.highlighted && (
                  <span className="text-label text-sky-navy uppercase mb-3 block">
                    פרימיום
                  </span>
                )}
                <h2 className="text-h2-mobile md:text-h2-desktop">{t.name}</h2>
                <div className="mt-4">
                  <span className="text-4xl md:text-5xl font-black text-sky-navy">
                    {t.price}
                  </span>
                  <span className="text-sky-muted mr-2">{t.unit}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {t.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-body text-sky-muted"
                    >
                      <span className="text-sky-navy mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContentSection bg="light">
        <h2 className="text-h2-mobile md:text-h2-desktop">מה משפיע על המחיר?</h2>
        <p className="mt-4 text-body text-sky-muted">
          המחיר הסופי תלוי בכמה גורמים: שטח התקרה, מספר הפינות והחתכים, סוג
          היריעה (מט, מבריק, סאטן, הדפס), ופתרון התאורה. חללים מורכבים עם
          עמודים, נישות או קירות עקומים עשויים לדרוש עבודת התקנה נוספת. צרו קשר
          לקבלת הצעת מחיר מדויקת לפרויקט שלכם.
        </p>
        <h3 className="mt-8 text-h3-mobile md:text-h3-desktop">מה כלול במחיר?</h3>
        <p className="mt-3 text-body text-sky-muted">
          כל המחירים כוללים: מדידה, ייצור בהתאמה אישית, חומרים, פרופילי
          אלומיניום, התקנה מקצועית, ניקיון ואחריות. אין תוספות נסתרות.
        </p>
      </ContentSection>

      <CTASection
        title="רוצים הצעת מחיר מדויקת?"
        text="שלחו לנו את פרטי הפרויקט ונחזור עם הצעה תוך 24 שעות."
      />
    </>
  );
}
