import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { ContentSection, ComparisonTable } from "@/components/content-blocks";

export const metadata: Metadata = {
  title: "תקרה מתוחה או גבס — השוואה מלאה 2026",
  description:
    "השוואה מקיפה בין תקרה מתוחה לתקרת גבס: מחיר, זמן התקנה, עמידות במים, תחזוקה, תאורה, אקוסטיקה ואורך חיים. יתרונות וחסרונות.",
  alternates: { canonical: "/stretch-ceiling-vs-drywall" },
};

const rows = [
  { label: "זמן התקנה", stretch: "3-5 שעות לחדר", other: "3-5 ימי עבודה" },
  { label: "אבק ולכלוך", stretch: "ללא אבק כלל", other: "אבק ופסולת בנייה" },
  { label: "עמידות במים", stretch: "100% — עוצרת נזילות", other: "נזק מיידי מרטיבות" },
  { label: "עובש", stretch: "לא מתפתח", other: "סיכון גבוה בלחות" },
  { label: "תחזוקה", stretch: "ניקוי במטלית לחה", other: "צביעה מחדש כל 3-5 שנים" },
  { label: "סדקים", stretch: "לא נוצרים", other: "סדקים נפוצים בתפרים" },
  { label: "תאורה משולבת", stretch: "ספוטים, LED, מסילות, תקרה מוארת", other: "ספוטים בלבד (חיתוך)" },
  { label: "אקוסטיקה", stretch: "אפשרית (יריעה מנוקבת)", other: "אפשרית (פאנלים)" },
  { label: "אורך חיים", stretch: "15-25 שנה", other: "10-15 שנה עם תחזוקה" },
  { label: "מחיר", stretch: "₪179-249/מ״ר (הכל כלול)", other: "₪150-300/מ״ר (תלוי גימור)" },
];

export default function VsDrywallPage() {
  return (
    <>
      <PageHero
        title="תקרה מתוחה או גבס — מה עדיף?"
        subtitle="השוואה מלאה ואובייקטיבית בין שני הפתרונות הנפוצים ביותר לתקרות. לכל אחד יש יתרונות — הנה העובדות שיעזרו לכם להחליט."
      />
      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">טבלת השוואה מלאה</h2>
        <ComparisonTable rows={rows} headerA="תקרה מתוחה" headerB="תקרת גבס" />
      </ContentSection>
      <ContentSection bg="light">
        <h2 className="text-h2-mobile md:text-h2-desktop">מתי תקרה מתוחה עדיפה?</h2>
        <p className="mt-4 text-body text-sky-muted">
          כשרוצים התקנה מהירה ללא אבק, עמידות במים (אמבטיות, מטבחים, חללים
          מסחריים), תקרה ללא סדקים לטווח ארוך, שילוב תאורה מתקדם, או כשצריך
          להסתיר תשתיות קיימות ללא הריסה.
        </p>
        <h2 className="mt-10 text-h2-mobile md:text-h2-desktop">מתי גבס עדיף?</h2>
        <p className="mt-4 text-body text-sky-muted">
          כשצריך לבנות מדפים, נישות או מבנים תלת-ממדיים בתקרה. כשרוצים
          לשלב עבודות גבס קיימות עם קירות. כשיש צורך בנקודות עיגון כבדות
          בתקרה (נדנדות, ערסלים).
        </p>
      </ContentSection>
      <CTASection title="לא בטוחים מה מתאים?" text="דברו איתנו ונעזור לכם לבחור את הפתרון הנכון." />
    </>
  );
}
