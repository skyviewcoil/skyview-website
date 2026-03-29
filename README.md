# SkyView — תקרות מעוצבות

Hebrew RTL website for SkyView stretch ceilings (skyview.co.il). 46 pages, static HTML, deployed on Cloudflare Pages.

## Structure

```
├── index.html                 # Homepage
├── pages/                     # All inner pages (45 HTML files)
│   ├── tikrot-metuhot.html    # Main service pillar page
│   ├── mehiron.html           # Pricing + calculator
│   ├── contact.html           # Contact + lead form
│   ├── proyektim.html         # Project gallery
│   ├── hadarim-*.html         # Room pages (salon, ambatia, mitbah, etc.)
│   ├── sugim-*.html           # Ceiling type pages (mavrika, mat, saten, etc.)
│   ├── teura-*.html           # Lighting pages (mueret, shamayim, led, etc.)
│   ├── madrich-*.html         # Guide/article pages
│   ├── azorim-*.html          # Location pages
│   ├── hashvaa-*.html         # Comparison pages
│   ├── asakim.html            # B2B page
│   ├── brisol.html            # Barrisol explainer
│   └── odot.html              # About page
├── css/style.css              # Design system (single file)
├── js/main.js                 # Navigation, FAQ, calculator, form submission
├── functions/
│   └── api/
│       └── lead.js            # Cloudflare Pages Function — POST /api/lead
├── assets/
│   ├── images/
│   │   ├── logo/              # Brand logo
│   │   ├── hero/              # Wide hero images
│   │   ├── projects/          # Project photos (after shots + numbered)
│   │   ├── beforeafter/       # Before/after pairs (pair2–pair11)
│   │   ├── rooms/             # Room reference images
│   │   ├── types/             # Ceiling type reference images
│   │   └── lighting/          # Lighting reference images
│   └── videos/
│       └── room-reveal.mp4    # Project reveal video
├── robots.txt
├── sitemap.xml
└── .gitignore
```

## Deployment

Hosted on **Cloudflare Pages** via Git integration.

1. Push this repository to GitHub
2. In Cloudflare Dashboard → Pages → Create a project → Connect to Git
3. Build settings:
   - **Build command:** (none — static site)
   - **Build output directory:** `/` (root)
   - **Root directory:** `/`
4. Cloudflare Pages automatically detects `functions/api/lead.js` and serves it at `POST /api/lead`

## Environment Variables

Set these in **Cloudflare Dashboard → Pages → Settings → Environment variables**:

| Variable | Required | Description |
|----------|----------|-------------|
| `WEBHOOK_URL` | Recommended | Zapier / Make / n8n webhook URL for lead delivery |
| `SENDGRID_API_KEY` | Optional | SendGrid API key for email notifications |
| `NOTIFY_EMAIL` | Optional | Email to receive leads (default: skyview.co.il@gmail.com) |

At least one delivery channel (`WEBHOOK_URL` or `SENDGRID_API_KEY`) should be configured. If neither is set, leads are logged to Cloudflare Workers logs and forms fall back to WhatsApp.

## Lead Pipeline

1. User submits form → JS posts to `/api/lead`
2. Cloudflare Pages Function validates, then delivers via webhook + email in parallel
3. On success: Hebrew confirmation message shown
4. On API failure: WhatsApp fallback link shown with pre-filled lead data
5. Honeypot field blocks bot submissions

## Custom Domain

After deployment, add custom domain `www.skyview.co.il` in Cloudflare Pages → Custom domains. Configure DNS to point to Cloudflare Pages.

## Analytics

GA4 and Facebook Pixel placeholders are in `index.html`. Replace `G-XXXXXXXXXX` and pixel ID after obtaining real tracking IDs. Event tracking hooks are already wired for: `form_submit`, `whatsapp_click`, `phone_click`, `calculator_interact`.
