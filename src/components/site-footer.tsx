import Link from "next/link";
import {
  SITE_NAME,
  PHONE,
  PHONE_INTL,
  EMAIL,
  FOOTER_SERVICE_LINKS,
  FOOTER_INFO_LINKS,
} from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="bg-sky-graphite text-white/80">
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="text-2xl font-black text-white tracking-tight"
            >
              {SITE_NAME}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              יבוא, ייצור והתקנה של תקרות מתוחות לבתים ועסקים בכל רחבי ישראל.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 tracking-wide">
              שירותים
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 tracking-wide">
              מידע
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_INFO_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 tracking-wide">
              צור קשר
            </h3>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>
                <a
                  href={`tel:${PHONE_INTL}`}
                  className="hover:text-white transition-colors"
                >
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-white transition-colors"
                >
                  {EMAIL}
                </a>
              </li>
              <li>שירות בכל רחבי ישראל</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 text-xs text-white/40 flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} {SITE_NAME}. כל הזכויות שמורות.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white/60">
              מדיניות פרטיות
            </Link>
            <Link href="/terms" className="hover:text-white/60">
              תנאי שימוש
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
