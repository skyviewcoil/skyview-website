# SkyView — ביקורת עיצוב (v95)

תאריך: 2026-04-16. נבדק: מערכת עיצוב + 5 עמודים מייצגים (בית, מחירון, הדרים/סלון, ru/, contact).
שיטה: קריאת `css/style.css`, דגימת HTML, חישובי ניגודיות WCAG, מיפוי רכיבים.
לא נבדק ויזואלית בדפדפן — אם דרוש סימולציה חיה של scroll / hover / אינטראקציה, תגיד.

---

## בעיות קריטיות (לטפל ראשונות)

| # | ממצא | חומרה | תיקון |
|---|------|-------|-------|
| 1 | **גוון הכוכבים `#C89B3C` על רקע `#F7F3EE`**: ניגודיות **2.32** — נכשל גם AA-Large. מופיע ב-`--color-star` ובמקומות שמציגים דירוג חמישה כוכבים. | 🔴 | להחליף ל-`#A97C1E` (~4.55 AA) או שחור/deep כמו שאר הטקסט. כוכבים דקורטיביים אפשר להשאיר כצורה ולתת ARIA-label "5 מתוך 5" במקום להישען על הצבע. |
| 2 | **טקסט ה-hero `rgba(255,255,255,0.6)`** — אובר הגרדיאנט, באזור האמצע של ההירו (50–70%) הגוון האפקטיבי **~3.0 ניגודיות** → נכשל AA רגיל. בתחתית עם overlay כהה יש ~6.5 AA, אבל הטקסט מתחיל בגובה שהגרדיאנט עדיין שקוף. | 🔴 | להעלות את האלפא ל-`0.78` (דומה ל-`rgba(255,255,255,0.78)`) **או** להכהות את overlay עד 40% ולא רק 18% באמצע. אופציה נוספת: לצבוע ב-`#EAE3DB` מוצק ולוותר על השקיפות. |
| 3 | **ה-dropdown בניווט עובד רק על `mouseenter`/`mouseleave`** (`js/main.js` שורה 85–92). המקלדת יכולה למקד ב-trigger אבל לא לפתוח פאנל — לא ניתן לנווט ללא עכבר. גם בטאץ' דסקטופ (iPad landscape, למשל) הוא שבור. | 🔴 | להוסיף `click` על ה-trigger ש-toggles `.open`, `focusin`/`focusout` על המיכל, `Escape` סוגר, ו-`aria-expanded` מתעדכן. הפאנל עצמו צריך להיות נגיש מ-Tab. |

---

## בעיות בינוניות

