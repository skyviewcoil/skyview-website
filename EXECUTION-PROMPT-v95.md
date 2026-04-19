# SkyView v95 — פרומט ביצוע מלא

תאריך: 2026-04-17. מטרה: מסמך ביצוע סגור. כל סעיף מכיל: זיהוי הבעיה, קובץ + שורות מדויקות, קטע קוד לפני/אחרי, והחלטה נדרשת כשישנה.
אופן עבודה מומלץ: לבצע commit לפני כל קבוצת סעיפים (P0, P1, P2, P3). לבדוק ידנית אחרי P0 + P1.

---

## P0 — שגיאות עובדתיות וטעויות שבורות (דחוף, לפני deploy הבא)

### P0.1 — ארצות יצרן שגויות (3 קבצים + סריקה מלאה)

**הבעיה:** MSD רשומה כרוסית (בפועל **סינית**). TEQTUM רשומה כבלגית (בפועל **גרמנית**). שקיפות = אמינות.

**מיקומים מאומתים:**
- `index.html:421-434` (sec `.mfr-strip`)
- `odot/index.html:280-288`
- `madrich/ma-ze-tikra-metuha/index.html:234`

**ביצוע:**
```bash
# מקובצים מדויקים
sed -i 's/MSD<\/span>\n          <span class="mfr-strip__meta">רוסיה/MSD<\/span>\n          <span class="mfr-strip__meta">סין/' index.html odot/index.html
sed -i 's/TEQTUM<\/span>\n          <span class="mfr-strip__meta">בלגיה/TEQTUM<\/span>\n          <span class="mfr-strip__meta">גרמניה/' index.html odot/index.html
```
(הפקודות מעל לא יעבדו עם newline ב-sed — עדיף Edit tool או חיפוש ידני.)

**החלפות ידניות:**
1. `index.html:424` — "רוסיה · אחריות 10 שנים" → "סין · אחריות 10 שנים"
2. `index.html:428` — "בלגיה · אחריות 12 שנים" → "גרמניה · אחריות 12 שנים"
3. `odot/index.html:282` — "רוסיה · אחריות 10 שנים" → "סין · אחריות 10 שנים"
4. `odot/index.html:285` — "בלגיה · אחריות 12 שנים" → "גרמניה · אחריות 12 שנים"
5. `madrich/ma-ze-tikra-metuha/index.html:234` — "MSD ו-RENOLIT (גרמניה)" → "RENOLIT (גרמניה) ו-MSD (סין)"

**סריקה נוספת (חובה):**
```bash
cd C:\Users\smart\Downloads\skyview-v84
grep -rn "MSD" --include="*.html" . > /tmp/msd-all.txt
grep -rn "TEQTUM\|Teqtum" --include="*.html" . > /tmp/teqtum-all.txt
# לעבור ידנית על כל שורה, לאמת הקשר, לתקן לפי הצורך.
```
קובץ `/yatzranim/` (אם קיים) ודף עסקים/asakim — חובה לבדוק.

---

### P0.2 — גרסה תקועה v94 בפוטרים של 89 דפים

**הבעיה:** הגרסה המוצגת אינה משקפת את הבילד הנוכחי.

**ביצוע (סביבה לינוקסית — WSL/Git Bash):**
```bash
grep -rln ">v94<" --include="*.html" . | xargs sed -i 's/>v94</>v95</g'
```
**או ב-VS Code:** Find in Files `>v94<` → Replace `>v95<` → Replace All.

**להוסיף ל-release checklist:** שחרור גרסה = עדכון `<span>v##</span>` + inline HTML comments `<!-- v## -->` בקובצי HTML.

---

### P0.3 — BA sliders: תמונות בפורמט שגוי + תמונות "אחרי" שאינן אחרי אמיתי

**זוהי הבעיה הגדולה ביותר באתר כרגע. שני חלקים נפרדים:**

#### חלק א — 11 זוגות עם פורמט שגוי (portrait במסגרת 3:2 landscape)

`.ba-slider` מוגדר `aspect-ratio: 3/2` ב-`css/style.css:3600`. 21 מתוך 61 תמונות ב-`/assets/images/beforeafter/` הן portrait (1049×1400, 1440×1920).

