import type { Metadata } from "next";
import Link from "next/link";
import { PHONE, SITE_URL } from "@/lib/site-config";
import { CTASection } from "@/components/cta-section";
import {
  Droplets,
  Paintbrush,
  Clock,
  Shield,
  Lightbulb,
  Sparkles,
  Volume2,
  Printer,
} from "lucide-react";

export const metadata: Metadata = {
  title: "תקרות מתוחות לבית ולעסק | SkyView",
  description:
    "SkyView — יבוא, ייצור והתקנת תקרות מתוחות בישראל. גימורי מט, מבריק וסאטן, תאורה משולבת ומחשבון מחיר אונליין. צפו בפרויקטים אמיתיים.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "תקרות מתוחות לבית ולעסק | SkyView",
    description:
      "יבוא, ייצור והתקנה של תקרות מתוחות בישראל — גימורי מט, מבריק וסאטן, תאורה משולבת ומחשבון מחיר.",
    url: SITE_URL,
  },
};

const benefits = [
  {
    icon: Droplets,
    title: "עמידות במים",
    text: "יריעת PVC שעוצרת נזילות ומונעת נזק — מתאימה לאמבטיה, מטבח ובריכות.",
  },
  {
    icon: Paintbrush,
    title: "מגוון גימורים",
    text: "מט, מבריק, סאטן, הדפס אישי ושקוף — התאמה מדויקת לכל סגנון עיצוב.",
  },
  {
    icon: Clock,
    title: "התקנה מהירה",
    text: "התקנה נקייה שמסתיימת תוך שעות ספורות ללא אבק, לכלוך או פסולת בניין.",
  },
  {
    icon: Shield,
    title: "אחריות מלאה",
    text: "אחריות יצרן מלאה ותמיכה מקצועית לאורך כל חיי המוצר.",
  },
];

const solutions = [
  {
    title: "תקרה מתוחה מט",
    text: "גימור חלק ואלגנטי ללא החזרי אור — לסלון, חדר שינה ומשרד.",
    href: "/stretch-ceiling-matte",
  },
  {
    title: "תקרה מתוחה מבריקה",
    text: "משטח מראה שמגדיל חללים קטנים ומוסיף עומק חזותי.",
    href: "/stretch-ceiling-glossy",
  },
  {
    title: "תקרה מתוחה מוארת",
    text: "שכבת תאורה אחידה שמחליפה גופי תאורה מסורתיים.",
    href: "/lighted-stretch-ceiling",
  },
  {
    title: "תקרה מתוחה עם הדפס",
    text: "הדפסה ישירה של תמונה, טקסטורה או עיצוב גרפי על יריעת התקרה.",
    href: "/printed-stretch-ceiling",
  },
  {
    title: "תקרה מתוחה אקוסטית",
    text: "ספיגת רעשים ושיפור אקוסטיקה — לקולנוע ביתי, משרדים ומסעדות.",
    href: "/acoustic-stretch-ceiling",
  },
];

const processSteps = [
  { step: "01", title: "מדידה", text: "מדידה מדויקת של החלל וייעוץ ראשוני." },
  {
    step: "02",
    title: "תכנון",
    text: "בחירת חומר, צבע, גימור ופתרון תאורה.",
  },
  {
    step: "03",
    title: "ייצור",
    text: "ייצור היריעה בהתאמה אישית במפעל.",
  },
  {
    step: "04",
    title: "התקנה",
    text: "התקנה מקצועית ונקייה — בדרך כלל תוך יום עבודה אחד.",
  },
];

