import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { ContentSection } from "@/components/content-blocks";

export const metadata: Metadata = {
  title: "בריסול (Barrisol) — תקרות מתוחות מותג פרימיום",
  description:
    "בריסול (Barrisol) היא מותג צרפתי מוביל לתקרות מתוחות. SkyView מציעה פתרונות באיכות בריסול עם ייצור מקומי ומחירים תחרותיים.",
  alternates: { canonical: "/barrisol" },
};

export default function BarrisolPage() {
  return (
    <>
      <PageHero
        title="בריסול — תקרות מתוחות ברמה הגבוהה ביותר"
        subtitle="בריסול (Barrisol) הוא מותג צרפתי שהפך לשם נרדף לתקרות מתוחות איכותיות. SkyView מציעה חומרים ופתרונות באיכות מקבילה, עם ייצור מקומי, זמני אספקה קצרים ומחירים תחרותיים."
      />
      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">מה זה בריסול?</h2>
        <p className="mt-4 text-body text-sky-muted">
          Barrisol היא חברה צרפתית שהחלה לפתח תקרות מתוחות בשנות ה-60 והפכה
          לסטנדרט הזהב בתעשייה. השם &quot;בריסול&quot; משמש בישראל כשם כולל
          לתקרות מתוחות איכותיות, בדומה לאופן שבו &quot;ג׳קוזי&quot; מתאר כל
          אמבט עיסוי.
        </p>
      </ContentSection>
      <ContentSection bg="light">
        <h2 className="text-h2-mobile md:text-h2-desktop">SkyView מול בריסול</h2>
        <p className="mt-4 text-body text-sky-muted">
          SkyView עובדת עם יריעות PVC אירופיות מהיצרנים המובילים (RENOLIT, MSD)
          שעומדות באותם תקנים בדיוק. ההבדל: ייצור מקומי בישראל שמאפשר זמני
          אספקה קצרים, התאמה אישית מהירה, ומחירים נמוכים משמעותית מיבוא ישיר
          של מותג Barrisol.
        </p>
      </ContentSection>
      <CTASection title="רוצים איכות בריסול במחיר ישראלי?" />
    </>
  );
}
