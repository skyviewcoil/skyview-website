import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { ContentSection, FeatureGrid } from "@/components/content-blocks";

export const metadata: Metadata = {
  title: "תקרות מתוחות — כל סוגי הפתרונות והגימורים",
  description:
    "מדריך מקיף לסוגי תקרות מתוחות: מט, מבריק, סאטן, מוארת, אקוסטית ועם הדפס. גלו איזו תקרה מתאימה לחלל שלכם.",
  alternates: { canonical: "/stretch-ceilings" },
};

const types = [
  { title: "מט", text: "גימור חלק ושקט ללא החזרי אור. מתאים לסלון, חדר שינה ומשרד.", href: "/stretch-ceiling-matte" },
  { title: "מבריק", text: "משטח מראה שמכפיל תחושת מרחב. אידיאלי לחללים קטנים.", href: "/stretch-ceiling-glossy" },
  { title: "מוארת", text: "תאורה אחידה דרך יריעה שקופה. מחליפה גופי תאורה מסורתיים.", href: "/lighted-stretch-ceiling" },
  { title: "אקוסטית", text: "יריעה מנוקבת שסופגת רעשים. לקולנוע ביתי, משרדים ומסעדות.", href: "/acoustic-stretch-ceiling" },
  { title: "עם הדפס", text: "הדפסה של תמונה או גרפיקה ישירות על התקרה.", href: "/printed-stretch-ceiling" },
  { title: "עם פס LED", text: "פסי LED נסתרים שיוצרים קווי אור מרחפים בתקרה.", href: "/stretch-ceiling-led-strip" },
];

export default function StretchCeilingsPage() {
  return (
    <>
      <PageHero
        title="תקרות מתוחות — כל הפתרונות במקום אחד"
        subtitle="SkyView מציעה את כל סוגי התקרות המתוחות — מט, מבריק, סאטן, מוארת, אקוסטית ועם הדפס — עם ייצור מקומי, התקנה מקצועית ואחריות מלאה."
      />

      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">מהי תקרה מתוחה?</h2>
        <p className="mt-4 text-body text-sky-muted">
          תקרה מתוחה היא יריעת PVC או בד טכני שנמתחת על מסגרת אלומיניום מתחת
          לתקרה הקיימת. היא יוצרת משטח חלק ואחיד לחלוטין, מסתירה תשתיות
          ופגמים, ומאפשרת שילוב של תאורה, בידוד אקוסטי וגימורים דקורטיביים —
          הכל בהתקנה נקייה ומהירה ללא עבודות בנייה.
        </p>
      </ContentSection>

      <section className="section-spacing bg-sky-light">
        <div className="section-container">
          <h2 className="text-h2-mobile md:text-h2-desktop text-center">
            סוגי תקרות מתוחות
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {types.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="group p-6 bg-white border border-sky-border hover:border-sky-navy/30 transition-colors"
              >
                <h3 className="text-h3-mobile md:text-h3-desktop group-hover:text-sky-navy transition-colors">
                  {t.title}
                </h3>
                <p className="mt-2 text-body text-sky-muted">{t.text}</p>
                <span className="inline-block mt-3 text-sm font-semibold text-sky-navy">
                  למידע נוסף ←
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">יתרונות עיקריים</h2>
        <FeatureGrid
          items={[
            { title: "התקנה מהירה", text: "חדר ממוצע מותקן ב-3-5 שעות. דירה שלמה ביום." },
            { title: "עמידות במים", text: "היריעה חוסמת נזילות ומחזיקה עד 100 ליטר למ״ר." },
            { title: "תחזוקה אפסית", text: "ניקוי קל במטלית לחה. ללא צביעה מחדש." },
            { title: "אחריות מלאה", text: "אחריות יצרן על החומר וההתקנה." },
          ]}
        />
      </ContentSection>

      <CTASection />
    </>
  );
}
