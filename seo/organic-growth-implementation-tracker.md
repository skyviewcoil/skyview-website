# SkyView SEO Implementation Tracker

Prepared: 2026-04-21

This tracker converts the organic growth strategy into repo-specific execution state.
It intentionally reflects the current workspace, not only the strategic target state.

## Resolved Decisions

- Hebrew head term: `תקרה מתוחה`
- Secondary Hebrew variants: `תקרה נמתחת`, `תקרות נמתחות`
- Homepage owns the head term.
- `/tikrot-metuhot` is differentiated as a types/overview hub with primary keyword `סוגי תקרות מתוחות`.
- `reviewCount=15` is retained because 15 review cards are now visible on the homepage.

## Completed In This Pass

- Added normalized keyword map: `seo/keyword-map.rebuilt.json`
- Excluded `seo/` from static asset upload via `.assetsignore`
- Updated homepage title, description, OG, and Twitter snippets
- Updated `/mehiron/` descriptions while keeping the existing title
- Updated `/tikrot-metuhot` title, description, OG, Twitter, and H1 for type-hub differentiation
- Updated snippets for:
  - `/hanmahat-tikra`
  - `/hashvaa/tikra-metuha-o-geves`
  - `/hadarim/salon`
  - `/hadarim/ambatia`
  - `/aharayut-yatzranim`
  - `/ru/`
  - `/ru/cena/`
- Expanded homepage visible testimonials from 4 to 15 to match schema
- Added Organization/entity schema enrichment on homepage and `/odot`:
  - stable `@id`
  - `sameAs`
  - contact point and service languages
  - manufacturer brand relationships
  - offer catalog
- Added 4-card testimonial rails above the final CTA on `/mehiron/` and `/hashvaa/tikra-metuha-o-geves`
- Aligned `/tikrot-metuhot` BreadcrumbList and Service schema with its new `סוגי תקרות מתוחות` type-hub role
- Expanded homepage FAQ from 5 to 9 visible questions and kept FAQPage schema aligned
- Removed legacy public footer version tags from static pages and embedded Worker HTML while keeping internal Worker health version untouched
- Audited legacy Hebrew redirects and aligned `/תקרה-צפה-מרחפת` + `/ru/תקרה-צפה-מרחפת` to `/sugim/tikra-tzafa` in both `worker.js` and `_redirects`
- Restored 11 missing static pages:
  - `/sugim`
  - `/sugim/mavrika`
  - `/sugim/mat`
  - `/sugim/saten`
  - `/sugim/hadpas`
  - `/sugim/akustit`
  - `/sugim/gimur-geves`
  - `/sugim/pasei-merahvim`
  - `/sugim/tikra-tzafa`
  - `/architects-designers`
  - `/tikun`
- Added `seo/generate-missing-static-pages.cjs` so those restored pages can be regenerated consistently
- Removed `/tikra-metuha-180` from `sitemap.xml` and added a 301 to `/mehiron` in both `worker.js` and `_redirects`
- Re-validated that all `sitemap.xml` URLs now resolve to static pages, except `/ru/` and `/ru/cena/` which are intentionally Worker-embedded
- Published the first gypsum-cluster transactional page: `/hanmahat-tikra-mehir`
- Moved `הנמכת תקרה מחיר` ownership from `/hanmahat-tikra` to `/hanmahat-tikra-mehir` in the keyword map
- Added inbound internal links to `/hanmahat-tikra-mehir` from `/`, `/mehiron/`, `/hanmahat-tikra`, and `/hashvaa/tikra-metuha-o-geves`
- Published the second gypsum-cluster attack page: `/hashvaa/tikrat-geves-mehir`
- Assigned `תקרת גבס מחיר` and related price-comparison terms to `/hashvaa/tikrat-geves-mehir`
- Cleaned corrupted placeholder keywords from the keyword map and split transactional gypsum intent cleanly:
  - `/hanmahat-tikra` = informational lowering hub
  - `/hanmahat-tikra-mehir` = lowering price intent
  - `/hashvaa/tikrat-geves-mehir` = gypsum price comparison intent
- Added inbound internal links to `/hashvaa/tikrat-geves-mehir` from `/mehiron/`, `/hanmahat-tikra`, `/hanmahat-tikra/gevs`, `/hanmahat-tikra-mehir`, and `/hashvaa/tikra-metuha-o-geves`
- Verified JSON-LD parsing across all static HTML pages: 90 files, 219 JSON-LD blocks
- Verified `sitemap.xml` coverage: 91 URLs, no missing static pages
- Verified keyword map integrity: 126 keywords, 36 pages, no duplicate keywords/pages, no orphan keyword URLs, and no corrupted placeholder terms
- Verified `worker.js` parses with `node --check`
- Deployed to Cloudflare Workers with `wrangler deploy --keep-vars`
  - Worker version: `e9b2887a-35c9-4259-9c46-06cf8a542dbf`
  - Uploaded 92 new/modified static assets