**7 זוגות mismatched (נראים "מסובבים"):**

| שם זוג | before | after | עמודים מושפעים |
|---|---|---|---|
| skyview-hadarim-office-stretch-ceiling-*-03 | 1400×1050 **L** | 1050×1400 **P** | `hadarim/index.html`, `hadarim/misrad/index.html`, `teura/masila-magnetit-shkuaa/index.html`, `teura/spotim-shkuim/index.html` |
| skyview-mikveh-printed-luminous-stretch-ceiling-*-02 | 1049×1400 **P** | 1400×1050 **L** | `hadarim/mikve/index.html` |
| skyview-misrad-magnetic-track-stretch-ceiling-*-01 | 1400×851 (r=1.65) | 1920×1440 (r=1.33) | `asakim/index.html`, `hadarim/misrad/index.html`, `teura/index.html`, `teura/masila-magnetit-shkuaa/index.html` |
| skyview-mitbah-island-lighting-stretch-ceiling-*-03 | 1049×1400 **P** | 4000×3000 **L** | `hadarim/mitbah/index.html` |
| skyview-sugim-matte-stretch-ceiling-bedroom-*-02 | 1049×1400 **P** | 4000×3000 **L** | `hadmaya-rishonit-hinam/index.html`, `sugim/index.html` |
| skyview-teura-recessed-led-kitchen-*-01 | 1049×1400 **P** | 4000×3000 **L** | `teura/index.html` |
| skyview-tikra-mueret-bedroom-*-01 | 1920×1440 **L** | 1049×1400 **P** | `teura/tikra-mueret/index.html` |

**4 זוגות "שניהם portrait" (חיתוך כבד אחיד במסגרת 3:2):**

| שם זוג | גודל | עמודים |
|---|---|---|
| skyview-hadarim-living-room-*-01 | 1440×1920 | `hadarim/index.html`, `hadarim/salon/index.html`, `hashvaa/tikra-metuha-o-geves/index.html`, `sugim/index.html` |
| skyview-heder-sheina-matte-*-01 | 1050×1400 | `hadarim/heder-sheina/index.html`, `hashvaa/tikra-metuha-o-geves/index.html` |
| skyview-mehiron-basic-bathroom-*-01 | 1050×1400 | `hadarim/ambatia/`, `hadarim/index.html`, `hashvaa/tikra-metuha-o-geves/`, `mehiron/index.html`, `teura/spotim-shkuim/` |
| skyview-mikveh-moisture-resistant-*-03 | 1049×1400 | `hadarim/ambatia/index.html`, `hadarim/mikve/index.html` |

**החלטת משתמש (2026-04-17):** להשאיר את התמונות כמו שהן — לא לסובב, לא לחתוך. ההתאמה היא על המסגרת, לא על התמונות.

**מסלול תיקון — מאומץ:**

CSS-side fix: לשנות את `.ba-slider` כך שיכבד את יחס התמונה הטבעי, עם modifier לפורטרט ולזוגות mismatched.

**עריכה ב-`css/style.css:3600` ובסביבה:**

```css
/* ברירת מחדל landscape 3:2 */
.ba-slider { aspect-ratio: 3/2; }

/* חדש: portrait pairs */
.ba-slider--portrait { aspect-ratio: 3/4; max-width: 560px; margin-inline: auto; }

/* חדש: mismatched pairs — letterbox כדי שלא לחתוך אף תמונה */
.ba-slider--mixed {
  aspect-ratio: 4/3;
  background: var(--bg-soft);
}
.ba-slider--mixed > img,
.ba-slider--mixed .ba-slider__before img {
  object-fit: contain;  /* במקום cover — שומר את התמונה השלמה */
}
```

**עריכת HTML — 15 מיקומים:**

