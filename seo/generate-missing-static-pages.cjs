const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const today = '2026-04-21';

const esc = (value) => String(value)
  .replace(/&/g, '&amp;')
  .replace(/"/g, '&quot;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;');

const schema = (data) => JSON.stringify(data);

const baseNav = `
  <!-- ===== TRUST BAR ===== -->
  <div class="header-trust" role="complementary" aria-label="מידע על החברה">
    <div class="header-trust__inner">
      <span class="header-trust__item"><strong>מ-2017</strong> — מעל 1,000 התקנות</span>
      <span class="header-trust__sep"></span>
      <span class="header-trust__item">שירות בכל הארץ</span>
      <span class="header-trust__sep"></span>
      <span class="header-trust__item">אחריות יצרן <strong>עד 15 שנה</strong></span>

    </div>
  </div>

  <!-- ===== HEADER ===== -->
  <header class="header" role="banner">
    <div class="header__inner">
      <a href="/" class="header__logo" aria-label="SkyView — דף הבית">
        <span class="header__logo-mark">SKYVIEW</span>
        <span class="header__logo-descriptor" aria-hidden="true">
          <span>תקרות מעוצבות</span>
          <span>עיצוב ותאורה משולבת</span>
        </span>
      </a>
      <nav class="header__nav" role="navigation" aria-label="ניווט ראשי">
        <div class="nav-dropdown">
          <button class="nav-dropdown__trigger" aria-haspopup="true" aria-expanded="false">תקרות מתוחות<svg class="nav-dropdown__chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
          <div class="nav-dropdown__panel nav-dropdown__panel--md" role="menu">
            <div class="nav-dropdown__list">
              <a href="/tikrot-metuhot" role="menuitem">תקרות מתוחות — סקירה כללית</a>
              <a href="/sugim" role="menuitem">סוגי תקרות</a>
              <a href="/sugim/mavrika" role="menuitem">מבריקה</a>
              <a href="/sugim/saten" role="menuitem">סאטן</a>
              <a href="/sugim/hadpas" role="menuitem">הדפס / שמיים</a>
              <a href="/sugim/akustit" role="menuitem">אקוסטית</a>
              <a href="/brisol" role="menuitem">בריסול</a>
              <a href="/hanmahat-tikra" role="menuitem">הנמכת תקרה</a>
            </div>
            <div class="nav-dropdown__divider"></div>
            <a href="/hashvaa/tikra-metuha-o-geves" style="display:flex;align-items:center;gap:8px;padding:9px 16px;font-size:0.8125rem;color:var(--text-soft);border-radius:8px;text-decoration:none;" role="menuitem">מתוחה מול גבס — השוואה</a>
          </div>
        </div>
        <div class="nav-dropdown">
          <button class="nav-dropdown__trigger" aria-haspopup="true" aria-expanded="false">לפי חדר<svg class="nav-dropdown__chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
          <div class="nav-dropdown__panel" role="menu">
            <div class="nav-dropdown__list">
              <a href="/hadarim/salon" role="menuitem">סלון</a>
              <a href="/hadarim/heder-sheina" role="menuitem">חדר שינה</a>
              <a href="/hadarim/mitbah" role="menuitem">מטבח</a>
              <a href="/hadarim/ambatia" role="menuitem">אמבטיה</a>
              <a href="/hadarim/misrad" role="menuitem">משרד</a>
              <a href="/hadarim/mikve" role="menuitem">מקווה</a>
              <a href="/hadarim" role="menuitem">כל החדרים →</a>
            </div>
          </div>
        </div>
        <div class="nav-dropdown">
          <button class="nav-dropdown__trigger" aria-haspopup="true" aria-expanded="false">תאורה<svg class="nav-dropdown__chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
          <div class="nav-dropdown__panel" role="menu">
            <div class="nav-dropdown__list">
              <a href="/teura/tikra-mueret" role="menuitem">תקרה מוארת</a>
              <a href="/teura/pasei-led-shkuim" role="menuitem">פסי LED שקועים</a>
              <a href="/teura/masila-magnetit-shkuaa" role="menuitem">מסילה מגנטית שקועה</a>
              <a href="/teura/spotim-shkuim" role="menuitem">ספוטים שקועים</a>
              <a href="/teura/teura-tluya" role="menuitem">תאורה תלויה</a>
              <a href="/teura/hanmahat-tikra-im-teura" role="menuitem">הנמכה עם תאורה</a>
              <a href="/teura" role="menuitem">כל פתרונות התאורה →</a>
            </div>
          </div>
        </div>
        <a href="/asakim">לעסקים</a>
        <a href="/mehiron">מחירון</a>
        <a href="/proyektim">פרויקטים</a>
        <div class="nav-dropdown">
          <button class="nav-dropdown__trigger" aria-haspopup="true" aria-expanded="false">מדריך<svg class="nav-dropdown__chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
          <div class="nav-dropdown__panel" role="menu">
            <div class="nav-dropdown__list">
              <a href="/madrich/ma-ze-tikra-metuha" role="menuitem">מה זה תקרה מתוחה?</a>
              <a href="/madrich/hatkana" role="menuitem">תהליך ההתקנה</a>
              <a href="/madrich/amidut-mayim" role="menuitem">עמידות במים</a>
              <a href="/madrich/orech-hayim" role="menuitem">אורך חיים</a>
              <a href="/madrich/nikui" role="menuitem">ניקוי ותחזוקה</a>
              <a href="/aharayut-yatzranim" role="menuitem">אחריות, חומרים ויצרנים</a>
              <a href="/madrich" role="menuitem">כל המדריכים →</a>
            </div>
          </div>
        </div>
      </nav>
      <div class="header__cta-zone">
        <a href="tel:+972528082988" class="header__phone-link" aria-label="התקשרו אלינו">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          <span class="header__phone-text">052-808-2988</span>
        </a>
        <a href="/contact" class="header__cta-btn">קבלו הצעה</a>
      </div>
      <button class="header__mobile-toggle" aria-label="פתח תפריט" aria-expanded="false" aria-controls="mobile-menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <!-- Mobile overlay -->
  <div class="mobile-menu-overlay" aria-hidden="true"></div>

  <!-- Mobile menu -->
  <nav class="mobile-menu" id="mobile-menu" role="navigation" aria-label="תפריט נייד">
    <div class="mobile-menu__header">
      <a href="/" class="mobile-menu__logo" aria-label="דף הבית">SKYVIEW</a>
      <button class="mobile-menu__close" aria-label="סגור תפריט">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <div class="mobile-menu__body">
      <div class="mobile-nav__section">
        <button class="mobile-nav__trigger" aria-expanded="false">תקרות מתוחות<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></button>
        <div class="mobile-nav__sub">
          <a href="/tikrot-metuhot">סקירה כללית</a>
          <a href="/sugim">סוגי תקרות</a>
          <a href="/sugim/mavrika">מבריקה</a>
          <a href="/sugim/saten">סאטן</a>
          <a href="/sugim/hadpas">הדפס / שמיים</a>
          <a href="/sugim/akustit">אקוסטית</a>
          <a href="/brisol">בריסול</a>
          <a href="/hashvaa/tikra-metuha-o-geves">מתוחה מול גבס</a>
          <a href="/hanmahat-tikra">הנמכת תקרה</a>
        </div>
      </div>
      <div class="mobile-nav__section">
        <button class="mobile-nav__trigger" aria-expanded="false">לפי חדר<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></button>
        <div class="mobile-nav__sub">
          <a href="/hadarim/salon">סלון</a>
          <a href="/hadarim/heder-sheina">חדר שינה</a>
          <a href="/hadarim/mitbah">מטבח</a>
          <a href="/hadarim/ambatia">אמבטיה</a>
          <a href="/hadarim/misrad">משרד</a>
          <a href="/hadarim/mikve">מקווה</a>
          <a href="/hadarim">כל החדרים</a>
        </div>
      </div>
      <div class="mobile-nav__section">
        <button class="mobile-nav__trigger" aria-expanded="false">תאורה<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></button>
        <div class="mobile-nav__sub">
          <a href="/teura/tikra-mueret">תקרה מוארת</a>
          <a href="/teura/pasei-led-shkuim">פסי LED שקועים</a>
          <a href="/teura/masila-magnetit-shkuaa">מסילה מגנטית שקועה</a>
          <a href="/teura/spotim-shkuim">ספוטים שקועים</a>
          <a href="/teura/teura-tluya">תאורה תלויה</a>
          <a href="/teura/hanmahat-tikra-im-teura">הנמכה עם תאורה</a>
          <a href="/teura">כל פתרונות התאורה</a>
        </div>
      </div>
      <div class="mobile-nav__section">
        <button class="mobile-nav__trigger" aria-expanded="false">מדריך<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></button>
        <div class="mobile-nav__sub">
          <a href="/madrich/ma-ze-tikra-metuha">מה זה תקרה מתוחה?</a>
          <a href="/madrich/hatkana">תהליך ההתקנה</a>
          <a href="/madrich/amidut-mayim">עמידות במים</a>
          <a href="/madrich/orech-hayim">אורך חיים</a>
          <a href="/madrich/nikui">ניקוי ותחזוקה</a>
          <a href="/aharayut-yatzranim">אחריות, חומרים ויצרנים</a>
          <a href="/madrich">כל המדריכים</a>
        </div>
      </div>
      <a href="/mehiron" class="mobile-nav__link">מחירון</a>
      <a href="/proyektim" class="mobile-nav__link">פרויקטים</a>
      <a href="/asakim" class="mobile-nav__link">לעסקים</a>
      <a href="/azorim" class="mobile-nav__link">אזורי שירות</a>
      <a href="/odot" class="mobile-nav__link">אודות</a>
    </div>
    <div class="mobile-menu__footer">
      <a href="/contact" class="btn btn--primary">קבלו הצעת מחיר</a>
      <a href="tel:+972528082988" class="mobile-menu__footer-phone">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
        052-808-2988
      </a>
    </div>
  </nav>`;

const footer = `
  <div class="prefooter-trust" aria-label="מידע על החברה">
    <div class="prefooter-trust__inner">
      <span class="prefooter-trust__item">פעילים מ־2017</span>
      <span class="prefooter-trust__sep"></span>
      <span class="prefooter-trust__item">אחריות עד 15 שנה על מערכות נבחרות</span>
      <span class="prefooter-trust__sep"></span>
      <span class="prefooter-trust__item">ייצור, יבוא והתקנה</span>
      <span class="prefooter-trust__sep"></span>
      <span class="prefooter-trust__item">MSD · Teqtum · Renolit</span>
    </div>
  </div>
  <footer class="footer" role="contentinfo">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <div class="footer__brand-name">סקיי ויו - תקרות מעוצבות</div>
          <p>תקרות מתוחות מעוצבות לבית ולעסק. התקנה מהירה ונקייה בכל רחבי הארץ.</p>
        </div>
        <div>
          <div class="footer__col-title">שירותים</div>
          <ul class="footer__links">
            <li><a href="/tikrot-metuhot">תקרות מתוחות</a></li>
            <li><a href="/sugim">סוגי תקרות</a></li>
            <li><a href="/teura">תאורה</a></li>
            <li><a href="/mehiron">מחירון</a></li>
          </ul>
        </div>
        <div>
          <div class="footer__col-title">מידע</div>
          <ul class="footer__links">
            <li><a href="/madrich">מדריך</a></li>
            <li><a href="/proyektim">פרויקטים</a></li>
            <li><a href="/architects-designers">לאדריכלים</a></li>
            <li><a href="/contact">צור קשר</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <span>© 2026 סקיי ויו — תקרות מעוצבות. כל הזכויות שמורות.</span>
      </div>
    </div>
  </footer>
  <div class="sticky-cta">
    <a href="tel:+972528082988" class="btn btn--dark">052-808-2988</a>
    <a href="/contact" class="btn btn--primary">הצעת מחיר</a>
  </div>
  <script src="/js/main.js"></script>`;

const finishPages = [
  {
    url: '/sugim',
    breadcrumb: 'סוגי תקרות',
    title: 'גימורים לתקרה מתוחה - סוגים, חומרים ומחירים | SkyView',
    description: 'כל הגימורים לתקרה מתוחה במקום אחד: מט, סאטן, מבריקה, הדפסה, אקוסטית, גימור גבס, תקרה צפה ופסים מרחפים. מפרט, יתרונות וקישורים למחירון.',
    h1: 'גימורים לתקרה מתוחה',
    lead: 'בחירת הגימור היא ההחלטה שמגדירה את המראה, התאורה והתחושה בחדר. זהו hub טכני שמרכז את כל סוגי התקרות והגימורים ומכוון לעמוד המתאים לכל צורך.',
    image: '/assets/images/hero/glossy-salon-premium.jpg',
    primary: 'גימורים לתקרה מתוחה',
    cards: [
      ['תקרה מבריקה', 'גימור עם השתקפות גבוהה, מתאים לסלון, מטבח וחללים שרוצים להגדיל ויזואלית.', '/sugim/mavrika'],
      ['תקרה מט', 'מראה נקי ושקט שמזכיר גבס איכותי, בלי שפכטל ובלי צבע חוזר.', '/sugim/mat'],
      ['תקרה סאטן', 'ברק עדין ואלגנטי בין מט למבריק, בחירה טובה לחדרי שינה ואמבטיות.', '/sugim/saten'],
      ['תקרה בהדפסה', 'תמונה, שמיים, עננים או גרפיקה מותאמת אישית על היריעה.', '/sugim/hadpas'],
      ['תקרה אקוסטית', 'יריעה מחוררת מיקרו לשיפור ספיגת רעש במשרדים, כיתות וקליניקות.', '/sugim/akustit'],
      ['תקרה צפה', 'מראה מרחף עם אור היקפי או ניתוק עדין מהקירות.', '/sugim/tikra-tzafa'],
      ['פסים מרחפים', 'קווי אור שקועים או מרחפים כחלק מהתקרה, בלי עבודות גבס מורכבות.', '/sugim/pasei-merahvim'],
      ['גימור גבס', 'מראה חלק וקלאסי למי שרוצה תקרה שנראית כמו גבס אבל מותקנת נקי ומהר.', '/sugim/gimur-geves']
    ],
    faq: [
      ['איזה גימור הכי דומה לגבס?', 'תקרה מט וגימור גבס הם הבחירות הקרובות ביותר למראה תקרת גבס חלקה. ההבדל הוא שבתקרה מתוחה ההתקנה נקייה ומהירה יותר.'],
      ['איזה גימור מתאים לאמבטיה?', 'סאטן, מט ומבריק מתאימים לאמבטיה משום שהיריעה עמידה בלחות ואינה סופגת מים.'],
      ['האם המחיר משתנה לפי סוג הגימור?', 'כן. מחיר הבסיס תלוי ביצרן ובסוג היריעה, ותוספות כמו תאורה, הדפסה או אקוסטיקה מתומחרות בנפרד.']
    ],
    related: [['/mehiron', 'מחירון תקרה מתוחה'], ['/tikrot-metuhot', 'סקירה מלאה על תקרות מתוחות'], ['/proyektim', 'פרויקטים ודוגמאות']]
  },
  {
    url: '/sugim/mavrika',
    breadcrumb: 'תקרה מבריקה',
    title: 'תקרה מבריקה - גימור יוקרתי עם השתקפות | SkyView',
    description: 'תקרה מבריקה לתחושת עומק ואור: יתרונות, התאמה לסלון ולמטבח, שילוב תאורה, מחיר למ"ר ודוגמאות. התקנה נקייה בכל הארץ.',
    h1: 'תקרה מבריקה',
    lead: 'תקרה מבריקה יוצרת השתקפות, עומק ותחושת חלל גבוהה יותר. היא מתאימה במיוחד לחללים מודרניים, לסלונים, למטבחים ולפרויקטים שרוצים בהם אפקט עיצובי מורגש.',
    image: '/assets/images/finishes/glossy.webp',
    primary: 'תקרה מבריקה',
    cards: [
      ['איפה זה עובד טוב', 'סלון, מטבח, לובי, מסעדה וחללים שבהם התאורה היא חלק מהעיצוב.', null],
      ['מה צריך לבדוק', 'קירות לא ישרים ותאורה חזקה יוצרים השתקפויות, לכן חשוב לתכנן את הקווים מראש.', null],
      ['מחיר ותוספות', 'המחיר מתחיל לפי מחירון היריעה, ותאורה שקועה או פסים מרחפים מתומחרים כתוספת.', null]
    ],
    faq: [
      ['האם תקרה מבריקה מתאימה לסלון?', 'כן. בסלון היא מייצרת תחושת עומק ומדגישה תאורה ונברשות, במיוחד בחללים מודרניים.'],
      ['האם רואים השתקפויות?', 'כן. זה היתרון העיצובי של הגימור, אבל בחדרים מסוימים כדאי לבחור סאטן או מט למראה רגוע יותר.'],
      ['האם אפשר לשלב LED?', 'כן. אפשר לשלב פסי LED, ספוטים, מסילה מגנטית או תאורה היקפית.']
    ],
    related: [['/hadarim/salon', 'תקרה מתוחה בסלון'], ['/teura', 'פתרונות תאורה'], ['/mehiron', 'מחירון']]
  },
  {
    url: '/sugim/mat',
    breadcrumb: 'תקרה מט',
    title: 'תקרה מתוחה מט - מראה גבס נקי בלי לכלוך | SkyView',
    description: 'תקרה מתוחה מט למראה חלק ושקט כמו גבס, עם התקנה מהירה ונקייה. התאמה לחדרי שינה, משרדים, סלון וחללים נמוכים.',
    h1: 'תקרה מתוחה מט',
    lead: 'גימור מט הוא הבחירה למי שרוצה תקרה רגועה, חלקה ולא מבריקה. הוא משתלב כמעט בכל סגנון עיצוב ומתאים במיוחד לחללים שבהם רוצים מראה נקי ולא דרמטי.',
    image: '/assets/images/finishes/matte.webp',
    primary: 'תקרה מתוחה מט',
    cards: [
      ['מראה שקט', 'פחות השתקפויות, פחות דרמה, יותר תחושת תקרה קלאסית ונקייה.', null],
      ['מתאים לחדרים פרטיים', 'בחדרי שינה וחדרי ילדים הוא נותן רקע רגוע לתאורה ולעיצוב.', null],
      ['חלופה לגבס', 'מראה קרוב לגבס, אבל ללא שפכטל, שיוף וצביעה חוזרת אחרי ההתקנה.', null]
    ],
    faq: [
      ['האם תקרה מט נראית כמו גבס?', 'ברוב החדרים כן. זו הבחירה הקרובה ביותר למראה גבס חלק וקלאסי.'],
      ['האם היא מתאימה לחדר שינה?', 'כן. גימור מט מתאים מאוד לחדרי שינה בגלל המראה הרגוע והלא מחזיר אור.'],
      ['האם אפשר לנקות אותה?', 'כן. מנקים בעדינות עם מטלית לחה לפי הוראות התחזוקה.']
    ],
    related: [['/sugim/gimur-geves', 'גימור גבס'], ['/hadarim/heder-sheina', 'תקרה לחדר שינה'], ['/madrich/nikui', 'ניקוי ותחזוקה']]
  },
  {
    url: '/sugim/saten',
    breadcrumb: 'תקרה סאטן',
    title: 'תקרה סאטן - ברק עדין לתקרה מתוחה | SkyView',
    description: 'תקרה סאטן עם ברק עדין ומראה אלגנטי. מתאימה לסלון, חדר שינה ואמבטיה, כולל שילוב תאורה ומחיר לפי מ"ר.',
    h1: 'תקרה סאטן',
    lead: 'סאטן נמצא בין מט למבריק: הוא מחזיר מעט אור, שומר על מראה אלגנטי ולא משתלט על החדר. זו בחירה טובה כשמחפשים תקרה נקייה אבל לא שטוחה לגמרי.',
    image: '/assets/images/finishes/satin.webp',
    primary: 'תקרה סאטן',
    cards: [
      ['איזון טוב', 'ברק עדין בלי השתקפות חזקה מדי.', null],
      ['מתאים לחללים רטובים', 'בחירה נפוצה באמבטיות ובמקוואות בזכות המראה הנקי והעמידות בלחות.', null],
      ['עובד עם תאורה רכה', 'נראה טוב עם תאורה היקפית, ספוטים או פסי LED עדינים.', null]
    ],
    faq: [
      ['מה ההבדל בין סאטן למבריק?', 'מבריק מחזיר השתקפות חזקה, סאטן מחזיר אור בצורה רכה ועדינה יותר.'],
      ['האם סאטן מתאים לאמבטיה?', 'כן. יריעת PVC סאטן מתאימה לחללים רטובים ועמידה בלחות.'],
      ['האם סאטן מתאים לחדר שינה?', 'כן. הוא נותן תחושה אלגנטית בלי ברק חד מדי.']
    ],
    related: [['/hadarim/ambatia', 'תקרה לאמבטיה'], ['/hadarim/heder-sheina', 'תקרה לחדר שינה'], ['/mehiron', 'מחירון']]
  },
  {
    url: '/sugim/hadpas',
    breadcrumb: 'תקרה בהדפסה',
    title: 'תקרה מתוחה בהדפסה - תמונה או שמיים בתקרה | SkyView',
    description: 'תקרה מתוחה בהדפסה אישית: שמיים, עננים, טבע, לוגו או תמונה. מפרט, התאמת קובץ, תאורה ומחיר לפי פרויקט.',
    h1: 'תקרה מתוחה בהדפסה',
    lead: 'הדפסה על תקרה מתוחה מאפשרת להפוך את התקרה לאלמנט מרכזי: שמיים, עננים, טבע, לוגו עסקי או גרפיקה שנבחרה מראש.',
    image: '/assets/images/projects/printed-sky-dental.jpg',
    primary: 'תקרה מתוחה בהדפסה',
    cards: [
      ['מה אפשר להדפיס', 'שמיים, עננים, עצים, דוגמה גרפית, לוגו או תמונה באיכות מתאימה.', null],
      ['תאורה מאחור', 'אפשר לשלב יריעה מוארת כדי שההדפס יהפוך לפאנל אור גדול.', null],
      ['בדיקת קובץ', 'לפני ייצור בודקים רזולוציה, יחס תמונה וגודל כדי למנוע פיקסול.', null]
    ],
    faq: [
      ['איזה קובץ צריך להדפסה?', 'צריך תמונה ברזולוציה גבוהה ביחס לגודל התקרה. אפשר לשלוח לנו קובץ לבדיקה לפני הצעת מחיר.'],
      ['האם אפשר להאיר את ההדפס?', 'כן. בשילוב יריעה מתאימה ומערכת LED אפשר ליצור תקרה מוארת מודפסת.'],
      ['האם ההדפס מתאים לבית או לעסק?', 'שניהם. בבית נפוצים שמיים וטבע; בעסקים משתמשים גם בלוגו ובשפה מותגית.']
    ],
    related: [['/teura/tikra-mueret-im-hadpas', 'תקרה מוארת עם הדפס'], ['/proyektim', 'דוגמאות פרויקטים'], ['/hadmaya-rishonit-hinam', 'הדמיה ראשונית']]
  },
  {
    url: '/sugim/akustit',
    breadcrumb: 'תקרה אקוסטית',
    title: 'תקרה אקוסטית - הפחתת רעש במשרדים וחללים | SkyView',
    description: 'תקרה מתוחה אקוסטית עם ניקוב מיקרו לספיגת רעש. מתאימה למשרדים, כיתות, קליניקות וסטודיו. מדידה ותכנון לפי חלל.',
    h1: 'תקרה אקוסטית',
    lead: 'תקרה מתוחה אקוסטית משלבת מראה נקי עם שיפור ספיגת רעש. היא מתאימה לחללים שבהם הדיבור, ההד והעומס האקוסטי משפיעים על השימוש היומיומי.',
    image: '/assets/images/beforeafter/skyview-hadarim-office-stretch-ceiling-after-03.webp',
    primary: 'תקרה אקוסטית',
    cards: [
      ['למי זה מתאים', 'משרדים, כיתות, קליניקות, חדרי ישיבות וחללי עבודה פתוחים.', null],
      ['איך זה עובד', 'יריעה מחוררת מיקרו בשילוב שכבת ספיגה משפרת את התגובה האקוסטית של החלל.', null],
      ['תכנון לפני מחיר', 'בחללים אקוסטיים חשוב למדוד שטח, גובה, שימוש ותאורה לפני הצעת מחיר סופית.', null]
    ],
    faq: [
      ['האם תקרה אקוסטית מחליפה יועץ אקוסטי?', 'בפרויקטים קטנים לרוב מספיק תכנון שלנו; בפרויקטים מורכבים מומלץ לשלב יועץ אקוסטי.'],
      ['האם היא מתאימה למשרד?', 'כן. זו אחת ההתאמות הטבעיות ביותר לתקרה אקוסטית מתוחה.'],
      ['האם אפשר לשלב תאורה?', 'כן. משלבים ספוטים, פסים או מסילות בהתאם לתכנון האקוסטי.']
    ],
    related: [['/hadarim/misrad', 'תקרה למשרד'], ['/asakim', 'תקרות לעסקים'], ['/teura', 'תאורה']]
  },
  {
    url: '/sugim/gimur-geves',
    breadcrumb: 'גימור גבס',
    title: 'גימור גבס בתקרה מתוחה - מראה חלק בלי עבודות גבס | SkyView',
    description: 'גימור גבס בתקרה מתוחה למראה קלאסי, נקי וחלק, עם התקנה מהירה וללא שפכטל. מתאים לדירות, משרדים וחדרים נמוכים.',
    h1: 'גימור גבס בתקרה מתוחה',
    lead: 'גימור גבס מיועד למי שאוהב את המראה הקלאסי של תקרת גבס חלקה, אבל רוצה התקנה נקייה, מהירה ועם פחות תחזוקה לאורך זמן.',
    image: '/assets/images/beforeafter/skyview-sugim-matte-stretch-ceiling-bedroom-after-02.webp',
    primary: 'גימור גבס בתקרה מתוחה',
    cards: [
      ['מראה קלאסי', 'חלק, נקי ולא מבריק, מתאים כמעט לכל חדר.', null],
      ['פחות לכלוך', 'בלי שפכטל, שיוף וצביעה באתר אחרי ההתקנה.', null],
      ['גובה מינימלי', 'בדרך כלל נדרש מרווח קטן יותר מהנמכת גבס מסורתית.', null]
    ],
    faq: [
      ['האם זה באמת נראה כמו גבס?', 'כן, בגימור מט נכון מתקבל מראה מאוד קרוב לתקרת גבס חלקה.'],
      ['מה היתרון מול גבס?', 'התקנה מהירה ונקייה יותר, עמידות טובה בלחות ופחות תחזוקה עתידית.'],
      ['האם מתאים לחדר נמוך?', 'כן. במקרים רבים הירידה בגובה קטנה יחסית, סביב כמה סנטימטרים לפי התשתית.']
    ],
    related: [['/hashvaa/tikra-metuha-o-geves', 'השוואה לגבס'], ['/hanmahat-tikra', 'הנמכת תקרה'], ['/sugim/mat', 'תקרה מט']]
  },
  {
    url: '/sugim/pasei-merahvim',
    breadcrumb: 'פסים מרחפים',
    title: 'פסים מרחפים בתקרה מתוחה - קווי אור מודרניים | SkyView',
    description: 'פסים מרחפים בתקרה מתוחה ליצירת קווי אור נקיים, תאורה היקפית ומראה מודרני. תכנון, מחיר ותאימות לחדר.',
    h1: 'פסים מרחפים בתקרה מתוחה',
    lead: 'פסים מרחפים הם פתרון תאורה שמייצר קווי אור דקים ונקיים כחלק מהתקרה. הם נותנים אפקט מודרני בלי לבנות קרניז גבס מורכב.',
    image: '/assets/images/beforeafter/skyview-pasei-led-shkuim-living-room-after-03.webp',
    primary: 'פסים מרחפים בתקרה מתוחה',
    cards: [
      ['קו אור נקי', 'תאורה ליניארית שמתאימה לסלון, מטבח, מסדרון ומשרד.', null],
      ['חלופה לקרניז גבס', 'מקבלים אפקט אור נסתר או מרחף בפחות עבודות רטובות.', null],
      ['תכנון לפי מידה', 'המחיר מושפע מאורך הפסים, סוג הפרופיל, עוצמת התאורה והבקר. ', null]
    ],
    faq: [
      ['מה ההבדל בין פס LED רגיל לפס מרחף?', 'פס מרחף הוא חלק מתכנון התקרה והפרופילים, לא רק הדבקת LED. לכן המראה נקי ומדויק יותר.'],
      ['האם זה מתאים לסלון?', 'כן. בסלון פסים מרחפים יכולים לשמש תאורה ראשית או תאורת אווירה.'],
      ['איך מתמחרים?', 'לפי אורך, סוג פרופיל, סוג LED ומורכבות התקנה.']
    ],
    related: [['/teura/pasei-led-shkuim', 'פסי LED שקועים'], ['/teura/teura-hekifit', 'תאורה היקפית'], ['/hadarim/salon', 'תקרה לסלון']]
  },
  {
    url: '/sugim/tikra-tzafa',
    breadcrumb: 'תקרה צפה',
    title: 'תקרה צפה ומרחפת - עיצוב תאורה מודרני | SkyView',
    description: 'תקרה צפה יוצרת אפקט תאורה עקיפה ומראה תלת-ממדי. מפרט טכני, התקנה על שלד LED, דוגמאות פרויקטים ומחיר למ"ר.',
    h1: 'תקרה צפה ומרחפת',
    lead: 'תקרה צפה יוצרת תחושת ניתוק עדין מהקיר או ממפלס התקרה, עם אפשרות לשלב תאורה עקיפה שמדגישה את הצורה והעומק.',
    image: '/assets/images/beforeafter/skyview-salon-floating-lighting-stretch-ceiling-after-03.webp',
    primary: 'תקרה צפה',
    cards: [
      ['אפקט מרחף', 'מתאים לסלון, לובי, חדר שינה וחללים שבהם רוצים שכבת עומק נוספת.', null],
      ['תאורה עקיפה', 'אפשר לשלב אור היקפי, פסים נסתרים או הפרדה בין אזורי התקרה.', null],
      ['תכנון מדויק', 'נדרש תכנון קווים, גובה, תשתית ותאורה לפני ייצור היריעה.', null]
    ],
    faq: [
      ['מה זו תקרה צפה?', 'תקרה צפה היא תקרה שנראית מנותקת מעט מהקירות או ממפלס התקרה, בדרך כלל עם אור עקיף שמדגיש את הניתוק.'],
      ['האם תקרה צפה דורשת הרבה גובה?', 'יותר מתקרה מתוחה שטוחה, אבל לרוב פחות מעבודות גבס מורכבות. צריך לבדוק לפי חדר.'],
      ['האם אפשר לעשות תקרה צפה עם הדפס?', 'כן, אבל צריך לתכנן מראש את התאורה, החיבורים והגרפיקה.']
    ],
    related: [['/sugim/pasei-merahvim', 'פסים מרחפים'], ['/teura/teura-hekifit', 'תאורה היקפית'], ['/mehiron', 'מחירון']]
  }
];

const servicePages = [
  {
    url: '/architects-designers',
    breadcrumb: 'לאדריכלים ומעצבים',
    title: 'תקרות מתוחות לאדריכלים ומעצבי פנים | SkyView',
    description: 'תקרות מתוחות לאדריכלים ומעצבי פנים: מפרטים, התאמות תאורה, חומרים, אחריות, תיאום מול קבלנים והצעת מחיר לפי שרטוט.',
    h1: 'תקרות מתוחות לאדריכלים ומעצבי פנים',
    lead: 'עמוד עבודה למתכננים שצריכים פתרון תקרה נקי, מדויק ומהיר ליישום: מפרט, חומר, תאורה, אחריות ותיאום ביצוע מול בעלי מקצוע באתר.',
    image: '/assets/images/projects/skyview-asakim-office-glossy-spots.webp',
    primary: 'תקרות מתוחות לאדריכלים',
    cards: [
      ['מפרט לפי פרויקט', 'בחירת יריעה, גימור, פרופיל, גובה הנמכה, תאורה ודרישות ביצוע לפי שרטוט.'],
      ['תיאום עם קבלנים', 'עבודה מול חשמלאי, מיזוג, גבס ונגרות כדי למנוע התנגשויות באתר.'],
      ['הדמיה והצעה', 'אפשר להתחיל מתכנית או תמונה ולקבל טווח מחיר ותכנון ראשוני לפני מדידה.']
    ],
    faq: [
      ['אפשר לקבל הצעה לפי שרטוט?', 'כן. שלחו תכנית, מידות, גובה ותאורה רצויה ונחזיר טווח מחיר ותכנון ראשוני.'],
      ['האם יש מפרט טכני?', 'כן. אפשר לקבל מפרט לפי סוג יריעה, יצרן, פרופיל ותאורה.'],
      ['האם אתם עובדים מול קבלן באתר?', 'כן. בפרויקטים מורכבים מתאמים מול בעלי המקצוע הרלוונטיים לפני התקנה.']
    ],
    related: [['/aharayut-yatzranim', 'אחריות וחומרים'], ['/asakim', 'תקרות לעסקים'], ['/hadmaya-rishonit-hinam', 'הדמיה ראשונית']]
  },
  {
    url: '/tikun',
    breadcrumb: 'תיקון תקרה מתוחה',
    title: 'תיקון תקרה מתוחה - שירות, ניקוז והחלפת יריעה | SkyView',
    description: 'תיקון תקרה מתוחה לאחר נזילה, קרע, תאורה או צורך בניקוז מים. בדיקה, שירות והחלפת יריעה לפי מצב התקרה.',
    h1: 'תיקון תקרה מתוחה',
    lead: 'תקרה מתוחה ניתנת לשירות במקרים רבים: ניקוז מים אחרי נזילה, בדיקת תאורה, פתיחה נקודתית, מתיחה מחדש או החלפת יריעה לפי מצב החומר.',
    image: '/assets/images/beforeafter/skyview-mehiron-basic-bathroom-stretch-ceiling-before-01.webp',
    primary: 'תיקון תקרה מתוחה',
    cards: [
      ['אחרי נזילה', 'בודקים את מצב היריעה, מנקזים מים כשאפשר ומחזירים את התקרה למתיחה תקינה.'],
      ['תאורה ופתחים', 'טיפול בספוטים, מסילות, פסי LED ופתחים טכניים לפי מערכת התקרה.'],
      ['החלפת יריעה', 'אם יש קרע משמעותי או בלאי, מחליפים יריעה בהתאם למידות וליצרן.']
    ],
    faq: [
      ['מה עושים אם יש מים מעל התקרה?', 'לא מנקבים לבד. מתקשרים לשירות כדי לבדוק אם אפשר לנקז בצורה מבוקרת.'],
      ['אפשר לתקן קרע?', 'קרעים קטנים תלויים במיקום ובסוג היריעה. קרעים גדולים לרוב דורשים החלפה.'],
      ['האם השירות רק ללקוחות SkyView?', 'אנחנו בודקים כל מקרה לפי סוג מערכת, גישה וחומר.']
    ],
    related: [['/madrich/tikun-nikuz', 'ניקוז ותיקון'], ['/madrich/nikui', 'תחזוקה וניקוי'], ['/contact', 'פתיחת פנייה']]
  }
];

function renderCards(cards) {
  return cards.map(([title, text, url]) => {
    const inner = `<div class="feature-card__title">${esc(title)}</div><div class="feature-card__text">${esc(text)}</div>${url ? `<div class="feature-card__cta">למידע נוסף</div>` : ''}`;
    return url
      ? `<a class="feature-card feature-card--link" href="${esc(url)}">${inner}</a>`
      : `<div class="feature-card">${inner}</div>`;
  }).join('\n          ');
}

function renderFaq(faq) {
  return faq.map(([q, a]) => `<div class="faq-item">
            <button class="faq-question" aria-expanded="false">${esc(q)}<span class="faq-question__icon">+</span></button>
            <div class="faq-answer"><div class="faq-answer__inner">${esc(a)}</div></div>
          </div>`).join('\n          ');
}

function renderRelated(links) {
  return links.map(([url, label]) => `<li><a href="${esc(url)}">${esc(label)}</a></li>`).join('');
}

function pageHtml(page) {
  const isHub = page.url === '/sugim';
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {'@type': 'ListItem', position: 1, name: 'דף הבית', item: 'https://www.skyview.co.il/'},
      ...(page.url.startsWith('/sugim/') ? [{'@type': 'ListItem', position: 2, name: 'סוגי תקרות', item: 'https://www.skyview.co.il/sugim'}] : []),
      {'@type': 'ListItem', position: page.url.startsWith('/sugim/') ? 3 : 2, name: page.breadcrumb, item: `https://www.skyview.co.il${page.url}`}
    ]
  };
  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.primary,
    serviceType: page.primary,
    provider: {'@id': 'https://www.skyview.co.il/#organization'},
    areaServed: {'@type': 'Country', name: 'Israel'},
    description: page.description,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'ILS',
      lowPrice: '229',
      highPrice: '339',
      unitText: 'למ"ר',
      availability: 'https://schema.org/InStock'
    }
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {'@type': 'Answer', text: a}
    }))
  };

  return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.description)}">
  <link rel="canonical" href="https://www.skyview.co.il${esc(page.url)}">
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800&family=Assistant:wght@300;400;500;600;700&display=swap">
  <link rel="stylesheet" href="/css/style.css">
  <meta property="og:title" content="${esc(page.title)}">
  <meta property="og:description" content="${esc(page.description)}">
  <meta property="og:type" content="website">
  <meta property="og:image" content="https://www.skyview.co.il${esc(page.image)}">
  <meta property="og:url" content="https://www.skyview.co.il${esc(page.url)}">
  <meta property="og:locale" content="he_IL">
  <meta property="og:site_name" content="SkyView — תקרות מעוצבות">
  <script type="application/ld+json">${schema(breadcrumb)}</script>
  <script type="application/ld+json">${schema(service)}</script>
  <script type="application/ld+json">${schema(faqSchema)}</script>
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(page.title)}">
  <meta name="twitter:description" content="${esc(page.description)}">
  <meta name="twitter:image" content="https://www.skyview.co.il${esc(page.image)}">
  <link rel="alternate" hreflang="he" href="https://www.skyview.co.il${esc(page.url)}">