- Verified live production URLs after deploy:
  - `/hashvaa/tikrat-geves-mehir` returns 200 with expected title and H1
  - `/hanmahat-tikra-mehir` returns 200 with expected title and H1
  - `sitemap.xml` includes both new gypsum-cluster pages
  - `/tikra-metuha-180` returns 301 to `/mehiron`
  - `/תקרה-צפה-מרחפת` returns 301 to `/sugim/tikra-tzafa`
- Published the first problem-driven article page locally: `/maamarim/kisui-tikra-rativut`
- Added `/maamarim` as an article hub and assigned `תקרה אחרי רטיבות` ownership to the new article
- Verified local article build:
  - 92 static HTML files
  - 224 JSON-LD blocks
  - 93 sitemap URLs with no missing static pages
  - 134 keywords across 38 mapped pages
- Deployed article update to Cloudflare Workers
  - Worker version: `3d0abbae-ce3c-4810-b510-dad9c8816a4e`
  - Uploaded 6 new/modified static assets
- Verified live production URLs after article deploy:
  - `/maamarim` returns 200 with expected title and H1
  - `/maamarim/kisui-tikra-rativut` returns 200 with expected title and Article schema
  - `sitemap.xml` includes both article URLs
- Published the second problem-driven article page: `/maamarim/hester-tzinorot`
- Assigned `הסתרת צנרת בתקרה` and related infrastructure-hiding terms to `/maamarim/hester-tzinorot`
- Added inbound internal links to `/maamarim/hester-tzinorot` from `/maamarim`, `/hanmahat-tikra`, `/teura/hanmahat-tikra-im-teura`, and `/madrich`
- Verified local pipe-hiding article build:
  - 93 static HTML files
  - 227 JSON-LD blocks
  - 94 sitemap URLs with no missing static pages
  - 141 keywords across 39 mapped pages
- Deployed pipe-hiding article update to Cloudflare Workers
  - Worker version: `9cd2149c-731a-49b4-a2c5-77e63beffd19`
  - Uploaded 6 new/modified static assets
- Verified live production URLs after pipe-hiding article deploy:
  - `/maamarim/hester-tzinorot` returns 200 with expected title, H1, Article schema, and FAQ schema
  - `sitemap.xml` includes `/maamarim/hester-tzinorot`
- Published the third problem-driven article page: `/maamarim/dira-tikra-nemuha`
- Assigned `דירה עם תקרה נמוכה` and related low-ceiling solution terms to `/maamarim/dira-tikra-nemuha`
- Added inbound internal links to `/maamarim/dira-tikra-nemuha` from `/maamarim`, `/hanmahat-tikra`, `/hashvaa/tikra-metuha-o-geves`, `/madrich`, and `/sugim/mat`
- Verified local low-ceiling article build:
  - 94 static HTML files
  - 230 JSON-LD blocks
  - 95 sitemap URLs with no missing static pages
  - 148 keywords across 40 mapped pages
- Deployed low-ceiling article update to Cloudflare Workers
  - Worker version: `a6d5fbbf-7b0a-434b-b84f-f3d6af175c08`
  - Uploaded 7 new/modified static assets
- Verified live production URLs after low-ceiling article deploy:
  - `/maamarim/dira-tikra-nemuha` returns 200 with expected title, H1, Article schema, and FAQ schema
  - `sitemap.xml` includes `/maamarim/dira-tikra-nemuha`
- Published the first RU comparison page: `/ru/sravnenie-geves`
- Assigned `натяжные потолки или гипсокартон` and related RU comparison terms to `/ru/sravnenie-geves`
- Added hreflang pairing between `/hashvaa/tikra-metuha-o-geves` and `/ru/sravnenie-geves`
- Added inbound internal links to `/ru/sravnenie-geves` from embedded `/ru/` and `/ru/cena/` Worker pages
- Verified local RU comparison build:
  - 95 static HTML files
  - 233 JSON-LD blocks
  - 96 sitemap URLs with no missing static pages
  - 155 keywords across 41 mapped pages
- Deployed RU comparison update to Cloudflare Workers
  - Worker version: `1e27f01c-a947-4fc5-ad50-8b3446ec2a04`
  - Uploaded 3 new/modified static assets
- Verified live production URLs after RU comparison deploy:
  - `/ru/sravnenie-geves` returns 200 with expected title, H1, Article schema, and FAQ schema
  - `sitemap.xml` includes `/ru/sravnenie-geves`
  - embedded `/ru/` and `/ru/cena/` pages link to `/ru/sravnenie-geves`
- Expanded `/sugim/mat` from a lean rescue page into a full commercial finish page
- Strengthened `/sugim/mat` with:
  - price anchor from 229 ILS per m2
  - matte vs gypsum comparison table
  - room-fit guidance for bedrooms, salons, offices, low ceilings, and corridors
  - lighting guidance and stronger FAQ schema
  - internal links to gypsum comparison, gypsum-look finish, low-ceiling article, bedroom page, and lighting pages
