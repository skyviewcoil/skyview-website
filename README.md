# SkyView — תקרות מתוחות

Production-grade Next.js website for SkyView stretch ceiling company in Israel.

## Architecture

- **Framework**: Next.js 14 + App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Direction**: RTL Hebrew
- **Font**: Heebo (Google Fonts)
- **SEO**: Per-route metadata, dynamic sitemap.xml, robots.txt, structured data (Organization + LocalBusiness)

## Routes

| Route | Hebrew Title | Purpose |
|-------|-------------|---------|
| `/` | ראשי | Homepage with hero, benefits, solutions, process, FAQ |
| `/stretch-ceilings` | תקרות מתוחות | Main service overview |
| `/pricing` | מחירים | Pricing with MSD/RENOLIT tiers |
| `/projects` | פרויקטים | Project gallery |
| `/contact` | צור קשר | Contact information |
| `/about` | אודות | About the company |
| `/stretch-ceiling-bathroom` | אמבטיה | Bathroom-specific page |
| `/stretch-ceiling-living-room` | סלון | Living room page |
| `/stretch-ceiling-matte` | מט | Matte finish page |
| `/stretch-ceiling-glossy` | מבריק | Glossy finish page |
| `/lighted-stretch-ceiling` | מוארת | Backlit ceiling page |
| `/acoustic-stretch-ceiling` | אקוסטית | Acoustic ceiling page |
| `/printed-stretch-ceiling` | הדפס | Printed ceiling page |
| `/stretch-ceiling-led-strip` | פס LED | LED strip integration |
| `/stretch-ceiling-magnetic-track` | מסילה מגנטית | Magnetic track lighting |
| `/stretch-ceiling-vs-drywall` | מתוחה או גבס | Comparison page |
| `/stretch-ceiling-guide` | מדריך | Comprehensive guide |
| `/stretch-ceiling-repair` | תיקון | Repair service page |
| `/barrisol` | בריסול | Barrisol brand page |
| `/stretch-ceilings-for-business` | לעסקים | B2B page |
| `/stretch-ceilings-for-architects` | לאדריכלים | Architects page |

Every route has unique: title, meta description, H1, canonical URL, and content.

## Setup

```bash
npm install
cp .env.example .env.local  # fill in your values
npm run dev
```

## Environment Variables

See `.env.example`. Required:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_SITE_URL`

## Deployment

Optimized for Vercel or any Node.js hosting. Static pages are server-rendered by default (React Server Components).

## Design System

- **Colors**: Cream (#FAFAF8), Graphite (#1A1A2E), Navy (#1E3A5F)
- **Font**: Heebo 300-900
- **Layout**: max-width 1280px, section spacing 88px/52px
- **Buttons**: 54px height, no border-radius, full-width on mobile
