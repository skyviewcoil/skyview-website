import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { ContentSection, FeatureGrid } from "@/components/content-blocks";

export const metadata: Metadata = {
  title: "תיקון תקרה מתוחה — שירות מהיר ומקצועי",
  description:
    "תיקון תקרות מתוחות: קרעים, ניקוז מים, החלפת יריעה, תיקון תאורה וטיפול בצהבה. שירות מהיר בכל רחבי ישראל.",
  alternates: { canonical: "/stretch-ceiling-repair" },
};

export default function RepairPage() {
  return (
    <>
      <PageHero
        title="תיקון תקרה מתוחה — שירות מהיר ומקצועי"
        subtitle="קרע ביריעה? הצפה מהדירה מעל? בעיית תאורה? צוות SkyView מגיע לתיקון מהיר ומקצועי — גם אם התקרה לא הותקנה על ידנו."
        ctaText="קראו לשירות"
      />
      <ContentSection>
        <h2 className="text-h2-mobile md:text-h2-desktop">סוגי תיקונים</h2>
        <FeatureGrid
          items={[
            { title: "קרע או נקב", text: "תיקון מקומי או החלפת יריעה — תלוי בגודל ומיקום הנזק." },
            { title: "ניקוז הצפה", text: "ניקוז מים שנאספו מעל היריעה ובדיקת תקינות." },
            { title: "שחרור יריעה", text: "יריעה שנשמטה מהפרופיל — חימום מחדש והכנסה." },
            { title: "החלפת תאורה", text: "החלפת ספוטים, שנאים או פסי LED בתוך התקרה." },
          ]}
        />
      </ContentSection>
      <ContentSection bg="light">
        <h2 className="text-h2-mobile md:text-h2-desktop">מתי צריך החלפה מלאה?</h2>
        <p className="mt-4 text-body text-sky-muted">
          קרע גדול (מעל 20 ס״מ) באמצע היריעה, צהבה חמורה מעישון או שריפה,
          או נזק בלתי הפיך ממגע חד — מצבים אלה דורשים בדרך כלל החלפת יריעה.
          החלפה מלאה עדיין מהירה ונקייה — הפרופיל נשאר, רק היריעה מוחלפת.
        </p>
      </ContentSection>
      <CTASection title="צריכים תיקון?" text="צרו קשר ונגיע לטפל." />
    </>
  );
}