- Updated keyword ownership for `/sugim/mat`:
  - primary: `תקרה מתוחה מט`
  - added matte-finish variants such as `תקרה מתוחה בגימור מט`, `תקרה מתוחה ללא ברק`, and `תקרה מט לתקרה נמוכה`
- Verified local matte-page expansion build:
  - 95 static HTML files
  - 233 JSON-LD blocks
  - 96 sitemap URLs with no missing static pages
  - 161 keywords across 41 mapped pages
- Deployed matte-page expansion to Cloudflare Workers
  - Worker version: `4310c3ba-cef2-477f-9986-38d6ff79decb`
  - Uploaded 2 new/modified static assets
- Verified live production URLs after matte-page deploy:
  - `/sugim/mat` returns 200 with expected title, H1, Service schema, FAQ schema, and expanded commercial content
  - `sitemap.xml` lists `/sugim/mat` with `lastmod=2026-04-22`
- Expanded `/sugim/mavrika` from a lean rescue page into a full commercial finish page
- Strengthened `/sugim/mavrika` with:
  - price anchor from 229 ILS per m2
  - glossy vs matte/satin comparison table
  - room-fit guidance for salons, kitchens, lobbies, commercial spaces, and low-ceiling rooms
  - lighting guidance for LED strips, spotlights, chandeliers, and glare control
  - expanded FAQ schema and internal links to room, finish, lighting, pricing, and low-ceiling pages
- Updated keyword ownership for `/sugim/mavrika`:
  - primary: `תקרה מבריקה`
  - added glossy-finish variants such as `תקרה מתוחה מבריקה`, `תקרה מבריקה לסלון`, `תקרה מבריקה למטבח`, `תקרה מבריקה עם תאורה`, `תקרה מבריקה מחיר`, and `תקרה עם השתקפות`
- Verified local glossy-page expansion build:
  - 95 static HTML files
  - 233 JSON-LD blocks
  - 96 sitemap URLs with no missing static pages
  - 167 keywords across 41 mapped pages
- Deployed glossy-page expansion to Cloudflare Workers
  - Worker version: `715e195c-3cee-4f5a-a001-947a644f53f2`
  - Uploaded 2 new/modified static assets
- Verified live production URLs after glossy-page deploy:
  - `/sugim/mavrika` returns 200 with expected title, H1, Service schema, FAQ schema, and expanded commercial content
  - `sitemap.xml` lists `/sugim/mavrika` with `lastmod=2026-04-22`
- Expanded `/sugim/saten` from a lean rescue page into a full commercial finish page
- Strengthened `/sugim/saten` with:
  - price anchor from 229 ILS per m2
  - satin vs matte/glossy comparison table
  - room-fit guidance for bathrooms, bedrooms, salons, mikve, and moisture-sensitive spaces
  - white-ceiling guidance for `תקרה נמתחת לבנה`
  - lighting guidance for recessed spotlights, LED strips, perimeter lighting, and glare control
  - expanded FAQ schema and internal links to room, finish, lighting, pricing, and low-ceiling pages
- Updated keyword ownership for `/sugim/saten`:
  - primary: `תקרה סאטן`
  - added satin-finish variants such as `תקרה מתוחה סאטן`, `תקרה נמתחת סאטן`, `תקרה סאטן לאמבטיה`, `תקרה סאטן לחדר שינה`, `תקרה סאטן לסלון`, `תקרה סאטן עם תאורה`, `תקרה סאטן מחיר`, `תקרה נמתחת לבנה`, and `תקרה לבנה סאטן`
- Verified local satin-page expansion build:
  - 95 static HTML files
  - 233 JSON-LD blocks
  - 96 sitemap URLs with no missing static pages
  - 175 keywords across 41 mapped pages
- Deployed satin-page expansion to Cloudflare Workers
  - Worker version: `1463f465-3661-4264-a1c8-9f58dddfaed6`
  - Uploaded 2 new/modified static assets
- Verified live production URLs after satin-page deploy:
  - `/sugim/saten` returns 200 with expected title, H1, Service schema, FAQ schema, and expanded commercial content
  - `sitemap.xml` lists `/sugim/saten` with `lastmod=2026-04-22`
- Expanded `/sugim/hadpas` from a lean rescue page into a full commercial finish page
- Strengthened `/sugim/hadpas` with:
  - custom print positioning for sky, image, nature, logo, and business branding use cases
  - home and business use-case guidance for kids rooms, salons, bathrooms, mikve, clinics, lobbies, and shops
  - file-quality guidance for resolution, crop ratio, color, and logo assets
  - illuminated-print guidance with a link to `/teura/tikra-mueret-im-hadpas`
  - pricing guidance that separates base stretch-ceiling price from print, file prep, and lighting complexity
  - expanded FAQ schema and internal links to lighting, sky ceiling, simulation, project, kids-room, and business pages