</head>
<body>
${baseNav}
  <main>
    <section class="page-hero page-hero--image" style="--page-hero-image:url('${esc(page.image)}');">
      <div class="container">
        <p style="color:var(--accent);font-weight:700;margin:0 0 var(--sp-3);">${isHub ? 'מרכז גימורים' : 'סוג תקרה מתוחה'}</p>
        <h1>${esc(page.h1)}</h1>
        <p>${esc(page.lead)}</p>
        <div class="hero__actions" style="margin-top:var(--sp-7);">
          <a href="/mehiron" class="btn btn--primary">למחירון</a>
          <a href="/contact" class="btn btn--outline">התייעצות חינם</a>
        </div>
      </div>
    </section>

    <section class="hero-continuation" aria-label="&#1506;&#1497;&#1511;&#1512;&#1497; &#1492;&#1506;&#1502;&#1493;&#1491;">
      <div class="container">
        <div class="hero-continuation__grid">
          <div class="hero-continuation__item"><strong>&#1514;&#1499;&#1504;&#1493;&#1503; &#1500;&#1508;&#1497; &#1495;&#1500;&#1500;</strong><span>&#1502;&#1497;&#1491;&#1493;&#1514;, &#1490;&#1493;&#1489;&#1492;, &#1514;&#1488;&#1493;&#1512;&#1492; &#1493;&#1490;&#1497;&#1502;&#1493;&#1512; &#1500;&#1508;&#1504;&#1497; &#1492;&#1510;&#1506;&#1514; &#1502;&#1495;&#1497;&#1512;.</span></div>
          <div class="hero-continuation__item"><strong>&#1492;&#1514;&#1511;&#1504;&#1492; &#1504;&#1511;&#1497;&#1497;&#1492;</strong><span>&#1508;&#1514;&#1512;&#1493;&#1503; &#1497;&#1489;&#1513; &#1493;&#1502;&#1492;&#1497;&#1512; &#1489;&#1497;&#1495;&#1505; &#1500;&#1506;&#1489;&#1493;&#1491;&#1493;&#1514; &#1490;&#1489;&#1505; &#1493;&#1510;&#1489;&#1506;.</span></div>
          <div class="hero-continuation__item"><strong>&#1488;&#1495;&#1512;&#1497;&#1493;&#1514; &#1497;&#1510;&#1512;&#1503;</strong><span>&#1502;&#1506;&#1512;&#1499;&#1493;&#1514; MSD, TEQTUM &#1493;-RENOLIT &#1506;&#1501; &#1488;&#1495;&#1512;&#1497;&#1493;&#1514; &#1506;&#1491; 15 &#1513;&#1504;&#1492;.</span></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section__header reveal">
          <h2>${isHub ? 'בחרו את הגימור הנכון' : 'מה חשוב לדעת'}</h2>
          <p>${isHub ? 'כל עמוד כאן מכוון לכוונת חיפוש אחרת, כדי למנוע קניבליזציה ולתת תשובה מדויקת.' : 'הנקודות המרכזיות לפני בחירת פתרון, תכנון תאורה וקבלת הצעת מחיר.'}</p>
        </div>
        <div class="grid grid--${isHub ? '4' : '3'} reveal">
          ${renderCards(page.cards)}
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container container--narrow">
        <div class="section__header reveal">
          <h2>מחיר ותכנון</h2>
          <p>מחיר בסיס לתקרה מתוחה מתחיל לפי מחירון היריעות: MSD מ-229 ש"ח למ"ר, TEQTUM מ-279 ש"ח, RENOLIT מ-339 ש"ח. תאורה, הדפסה, אקוסטיקה ופרופילים מיוחדים מתומחרים לפי פרויקט.</p>
        </div>
        <div class="section__cta reveal">
          <a href="/mehiron" class="btn btn--primary">חישוב מחיר</a>
          <a href="/hadmaya-rishonit-hinam" class="btn btn--outline">הדמיה ראשונית</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section__header reveal">
          <h2>שאלות נפוצות</h2>
        </div>
        <div class="faq-list reveal">
          ${renderFaq(page.faq)}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container container--narrow">
        <div class="internal-links-block">
          <h3>דפים רלוונטיים</h3>
          <ul>${renderRelated(page.related)}</ul>
        </div>
      </div>
    </section>

    <section class="cta-section reveal">
      <div class="container">
        <h2>רוצים להתאים את הפתרון לחדר שלכם?</h2>
        <p>שלחו מידות או תמונה ונחזיר כיוון תכנון וטווח מחיר ראשוני.</p>
        <form class="form-inline" style="max-width:480px;margin:var(--sp-8) auto 0;" action="/api/lead-fallback" method="POST" data-form="quick-lead">
          <input type="tel" class="form-input" name="phone" placeholder="טלפון" required dir="ltr" style="text-align:right;">
          <button type="submit" class="btn btn--primary">חזרו אליי</button>
          <p class="form-privacy">בלחיצה על "חזרו אליי" את/ה מאשר/ת יצירת קשר מטעם SkyView לצורך מתן הצעת מחיר.</p>
        </form>
      </div>
    </section>
  </main>
