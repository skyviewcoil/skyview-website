"use client";

import Link from "next/link";
import { Calculator, MessageCircle } from "lucide-react";
import { PHONE } from "@/lib/site-config";

export function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 right-0 left-0 z-50 bg-white border-t border-sky-border flex">
      <Link
        href="/pricing"
        className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white bg-sky-navy"
      >
        <Calculator size={18} />
        מחשבון מחיר
      </Link>
      <a
        href={`https://wa.me/972528082988`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-sky-navy bg-white"
      >
        <MessageCircle size={18} />
        WhatsApp
      </a>
    </div>
  );
}