- Updated keyword ownership for `/sugim/hadpas`:
  - primary: `תקרה מתוחה בהדפסה`
  - added printed-ceiling variants such as `תקרה בהדפסה אישית`, `תקרת שמיים`, `תקרה עם הדפס שמיים`, `תקרה מודפסת לחדר ילדים`, `תקרה מודפסת לעסק`, `תקרה עם לוגו`, `תקרה מודפסת מחיר`, and `הדפסה על תקרה מתוחה`
- Verified local printed-page expansion build:
  - 95 static HTML files
  - 233 JSON-LD blocks
  - 96 sitemap URLs with no missing static pages
  - 183 keywords across 41 mapped pages
- Deployed printed-page expansion to Cloudflare Workers
  - Worker version: `99f32401-b418-4dc9-8594-c1d9dc3c4de2`
  - Uploaded 2 new/modified static assets
- Verified live production URLs after printed-page deploy:
  - `/sugim/hadpas` returns 200 with expected title, H1, Service schema, FAQ schema, and expanded commercial content
  - `sitemap.xml` lists `/sugim/hadpas` with `lastmod=2026-04-22`
- Expanded `/sugim/akustit` from a lean rescue page into a full commercial acoustic-finish page
- Strengthened `/sugim/akustit` with:
  - micro-perforation and absorption-layer explanation
  - use-case guidance for offices, meeting rooms, clinics, classrooms, studios, restaurants, and lobbies
  - clear split between finish intent (`/sugim/akustit`), office room intent (`/hadarim/misrad`), and B2B hub intent (`/asakim`)
  - comparison against acoustic tile ceilings and regular gypsum ceilings
  - lighting guidance for spotlights, LED strips, and magnetic tracks without reducing acoustic coverage
  - pricing and limitation guidance, including when acoustic ceiling alone is not enough
  - expanded FAQ schema and internal links to office, business, lighting, pricing, and comparison pages
- Updated keyword ownership for `/sugim/akustit`:
  - primary: `תקרה אקוסטית`
  - added acoustic-finish variants such as `תקרה מתוחה אקוסטית`, `תקרה נמתחת אקוסטית`, `תקרה אקוסטית מחיר`, `תקרה אקוסטית מעוצבת`, `תקרה אקוסטית לקליניקה`, `תקרה אקוסטית לסטודיו`, `תקרה אקוסטית לכיתה`, `תקרה מחוררת אקוסטית`, `תקרה לספיגת רעש`, and `פתרון אקוסטי לתקרה`
  - kept `תקרה אקוסטית למשרד` owned by `/hadarim/misrad` to avoid cannibalization
- Verified local acoustic-page expansion build:
  - 95 static HTML files
  - 233 JSON-LD blocks
  - 96 sitemap URLs with no missing static pages
  - 192 keywords across 41 mapped pages
- Deployed acoustic-page expansion to Cloudflare Workers
  - Worker version: `64f33897-5380-4baf-a896-c46ff24b30ba`
  - Uploaded 2 new/modified static assets
- Verified live production URLs after acoustic-page deploy:
  - `/sugim/akustit` returns 200 with expected title, H1, Service schema, FAQ schema, and expanded commercial content
  - `sitemap.xml` lists `/sugim/akustit` with `lastmod=2026-04-22`
- Added owner-requested visible page-version tracking to every finish page updated in this sequence:
  - `/sugim/mat` = `v2026.04.22.1`
  - `/sugim/mavrika` = `v2026.04.22.2`
  - `/sugim/saten` = `v2026.04.22.3`
  - `/sugim/hadpas` = `v2026.04.22.4`
  - `/sugim/akustit` = `v2026.04.22.5`
- Mirrored the same page versions into `seo/keyword-map.rebuilt.json` via `content_version`
- Deployed page-version tracking update to Cloudflare Workers
  - Worker version: `c4c77aa5-9c33-48ec-a13c-5f5fa2985990`
  - Uploaded 5 new/modified static assets
- Verified live production page-version markers:
  - `/sugim/mat` contains `v2026.04.22.1`
  - `/sugim/mavrika` contains `v2026.04.22.2`
  - `/sugim/saten` contains `v2026.04.22.3`
  - `/sugim/hadpas` contains `v2026.04.22.4`
  - `/sugim/akustit` contains `v2026.04.22.5`
- Expanded `/sugim/tikra-tzafa` from a lean rescue page into a full commercial floating-ceiling page
- Strengthened `/sugim/tikra-tzafa` with:
  - price anchor from 229 ILS per m2
  - floating stretch ceiling vs floating gypsum comparison table
  - planning guidance for height, profiles, electrical drivers, access, and lighting
  - room-fit guidance for salons, bedrooms, corridors, lobbies, businesses, and offices
  - lighting guidance for perimeter lighting, recessed LED lines, spotlights, and floating strips
  - expanded FAQ schema and internal links to lighting, room, comparison, pricing, and simulation pages
