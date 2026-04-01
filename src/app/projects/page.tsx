import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "פרויקטים — תקרות מתוחות שהתקנו",
  description:
    "גלריית פרויקטים של תקרות מתוחות שהותקנו על ידי SkyView — סלונים, אמבטיות, משרדים וחללים מסחריים. לפני ואחרי.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="הפרויקטים שלנו"
        subtitle="מבחר פרויקטים אמיתיים שהתקנו ללקוחות פרטיים ועסקיים בכל רחבי ישראל. כל פרויקט כולל מדידה, ייצור, התקנה ואחריות."
      />
      <section className="section-spacing">
        <div className="section-container">
          <p className="text-body text-sky-muted text-center max-w-prose mx-auto">
            גלריית הפרויקטים בהקמה. בקרוב כאן יוצגו תמונות לפני/אחרי
            מפרויקטים אמיתיים. בינתיים, צרו קשר לצפייה בדוגמאות נוספות.
          </p>
        </div>
      </section>
      <CTASection title="רוצים לראות עוד?" text="צרו קשר ונשלח לכם דוגמאות מפרויקטים דומים." />
    </>
  );
}