const faqs = [
  {
    q: "כמה עולה תקרה מתוחה?",
    a: "המחיר נע בין ₪179 ל-₪249 למ״ר בהתאם לסוג היריעה. השתמשו במחשבון המחיר לקבלת הערכה מדויקת.",
  },
  {
    q: "כמה זמן לוקחת התקנה?",
    a: "התקנת חדר ממוצע לוקחת 3-5 שעות. דירה שלמה מסתיימת בדרך כלל ביום עבודה אחד.",
  },
  {
    q: "האם תקרה מתוחה עמידה במים?",
    a: "כן. יריעת PVC חוסמת מים לחלוטין ויכולה להחזיק עד 100 ליטר למ״ר ללא קריעה.",
  },
  {
    q: "מה ההבדל בין תקרה מתוחה לגבס?",
    a: "תקרה מתוחה מותקנת מהר יותר, ללא אבק, עמידה במים ודורשת תחזוקה מינימלית. גבס דורש שפכטל, צבע ותחזוקה שוטפת.",
  },
  {
    q: "כמה זמן מחזיקה תקרה מתוחה?",
    a: "תקרה מתוחה איכותית מחזיקה 15-25 שנה ומעלה ללא צורך בהחלפה.",
  },
  {
    q: "האם אפשר להתקין ספוטים ותאורה?",
    a: "כן. ניתן לשלב ספוטים, פסי LED, מסילות מגנטיות וכל סוג תאורה אחר.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-28 bg-sky-light overflow-hidden">
        <div className="section-container">
          <div className="max-w-2xl">
            <h1 className="text-h1-mobile md:text-h1-desktop">
              תקרות מתוחות
              <br />
              בהתאמה אישית לבית ולעסק
            </h1>
            <p className="mt-6 text-body-lg text-sky-muted max-w-xl">
              יריעות פרימיום בגימורי מט, מבריק וסאטן — עם תאורה משולבת,
              התקנה נקייה ביום אחד ואחריות מלאה.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/pricing" className="btn-primary">
                למחשבון המחיר
              </Link>
              <Link href="/stretch-ceilings" className="btn-secondary">
                גלו את הפתרונות
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-small text-sky-muted">
              <span>✓ התאמה אישית מלאה</span>
              <span>✓ התקנה תוך יום</span>
              <span>✓ אחריות יצרן</span>
              <span>✓ ייעוץ חינם</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-spacing">
        <div className="section-container">
          <h2 className="text-h2-mobile md:text-h2-desktop text-center">
            למה לבחור בתקרה מתוחה?
          </h2>
          <p className="mt-4 text-body text-sky-muted text-center max-w-prose mx-auto">
            תקרות מתוחות מציעות יתרונות שלא קיימים בשום פתרון תקרה אחר — מעמידות
            במים ועד גמישות עיצובית מלאה.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="text-center md:text-right">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-navy/5 text-sky-navy mb-4">
                  <b.icon size={22} />
                </div>
                <h3 className="text-h3-mobile md:text-h3-desktop">{b.title}</h3>
                <p className="mt-2 text-body text-sky-muted">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-spacing bg-sky-light">
        <div className="section-container">
          <h2 className="text-h2-mobile md:text-h2-desktop text-center">
            סוגי תקרות מתוחות
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group block p-6 bg-white border border-sky-border hover:border-sky-navy/30 transition-colors"
              >
                <h3 className="text-h3-mobile md:text-h3-desktop group-hover:text-sky-navy transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2 text-body text-sky-muted">{s.text}</p>
                <span className="inline-block mt-4 text-sm font-semibold text-sky-navy">
                  למידע נוסף ←
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-spacing">
        <div className="section-container">
          <h2 className="text-h2-mobile md:text-h2-desktop text-center">
            תהליך העבודה
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((s) => (
              <div key={s.step} className="text-center md:text-right">
                <span className="text-4xl font-black text-sky-navy/10">
                  {s.step}
                </span>
                <h3 className="mt-2 text-h3-mobile md:text-h3-desktop">
                  {s.title}
                </h3>
                <p className="mt-2 text-body text-sky-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing bg-sky-light">
        <div className="section-container max-w-prose">
          <h2 className="text-h2-mobile md:text-h2-desktop text-center">
            שאלות נפוצות
          </h2>
          <div className="mt-10 space-y-6">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group bg-white border border-sky-border p-5"
                open={i === 0}
              >
                <summary className="cursor-pointer text-h3-mobile md:text-h3-desktop list-none flex justify-between items-center">
                  {f.q}
                  <span className="text-sky-navy transition-transform group-open:rotate-45 text-xl mr-3">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-body text-sky-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
