import Link from "next/link";
import { PHONE } from "@/lib/site-config";

interface CTASectionProps {
  title?: string;
  text?: string;
}

export function CTASection({
  title = "מוכנים להתחיל?",
  text = "צרו קשר לייעוץ ראשוני ללא התחייבות, או השתמשו במחשבון המחיר שלנו לקבלת הערכה מיידית.",
}: CTASectionProps) {
  return (
    <section className="section-spacing bg-sky-navy text-white">
      <div className="section-container text-center max-w-prose">
        <h2 className="text-h2-mobile md:text-h2-desktop text-white">
          {title}
        </h2>
        <p className="mt-4 text-body-lg text-white/70">{text}</p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <Link
            href="/pricing"
            className="btn-primary !bg-white !text-sky-navy hover:!bg-white/90"
          >
            למחשבון המחיר
          </Link>
          <a
            href={`tel:${PHONE}`}
            className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-sky-navy"
          >
            {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