4 זוגות "שניהם portrait" — להוסיף `ba-slider--portrait`:
- `hadarim/index.html` — slider של `hadarim-living-room-*` וגם `mehiron-basic-bathroom-*`
- `hadarim/salon/index.html` — `hadarim-living-room-*`
- `hashvaa/tikra-metuha-o-geves/index.html` — `hadarim-living-room-*` + `heder-sheina-matte-*` + `mehiron-basic-bathroom-*`
- `sugim/index.html` — `hadarim-living-room-*`
- `hadarim/heder-sheina/index.html` — `heder-sheina-matte-*`
- `hadarim/ambatia/index.html` — `mehiron-basic-bathroom-*` + `mikveh-moisture-resistant-*`
- `hadarim/index.html` — `mehiron-basic-bathroom-*`
- `mehiron/index.html` — `mehiron-basic-bathroom-*`
- `teura/spotim-shkuim/index.html` — `mehiron-basic-bathroom-*`
- `hadarim/mikve/index.html` — `mikveh-moisture-resistant-*`

7 זוגות mismatched — להוסיף `ba-slider--mixed`:
- `hadarim/index.html`, `hadarim/misrad/index.html`, `teura/masila-magnetit-shkuaa/index.html`, `teura/spotim-shkuim/index.html` — `hadarim-office-*-03`
- `hadarim/mikve/index.html` — `mikveh-printed-luminous-*-02`
- `asakim/index.html`, `hadarim/misrad/index.html`, `teura/index.html`, `teura/masila-magnetit-shkuaa/index.html` — `misrad-magnetic-track-*-01`
- `hadarim/mitbah/index.html` — `mitbah-island-lighting-*-03`
- `hadmaya-rishonit-hinam/index.html`, `sugim/index.html` — `sugim-matte-bedroom-*-02`
- `teura/index.html` — `teura-recessed-led-kitchen-*-01`
- `teura/tikra-mueret/index.html` — `tikra-mueret-bedroom-*-01`

**דוגמה לשינוי HTML (לפני/אחרי):**
```html
<!-- לפני -->
<div class="ba-slider">

<!-- אחרי (עבור portrait) -->
<div class="ba-slider ba-slider--portrait">

<!-- אחרי (עבור mismatched) -->
<div class="ba-slider ba-slider--mixed">
```

**הערה חשובה על JS:** `js/main.js:570-598` עושה חישוב `beforeImg.style.width = slider.offsetWidth + 'px'` — עובד עם `object-fit: cover`. עם `contain` ייתכן וצריך התאמה. לבדוק אחרי שינוי ה-CSS ב-`ba-slider--mixed` אם ה-drag עובד חלק.

#### חלק ב — "אחרי" בדף הבית — מאושר מקורי

**החלטת משתמש:** בדף הבית הכול מקורי, יש 3 תמונות "אחרי" אותנטיות. **אין צורך לטפל.** הסרתי את החלק הזה מהפרומט.

(הממצא הקודם היה שגוי — הנחתי שקבצים כמו `hadarim-sherutim-card.jpg` הם random card images, אבל הם בפועל צילומי "אחרי" אמיתיים שרק מאורגנים בתיקיית שירותים.)

---

### P0.4 — טפסים עם `action="#"` — ליצור endpoint fallback אמיתי

**הבעיה:** כל הטפסים באתר (30+ מופעים) עם `action="#"`. JS מתפקד נכון (`preventDefault` + `submitLead`), אבל:
1. אם JS נכשל (lazy loading, CSP, network) — הטופס מגיש ל-anchor `#` ומאבד את המובילים.
2. SEO/אבטחה: fingerprint של קוד לא-מסודר.

**החלטת משתמש:** "מה שצריך" = מימוש fallback אמיתי.

**ביצוע — 2 חלקים:**

**א. תוספת handler ב-`worker.js` (לפני ה-routing הקיים):**
```javascript
// --- Form fallback endpoint (when JS fails) ---
if (path === '/api/lead-fallback' && request.method === 'POST') {
  const formData = await request.formData();
  const lead = {
    phone: formData.get('phone'),
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
    form_type: formData.get('form_type') || 'fallback',
    page: request.headers.get('referer') || 'unknown',
    ts: Date.now(),
  };
  // שליחה ל-Supabase או webhook
  await fetch(env.LEAD_WEBHOOK_URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(lead),
  }).catch(() => {});  // נכשל בשקט, עדיף לא לחסום את המשתמש
  // redirect ל-thank-you page
  return Response.redirect(new URL('/toda', request.url).href, 302);
}
```