${footer}
</body>
</html>
`;
}

function writePage(page) {
  const targetDir = path.join(root, page.url.replace(/^\//, ''));
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, 'index.html'), pageHtml(page), 'utf8');
}

for (const page of [...finishPages, ...servicePages]) writePage(page);

const redirectsPath = path.join(root, '_redirects');
let redirects = fs.readFileSync(redirectsPath, 'utf8');
if (!redirects.includes('/tikra-metuha-180 /mehiron 301')) {
  redirects = redirects.replace('# ── Legacy Latin slugs ──', '/tikra-metuha-180 /mehiron 301\n\n# ── Legacy Latin slugs ──');
  fs.writeFileSync(redirectsPath, redirects, 'utf8');
}

const workerPath = path.join(root, 'worker.js');
let worker = fs.readFileSync(workerPath, 'utf8');
if (!worker.includes("'/tikra-metuha-180': '/mehiron'")) {
  worker = worker.replace("  '/натяжные-потолки-визраиле-цена': '/mehiron',", "  '/натяжные-потолки-визраиле-цена': '/mehiron',\n  '/tikra-metuha-180': '/mehiron',");
  fs.writeFileSync(workerPath, worker, 'utf8');
}

const sitemapPath = path.join(root, 'sitemap.xml');
let sitemap = fs.readFileSync(sitemapPath, 'utf8');
sitemap = sitemap.replace(/\s*<url>\s*<loc>https:\/\/www\.skyview\.co\.il\/tikra-metuha-180<\/loc>\s*<lastmod>[^<]+<\/lastmod>\s*<changefreq>[^<]+<\/changefreq>\s*<priority>[^<]+<\/priority>\s*<\/url>/, '');
fs.writeFileSync(sitemapPath, sitemap, 'utf8');

const mapPath = path.join(root, 'seo', 'keyword-map.rebuilt.json');
const map = JSON.parse(fs.readFileSync(mapPath, 'utf8'));

function upsertKeyword(keyword, language, canonical_url, intent, priority, notes = '') {
  const found = map.keywords.find((item) => item.keyword === keyword && item.language === language);
  if (found) {
    found.canonical_url = canonical_url;
    found.intent = intent;
    found.priority = priority;
    found.ranking_notes = notes;
    return;
  }
  map.keywords.push({keyword, language, canonical_url, intent, priority, monthly_volume_estimate: null, ranking_notes: notes});
}

function upsertPage(url, primary_keyword, secondary_keywords, page_type, note = undefined) {
  const found = map.pages.find((item) => item.url === url);
  if (found) {
    found.primary_keyword = primary_keyword;
    found.secondary_keywords = secondary_keywords;
    found.implementation_status = 'live_static';
    if (note) found.note = note;
    return;
  }
  const page = {url, primary_keyword, secondary_keywords, language: 'he', page_type, hreflang_pair: null, implementation_status: 'live_static'};
  if (note) page.note = note;
  map.pages.push(page);
}

for (const item of map.keywords) {
  if (item.canonical_url === '/tikrot-metuhot' && item.keyword === 'גימורים לתקרה מתוחה') {
    item.canonical_url = '/sugim';
    item.priority = 'primary';
    item.ranking_notes = 'Finish/type hub restored as a live static page.';
  }
  if (item.canonical_url.startsWith('/sugim/')) {
    item.ranking_notes = item.ranking_notes.replace('Static page missing in current workspace; sitemap lists it.', 'Static page restored in this pass.');
  }
}

upsertKeyword('תקרה מתוחה מט', 'he', '/sugim/mat', 'informational', 'primary', 'Matte finish page restored.');
upsertKeyword('תקרה מט', 'he', '/sugim/mat', 'informational', 'secondary');
upsertKeyword('גימור גבס בתקרה מתוחה', 'he', '/sugim/gimur-geves', 'informational', 'primary', 'Gypum-look finish without making the page compete with gypsum comparison pages.');
upsertKeyword('תקרה מתוחה במראה גבס', 'he', '/sugim/gimur-geves', 'informational', 'secondary');
upsertKeyword('פסים מרחפים בתקרה מתוחה', 'he', '/sugim/pasei-merahvim', 'informational', 'primary', 'Lighting/type hybrid page restored.');
upsertKeyword('תקרה מתוחה עם פסים מרחפים', 'he', '/sugim/pasei-merahvim', 'informational', 'secondary');
upsertKeyword('תיקון תקרה מתוחה', 'he', '/tikun', 'transactional', 'primary', 'Service page restored to satisfy legacy redirect and sitemap route.');
upsertKeyword('שירות תקרה מתוחה', 'he', '/tikun', 'transactional', 'secondary');

const tikrotPage = map.pages.find((item) => item.url === '/tikrot-metuhot');
if (tikrotPage) {
  tikrotPage.secondary_keywords = tikrotPage.secondary_keywords.filter((kw) => kw !== 'גימורים לתקרה מתוחה');
}

upsertPage('/sugim', 'גימורים לתקרה מתוחה', ['סוגי תקרה מתוחה', 'סוגי תקרות מתוחות'], 'product-variant-hub');
upsertPage('/sugim/mavrika', 'תקרה מבריקה', ['תקרה מטאלית'], 'product-variant');
upsertPage('/sugim/mat', 'תקרה מתוחה מט', ['תקרה מט'], 'product-variant');
upsertPage('/sugim/saten', 'תקרה סאטן', ['תקרה מתוחה סאטן'], 'product-variant');
upsertPage('/sugim/hadpas', 'תקרה מתוחה בהדפסה', ['תקרה מודפסת', 'תקרה עם תמונה'], 'product-variant');
upsertPage('/sugim/akustit', 'תקרה אקוסטית', ['תקרה מתוחה אקוסטית'], 'product-variant');
upsertPage('/sugim/gimur-geves', 'גימור גבס בתקרה מתוחה', ['תקרה מתוחה במראה גבס'], 'product-variant');
upsertPage('/sugim/pasei-merahvim', 'פסים מרחפים בתקרה מתוחה', ['תקרה מתוחה עם פסים מרחפים'], 'product-variant');
upsertPage('/sugim/tikra-tzafa', 'תקרה צפה', ['תקרה מרחפת', 'תקרה מתוחה מרחפת'], 'product-variant');
upsertPage('/architects-designers', 'תקרות מתוחות לאדריכלים', ['תקרות מתוחות למעצבי פנים', 'שיתוף פעולה אדריכלים תקרות'], 'b2b-specifier');
upsertPage('/tikun', 'תיקון תקרה מתוחה', ['שירות תקרה מתוחה'], 'service');

map._meta.known_repo_gaps = Array.isArray(map._meta.known_repo_gaps) ? map._meta.known_repo_gaps : [];
map._meta.known_repo_gaps = map._meta.known_repo_gaps.filter((gap) => !gap.includes('/sugim/*') && !gap.includes('/architects-designers'));
if (!map._meta.known_repo_gaps.includes('/tikra-metuha-180 is treated as a legacy price URL and 301s to /mehiron.')) {
  map._meta.known_repo_gaps.push('/tikra-metuha-180 is treated as a legacy price URL and 301s to /mehiron.');
}

for (const flag of map.cannibalization_flags) {
  if (flag.issue === '/sugim/* URLs in sitemap but no static files') {
    flag.resolution_required = false;
    flag.recommended_action = 'Resolved: /sugim hub and listed /sugim/* pages are restored as live static pages.';
  }
  if (flag.issue === '/architects-designers in sitemap but no static file') {
    flag.resolution_required = false;
    flag.recommended_action = 'Resolved: /architects-designers restored as a live static B2B specifier page.';
  }
}

fs.writeFileSync(mapPath, JSON.stringify(map, null, 2) + '\n', 'utf8');

console.log(`Generated ${finishPages.length + servicePages.length} static pages and aligned redirects/sitemap/keyword map.`);