| # | ממצא | חומרה | תיקון |
|---|------|-------|-------|
| 4 | **Touch targets קטנים מדי**: `.btn--sm` הוא 10×20px → ~30px גובה. ה-`sticky-cta .btn` הוא `padding:12px` עם font 13px → ~37px. WCAG 2.1 AA דורש 44×44 עבור פעולות ראשיות ב-mobile. | 🟡 | להגדיל `.btn--sm` ל-`14px 22px` ו-sticky CTA ל-`min-height:48px`. זה ה-CTA הכי חשוב במובייל — הוא לא אמור להיות הכי קטן. |
| 5 | **Inline styles מפוזרים**: 130 ב-`mehiron/`, 11 בבית, מופיעים גם ב-room pages (`salon-hero` עם 6 declarations inline). יוצר אי-עקביות בין עמודים שאמורים להיות זהים. | 🟡 | להעביר הכל ל-classes (`.salon-hero`, `.calc-type-btn`, `.calc-area-slider`). כרגע אין CSS בכלל ל-`.salon-hero` (grep ריק) — המחלקה קיימת רק בשם, העיצוב כולו inline. |
| 6 | **`!important` × 24** + **טוקנים מוכפלים** (`--color-accent` → `var(--accent)`, `--color-primary` → `var(--text)` וכו'). מעיד על מעבר מסכמת שמות ישנה בלי לנקות. | 🟡 | מחזור: לבחור סט אחד (הסמנטי: `--accent`, `--text`, `--bg`) ולמחוק את ה-`--color-*` aliases. להוריד את `!important` לפחות ב-50% — רובם מכפרים על specificity של inline. |
| 7 | **היררכיית H2 שטוחה**: המחירון מכיל 17 H2, עמוד סלון מכיל 13 H2, הבית 13 H2. הכל באותו גודל ומשקל. העין מאבדת את הציר. | 🟡 | להמיר חלק מה-H2 ל-H3 כאשר הם תת-נושאים של חלק אב (`#price-area`, `#price-finish`, וכו' הם תת-נושאים של "מה משפיע על המחיר" — צריכים להיות H3). H2 רק לחטיבה ראשית. |
| 8 | **CTA overload**: 33 אלמנטי CTA בעמוד הבית (`btn`, טלפון, WhatsApp, contact, sticky). זה דורש מהמשתמש החלטה בכל סקרול. | 🟡 | להפחית ל-≤12. סקשן אחד → CTA אחד primary + secondary אופציונלי. להסיר CTA כפול בסיום של כל סקשן שחוזר ב-sticky ממילא. |
| 9 | **פונטים דרך `@import`** מ-`fonts.googleapis.com` בלי `preconnect` ל-`fonts.gstatic.com`. `@import` חוסם רינדור של ה-CSS שמיובא (3-4 RTT נוספים). | 🟡 | להעביר ל-`<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` + `<link rel="stylesheet" href="...display=swap">` ב-`<head>` של כל עמוד. מידה: ~200-400ms ב-LCP ב-3G. |
| 10 | **טקסט `--text-muted` (#8A7E73) על `--bg` (#F7F3EE)**: ניגודיות **3.58** — נכשל AA רגיל (דורש 4.5), עובר AA-Large. ייתכן שמשמש בגדלים קטנים (caption 12px, ui-sm 13px). | 🟡 | להכהות ל-`#7A6E62` (~4.6 AA) או לבדוק שכל שימוש ב-`--text-muted` הוא ≥18px/14px-bold. |

---

## בעיות קטנות

| # | ממצא | חומרה | תיקון |
|---|------|-------|-------|
| 11 | **Font stack חלש**: `'Heebo', sans-serif` — אם Heebo לא נטען, קופץ ל-system default שהוא ב-Windows Hebrew = "Segoe UI Historic" שנראה זר. | 🟢 | `'Heebo', 'Arial Hebrew', 'Tahoma', system-ui, sans-serif`. |
| 12 | **Trust bar 36px + header ~72px = 108px fixed** במובייל. על מסך 812px זה 13% מהגובה בקבוע. | 🟢 | להחביא את ה-trust bar על scroll-down (כבר קיים `.hidden` class — לאשר שה-JS מפעיל אותו), או להפוך אותו ל-collapsible במובייל. |
| 13 | **`--font-display` = `--font-heading` = `--heading` = Heebo** — שלושה טוקנים מצביעים לאותו פונט. אין הבחנה בין display/heading. | 🟢 | להסיר את `--font-display` ו-`--font-heading` (aliases ריקים) או לתת ל-`display` פונט שונה כמו Heebo 800 extrabold לכותרות hero. |
| 14 | **Z-index לא מתוחזק**: 1001, 1002, 1000, 900, 200, 199, 3, 2, 1, -1. בלי מערכת (tokens). קונפליקטים יתחילו כשיוסיפו מודאל/טוסט. | 🟢 | `--z-base:1; --z-dropdown:100; --z-sticky:900; --z-header:1000; --z-trust:1001; --z-mobile-menu:1002; --z-modal:1100; --z-toast:1200`. |
| 15 | **JSON-LD reviews embedded** בכל עמוד (15 reviews × 90 עמודים = 1350 הטמעות). ~6KB לעמוד × 90 = 540KB סה"כ של טקסט כפול. SEO רואה את זה כפילות. | 🟢 | ב-HomeAndConstructionBusiness schema יש `aggregateRating` + `@id`. מספיק reviews בעמוד הבית ובעמוד אודות. בשאר להסתמך על `@id` reference. |
| 16 | **אין CSS ל-`.salon-hero`** — המחלקה מופיעה ב-HTML אבל ה-styling כולו inline. עמודים שלא מעתיקים את ה-inline תקועים בלי עיצוב. | 🟢 | (חופף עם #5) להעביר לזוג 10 שורות CSS. |

---

## מה עובד טוב

- טוקנים עקביים של `--sp-*` (2,3,4,5,6,8,10,12,16,20,24) ו-typography ב-`clamp()` — responsive נכון.
- Alt text כיסוי מלא: 386/386 תמונות, רק 3 `alt=""` (decorative). טקסט תיאורי בעברית, לא generic.
- `prefers-reduced-motion` מטופל — animations נעלמים.
- `:focus-visible` עם `outline: 2px solid var(--accent)` מוגדר ב-`.btn`, `a`, inputs.
- `aria-label`, `aria-haspopup`, `aria-expanded`, `role="menu"` על ה-nav — התשתית הסמנטית נכונה (רק ה-JS לא מעדכן `aria-expanded` באירוע hover).
- Single H1 בכל עמוד שנבדק.
- טיפוגרפיה: 40→72px H1 עם `letter-spacing: -0.025em` — מראה מלוטש ומודרני.
- Hero gradient double-layer (linear 4-stop + brown tint 135deg) — איכותי.
- Reduce motion, RTL flip, RU text-align left — כיסוי i18n/accessibility טוב יחסית.

---

## המלצות לפי עדיפות

### שבוע 1 (a11y critical)
1. **לתקן את צבע הכוכבים** (`--color-star`) ל-`#A97C1E` או כהה יותר.
2. **להעלות את אלפא של hero p** מ-0.6 ל-0.78, או להכהות את ה-overlay האמצעי.
3. **להחליף את dropdown לפתיחה עם click** + `Escape` + טיפול במקלדת. זה גם תיקון a11y וגם תיקון bug מובייל דסקטופ.

### שבוע 2 (מערכת עיצוב)
4. **לנרמל inline styles** — להעביר את `.salon-hero` ו-`.calc-*` ל-CSS. יהפוך את 90 עמודים לעקביים.
5. **להוריד CTA density** בעמוד הבית מ-33 ל-≤12.
6. **להגדיל touch targets** — `.btn--sm`, sticky CTA.

### שבוע 3 (cleanup)
7. להסיר aliases של `--color-*`, לצמצם `!important`, להוסיף מערכת z-index.
8. Preconnect ל-fonts.gstatic + להעביר את ה-import ל-`<link>`.
9. המרה של H2→H3 כמו תתי-נושאים.
10. להסיר את ה-reviews המלאים מכל עמוד פנימי, להשאיר רק בבית + אודות.

---

## ממצאים מבדיקת דפדפן חיה (desktop 1920px, www.skyview.co.il)

נבדק ב-Claude in Chrome על הדומיין החי (www.skyview.co.il). Workers.dev subdomain מחזיר אזהרת אבטחה בדפדפן — לעבור לדומיין הקנוני בלינקים פנימיים בלבד.

### אישור לממצאים הסטטיים

| # במסמך | סטטוס | הוכחה חיה |
|---------|-------|-----------|
| קריטי #2 (hero p alpha) | ✅ **מאומת** | `getComputedStyle(heroP).color === 'rgba(255, 255, 255, 0.6)'` ב-22px על עמוד הבית. |
| קריטי #3 (dropdown hover-only) | ✅ **מאומת** | `aria-expanded` נשאר `"false"` אחרי `click()` וגם אחרי `KeyboardEvent('keydown','Enter')` על ה-trigger. הפאנל: `opacity:0, visibility:hidden, pointer-events:none`. אף JS listener לא מתעדכן. |
| בינוני #4 (touch targets) | ✅ **מאומת** | `.btn--outline.btn--sm` = 43×115px על `/hadarim/salon`. מתחת ל-44px של WCAG. `.btn--primary` הראשי 58px — תקין. |
| בינוני #5 (inline styles on `.salon-hero`) | ✅ **מאומת** | `/hadarim/salon` מחזיר: `position:relative;border-radius:var(--r-lg);overflow:hidden;margin:var(--sp-6) auto 0;max-width:var(--max-w);` על התג. |

### ממצאים חדשים שנוספו מהבדיקה החיה

| # | ממצא | חומרה | תיקון |
|---|------|-------|-------|
| 17 | **Reveal animations מונעים תפיסה ויזואלית של חלק גדול מהעמוד.** 31 אלמנטי `.reveal` על עמוד `/mehiron/`, מוגדרים עם `opacity:0 → 1` ב-IntersectionObserver. אם ה-observer מפספס (iframe, צילום מסך, scroll מהיר, prefers-reduced-motion לא עבד כצפוי) — אזורים שלמים נשארים שקופים. | 🟡 | להוסיף fallback: `.reveal { opacity: 1 }` ב-media query `prefers-reduced-motion: reduce` ולוודא שה-observer מופעל גם כשה-element כבר בתוך viewport בטעינה. בנוסף: להוריד את האפקט ל-15px transform במקום 30-40px. |
| 18 | **Calculator slider track/thumb = 6px.** `input[type=range].height = 6px`. בגלל שהדפדפן מרנדר את ה-thumb כברירת מחדל ללא styling, אזור ה-hit הוא 6px × ~16px בלבד. במובייל זה בעיה קשה, בעכבר זה גבול. | 🟡 | להגדיר thumb מותאם: `::-webkit-slider-thumb { width: 28px; height: 28px; border-radius: 50%; background: var(--accent); }` + `::-moz-range-thumb`. ולהגדיל track ל-8-10px עם תצוגה ברורה של ה-fill. |
| 19 | **סקשן יחיד בגובה 2877px ב-`/mehiron/`** — "מחיר תקרה מתוחה — מה באמת משפיע על ההצעה". 6× מגובה ה-viewport. חוזר על #7 אבל באופן בולט — אזור אחד הוא 23% מכל גובה העמוד (12377px). | 🟡 | לפצל ל-2 סקשנים: "מה כלול במחיר" ו-"תוספות". או להפוך ל-accordion כדי שהמשתמש יוכל לגלוש מעל. |
| 20 | **Trust bar 153px על desktop** (עטוף — שורה אחת לא מספיקה). במקום ~40px מצופה. תופס 16% מגובה ה-viewport בקבוע לצד header של 80px = 233px = 25% מהעמוד מקובע. | 🟡 | לקצץ את הטקסט או להסתיר חלקים בדסקטופ רחב (`@media (min-width: 1200px)` להשאיר רק שורה אחת). בדוק ב-CSS שאין `flex-wrap` לא רצוי. |
| 21 | **לינק בניווט `[BLOCKED: Cookie/query string data]`** — "הדמיית AI חינם" ב-nav, `href` עם URL parameters ארוכים. JS tool חסם את התוכן. | 🟢 | לוודא שה-URL לא מכיל מידע אישי/טוקנים שדולפים. אם זו קישור ל-AI studio, לעבור דרך redirect פנימי נקי. |
| 22 | **URL routing: `/salon/` ו-`/tikra-metuha-salon/` מחזירים 404.** הנתיב האמיתי הוא `/hadarim/salon`. אם קיימים קישורים חיצוניים/ישנים לנתיבים הקצרים — נפילה שקטה. | 🟢 | להוסיף redirect 301 ב-`worker.js` מ-`/salon` → `/hadarim/salon` (וגם heder-sheina, mitbah וכו'). לבדוק ב-GSC אם יש impressions לנתיבים הישנים. |

### מה שלא ניתן היה לבדוק חי בסביבה זו

- **Viewport mobile 375/tablet 768** — Chrome MCP בסביבה מתעלם מ-`resize_window` לגדלים קטנים. `window.innerWidth` נשאר 1920 גם אחרי קריאה ל-resize ל-400×850. דרוש DevTools device emulation ידני, או Lighthouse Mobile, או פתיחה בפלאפון.
- **Lighthouse / Web Vitals** — דרוש ריצה חיצונית.
- **Real keyboard Tab order** — ניסיון `element.focus()` + `dispatchEvent('keydown', Enter)` לא מפעיל את ה-hover CSS, אבל גם לא מצליח לפתוח את הפאנל בדרך אחרת. המסקנה זהה לממצא #3 — אין תמיכה במקלדת.

### אושר שעובד

- Calculator math: 12m² → ₪2,748, 60m² → ₪13,740 (229×60). החישוב נכון ומתעדכן ב-`input` event.
- Focus handling: `element.focus()` על ה-trigger מצליח (הוא `<button>` אמיתי, לא `<div>`) — התשתית הסמנטית נכונה, רק ה-JS חסר.
- אין horizontal overflow ב-desktop. `document.body.scrollWidth` שווה ל-viewport.

---

## מה לא נבדק כאן

- רינדור במובייל/טאבלט חי (טכני — הסביבה לא תומכת).
- ביצועים: LCP, CLS, TTI, TBT — דורש Lighthouse.
- Tab order מלא, skip link, ניווט מקלדת מלא (דרוש בדיקה ידנית פיזית).
- Copy / UX writing.
- Form validation UX, error states.
- A/B של CTAs ביחס ל-conversion.

---

## עדיפויות מעודכנות אחרי הבדיקה החיה

**חובה שבוע 1 (a11y חוסם):**
1. תיקון dropdown — click + keyboard + aria-expanded (קריטי #3, אושר חי).
2. hero p alpha 0.6 → 0.78 (קריטי #2, אושר חי).
3. star color 2.32 → 4.55+ (קריטי #1).
4. slider thumb 28×28px (חדש #18, קריטי לשימושיות במובייל).

**שבוע 2:**
5. `.btn--sm` 43→48px, sticky CTA height בדיקה במובייל (בינוני #4).
6. inline → CSS על `.salon-hero` (בינוני #5, אושר חי).
7. reveal fallback ל-reduced-motion ול-already-in-viewport (חדש #17).

**שבוע 3:**
8. CTA density, H2→H3, tokens cleanup, fonts preconnect (בינוני #6-10).
9. Split section 2877px (חדש #19).
10. Redirects 301 ל-`/salon`, `/heder-sheina` וכו' (חדש #22).

---

## ממצאים נוספים — v95.1 (משוב משתמש + חוות דעת חיצונית)

תאריך: 2026-04-17. מקור: דיווח משתמש על 5 ליקויים ממוקדים + סינון חוות דעת חיצונית. כל ממצא אומת מול קובץ המקור לפני הוספה.

### קריטי (שגיאה עובדתית — דחוף)

| # | ממצא | חומרה | תיקון |
|---|------|-------|-------|
| 23 | **שגיאות עובדתיות בארצות יצרן — 3 קבצים.** MSD רשום כחברה רוסית (בפועל **סינית**). TEQTUM רשום כחברה בלגית (בפועל **גרמנית**). מופיע ב-`index.html:421-434`, `odot/index.html:280-288`, וגם ב-`madrich/ma-ze-tikra-metuha/index.html:234` שמקבץ "MSD ו-RENOLIT (גרמניה)". | 🔴 | `index.html` + `odot/index.html`: החלף `רוסיה` → `סין` עבור MSD, `בלגיה` → `גרמניה` עבור TEQTUM. `madrich/ma-ze-tikra-metuha/index.html:234`: הוצא את MSD מהסוגריים של "(גרמניה)". לבצע `grep -rn "MSD" .` ו-`grep -rn "TEQTUM" .` על כל האתר ולתקן כל מופע. כולל דף `/yatzranim/` ודף עסקים אם קיים. |

### בינוני

| # | ממצא | חומרה | תיקון |
|---|------|-------|-------|
| 24 | **BA slider — תמונות חדר אמבטיה ב-`/mehiron/` בפורמט portrait בתוך מסגרת 4:3 landscape.** `skyview-mehiron-basic-bathroom-stretch-ceiling-before-01.webp` = 1049×1400, ה-after זהה. המסגרת `aspect-ratio:4/3` עם `object-fit:cover` → חיתוך כבד או מראה של "תמונה מסובבת". תמונות סלון ומקווה (1400×1050) יושבות נכון. | 🟡 | לבחור מסלול אחד: (א) לצלם/לסובב את זוג האמבטיה ל-1400×1050. (ב) לשנות `.ba-slider` ל-`aspect-ratio:auto` או `3/4` רק בסלייד האמבטיה עם class modifier. (ג) לחליפין `object-fit:contain` + רקע ניטרלי. |
| 25 | **האייקון הירוק של WhatsApp בהדר מתנגש עם הפלטה.** `.header__wa-btn` משתמש ב-`#25D366` (ירוק מותג) על פלטה earthy brown (`--accent:#8C6A4A`). אי-התאמה ויזואלית. | 🟡 | 3 אופציות מדורגות: (1) להשאיר עגול אבל להחליף ל-`background:var(--text)` או `var(--accent)`, האייקון לבן (שומר זיהוי פונקציונלי, מתמזג בפלטה). (2) מסגרת מרובעת בצמוד ל-"קבלו הצעה" עם border דק `var(--accent)` ואייקון בצבע הטקסט. (3) להעביר כ-CTA שני בהירו ולהוריד מההדר. המלצה: (1) — שינוי נקודתי של 2 שורות CSS. |
| 26 | **Footer של עמוד הבית חסר שורת ערים + span גרסה.** `index.html:1010-1013` מכיל רק את שורת הזכויות. תבנית תקנית (למשל `contact/index.html:402-414`) כוללת גם רצועת קישורי ערים (6 ערים) ו-`<span>v##</span>`. אי-עקביות בין הבית לשאר 89 העמודים. | 🟡 | להעתיק את הבלוק מ-`contact/index.html:402-414` לעמוד הבית ולעדכן את ה-version span. |
| 27 | **`.mfr-strip` בעמוד הבית צף בלי section wrapper/heading.** `index.html:421-434` — div בודד אחרי סגירת סקשן, ללא כותרת ובלי container. בנוסף עם `opacity:0.7; filter:grayscale(30%)` שמוריד את היצרנים בעוד הסקשן "למה תקרה מתוחה" מסתיים לפני. ויזואלית "יתום". | 🟡 | לעטוף ב-`<section class="section">` עם כותרת קצרה (למשל "יצרנים שאנחנו עובדים איתם") ו-intro של שורה. להחליט על grayscale: אם זו לוגו-strip בפועל — להסיר grayscale כדי שהצבע המותגי יופיע; אם זה decorative — לשמר אבל לתת heading ו-container עם padding תקני. |
| 28 | **`/aharayut-yatzranim/` — רצועת trust אחרי הירו שוברת את ההמשכיות.** שורות 449-466: רקע `--bg-soft` בהיר מיד אחרי הירו כהה. מעבר חד. בנוסף: החלק התחתון של העמוד מכיל דפוס ייחודי (`ניווט מהיר` links-grid + 3-button CTA + form) שלא קיים בדפים אחרים. | 🟡 | (א) לשלב את ה-trust strip בתוך הירו עצמו כרצועה תחתונה על הגרדיאנט, או להעביר אותה פנימה לסקשן הראשון עם `--bg` זהה. (ב) להחליף את ה-"ניווט מהיר" בדפוס CTA התקני של האתר (primary + secondary כפי שיש ב-`contact/` ו-`odot/`). העמוד צריך להיראות ככל דף פנימי אחר, לא כ-landing page נפרד. |

### קטן (בונוס)

| # | ממצא | חומרה | תיקון |
|---|------|-------|-------|
| 29 | **`<span>v94</span>` תקוע בכ-89 דפים** — הגרסה הנוכחית v95. ה-version span הפנימי בפוטרים לא עודכן במעבר הגרסה. | 🟢 | `grep -rln ">v94<" . | xargs sed -i 's/>v94</>v95</g'` (בסביבת לינוקס) או find/replace בכלל הפרויקט. להוסיף לצ'קליסט שחרור גרסה. |

### נקודות מחוות דעת חיצונית (סוננו מבדיקת עובדות)

חוות הדעת החיצונית הכילה שגיאות עובדתיות (טענה על 404 ב-`/laasakim/`, על alt text כללי, על חוסר schema/דחיסה — כולם מופרכים). הנקודות הבאות בלבד עברו אימות ונשמרו:

| # | ממצא | חומרה | תיקון |
|---|------|-------|-------|
| 30 | **אין הודעת פרטיות צמוד לטפסים.** טפסי contact ו-leads בקצה העמודים בלי "הפרטים שלך לא יועברו לצד ג' / נשמרים לפי חוק הגנת הפרטיות". חסר גם אזכור אחריות/GDPR-like בעברית. | 🟡 | להוסיף `<p class="form-privacy">` קצר מתחת לכפתור ה-submit: "הפרטים שלך מאובטחים ומשמשים רק ליצירת קשר לגבי ההצעה. לא מועברים לצד שלישי." עם לינק ל-`/privacy` (אם לא קיים — ליצור עמוד). |
| 31 | **Testimonials קיימים כ-JSON-LD אבל לא מוצגים ויזואלית כ-cards.** 15 ביקורות מוטמעות ב-schema בכל עמוד (ראה ממצא #15 — כפילות), אבל אין section ויזואלי של "לקוחות ממליצים" עם שם, דירוג כוכבים ותמונה/initials. | 🟡 | לבנות `.testimonials-grid` עם 3-6 cards: שם, כוכבים, ציטוט קצר, עיר. אפשר להגדיר `aria-label` ללא להסתמך על צבע (ראה ממצא #1 על star color). להוסיף בבית ובעמוד אודות בלבד — לא בכל עמוד. |
| 32 | **תגי יצרן מופיעים רק כטקסט (`MSD · Teqtum · Renolit`) בלי לוגואים.** מסר "אנחנו רציניים" נחלש כשאין סמל ויזואלי. | 🟢 | להוסיף SVG לוגואים ב-`/img/manufacturers/` בגובה 32-40px, grayscale עד hover. לשים ב-section יצרנים (ממצא #27 אחרי תיקון) ובעמוד `/yatzranim/`. וידוא: רישיון שימוש בלוגואים מהיצרנים עצמם. |

---

## עדיפויות מעודכנות v95.1

**דחוף (שבוע 0 — שגיאות עובדתיות):**
- תיקון ארצות יצרן (#23) — 15 דקות, 3 קבצים.
- עדכון version span v94 → v95 (#29) — 2 דקות sed.

**חובה שבוע 1 (נשאר מ-v95):**
1. dropdown click+keyboard (#3)
2. hero p alpha (#2)
3. star color (#1)
4. slider thumb 28×28 (#18)

**שבוע 2 (v95.1 נוסף):**
5. תיקון footer עמוד הבית (#26)
6. BA aspect mismatch (#24)
7. WhatsApp icon צבע (#25)
8. `.mfr-strip` wrapper + heading (#27)

**שבוע 3:**
9. `/aharayut-yatzranim/` normalization (#28)
10. form privacy notice (#30)
11. visible testimonials section (#31)
12. manufacturer logos (#32)
13. נשאר מ-v95: CTA density, H2→H3, tokens cleanup, preconnect, split 2877px, 301 redirects.
