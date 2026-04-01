import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { ContentSection } from "@/components/content-blocks";

export const metadata: Metadata = {
  title: "מדריך תקרות מתוחות — כל מה שצריך לדעת לפני שמזמינים",
  description:
    "מדריך מקיף לתקרות מתוחות: סוגי חומרים, גימורים, תהליך התקנה, מחירים, תחזוקה, אורך חיים ושאלות נפוצות. כל המידע במקום אחד.",
  alternates: { canonical: "/stretch-ceiling-guide" },
};

export default function GuidePage() {
  return (
    <>
      <PageHero
        title="מדריך תקרות מתוחות — כל מה שצריך לדעת"
        subtitle="לפני שמזמינים תקרה מתוחה, כדאי להבין את הטכנולוגיה, סוגי החומרים, תהליך ההתקנה והמחירים. המדריך הזה מרכז את כל המידע."
      />
      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">מהי תקרה מתוחה?</h2>
        <p className="mt-4 text-body text-sky-muted">
          תקרה מתוחה היא מערכת גימור תקרה שמורכבת ממסגרת אלומיניום (פרופיל)
          שמחוברת לקירות, ויריעה שנמתחת עליה. היריעה יכולה להיות מ-PVC או מבד
          טכני, והיא נמתחת בחום ומתקררת למשטח חלק לחלוטין.
        </p>
        <h2 className="mt-10 text-h2-mobile md:text-h2-desktop">סוגי חומרים</h2>
        <p className="mt-4 text-body text-sky-muted">
          PVC — החומר הנפוץ ביותר. עמיד במים, זמין במגוון צבעים וגימורים, ניתן
          להדפסה. בד טכני — חומר ארוג ללא PVC, נושם, מתאים למי שמעדיף חומרים
          טבעיים. לרוב מגיע בגימור מט בלבד.
        </p>
        <h2 className="mt-10 text-h2-mobile md:text-h2-desktop">תהליך ההתקנה</h2>
        <p className="mt-4 text-body text-sky-muted">
          מדידה מדויקת → בחירת חומר וצבע → ייצור מותאם אישית → התקנת פרופיל
          על הקירות → חימום וכניסת היריעה → חיתוך פתחים לתאורה ומזגנים →
          ניקוי סופי. הכל מסתיים בדרך כלל ביום עבודה אחד.
        </p>
        <h2 className="mt-10 text-h2-mobile md:text-h2-desktop">תחזוקה ואורך חיים</h2>
        <p className="mt-4 text-body text-sky-muted">
          תקרה מתוחה דורשת תחזוקה מינימלית — ניקוי במטלית לחה פעם בחודשיים
          מספיק. אין צורך בצביעה מחדש. אורך חיים ממוצע: 15-25 שנה. רוב
          היצרנים נותנים אחריות של 10-15 שנה על היריעה.
        </p>
      </ContentSection>
      <CTASection title="מוכנים להתחיל?" />
    </>
  );
}