**ב. החלפת `action="#"` בכל 30+ הטפסים:**
```bash
grep -rln 'action="#"' --include="*.html" . | xargs sed -i 's|action="#"|action="/api/lead-fallback"|g'
```

**ג. ליצור עמוד `/toda/index.html`** אם לא קיים — "תודה, נחזור אליך בהקדם" + CTA לחזרה לדף הבית.

**הערה:** ה-JS הקיים עדיין יעבוד רגיל עם `preventDefault` — ה-fallback רק מופעל אם JS נכשל.

---

## P1 — a11y קריטי (חובה שבוע 1)

### P1.1 — Dropdown ניווט נגיש רק ל-mouse hover

**מקור:** `js/main.js:85-92`. `aria-expanded` נשאר `"false"` גם אחרי click וגם אחרי Enter על ה-trigger.

**תיקון:** להחליף את ה-listener הקיים ב:
```javascript
document.querySelectorAll('.nav__item--has-dropdown').forEach(function(item) {
  var trigger = item.querySelector('[aria-haspopup="true"]');
  var panel = item.querySelector('.nav__dropdown');
  if (!trigger || !panel) return;

  function toggle(open) {
    item.classList.toggle('open', open);
    trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  trigger.addEventListener('click', function(e) {
    e.preventDefault();
    toggle(!item.classList.contains('open'));
  });

  item.addEventListener('mouseenter', function() { toggle(true); });
  item.addEventListener('mouseleave', function() { toggle(false); });

  item.addEventListener('focusout', function(e) {
    if (!item.contains(e.relatedTarget)) toggle(false);
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && item.classList.contains('open')) toggle(false);
  });
});
```

**בדיקה:** לנווט עם Tab ל-trigger → Enter פותח → Tab זז בתוך הפאנל → Escape סוגר.

---

### P1.2 — צבע כוכבים `#C89B3C` על `#F7F3EE` (ניגודיות 2.32 — נכשל AA)

**מקור:** `css/style.css` — `--color-star: #C89B3C`.

**תיקון:**
```css
--color-star: #A97C1E;  /* ניגודיות 4.55 על bg — עובר AA */
```
**אימות:** לבדוק ב-`index.html:?` (סקשן testimonials/reviews) שהכוכבים נראים עדיין נעימים (הצהוב יותר כתום-חום). אם ה-brand דורש זהב — להוסיף contrast outline: `filter: drop-shadow(0 0 1px rgba(0,0,0,0.6));`.

---

### P1.3 — Hero p alpha 0.6 → 0.78

**מקור:** `css/style.css` — `.hero__subtitle` עם `color: rgba(255,255,255,0.6)`.

**תיקון:**
```css
.hero__subtitle { color: rgba(255,255,255,0.82); }
```
**או:** להכהות את ה-overlay באמצע ה-gradient מ-18% ל-40%. שני הפתרונות עובדים — האלפא יותר ישיר.

---

### P1.4 — Range slider thumb 6px (bug שימושיות במובייל)

**מקור:** calculator on `mehiron/index.html`, `input[type=range]` ללא styling.

**תיקון ב-`css/style.css` (להוסיף):**
```css
input[type=range] {
  height: 10px;
  background: var(--bg-soft);
  border-radius: 5px;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
}
input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 28px; height: 28px;
  border-radius: 50%;
  background: var(--accent);
  border: 3px solid #fff;
  box-shadow: 0 1px 4px rgba(0,0,0,0.2);
  cursor: pointer;
}
input[type=range]::-moz-range-thumb {
  width: 28px; height: 28px;
  border-radius: 50%;
  background: var(--accent);
  border: 3px solid #fff;
  box-shadow: 0 1px 4px rgba(0,0,0,0.2);
  cursor: pointer;
  border-width: 3px;
}
input[type=range]::-webkit-slider-runnable-track {
  height: 8px; border-radius: 4px; background: var(--bg-soft);
}
```

