import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { ContentSection, FeatureGrid } from "@/components/content-blocks";

export const metadata: Metadata = {
  title: "תקרות מתוחות לעסקים — משרדים, חנויות, מסעדות",
  description:
    "תקרות מתוחות לחללים מסחריים: משרדים, חנויות, מסעדות, מלונות, מרפאות ומוסדות ציבור. פתרונות מותאמים לעסקים עם לוחות זמנים מהירים.",
  alternates: { canonical: "/stretch-ceilings-for-business" },
};

export default function BusinessPage() {
  return (
    <>
      <PageHero
        title="תקרות מתוחות לעסקים — פתרון מהיר ומקצועי"
        subtitle="התקנה בשעות הלילה או בסופי שבוע, ללא הפרעה לפעילות העסקית. פתרונות מותאמים למשרדים, חנויות, מסעדות, מלונות ומרפאות."
        ctaText="קבלו הצעה לעסק"
      />
      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">למה עסקים בוחרים בתקרה מתוחה?</h2>
        <FeatureGrid
          items={[
            { title: "ללא הפרעה", text: "התקנה בשעות לא פעילות. העסק ממשיך לעבוד." },
            { title: "מראה פרימיום", text: "משטח חלק ואחיד שמשדרג כל חלל מסחרי." },
            { title: "תחזוקה אפסית", text: "ללא צביעה מחדש, ללא שפכטל, ללא סדקים." },
            { title: "עמידה בתקנים", text: "עמידה בתקן אש B-S2,D0 ותקני היגיינה." },
          ]}
        />
      </ContentSection>
      <ContentSection bg="light">
        <h2 className="text-h2-mobile md:text-h2-desktop">תחומים שאנחנו משרתים</h2>
        <p className="mt-4 text-body text-sky-muted">
          משרדים ומרחבי עבודה משותפים, חנויות ומרכזי קניות, מסעדות ובתי קפה,
          מלונות ולובי, מרפאות רפואיות ודנטליות, גני ילדים ומוסדות חינוך,
          חדרי כושר וספא, סטודיואים ואולמות אירועים.
        </p>
      </ContentSection>
      <CTASection title="תקרה מתוחה לעסק שלכם" />
    </>
  );
}
