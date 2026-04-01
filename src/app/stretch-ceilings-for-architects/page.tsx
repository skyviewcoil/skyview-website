import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { ContentSection } from "@/components/content-blocks";

export const metadata: Metadata = {
  title: "תקרות מתוחות לאדריכלים ומעצבי פנים",
  description:
    "חומרי עזר, מפרטים טכניים ודוגמאות חומרים לאדריכלים ומעצבי פנים. שיתוף פעולה מקצועי עם SkyView לפרויקטי עיצוב תקרות.",
  alternates: { canonical: "/stretch-ceilings-for-architects" },
};

export default function ArchitectsPage() {
  return (
    <>
      <PageHero
        title="לאדריכלים ומעצבי פנים — שותפים לעיצוב"
        subtitle="SkyView עובדת עם אדריכלים ומעצבי פנים בפרויקטים פרטיים ומסחריים. אנחנו מספקים מפרטים טכניים, דוגמאות חומרים, ותמיכה מקצועית לאורך כל הפרויקט."
        ctaText="צרו קשר מקצועי"
      />
      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">מה אנחנו מציעים לאנשי מקצוע</h2>
        <p className="mt-4 text-body text-sky-muted">
          ספריית דוגמאות חומרים ללא עלות, קטלוג צבעים וגימורים דיגיטלי,
          מפרטים טכניים ושרטוטי DWG, ייעוץ טכני לפתרונות תאורה ואקוסטיקה,
          הצעות מחיר מהירות לפרויקטים, לוחות זמנים מותאמים, ותיאום מול
          קבלנים וחשמלאים באתר.
        </p>
      </ContentSection>
      <ContentSection bg="light">
        <h2 className="text-h2-mobile md:text-h2-desktop">אפשרויות עיצוביות</h2>
        <p className="mt-4 text-body text-sky-muted">
          רמות גובה שונות, שילוב חומרים (PVC + גבס), תקרות מוארות בכל גודל
          וצורה, הדפסים מותאמים אישית, פסים מרחפים ומסילות מגנטיות, צורות
          עקומות וקשתות, ופתרונות אקוסטיים שמשתלבים בעיצוב.
        </p>
      </ContentSection>
      <CTASection title="בואו נעבוד יחד" text="צרו קשר לתיאום פגישה מקצועית." />
    </>
  );
}
