import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { ContentSection } from "@/components/content-blocks";

export const metadata: Metadata = {
  title: "אודות SkyView — יבוא, ייצור והתקנת תקרות מתוחות",
  description:
    "SkyView — חברה ישראלית ליבוא, ייצור והתקנת תקרות מתוחות. חומרים אירופיים, ייצור מקומי, צוות מקצועי ואחריות מלאה.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="אודות SkyView"
        subtitle="SkyView היא חברה ישראלית המתמחה ביבוא, ייצור והתקנה של תקרות מתוחות. אנחנו עובדים עם החומרים האיכותיים ביותר מאירופה, מייצרים בהתאמה אישית, ומתקינים בכל רחבי ישראל."
      />
      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">מי אנחנו</h2>
        <p className="mt-4 text-body text-sky-muted">
          צוות SkyView מורכב ממתקינים מוסמכים עם ניסיון של אלפי מ״ר תקרות
          מתוחות. אנחנו מטפלים בכל הפרויקט — מהייעוץ הראשוני, דרך המדידה
          והייצור, ועד ההתקנה הסופית. אין קבלני משנה, אין תיווך.
        </p>
      </ContentSection>
      <ContentSection bg="light">
        <h2 className="text-h2-mobile md:text-h2-desktop">הערכים שלנו</h2>
        <p className="mt-4 text-body text-sky-muted">
          שקיפות מלאה במחירים ובתהליך, שימוש בחומרים מהשורה הראשונה בלבד,
          עמידה בלוחות זמנים, ניקיון מוחלט באתר, ואחריות שאנחנו עומדים
          מאחוריה.
        </p>
      </ContentSection>
      <CTASection title="רוצים לעבוד איתנו?" />
    </>
  );
}