- Updated keyword ownership for `/sugim/tikra-tzafa`:
  - primary: `תקרה צפה`
  - added floating-ceiling variants such as `תקרה צפה מחיר`, `תקרה צפה לסלון`, `תקרה צפה עם תאורה`, `תאורה היקפית תקרה צפה`, and `תקרה מרחפת עם לד`
- Added visible page-version marker and keyword-map `content_version` for `/sugim/tikra-tzafa`: `v2026.04.22.6`
- Updated `sitemap.xml` lastmod for `/sugim/tikra-tzafa` to `2026-04-22`
- Hardened `.assetsignore` to exclude both `.git` files and `.git/` directories from Cloudflare static assets
- Verified local floating-page build:
  - 95 static HTML files
  - 233 JSON-LD blocks
  - 96 sitemap URLs with no missing static pages
  - 197 keywords across 41 mapped pages
- Deployed floating-page expansion to Cloudflare Workers from a clean worktree
  - Worker version: `f6807895-2fbd-4836-852f-8caec5d2bbc5`
- Verified live production URLs after floating-page deploy:
  - `/sugim/tikra-tzafa` contains expected expanded content and `v2026.04.22.6`
  - `sitemap.xml` lists `/sugim/tikra-tzafa` with `lastmod=2026-04-22`
  - `/.git` returns 404 after `.assetsignore` hardening
- Expanded `/sugim/pasei-merahvim` from a lean rescue page into a full commercial floating-strips page
- Strengthened `/sugim/pasei-merahvim` with:
  - price anchor from 229 ILS per m2
  - LED/profile planning guidance, including drivers, dimmers, access, and control zones
  - room-use guidance for salons, kitchens, corridors, offices, and businesses
  - comparison against recessed LED strips and gypsum cove lighting
  - mistake-prevention guidance for line count, light temperature, driver access, and lighting hierarchy
  - expanded FAQ schema and internal links to lighting, floating-ceiling, room, pricing, and simulation pages
- Updated keyword ownership for `/sugim/pasei-merahvim`:
  - primary: `פסים מרחפים בתקרה מתוחה`
  - added variants such as `פסים מרחפים בתקרה`, `פסי לד מרחפים`, `פס תאורה מרחף`, `תאורה ליניארית בתקרה מתוחה`, `קווי אור בתקרה מתוחה`, and `פסים מרחפים לסלון`
- Added visible page-version marker and keyword-map `content_version` for `/sugim/pasei-merahvim`: `v2026.04.22.7`
- Updated `sitemap.xml` lastmod for `/sugim/pasei-merahvim` to `2026-04-22`
- Verified local floating-strips build:
  - 95 static HTML files
  - 233 JSON-LD blocks
  - 96 sitemap URLs with no missing static pages
  - 203 keywords across 41 mapped pages
- Deployed floating-strips expansion to Cloudflare Workers from a clean worktree
  - Worker version: `da9175ab-7173-46b0-8282-c189a075b582`
- Verified live production URLs after floating-strips deploy:
  - `/sugim/pasei-merahvim` contains expected expanded content and `v2026.04.22.7`
  - `sitemap.xml` lists `/sugim/pasei-merahvim` with `lastmod=2026-04-22`
  - `/.git` still returns 404
- Expanded `/sugim/gimur-geves` from a lean rescue page into a full commercial gypsum-look finish page
- Strengthened `/sugim/gimur-geves` with:
  - price anchor from 229 ILS per m2
  - clear distinction between gypsum-look finish, matte finish, and full gypsum comparison intent
  - smooth white ceiling guidance for bedrooms, low ceilings, offices, clinics, corridors, and apartments
  - comparison against real gypsum for finish, site time, dust, height, moisture, and maintenance
  - lighting guidance for spotlights, LED strips, perimeter lighting, and magnetic track planning
  - expanded FAQ schema and internal links to matte finish, gypsum comparison, lowering page, low-ceiling article, lighting, pricing, and simulation pages
- Updated keyword ownership for `/sugim/gimur-geves`:
  - primary: `גימור גבס בתקרה מתוחה`
  - added variants such as `תקרה מתוחה גימור גבס`, `תקרה מתוחה כמו גבס`, `תקרה מתוחה חלקה`, `תקרה מתוחה במקום גבס`, `תקרה מתוחה ללא שפכטל`, and `תקרה לבנה חלקה`
- Added visible page-version marker and keyword-map `content_version` for `/sugim/gimur-geves`: `v2026.04.22.8`
- Updated `sitemap.xml` lastmod for `/sugim/gimur-geves` to `2026-04-22`
- Verified local gypsum-finish build:
  - 95 static HTML files
  - 233 JSON-LD blocks
  - 96 sitemap URLs with no missing static pages
  - 209 keywords across 41 mapped pages
- Deployed gypsum-finish expansion to Cloudflare Workers from a clean worktree
  - Worker version: `810da7c7-d872-47b7-9134-e6da1cade10d`