---

### P1.5 — Touch targets קטנים מהסף (44×44)

- `.btn--sm` נמדד 43×115 ב-`/hadarim/salon`. סף WCAG 2.1 AA = 44×44.
- sticky CTA נמדד ~37px.

**תיקון:**
```css
.btn--sm { padding: 14px 22px; min-height: 44px; }
.sticky-cta .btn { min-height: 48px; padding: 14px 20px; }
```

---

### P1.6 — פורמט טלפון לא עקבי (tel: 185 `+972` + 184 `0528`)

**הבעיה:** 90 דפים, חצי עם `tel:+972528082988`, חצי עם `tel:0528082988`. מובייל iPhone/Android מעדיפים את הפורמט הבינלאומי. `tel:0528082988` יכול לא לעבוד מחו"ל.

**תיקון:**
```bash
grep -rl 'tel:0528082988' --include="*.html" . | xargs sed -i 's|tel:0528082988|tel:+972528082988|g'
```
להוסיף ל-release checklist: רק פורמט `tel:+972XXXXXXXXX`.

---

## P2 — בעיות עיצוב/עקביות (שבוע 2)

### P2.1 — Footer עמוד הבית חסר ערים + version span

**מקור:** `index.html:1010-1013`. תבנית חסרה. השווה ל-`contact/index.html:402-414`.

**תיקון:** להחליף את הבלוק:
```html
<div class="footer__bottom">
  <span>© 2026 סקיי ויו — תקרות מעוצבות. כל הזכויות שמורות.</span>
</div>
```
ב:
```html
<div class="footer__bottom">
  <span>© 2026 סקיי ויו — תקרות מעוצבות. כל הזכויות שמורות.</span>
  <span>
    <a href="/azorim/ashdod" style="color:rgba(255,255,255,0.4);">אשדוד</a> ·
    <a href="/azorim/tel-aviv" style="color:rgba(255,255,255,0.4);">תל אביב</a> ·
    <a href="/azorim/yerushalayim" style="color:rgba(255,255,255,0.4);">ירושלים</a> ·
    <a href="/azorim/haifa" style="color:rgba(255,255,255,0.4);">חיפה</a> ·
    <a href="/azorim/merkaz" style="color:rgba(255,255,255,0.4);">מרכז</a> ·
    <a href="/azorim/darom" style="color:rgba(255,255,255,0.4);">דרום</a>
  </span>
  <span style="color:rgba(255,255,255,0.12);font-size:0.65rem;">v95</span>
</div>
```
(להעתיק את ה-classes וה-inline styles בדיוק מ-contact — או עדיף: להוציא את העיצוב ל-CSS ולהסיר את ה-inline בכל 90 דפים).

---

### P2.2 — `.mfr-strip` בעמוד הבית "יתום"

**מקור:** `index.html:421-434`. div צף, אין wrapper, אין heading, `opacity:0.7; filter:grayscale(30%)`.

**תיקון:** לעטוף ב-section מסודר:
```html
<section class="section section--tight">
  <div class="container">
    <div class="section__header reveal">
      <h2 style="font-size:var(--h3);">יצרני בדי ה-PVC שאנחנו עובדים איתם</h2>
      <p>שלושה יצרנים מובילים עם אחריות מקיפה</p>
    </div>
    <div class="mfr-strip reveal">
      <!-- 3 פריטים קיימים, עם תיקון הארצות מ-P0.1 -->
    </div>
  </div>
</section>
```
**בנוסף:** להסיר את `filter: grayscale(30%)` (מ-`css/style.css` לחפש `.mfr-strip`). grayscale מנמיך את הצבעים המותגיים של היצרנים שאמורים להוסיף אמינות.

---

### P2.3 — אייקון WhatsApp ירוק בהדר מתנגש עם פלטה

**החלטת משתמש:** לא להשאיר ירוק.

**מקור:** `css/style.css:3919-3926`.

