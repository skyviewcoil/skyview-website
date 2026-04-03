# SkyView — תקרות מעוצבות

Production website for SkyView stretch ceilings — skyview.co.il.
67 pages, Hebrew RTL, static HTML + CSS + JS, deployed on Cloudflare Pages.

## Stack
- Static HTML + single CSS (`css/style.css`) + single JS (`js/main.js`)
- Cloudflare Pages (Git deploy)
- Cloudflare Pages Function (`functions/api/lead.js`) for lead submission
- Fonts: Heebo (headings) + Assistant (body) via Google Fonts

## Deploy
1. Push to GitHub
2. Connect repo to Cloudflare Pages
3. Build settings: **no build command**, output directory: `/` (root)
4. Set environment variables (see below)

## Environment Variables
Set in Cloudflare Dashboard → Pages → Settings → Environment Variables:

| Variable | Required | Purpose |
|----------|----------|---------|
| `WEBHOOK_URL` | At least one of these | Zapier/Make/n8n webhook URL |
| `SENDGRID_API_KEY` | At least one of these | SendGrid API key for email |
| `NOTIFY_EMAIL` | Optional | Lead notification email (default: skyview.co.il@gmail.com) |

## Lead Flow
1. User fills form on any page
2. `js/main.js` → `POST /api/lead`
3. `functions/api/lead.js` → webhook + SendGrid in parallel
4. Fallback: WhatsApp deep link on API failure only

## Pages (67)
- Homepage + 5 core service pages
- 7 room pages + hub
- 12 lighting pages + hub
- 6 finish pages + hub
- 7 guide pages + hub
- 5 technical/trust pages + hub
- 8 project case studies + hub
- 6 location pages + hub
- 3 B2B/professional pages
- Contact page