- Verified live production URLs after gypsum-finish deploy:
  - `/sugim/gimur-geves` contains expected expanded content and `v2026.04.22.8`
  - `sitemap.xml` lists `/sugim/gimur-geves` with `lastmod=2026-04-22`
  - `/.git` still returns 404
- Prepared separate Worker runtime analytics update:
  - Added Microsoft Clarity injection with project ID `we6fhsmtc1`
  - Preserved GTM injection and made GTM / Clarity injection independent so one existing snippet does not block the other
  - Added visible site-wide runtime footer marker injected by `worker.js`: `גרסת אתר: v2026.04.22.9`
  - Mirrored the runtime version into `seo/keyword-map.rebuilt.json` as `_meta.site_runtime_version`
- Verified local runtime update:
  - `node --check worker.js` passed
  - `git diff --check` passed
  - keyword map integrity passed with 209 keywords across 41 mapped pages
- Deployed runtime analytics update to Cloudflare Workers:
  - Wrangler version: `4.83.0`
  - Worker version: `41b481ad-1594-4173-a175-293624552132`
- Verified live production after runtime deploy:
  - `/`, `/sugim/gimur-geves`, and `/mehiron` each contain one Clarity script, the Clarity project ID `we6fhsmtc1`, GTM, and one `v2026.04.22.9` runtime marker
  - `/mehiron/` 301s to `/mehiron` and the canonical target returns 200
  - `/.git` still returns 404
- Normalized the restored page templates after owner design review:
  - converted the affected pages from text-only `page-hero` blocks to image-backed `page-hero--image` blocks
  - replaced the simplified rescue header with the canonical inner-page header/navigation used by `/asakim`
  - added a dark hero-continuation band after the hero so pages do not jump directly from hero to a white section
  - removed the first duplicated standalone hero image from the first content section where it had been pushed below the hero
  - updated `seo/generate-missing-static-pages.cjs` so future regenerated rescue pages keep the same header, hero, and continuation pattern
- Applied the owner-requested page version to all normalized pages:
  - `v2026.04.22.10`
  - visible footer marker in each page
  - matching `content_version` entries in `seo/keyword-map.rebuilt.json`
- Added design-consistency metadata to `seo/keyword-map.rebuilt.json`:
  - `_meta.design_consistency_version = v2026.04.22.10`
  - `_meta.design_consistency_note` describing the canonical header, image hero, and continuation-band correction
- Added CSS crop protection for generated `*-ai.webp` images in card, gallery, finish, room, and homepage editorial image containers so lower-corner generator marks are cropped out at render time.
- Verified local design consistency after the owner review:
  - 18 normalized pages contain the canonical mobile toggle, dropdown navigation, image hero, hero-continuation band, and page version `v2026.04.22.10`
  - all 18 pages with before/after sliders passed browser loading checks; every slider has the before overlay, handle, loaded image dimensions, and no CSS rotation rule
  - JSON-LD parsing passed across 233 static blocks
  - keyword map integrity passed with 209 keywords across 41 mapped pages
- Deployed the design-normalization update to Cloudflare Workers:
  - Wrangler version: `4.83.0`
  - Worker version: `fa091992-b0a6-4c00-a91f-6e894914cdcc`
  - Uploaded 19 new/modified static assets
- Verified live production after design-normalization deploy:
  - `/sugim/gimur-geves`, `/sugim`, and `/ru/sravnenie-geves` contain image heroes, hero-continuation bands, canonical header toggles, and page version `v2026.04.22.10`
  - `/asakim` retains the canonical header used as the reference page
  - `/hadarim/ambatia` retains its before/after slider section and canonical header
  - `/css/style.css` contains the expanded `*-ai.webp` crop rules for room cards and homepage editorial image tiles
- Revised the normalized image-hero design after owner feedback:
  - changed `page-hero--image` from a full-width dark overlay hero to the site's rounded-card hero language
  - removed the global heavy dark overlay and replaced it with a localized gradient on the text side so the product image remains visible
  - kept the conversion architecture: price CTA, secondary fit-check CTA, and 3-value trust row
  - changed the trust row from a dark continuation bar to a lighter warm material band that better fits premium interior-design pages
  - changed default hero image positioning to `center top` so the ceiling/product area is prioritized
- Applied the visible version marker and keyword-map tracking for the hero visual revision:
  - page version: `v2026.04.22.11`
  - `seo/keyword-map.rebuilt.json` content versions updated from `v2026.04.22.10` to `v2026.04.22.11`
  - `_meta.hero_visual_version = v2026.04.22.11`
- Deployed the hero visual revision to Cloudflare Workers:
  - Wrangler version: `4.83.0`
  - Worker version: `1627d516-bd26-42c8-928e-1a7d54162ed0`
  - Uploaded 19 new/modified static assets