**תיקון — להחליף:**
```css
.header__wa-btn {
  display: flex; align-items: center; justify-content: center;
  width: 36px; height: 36px; border-radius: 50%;
  background: var(--text);  /* היה #25D366 */
  color: #fff;
  transition: background .15s ease, box-shadow .15s ease;
}
.header__wa-btn:hover {
  background: var(--accent);  /* היה #1ebe5d */
  box-shadow: 0 2px 10px rgba(140,106,74,.3);
}
```

**הזיהוי הפונקציונלי נשמר:** האייקון עצמו (logo WhatsApp) מזוהה מיידית גם בלי הירוק. השילוב עם שחור/חום שומר על הסמכות המותגית של האתר.

---

### P2.4 — `/aharayut-yatzranim/` — trust strip + תחתית

**מקור:** `aharayut-yatzranim/index.html:449-466` + סקשנים תחתונים (קריאה ידנית).

**תיקון א — trust strip אחרי הירו:**
להעביר את הרצועה לתוך ההירו כ-footer שלו, לא כסקשן נפרד. או:
```html
<!-- במקום section נפרד עם bg-soft -->
<div class="hero__trust-strip">
  <!-- תוכן -->
</div>
```
+CSS:
```css
.hero__trust-strip {
  background: rgba(0,0,0,0.25);
  border-top: 1px solid rgba(255,255,255,0.1);
  color: #fff;
  padding: var(--sp-4) 0;
  /* במקום מעבר חד — המשכיות ויזואלית עם הירו */
}
```

**תיקון ב — תחתית עם "ניווט מהיר" + 3 כפתורים:**
להחליף בדפוס CTA התקני (primary + secondary) שנמצא ב-`odot/index.html` או `contact/index.html`. לבטל את links-grid הייחודי.

---

### P2.5 — Inline styles מפוזרים (130 ב-mehiron, 74 ב-aharayut-yatzranim)

**תיקון פשוט: להעביר patterns חוזרים ל-CSS classes.** דוגמאות:
- `.salon-hero` — 6 declarations inline ב-HTML, אין CSS כלל. להעביר ל-`css/style.css`.
- `.calc-type-btn`, `.calc-area-slider` — ב-mehiron. להעביר.

**לא חובה לתקן הכל ב-sprint אחד.** להתמקד במה שחוזר על 3+ דפים.

---

### P2.6 — 33 CTAs בעמוד הבית (overload)

**תיקון — הפחתה ל-≤12 CTAs:**
1. **להסיר CTA כפול בסוף כל סקשן** שחוזר ב-sticky CTA ממילא.
2. **לאחד** "קבלו הצעה" + "יצירת קשר" במקום אחד — הם אותו action.
3. להשאיר primary CTA אחד + secondary אופציונלי פר סקשן, לא יותר.

---

### P2.7 — H2 היררכיה שטוחה

**מקור:** מחירון 17 H2, סלון 13, בית 13. הכל גודל זהה.

**תיקון מדגם (mehiron):**
- "מה משפיע על המחיר" = H2
  - "גודל השטח" = H3 (לא H2)
  - "סוג הגימור" = H3
  - "תאורה" = H3
- "כלול במחיר" = H2 (סקשן נפרד)
- "תוספות" = H2

להוציא CSS ל-H3 שונה מ-H2 (כרגע נראה שהם זהים או כמעט-זהים).

---

### P2.8 — Trust bar 153px על desktop (16% מהגובה בקבוע)

**תיקון:** להסתיר חלק מהטקסט ב-desktop רחב:
```css
@media (min-width: 1200px) {
  .trust-bar { flex-wrap: nowrap; }
  .trust-bar__item:nth-child(n+4) { display: none; }
}
```
**או:** להחביא את ה-trust bar על scroll-down (יש class `.hidden` — לאשר שה-JS מפעיל).

---

## P3 — ניקיון טכני + SEO (שבוע 3)

### P3.1 — `@import` fonts → `<link preconnect>`

