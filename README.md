# SkyView — תקרות מעוצבות

Production website for SkyView stretch ceilings — skyview.co.il.

**Current version: v29**

## Stack
- Static HTML + single CSS (`css/style.css`) + single JS (`js/main.js`)
- 82 pages, Hebrew RTL
- Cloudflare Pages (Git deploy)
- Cloudflare Pages Function (`functions/api/lead.js`) for lead submission
- Fonts: Heebo (headings) + Assistant (body) via Google Fonts

## v22 Changes (from v21)
1. **Header redesign** — trust bar, premium nav with click dropdowns, mobile 3-column grid (SKYVIEW centered)
2. **Before/after standardization** — slider format, 10 pairs, zero duplicates across 6 pages
3. **SEO migration from old site** — `_redirects` (185 rules), 2 new pages (`/sugim/pasei-merahvim`, `/tikun`)
4. **Mobile header fix** — SKYVIEW always visible and centered; phone icon CTA
5. **Hashvaa page rewrite** — `/hashvaa/tikra-metuha-o-geves` expanded from ~400 to 550 lines, 10 FAQ, by-room section, 2 comparison tables

## Deploy
1. Push to GitHub
2. Connect repo to Cloudflare Pages
3. Build settings: **no build command**, output directory: `/` (root)
4. Set environment variables (see below)

## Environment Variables
Set in Cloudflare Dashboard → Pages → Settings → Environment Variables:
- `WEBHOOK_URL` — webhook endpoint for lead delivery
- `SENDGRID_API_KEY` — SendGrid API key
- `NOTIFY_EMAIL` — destination email for leads

## Key URLs
- Live (Workers): https://skyview-website.skyview-co-il.workers.dev
- Production target: https://skyview.co.il
- GitHub: github.com/skyviewcoil/skyview-website