- Verified live production after hero visual revision:
  - `/sugim/mavrika`, `/sugim/gimur-geves`, `/sugim`, and `/ru/sravnenie-geves` return 200 with `v2026.04.22.11`
  - `/sugim/mavrika` uses the product-specific `glossy-chandelier-salon.jpg` hero image
  - `/css/style.css` contains the rounded-card `page-hero--image` rules, localized radial text gradient, and light warm value-prop band
- Prepared a one-page joined-hero trial for `/sugim/mavrika` after owner feedback:
  - hero image keeps only top rounded corners
  - the value-prop band attaches directly to the hero with no gap
  - value-prop band keeps only bottom rounded corners, so both parts read as one hero unit
  - CSS is scoped through `page-hero--joined` and `hero-continuation--joined`; no other page uses the trial classes yet
  - visible page version and keyword-map `content_version`: `v2026.04.23.1`
  - local Playwright check confirmed desktop and mobile gap = 0 between hero and value-prop band
- Deployed the one-page joined-hero trial:
  - Wrangler version: `4.83.0`
  - Worker version: `e1f2d7b0-e301-4420-ad58-b1eece6cac5e`
  - Uploaded 2 modified static assets: `/sugim/mavrika/index.html` and `/css/style.css`
- Verified live production for `/sugim/mavrika`:
  - returns 200
  - contains `page-hero--joined` and `hero-continuation--joined`
  - contains visible page version `v2026.04.23.1`
  - no longer contains the previous page version `v2026.04.22.11`
- Updated the one-page trial per owner feedback:
  - changed `/sugim/mavrika` hero image to the living-room glossy image used on `/hadarim`
  - added background crop sizing for hero images so lower-corner image marks can be cropped
  - added visible homepage version marker
  - updated `/` and `/sugim/mavrika` content versions to `v2026.04.23.2`
- Deployed the owner-feedback hero image/version update:
  - Wrangler version: `4.83.0`
  - Worker version: `78c43b0a-61bf-4edb-a575-cd8fec5a5967`
  - Uploaded 3 modified static assets: `/sugim/mavrika/index.html`, `/index.html`, and `/css/style.css`
- Verified live production:
  - `/` contains visible page version `v2026.04.23.2`
  - `/sugim/mavrika` contains `v2026.04.23.2`, joined-hero classes, and the `/hadarim` glossy room image
  - `/css/style.css` contains `--page-hero-bg-size`
- Corrected version policy per owner feedback:
  - removed all visible `גרסת עמוד` markers from static HTML
  - kept only the site-wide Worker marker: `גרסת אתר: v2026.04.23.3`
  - softened page-hero overlay edges with CSS blur so the gradient does not show hard borders
- Deployed the corrected site-version and overlay update:
  - Wrangler version: `4.83.0`
  - Worker version: `f28659f7-d81b-4888-8041-f73f5c863bcf`
  - Uploaded 20 modified static assets in the first deploy; second sync deploy had no new asset uploads
- Verified live production:
  - `/` and `/sugim/mavrika` contain `v2026.04.23.3` and no visible page-version marker
  - `/sugim/mavrika` still contains joined-hero classes
  - `/css/style.css` contains the overlay blur rules
- Prepared `/sugim` hero rollout:
  - applied the joined hero structure to `/sugim`, all `/sugim/*` pages, and `/brisol`
  - replaced the generic hero continuation panels with page-specific panels for each page
  - changed `/sugim/akustit` and `/brisol` hero images to images from `/assets/images/sugim`
  - bumped the site runtime version to `v2026.04.23.4`
- Deployed `/sugim` hero rollout:
  - Wrangler version: `4.83.0`
  - Worker version: `21f40e39-149a-406f-9c55-f80f5a311057`
  - Uploaded 10 modified static assets in the first deploy; second sync deploy had no new asset uploads
- Verified live production:
  - `/sugim`, all 8 `/sugim/*` pages, and `/brisol` contain joined hero classes and `v2026.04.23.4`
  - no visible page-version markers remain
  - `/sugim/akustit` and `/brisol` use hero images from `/assets/images/sugim`
- Prepared Brisol hero crop fix:
  - zoomed `/brisol` hero background to `115% auto` to hide the lower-corner generated-image mark
  - bumped the site runtime version to `v2026.04.23.5`
- Deployed and verified `/brisol` hero crop fix:
  - Worker version: `e1e18e37-66f9-4c19-b5e1-92fd2b2a0ff6`
  - live `/brisol` contains `--page-hero-bg-size:115% auto`, joined hero classes, and `v2026.04.23.5`

## Site Version Tracking Rule

Use only the site-wide Worker/runtime marker. Do not add visible per-page version markers.

`גרסת אתר: vYYYY.MM.DD.N`

When the runtime version changes, update:

- `SITE_RUNTIME_VERSION` in `worker.js`
- `_meta.site_runtime_version` in `seo/keyword-map.rebuilt.json`
- this implementation tracker