**תיקון ב-`<head>` של כל 90 דפים (להמיר דרך sed):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700;800&display=swap">
```
**ב-`css/style.css`:** להסיר את ה-`@import url(...)` בראש הקובץ.

---

### P3.2 — JSON-LD reviews כפולים × 1350

**תיקון:** לעבור לעמוד הבית ועמוד `/odot/` בלבד — להשאיר את מערך ה-reviews המלא. בכל שאר העמודים: רק `aggregateRating` + `@id` reference ל-business entity.

---

### P3.3 — Z-index tokens

**להוסיף ל-`:root`:**
```css
--z-base: 1;
--z-dropdown: 100;
--z-sticky: 900;
--z-header: 1000;
--z-trust: 1001;
--z-mobile-menu: 1002;
--z-modal: 1100;
--z-toast: 1200;
```
ולהחליף את 10 ערכי z-index המפורקים ב-`css/style.css`.

---

### P3.4 — Trailing slash עקביות (114 ללא, 2 עם)

**החלטה:** worker.js כבר עושה normalize (strip trailing slash). לעבור לקונבנציה אחידה — **ללא trailing slash** בלינקים פנימיים. לפחות לעדכן sitemap.xml שלא יהיה inconsistent.

---

### P3.5 — 301 redirects מ-`/salon`, `/heder-sheina` וכו'

**מקור:** `worker.js`. להוסיף מיפוי נתיבים ישנים/קצרים → נתיבים חדשים:
```javascript
const EXACT_REDIRECTS = {
  '/salon': '/hadarim/salon',
  '/heder-sheina': '/hadarim/heder-sheina',
  '/mitbah': '/hadarim/mitbah',
  '/ambatia': '/hadarim/ambatia',
  '/mikve': '/hadarim/mikve',
  '/misrad': '/hadarim/misrad',
  '/tikra-metuha-salon': '/hadarim/salon',
  // ...לפי GSC Impressions
};
```

---

### P3.6 — נכסים לא בשימוש (dead assets)

**אישור:**
- `assets/videos/hero-loop.mp4` (1.4MB) — 0 references
- `assets/videos/project-video-1.mp4` (3.4MB) — 0 references

**תיקון:**
```bash
rm assets/videos/hero-loop.mp4 assets/videos/project-video-1.mp4
```
חיסכון: 4.8MB במחסן + bandwidth ב-deploy.

---

### P3.7 — הפרדת section "מחיר תקרה מתוחה" (2877px גובה ב-/mehiron/)

**תיקון:** לפצל לשני סקשנים נפרדים:
- "מה כלול במחיר"
- "תוספות ושדרוגים"

**או** להפוך ל-accordion (5 קטגוריות) כדי שהמשתמש יגלול מעל.

---

### P3.8 — Reveal animations fallback

**להוסיף ל-`css/style.css`:**
```css
@media (prefers-reduced-motion: reduce) {
  .reveal, [class*="reveal"] { opacity: 1 !important; transform: none !important; }
}
/* ולהוסיף ב-JS: אם element כבר ב-viewport ב-load, להוסיף class מיד */
```

---

## P4 — פיצ'רים חדשים/תוכן (שבוע 4+)

### P4.1 — הודעת פרטיות ליד טפסים

**לכל טופס** להוסיף מתחת לכפתור ה-submit:
```html
<p class="form-privacy" style="font-size:var(--caption);color:var(--text-muted);margin-top:var(--sp-3);">
  הפרטים שלך מאובטחים ומשמשים רק ליצירת קשר לגבי ההצעה.
  לא מועברים לצד שלישי. <a href="/privacy">מדיניות פרטיות</a>
</p>
```
**חובה:** ליצור עמוד `/privacy` אם לא קיים.

---

### P4.2 — Testimonials ויזואליים כ-cards

**כרגע:** 15 ביקורות ב-JSON-LD, 0 מוצגים ויזואלית.

**לבצע:**
- לבנות `.testimonials-grid` עם 4-6 cards בדף הבית + `/odot/`.
- כל card: שם, עיר, דירוג 5⭐ (עם `aria-label="5 מתוך 5"` ולא רק צבע), ציטוט 1-2 משפטים.
- תמונת initials או avatar SVG נייטרלי.

---

### P4.3 — לוגואי יצרנים כ-SVG

**ליצור:** `/assets/images/manufacturers/msd.svg`, `teqtum.svg`, `renolit.svg` (בהסכמה/רישיון מהיצרנים או לוגואים ציבוריים).

**תיקון:** להחליף את הטקסט `<span class="mfr-strip__name">MSD</span>` ב-`<img src="/assets/images/manufacturers/msd.svg" alt="MSD" height="40">`.

---

### P4.4 — תמונות pair*.jpg (not webp)

**אישור:** 8 קבצי pair*.jpg (1440×1920 או 1920×1440), 200-500KB כל אחד.

**תיקון:** להמיר ל-webp:
```bash
cd assets/images/beforeafter
for f in pair*.jpg; do
  cwebp -q 85 "$f" -o "${f%.jpg}.webp"