## Current Blockers Found In Repo

No deploy-blocking missing-static sitemap URLs remain after this pass.

## Latest Site Version

`גרסת אתר: v2026.04.23.22`

- Added stronger trust-navigation links on `/odot`, `/aharayut-yatzranim`, and `/proyektim`.
- Kept the structure unchanged while tightening internal-link paths for trust and project discovery.
- Advanced the site-wide runtime marker to the latest deploy version.
- Expanded `/azorim/ashdod` and `/azorim/darom` with cleaner business/location copy, FAQ, and internal links.
- Cleaned remaining wording issues found in QA on `/azorim/haifa` and `/azorim/merkaz`.
- Strengthened `/azorim/tel-aviv` with cleaner copy, better business/internal links, and an extra FAQ item.
- Strengthened `/azorim/yerushalayim` with cleaner copy, a stronger institutions/business angle, and an extra FAQ item.
- Added another FAQ route on `/ru/`, expanded the Haifa FAQ, and tightened `/asakim` hero, FAQ, and regional B2B links.
- Expanded FAQ and comparison linking on `/hashvaa/tikrat-geves-mehir`.
- Cleaned weak copy and strengthened schema on `/hadarim/salon` and `/hadarim/ambatia`.
- Strengthened `/hadarim/mitbah` and `/hadarim/heder-sheina` with `AggregateOffer`, broader FAQ, and tighter price/comparison links.
- Strengthened `/teura` and key lighting pages with better hub copy and internal links to room, pricing, and comparison pages.
- Strengthened `/hadarim/misrad` and `/hadarim/mikve` with cleaner schema, broader FAQ/price copy, and tighter links to lighting, pricing, and comparison pages.
- Strengthened `/teura/teura-hekifit`, `/teura/teura-tluya`, and `/teura/hanmahat-tikra-im-teura` with cleaner schema and stronger cross-links to room pages and comparisons.
- Strengthened `/asakim` with broader B2B linking and an added route toward `/architects-designers`.
- Strengthened `/architects-designers` with richer FAQ, stronger pricing/lighting links, and cleaner `AggregateOffer` data.
- Strengthened embedded `/ru/` and `/ru/cena/` pages with business-oriented RU FAQ, corrected RU pricing navigation, corrected `hreflang` on `/ru/cena/`, and added `Service` schema to RU pricing.
- Strengthened `/ru/sravnenie-geves` with `Service` schema, an added office/business FAQ path, and stronger RU-to-B2B internal linking.
- Strengthened `/azorim` with hub-level `Service` schema and stronger links to pricing, comparison, business, and architect pages.
- Tightened internal links and cleaned copy issues on core region pages: `/azorim/tel-aviv`, `/azorim/haifa`, `/azorim/yerushalayim`, `/azorim/ashdod`, `/azorim/merkaz`, and `/azorim/darom`.
- Kept the homepage out of this visual batch.

Known content-quality follow-ups remain, but they are not 404/sitemap blockers:

- Most restored `/sugim/*`, `/architects-designers`, and `/tikun` pages are intentionally lean rescue pages. `/sugim/mat`, `/sugim/mavrika`, `/sugim/saten`, `/sugim/hadpas`, `/sugim/akustit`, `/sugim/tikra-tzafa`, `/sugim/pasei-merahvim`, and `/sugim/gimur-geves` have now been expanded; the remaining restored pages should be expanded with richer imagery, project examples, and page-specific copy before being treated as final commercial pages.
- `/tikra-metuha-180` is now treated as a legacy price URL and 301s to `/mehiron`; keep it out of `sitemap.xml`.

## Next 14-Day Priorities

1. Expand the remaining restored `/sugim/*` rescue pages into full commercial pages with examples and stronger proof.
2. Add individual Review schema only after confirming the visible reviews are real/verifiable source reviews.
3. Run post-deploy GSC checks for homepage head-term split: `תקרה מתוחה` vs `תקרה נמתחת`.
4. Move to the next non-finish rescue page: `/architects-designers` or `/tikun`.

## First Growth Build

Highest-ROI new pages from the strategy:

1. `/maamarim/kisui-tikra-rativut/`
2. `/maamarim/hester-tzinorot/`
3. `/maamarim/dira-tikra-nemuha/`
4. `/ru/sravnenie-geves/`
5. `/sugim/*` page expansions

Each new commercial page should follow the existing pricing/comparison page standard:

- One clear primary keyword
- Visible price anchor
- Service + Offer + FAQPage + BreadcrumbList schema where appropriate
- At least 3 internal inbound links within 7 days
- Final CTA with phone, WhatsApp, and form path

## Measurement

Track each deployed batch in GSC for 14-30 days:

- Target query
- Target URL
- Baseline impressions
- Baseline average position
- Baseline CTR
- Lead/WhatsApp conversion proxy
- Change date
- Review date

Avoid shipping more than one major intent change to the same URL inside a 30-day measurement window.