done
# ואז לעדכן את ה-HTML (3 עמודים)
grep -rl 'pair[0-9]*-before.jpg' --include="*.html" . | xargs sed -i 's|pair\([0-9]*\)-before\.jpg|pair\1-before.webp|g'
```
חיסכון: ~50-70% במשקל תמונה.

---

### P4.5 — עמוד 404 ממותג

**מצב נוכחי:** `worker.js goneResponse()` מחזיר HTML גולמי עם system-ui. עמודים שלא קיימים (לא ב-GONE list) — worker.js תלוי בהתנהגות ברירת מחדל של Cloudflare.

**תיקון:** ליצור `/404.html` עם עיצוב האתר (hero קטן, "דף לא נמצא", כפתור חזרה + חיפוש), ולהפנות אליו מ-worker.js כ-fallback.

---

## בדיקת קבלה (אחרי הביצוע)

- [ ] Lighthouse mobile + desktop ≥ 90 בכל הקטגוריות
- [ ] axe-core ללא errors
- [ ] ידנית: Tab מנווט דרך כל ה-nav dropdowns בדף הבית
- [ ] ידנית: קישור tel על iPhone פותח את אפליקציית טלפון
- [ ] ידנית: slide BA עובד במובייל, תמונות לא נראות "מסובבות"
- [ ] ידנית: טופס contact שולח לידים (לבדוק ב-Supabase)
- [ ] ידנית: כל הצבעים passus AA (כוכבים, hero, text-muted)
- [ ] sitemap.xml כולל רק נתיבים שמחזירים 200
- [ ] אין קבצים לא-בשימוש ב-`/assets/videos/`
- [ ] `grep -rn "v94" .` ריק
- [ ] `grep -rn "MSD.*רוסיה\|TEQTUM.*בלגיה" .` ריק

---

## סדר עבודה מומלץ

**יום 1 (P0):** תיקוני עובדתיות + v94→v95 + החלטה על מסלול BA sliders.
**יום 2-3 (P0+P1):** ביצוע BA sliders + a11y critical (dropdown, colors, thumb, touch).
**יום 4-5 (P2):** footer, mfr-strip, WhatsApp, aharayut, inline→CSS.
**שבוע 2 (P3):** ניקיון CSS, fonts, z-index, redirects.
**שבוע 3+ (P4):** privacy, testimonials visible, logos, 404 page.

---

## סיכום מספרי

- 40+ ממצאים, מתוכם **4 P0 (דחופים)**, **6 P1 (a11y חובה)**, **8 P2 (עקביות)**, **8 P3 (ניקיון)**, **5 P4 (פיצ'רים)**.
- **קבצים שייגעו בביצוע P0+P1:** index.html, odot/index.html, madrich/ma-ze-tikra-metuha/index.html, js/main.js, css/style.css, כל 90 דפים (tel:, v94).
- **החלטות שהתקבלו (2026-04-17):**
  1. BA sliders: תמונות כמו שהן, התאמה ב-CSS (`ba-slider--portrait` ו-`ba-slider--mixed`). ✅
  2. דף הבית: הכול מקורי, 3 תמונות "אחרי" אמיתיות. לא לטפל. ✅
  3. WhatsApp icon: לא ירוק — `background: var(--text)`, hover `var(--accent)`. ✅
  4. Form action: endpoint אמיתי `/api/lead-fallback` ב-worker.js + עמוד `/toda/`. ✅
