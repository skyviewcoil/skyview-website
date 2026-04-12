// Russian landing pages — embedded HTML content
// Served directly by worker to bypass Cloudflare Workers Assets lookup issues
const RU_INDEX_HTML = `<!DOCTYPE html>
<html lang="ru" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Натяжные потолки | SkyView — быстрая установка по всему Израилю</title>
  <meta name="description" content="Дизайнерские натяжные потолки — глянец, световые, с принтом. Установка за день, без грязи, с гарантией. Получите предложение от SkyView.">
  <meta property="og:title" content="Натяжные потолки | SkyView">
  <meta property="og:description" content="Дизайнерские натяжные потолки — установка за день, без грязи, с гарантией.">
  <meta property="og:type" content="website">
  <meta property="og:image" content="https://www.skyview.co.il/assets/images/hero/glossy-salon-premium.jpg">
  <meta property="og:url" content="https://www.skyview.co.il/ru/">
  <meta property="og:locale" content="ru_IL">
  <link rel="canonical" href="https://www.skyview.co.il/ru/">
  <link rel="stylesheet" href="../css/style.css">
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');
  html[lang="ru"],html[lang="ru"] body,html[lang="ru"] h1,html[lang="ru"] h2,html[lang="ru"] h3,html[lang="ru"] button,html[lang="ru"] a,html[lang="ru"] .btn,html[lang="ru"] .header__logo-mark,html[lang="ru"] .feature-card__title,html[lang="ru"] .card__title,html[lang="ru"] .price-card__name{font-family:'Manrope',system-ui,sans-serif!important;}
  </style>

  <!-- Schema: Organization -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "SkyView — натяжные потолки",
    "url": "https://www.skyview.co.il",
    "description": "Монтаж дизайнерских натяжных потолков в Израиле — глянец, световые, принт, акустические.",
    "areaServed": {
      "@type": "Country",
      "name": "Israel"
    },
    "serviceType": ["Натяжные потолки", "Световые потолки", "Акустические потолки", "Потолки с принтом"],
    "email": "skyview.co.il@gmail.com",
    "sameAs": ["https://www.instagram.com/skyview.co.il/"]
  }
  </script>

  <!-- Schema: FAQPage -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Сколько стоит натяжной потолок?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MSD — ₪229/м² (гарантия 10 лет), TEQTUM — ₪279/м² (12 лет), RENOLIT — ₪339/м² (15 лет). Включая монтаж. Освещение — отдельно."
        }
      },
      {
        "@type": "Question",
        "name": "Сколько времени занимает установка?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Монтаж натяжного потолка в стандартной комнате занимает 4–8 часов. Вся квартира — обычно один рабочий день, без грязи и без переноса мебели."
        }
      },
      {
        "@type": "Question",
        "name": "Подходит ли натяжной потолок для ванной?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да. Натяжной потолок полностью устойчив к воде и влаге, не покрывается плесенью и не впитывает сырость — что делает его идеальным решением для ванных и влажных помещений."
        }
      },
      {
        "@type": "Question",
        "name": "В чём разница между натяжным потолком и гипсокартоном?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Натяжной потолок монтируется за день без грязи, водостоек и поставляется с долгой гарантией. Гипсокартон требует нескольких дней, пыли и шпаклёвки, менее устойчив к влаге."
        }
      }
    ]
  }
  </script>

  <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebSite","name":"SkyView — натяжные потолки","url":"https://www.skyview.co.il","inLanguage":"ru"}</script>

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:image" content="https://www.skyview.co.il/assets/images/hero/glossy-salon-premium.jpg">

  <link rel="alternate" hreflang="he" href="https://www.skyview.co.il/">
  <link rel="alternate" hreflang="ru" href="https://www.skyview.co.il/ru/">
</head>
<body>

  <!-- ===== TRUST BAR ===== -->
  <div class="header-trust" role="complementary" aria-label="Информация о компании">
    <div class="header-trust__inner">
      <span class="header-trust__item"><strong>С 2017 года</strong> — более 1000 установок</span>
      <span class="header-trust__sep"></span>
      <span class="header-trust__item">Работаем по всему Израилю</span>
      <span class="header-trust__sep"></span>
      <span class="header-trust__item">Гарантия производителя <strong>до 15 лет</strong></span>

    </div>
  </div>

  <!-- ===== HEADER ===== -->
  <header class="header" role="banner">
    <div class="header__inner">

      <!-- Logo -->
      <a href="/" class="header__logo" aria-label="SkyView — главная">
        <span class="header__logo-mark">SKYVIEW</span>
        <span class="header__logo-descriptor" aria-hidden="true">
          <span>Натяжные потолки</span>
          <span>Дизайн и освещение</span>
        </span>
      </a>

      <!-- Desktop nav -->
      <nav class="header__nav" role="navigation" aria-label="Навигация">

        <div class="nav-dropdown">
          <button class="nav-dropdown__trigger" aria-haspopup="true" aria-expanded="false">
            Натяжные потолки
            <svg class="nav-dropdown__chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <div class="nav-dropdown__panel nav-dropdown__panel--md" role="menu">
            <div class="nav-dropdown__list">
              <a href="/tikrot-metuhot" role="menuitem">Натяжные потолки — обзор</a>
              <a href="/sugim" role="menuitem">Виды потолков</a>
              <a href="/sugim/mavrika" role="menuitem">Глянец</a>
              <a href="/sugim/saten" role="menuitem">Сатин</a>
              <a href="/sugim/hadpas" role="menuitem">Принт / небо</a>
              <a href="/sugim/akustit" role="menuitem">Акустика</a>
              <a href="/brisol" role="menuitem">Бризоль</a>
              <a href="/hanmahat-tikra" role="menuitem">Опускание потолка</a>
            </div>
            <div class="nav-dropdown__divider"></div>
            <a href="/hashvaa/tikra-metuha-o-geves" class="nav-dropdown__list" role="menuitem" style="display:flex;align-items:center;gap:8px;padding:9px 16px;font-size:0.8125rem;color:var(--text-soft);border-radius:8px;text-decoration:none;transition:color .15s ease,background .15s ease;" onmouseover="this.style.color='var(--text)';this.style.background='var(--bg-soft)'" onmouseout="this.style.color='var(--text-soft)';this.style.background='transparent'">Натяжной vs гипс — сравнение</a>
          </div>
        </div>

        <div class="nav-dropdown">
          <button class="nav-dropdown__trigger" aria-haspopup="true" aria-expanded="false">
            По комнате
            <svg class="nav-dropdown__chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <div class="nav-dropdown__panel" role="menu">
            <div class="nav-dropdown__list">
              <a href="/hadarim/salon" role="menuitem">Гостиная</a>
              <a href="/hadarim/heder-sheina" role="menuitem">Спальня</a>
              <a href="/hadarim/mitbah" role="menuitem">Кухня</a>
              <a href="/hadarim/ambatia" role="menuitem">Ванная</a>
              <a href="/hadarim/misrad" role="menuitem">Офис</a>
              <a href="/hadarim/mikve" role="menuitem">Миква</a>
              <a href="/hadarim" role="menuitem">Все комнаты →</a>
            </div>
          </div>
        </div>

        <div class="nav-dropdown">
          <button class="nav-dropdown__trigger" aria-haspopup="true" aria-expanded="false">
            Освещение
            <svg class="nav-dropdown__chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <div class="nav-dropdown__panel" role="menu">
            <div class="nav-dropdown__list">
              <a href="/teura/tikra-mueret" role="menuitem">Световой потолок</a>
              <a href="/teura/pasei-led-shkuim" role="menuitem">LED-линии встроенные</a>
              <a href="/teura/masila-magnetit-shkuaa" role="menuitem">Магнитный рельс встроенный</a>
              <a href="/teura/spotim-shkuim" role="menuitem">Встроенные споты</a>
              <a href="/teura/teura-tluya" role="menuitem">Подвесное освещение</a>
              <a href="/teura/hanmahat-tikra-im-teura" role="menuitem">Опускание со светом</a>
              <a href="/teura" role="menuitem">Все решения освещения →</a>
            </div>
          </div>
        </div>

        <a href="/ru/cena/">Цены</a>
        <a href="/proyektim">Проекты</a>

        <div class="nav-dropdown">
          <button class="nav-dropdown__trigger" aria-haspopup="true" aria-expanded="false">
            Руководство
            <svg class="nav-dropdown__chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <div class="nav-dropdown__panel" role="menu">
            <div class="nav-dropdown__list">
              <a href="/madrich/ma-ze-tikra-metuha" role="menuitem">Что такое натяжной потолок?</a>
              <a href="/madrich/hatkana" role="menuitem">Процесс установки</a>
              <a href="/madrich/amidut-mayim" role="menuitem">Водостойкость</a>
              <a href="/madrich/orech-hayim" role="menuitem">Долговечность</a>
              <a href="/madrich/nikui" role="menuitem">Уход и обслуживание</a>
              <a href="/madrich" role="menuitem">Все руководства →</a>
            </div>
          </div>
        </div>

        <a href="/asakim">Для бизнеса</a>

      </nav>

      <!-- CTA zone -->
      <div class="header__cta-zone">
        <a href="tel:0528082988" class="header__phone-link" aria-label="Позвоните нам">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          <span class="header__phone-text">052-808-2988</span>
        </a>
        <a href="/contact" class="header__cta-btn">
          Получить цену
        </a>
      </div>

      <!-- Hamburger -->
      <button class="header__mobile-toggle" aria-label="Открыть меню" aria-expanded="false" aria-controls="mobile-menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

    </div>
  </header>

  <!-- Mobile overlay -->
  <div class="mobile-menu-overlay" aria-hidden="true"></div>

  <!-- Mobile menu -->
  <nav class="mobile-menu" id="mobile-menu" role="navigation" aria-label="Мобильное меню">
    <div class="mobile-menu__header">
      <a href="/" class="mobile-menu__logo" aria-label="Главная">SKYVIEW</a>
      <button class="mobile-menu__close" aria-label="Закрыть меню">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <div class="mobile-menu__body">

      <div class="mobile-nav__section">
        <button class="mobile-nav__trigger" aria-expanded="false">
          Натяжные потолки
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="mobile-nav__sub">
          <a href="/tikrot-metuhot">Обзор</a>
          <a href="/sugim">Виды потолков</a>
          <a href="/sugim/mavrika">Глянец</a>
          <a href="/sugim/saten">Сатин</a>
          <a href="/sugim/hadpas">Принт / небо</a>
          <a href="/sugim/akustit">Акустика</a>
          <a href="/brisol">Бризоль</a>
          <a href="/hashvaa/tikra-metuha-o-geves">Натяжной vs гипс</a>
          <a href="/hanmahat-tikra">Опускание потолка</a>
        </div>
      </div>

      <div class="mobile-nav__section">
        <button class="mobile-nav__trigger" aria-expanded="false">
          По комнате
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="mobile-nav__sub">
          <a href="/hadarim/salon">Гостиная</a>
          <a href="/hadarim/heder-sheina">Спальня</a>
          <a href="/hadarim/mitbah">Кухня</a>
          <a href="/hadarim/ambatia">Ванная</a>
          <a href="/hadarim/misrad">Офис</a>
          <a href="/hadarim/mikve">Миква</a>
          <a href="/hadarim">Все комнаты</a>
        </div>
      </div>

      <div class="mobile-nav__section">
        <button class="mobile-nav__trigger" aria-expanded="false">
          Освещение
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="mobile-nav__sub">
          <a href="/teura/tikra-mueret">Световой потолок</a>
          <a href="/teura/pasei-led-shkuim">LED-линии встроенные</a>
          <a href="/teura/masila-magnetit-shkuaa">Магнитный рельс встроенный</a>
          <a href="/teura/spotim-shkuim">Встроенные споты</a>
          <a href="/teura/teura-tluya">Подвесное освещение</a>
          <a href="/teura/hanmahat-tikra-im-teura">Опускание со светом</a>
          <a href="/teura">Все решения освещения</a>
        </div>
      </div>

      <div class="mobile-nav__section">
        <button class="mobile-nav__trigger" aria-expanded="false">
          Руководство
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="mobile-nav__sub">
          <a href="/madrich/ma-ze-tikra-metuha">Что такое натяжной потолок?</a>
          <a href="/madrich/hatkana">Процесс установки</a>
          <a href="/madrich/amidut-mayim">Водостойкость</a>
          <a href="/madrich/orech-hayim">Долговечность</a>
          <a href="/madrich/nikui">Уход и обслуживание</a>
          <a href="/madrich">Все руководства</a>
        </div>
      </div>

      <a href="/ru/cena/" class="mobile-nav__link">Цены</a>
      <a href="/proyektim" class="mobile-nav__link">Проекты</a>
      <a href="/asakim" class="mobile-nav__link">Для бизнеса</a>
      <a href="/azorim" class="mobile-nav__link">Зоны обслуживания</a>
      <a href="/odot" class="mobile-nav__link">О компании</a>

    </div>
    <div class="mobile-menu__footer">
      <a href="/contact" class="btn btn--primary">Получить предложение</a>
      <a href="tel:0528082988" class="mobile-menu__footer-phone">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
        052-808-2988
      </a>
    </div>
  </nav>

  <main>

    <!-- ===== HERO — video background ===== -->
    <section class="hero">
      <div class="hero__bg">
        <video autoplay muted loop playsinline poster="../assets/images/hero/hero-poster.jpg" style="width:100%;height:100%;object-fit:cover;" aria-hidden="true">
          <source src="../assets/videos/Stretch_Ceiling_Hero_Video_Generation.mp4" type="video/mp4">
        </video>
        <img src="../assets/images/hero/hero-poster.jpg" alt="Глянцевый натяжной потолок в роскошной гостиной — SkyView" class="hero__poster" style="width:100%;height:100%;object-fit:cover;">
      </div>
      <div class="container">
        <div class="hero__content">
          <h1>Натяжные потолки — быстрая и чистая установка в любом помещении</h1>
          <p>Глянцевые, световые, с принтом или под гипс. Установка за день без грязи — от консультации до сдачи.</p>
          <div class="hero__actions">
            <a href="/contact" class="btn btn--primary btn--lg">Получить предложение</a>
            <a href="/ru/cena/" class="btn btn--secondary">Цены и калькулятор</a>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== WHY STRETCH CEILING ===== -->
    <section class="section">
      <div class="container">
        <div class="section__header section__header--start">
          <h2>Почему натяжной потолок</h2>
          <p>Современное решение вместо гипсокартона — быстрее, чище и долговечнее</p>
        </div>
        <div class="grid grid--4">
          <div class="feature-card">
            <div class="feature-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
            <div class="feature-card__title">Установка за день</div>
            <div class="feature-card__text">Стандартная комната — 4–8 часов. Вся квартира — один рабочий день. Мебель переносить не нужно.</div>
          </div>
          <div class="feature-card">
            <div class="feature-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
            <div class="feature-card__title">Без грязи</div>
            <div class="feature-card__text">Без пыли, шпаклёвки и краски. Чистая установка — подходит даже в жилой квартире.</div>
          </div>
          <div class="feature-card">
            <div class="feature-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg></div>
            <div class="feature-card__title">Влагостойкость</div>
            <div class="feature-card__text">Выдерживает воду и влагу. Не покрывается плесенью. Подходит для ванных, кухонь и микв.</div>
          </div>
          <div class="feature-card">
            <div class="feature-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg></div>
            <div class="feature-card__title">Встроенное освещение</div>
            <div class="feature-card__text">LED-линии, споты, периметральная подсветка и световые потолки — часть конструкции.</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== TYPES — editorial asymmetric layout ===== -->
    <section class="section section--alt">
      <div class="container">
        <div class="section__header section__header--start">
          <h2>Виды натяжных потолков</h2>
          <p>Разные покрытия, разный вид — одинаково быстрая и чистая установка</p>
        </div>

        <!-- Asymmetric grid: large left + two stacked right (RTL: large right) -->
        <div class="types-editorial">

          <!-- Large primary image with floating card -->
          <a href="/sugim/mavrika" class="types-editorial__primary">
            <img src="../assets/images/skyview-home-types-glossy-stretch-ceiling-living-room-ai.webp" alt="Глянцевый потолок в современной гостиной" loading="lazy">
            <div class="types-editorial__card">
              <div class="types-editorial__card-title">Глянцевый потолок</div>
              <div class="types-editorial__card-text">Отражающее покрытие создаёт ощущение пространства и глубины. Самый популярный вариант для гостиных.</div>
            </div>
          </a>

          <!-- Two smaller stacked images with text on image -->
          <div class="types-editorial__secondary">
            <a href="/teura/tikra-mueret" class="types-editorial__item">
              <img src="../assets/images/skyview-home-types-luminous-stretch-ceiling-modern-room-ai.webp" alt="Световой потолок в дизайнерском помещении" loading="lazy">
              <div class="types-editorial__overlay">
                <span class="types-editorial__label">Световой потолок</span>
                <span class="types-editorial__desc">Потолок, освещающий всю комнату — заменяет светильники</span>
              </div>
            </a>
            <a href="/sugim/hadpas" class="types-editorial__item">
              <img src="../assets/images/skyview-home-types-printed-stretch-ceiling-sky-design-ai.webp" alt="Потолок с принтом неба в лобби" loading="lazy">
              <div class="types-editorial__overlay">
                <span class="types-editorial__label">Потолок с принтом</span>
                <span class="types-editorial__desc">Небо, природа или логотип — прямая печать на потолке</span>
              </div>
            </a>
          </div>

        </div>

        <div style="text-align:center;margin-top:var(--space-2xl);">
          <a href="/sugim" class="btn btn--outline">Все виды потолков</a>
        </div>
      </div>
    </section>

    <!-- ===== BY ROOM ===== -->
    <section class="section">
      <div class="container">
        <div class="section__header section__header--start">
          <h2>Натяжной потолок по комнатам</h2>
          <p>Каждая комната — свои требования, индивидуальное решение</p>
        </div>
        <div class="grid grid--4">
          <a href="/hadarim/salon" class="card">
            <div class="card__image">
              <img src="../assets/images/skyview-home-rooms-living-room-glossy-stretch-ceiling-ai.webp" alt="Глянцевый потолок в гостиной с видом на море" loading="lazy" style="width:100%;height:100%;object-fit:cover;">
            </div>
            <div class="card__body">
              <div class="card__title">Гостиная</div>
              <div class="card__text">Впечатляющий дизайн, освещение, ощущение пространства</div>
            </div>
          </a>
          <a href="/hadarim/ambatia" class="card">
            <div class="card__image">
              <img src="../assets/images/skyview-home-rooms-bathroom-stretch-ceiling-moisture-resistant-ai.webp" alt="Натяжной потолок в дизайнерской ванной" loading="lazy" style="width:100%;height:100%;object-fit:cover;">
            </div>
            <div class="card__body">
              <div class="card__title">Ванная</div>
              <div class="card__text">Влагостойкость, без плесени, чистый вид</div>
            </div>
          </a>
          <a href="/hadarim/mitbah" class="card">
            <div class="card__image">
              <img src="../assets/images/skyview-home-rooms-kitchen-stretch-ceiling-modern-ai.webp" alt="Глянцевый потолок на кухне с LED-линиями" loading="lazy" style="width:100%;height:100%;object-fit:cover;">
            </div>
            <div class="card__body">
              <div class="card__title">Кухня</div>
              <div class="card__text">Лёгкий уход, стойкость к теплу и влаге, современный вид</div>
            </div>
          </a>
          <a href="/hadarim/heder-sheina" class="card">
            <div class="card__image">
              <img src="../assets/images/skyview-home-rooms-bedroom-soft-light-stretch-ceiling-ai.webp" alt="Натяжной потолок с мягкой подсветкой в спальне" loading="lazy" style="width:100%;height:100%;object-fit:cover;">
            </div>
            <div class="card__body">
              <div class="card__title">Спальня</div>
              <div class="card__text">Мягкая атмосфера, непрямое освещение, тишина и уют</div>
            </div>
          </a>
        </div>
        <div style="text-align:center;margin-top:var(--space-2xl);">
          <a href="/hadarim" class="btn btn--outline">Все комнаты</a>
        </div>
      </div>
    </section>

    <!-- ===== PRICING PREVIEW ===== -->
    <section class="section section--dark">
      <div class="container">
        <div class="section__header">
          <h2>Сколько стоит натяжной потолок</h2>
          <p style="color:rgba(255,255,255,0.65);margin:var(--space-sm) auto 0;">Только потолок — производство, доставка и монтаж. Освещение — отдельно.</p>
        </div>
        <div class="grid grid--3" style="max-width:900px;margin:0 auto;">
          <div class="price-card" style="background:rgba(255,255,255,0.05);border-color:rgba(255,255,255,0.1);">
            <div class="price-card__name" style="color:#fff;">Базовый</div>
            <div class="price-card__price" style="color:var(--color-accent);">₪229 <small>/ м²</small></div>
            <ul class="price-card__features" style="border-color:rgba(255,255,255,0.1);">
              <li style="color:rgba(255,255,255,0.7);border-color:rgba(255,255,255,0.1);">MSD</li>
              <li style="color:rgba(255,255,255,0.7);border-color:rgba(255,255,255,0.1);">Выбор цветов и покрытий</li>
              <li style="color:rgba(255,255,255,0.7);border-color:rgba(255,255,255,0.1);">Включая монтаж</li>
              <li style="color:rgba(255,255,255,0.7);border-color:rgba(255,255,255,0.1);">Полная гарантия</li>
            </ul>
            <a href="/contact" class="btn btn--primary btn--block">Предложение цены</a>
          </div>
          <div class="price-card price-card--featured" style="background:rgba(255,255,255,0.08);border-color:var(--color-accent);">
            <div class="price-card__name" style="color:#fff;">Рекомендуем</div>
            <div class="price-card__price" style="color:var(--color-accent);">₪279 <small>/ м²</small></div>
            <ul class="price-card__features">
              <li style="color:rgba(255,255,255,0.7);border-color:rgba(255,255,255,0.1);">TEQTUM</li>
              <li style="color:rgba(255,255,255,0.7);border-color:rgba(255,255,255,0.1);">Высокое качество и прочность</li>
              <li style="color:rgba(255,255,255,0.7);border-color:rgba(255,255,255,0.1);">Включая монтаж</li>
              <li style="color:rgba(255,255,255,0.7);border-color:rgba(255,255,255,0.1);">Расширенная гарантия</li>
            </ul>
            <a href="/contact" class="btn btn--primary btn--block">Предложение цены</a>
          </div>
          <div class="price-card" style="background:rgba(255,255,255,0.05);border-color:rgba(255,255,255,0.1);">
            <div class="price-card__name" style="color:#fff;">Премиум</div>
            <div class="price-card__price" style="color:var(--color-accent);">₪339 <small>/ м²</small></div>
            <ul class="price-card__features">
              <li style="color:rgba(255,255,255,0.7);border-color:rgba(255,255,255,0.1);">TEQTUM</li>
              <li style="color:rgba(255,255,255,0.7);border-color:rgba(255,255,255,0.1);">Печать по выбору</li>
              <li style="color:rgba(255,255,255,0.7);border-color:rgba(255,255,255,0.1);">Включая монтаж</li>
              <li style="color:rgba(255,255,255,0.7);border-color:rgba(255,255,255,0.1);">Индивидуальный световой проект</li>
            </ul>
            <a href="/contact" class="btn btn--primary btn--block">Предложение цены</a>
          </div>
        </div>
        <div style="text-align:center;margin-top:var(--space-2xl);">
          <a href="/ru/cena/" class="btn btn--secondary">Полный прайс и калькулятор</a>
        </div>
      </div>
    </section>

    <!-- ===== ADVANCED VISUALIZATION CALCULATOR SHOWCASE ===== -->
    <section class="section" style="background:var(--color-ink);color:#fff;">
      <div class="container">
        <div class="section__header">
          <div style="font-size:var(--text-xs);text-transform:uppercase;letter-spacing:0.15em;color:var(--color-accent);margin-bottom:var(--sp-4);">Новый инструмент</div>
          <h2 style="color:#fff;">Визуальный калькулятор — посмотрите на свой потолок до установки</h2>
          <p style="color:rgba(255,255,255,0.6);max-width:600px;margin:0 auto;">Выберите комнату, покрытие и освещение — получите визуализацию и предварительную цену. Без обязательств.</p>
        </div>

        <!-- Screenshots gallery — horizontal row -->
        <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:var(--sp-4);max-width:960px;margin:var(--sp-8) auto 0;">
          <div style="border-radius:var(--r-lg);overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,0.3);">
            <img src="../assets/images/calc-preview-3.png" alt="Калькулятор — выбор комнаты и покрытия" loading="lazy" style="width:100%;height:220px;object-fit:cover;object-position:top;display:block;">
          </div>
          <div style="border-radius:var(--r-lg);overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,0.3);">
            <img src="../assets/images/calc-preview-2.png" alt="Калькулятор — визуализация с глянцевым потолком" loading="lazy" style="width:100%;height:220px;object-fit:cover;object-position:top;display:block;">
          </div>
          <div style="border-radius:var(--r-lg);overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,0.3);">
            <img src="../assets/images/calc-preview-1.png" alt="Калькулятор — сводка цен" loading="lazy" style="width:100%;height:220px;object-fit:cover;object-position:top;display:block;">
          </div>
        </div>

        <!-- Benefits — SVG icons, unified off-white -->
        <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:var(--sp-6);margin:var(--sp-8) auto 0;max-width:700px;text-align:center;">
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:var(--sp-3);"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
            <div style="font-weight:600;color:#fff;font-size:var(--text-sm);">Выбор покрытия</div>
            <div style="font-size:var(--text-xs);color:rgba(255,255,255,0.4);margin-top:2px;">Глянец, мат, сатин, принт, световой</div>
          </div>
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:var(--sp-3);"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
            <div style="font-weight:600;color:#fff;font-size:var(--text-sm);">Визуализация пространства</div>
            <div style="font-size:var(--text-xs);color:rgba(255,255,255,0.4);margin-top:2px;">Видите, как это выглядит у вас</div>
          </div>
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:var(--sp-3);"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            <div style="font-weight:600;color:#fff;font-size:var(--text-sm);">Детальная оценка стоимости</div>
            <div style="font-size:var(--text-xs);color:rgba(255,255,255,0.4);margin-top:2px;">Включая производство, доставку и установку</div>
          </div>
        </div>

        <!-- CTA -->
        <div style="text-align:center;margin-top:var(--sp-8);">
          <a href="https://calculator.skyview.co.il" target="_blank" rel="noopener" class="btn btn--primary btn--lg" style="font-size:var(--text-md);padding:var(--sp-4) var(--sp-8);">Начать визуализацию →</a>
          <div style="font-size:var(--text-xs);color:rgba(255,255,255,0.4);margin-top:var(--sp-3);">Без обязательств · Подходит без точных размеров</div>
        </div>
      </div>
    </section>

    <!-- ===== COMPARISON PREVIEW ===== -->
    <section class="section">
      <div class="container">
        <div class="section__header">
          <h2>Натяжной потолок или гипсокартон</h2>
          <p>Быстрое сравнение — что подходит в вашем случае</p>
        </div>
        <div style="max-width:700px;margin:0 auto;overflow-x:auto;">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Параметр</th>
                <th>Натяжной потолок</th>
                <th>Гипсокартон</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Время монтажа</td>
                <td class="check">Один день</td>
                <td>3–5 дней</td>
              </tr>
              <tr>
                <td>Грязь</td>
                <td class="check">Без грязи</td>
                <td>Пыль, шпаклёвка, краска</td>
              </tr>
              <tr>
                <td>Влагостойкость</td>
                <td class="check">Полностью устойчив</td>
                <td class="cross">Чувствителен к влаге</td>
              </tr>
              <tr>
                <td>Гарантия</td>
                <td class="check">До 15 лет</td>
                <td>1–2 года</td>
              </tr>
              <tr>
                <td>Обслуживание</td>
                <td class="check">Минимальное</td>
                <td>Трещины, перекрашивание</td>
              </tr>
              <tr>
                <td>Цена</td>
                <td>от ₪229/м²</td>
                <td>₪300–600/м²</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style="text-align:center;margin-top:var(--space-xl);">
          <a href="/hashvaa/tikra-metuha-o-geves" class="btn btn--outline">Полное сравнение</a>
        </div>
      </div>
    </section>

    <!-- ===== PROCESS ===== -->
    <section class="section section--alt">
      <div class="container">
        <div class="section__header">
          <h2>Как это работает</h2>
          <p>От первого обращения до готового потолка — простой и быстрый процесс</p>
        </div>
        <div class="process-steps">
          <div class="process-step">
            <div class="process-step__number">1</div>
            <div class="process-step__title">Обращение и консультация</div>
            <div class="process-step__text">Оставьте контакты или позвоните. Специалист перезвонит в течение часа с консультацией и диапазоном цен.</div>
          </div>
          <div class="process-step">
            <div class="process-step__number">2</div>
            <div class="process-step__title">Замер и планирование</div>
            <div class="process-step__text">Приезжаем на замер, показываем образцы покрытий и освещения, даём финальное предложение.</div>
          </div>
          <div class="process-step">
            <div class="process-step__number">3</div>
            <div class="process-step__title">Установка и гарантия</div>
            <div class="process-step__text">В назначенный день — профессиональная бригада монтирует потолок. Обычно за день, без грязи. Полная гарантия.</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <div class="section__header">
          <h2>Смотрите процесс установки</h2>
          <p>Глянцевый натяжной потолок — от начала до конца</p>
        </div>
        <div class="video-embed" style="max-width:800px;margin:0 auto;border-radius:var(--r);overflow:hidden;box-shadow:0 8px 32px rgba(31,26,23,0.08);">
          <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;">
            <iframe
              src="https://www.youtube.com/embed/XlpSQk6OzaM?rel=0&modestbranding=1"
              title="Как устанавливается глянцевый натяжной потолок"
              style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== PROJECTS PREVIEW ===== -->
    <section class="section">
      <div class="container">
        <div class="section__header section__header--start">
          <h2>Последние проекты</h2>
          <p>Потолки, установленные частным и бизнес-клиентам</p>
        </div>
        <div class="gallery-grid">
          <!-- Placeholder gallery items — replace with real project images -->
          <div class="gallery-item">
            <img src="../assets/images/projects/project-2.jpg" alt="Глянцевый с LED — гостиная и кухня" loading="lazy" style="width:100%;height:100%;object-fit:cover;">
            <div class="gallery-item__overlay">Глянцевый с LED — гостиная</div>
          </div>
          <div class="gallery-item">
            <img src="../assets/images/projects/glossy-chandelier-salon.jpg" alt="Глянцевый с хрустальной люстрой" loading="lazy" style="width:100%;height:100%;object-fit:cover;">
            <div class="gallery-item__overlay">Глянцевый — гостиная</div>
          </div>
          <div class="gallery-item">
            <img src="../assets/images/projects/sky-ceiling-lobby.jpg" alt="Световой потолок небо в лобби" loading="lazy" style="width:100%;height:100%;object-fit:cover;">
            <div class="gallery-item__overlay">Небо — лобби</div>
          </div>
          <div class="gallery-item">
            <img src="../assets/images/projects/project-10.jpg" alt="Глянцевый с геометрическими LED" loading="lazy" style="width:100%;height:100%;object-fit:cover;">
            <div class="gallery-item__overlay">Плавающие полосы — гостиная</div>
          </div>
          <div class="gallery-item">
            <img src="../assets/images/projects/project-15.jpg" alt="Потолок с принтом дерева" loading="lazy" style="width:100%;height:100%;object-fit:cover;">
            <div class="gallery-item__overlay">Принт — природа</div>
          </div>
          <div class="gallery-item">
            <img src="../assets/images/projects/project-5.jpg" alt="Световой потолок в офисе" loading="lazy" style="width:100%;height:100%;object-fit:cover;">
            <div class="gallery-item__overlay">Световой — офис</div>
          </div>
        </div>
        <div style="text-align:center;margin-top:var(--space-2xl);">
          <a href="/proyektim" class="btn btn--outline">Все проекты</a>
        </div>
      </div>
    </section>

    
    
    <!-- ===== BEFORE / AFTER — SLIDER COMPARISON ===== -->
    <section class="section section--alt">
      <div class="container">
        <div class="section__header">
          <h2>До и после — реальные установки</h2>
          <p>Перетащите ползунок, чтобы увидеть разницу</p>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--sp-5);max-width:1100px;margin:0 auto;" class="ba-grid">

          <!-- Demo 1: pair5 — salon -->
          <div class="ba-slider" style="position:relative;border-radius:var(--r-lg);overflow:hidden;aspect-ratio:4/3;cursor:col-resize;user-select:none;-webkit-user-select:none;">
            <img src="../assets/images/beforeafter/pair5-after.jpg" alt="После — глянцевый потолок с люстрой" style="width:100%;height:100%;object-fit:cover;display:block;">
            <div class="ba-slider__before" style="position:absolute;top:0;left:0;bottom:0;width:50%;overflow:hidden;">
              <img src="../assets/images/beforeafter/pair5-before.jpg" alt="До — открытый потолок с балками" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;min-width:0;">
            </div>
            <div class="ba-slider__handle" style="position:absolute;top:0;bottom:0;left:50%;width:3px;background:#fff;transform:translateX(-50%);z-index:2;box-shadow:0 0 8px rgba(0,0,0,0.3);">
              <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:36px;height:36px;border-radius:50%;background:#fff;box-shadow:0 2px 8px rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 3L2 8L5 13" stroke="#333" stroke-width="1.5" stroke-linecap="round"/><path d="M11 3L14 8L11 13" stroke="#333" stroke-width="1.5" stroke-linecap="round"/></svg>
              </div>
            </div>
            <div style="position:absolute;top:var(--sp-3);left:var(--sp-3);background:rgba(0,0,0,0.55);color:#fff;padding:2px 10px;border-radius:4px;font-size:0.7rem;font-weight:600;z-index:3;">До</div>
            <div style="position:absolute;top:var(--sp-3);right:var(--sp-3);background:var(--color-accent);color:#fff;padding:2px 10px;border-radius:4px;font-size:0.7rem;font-weight:600;z-index:3;">После</div>
          </div>

          <!-- Demo 2: pair6 — bathroom -->
          <div class="ba-slider" style="position:relative;border-radius:var(--r-lg);overflow:hidden;aspect-ratio:4/3;cursor:col-resize;user-select:none;-webkit-user-select:none;">
            <img src="../assets/images/beforeafter/pair6-after.jpg" alt="После — натяжной потолок в ванной" style="width:100%;height:100%;object-fit:cover;display:block;">
            <div class="ba-slider__before" style="position:absolute;top:0;left:0;bottom:0;width:50%;overflow:hidden;">
              <img src="../assets/images/beforeafter/pair6-before.jpg" alt="До — ванная с трубами" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;min-width:0;">
            </div>
            <div class="ba-slider__handle" style="position:absolute;top:0;bottom:0;left:50%;width:3px;background:#fff;transform:translateX(-50%);z-index:2;box-shadow:0 0 8px rgba(0,0,0,0.3);">
              <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:36px;height:36px;border-radius:50%;background:#fff;box-shadow:0 2px 8px rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 3L2 8L5 13" stroke="#333" stroke-width="1.5" stroke-linecap="round"/><path d="M11 3L14 8L11 13" stroke="#333" stroke-width="1.5" stroke-linecap="round"/></svg>
              </div>
            </div>
            <div style="position:absolute;top:var(--sp-3);left:var(--sp-3);background:rgba(0,0,0,0.55);color:#fff;padding:2px 10px;border-radius:4px;font-size:0.7rem;font-weight:600;z-index:3;">До</div>
            <div style="position:absolute;top:var(--sp-3);right:var(--sp-3);background:var(--color-accent);color:#fff;padding:2px 10px;border-radius:4px;font-size:0.7rem;font-weight:600;z-index:3;">После</div>
          </div>

          <!-- Demo 3: pair11 — hall/commercial -->
          <div class="ba-slider" style="position:relative;border-radius:var(--r-lg);overflow:hidden;aspect-ratio:4/3;cursor:col-resize;user-select:none;-webkit-user-select:none;">
            <img src="../assets/images/beforeafter/pair11-after.jpg" alt="После — глянцевый потолок с LED" style="width:100%;height:100%;object-fit:cover;display:block;">
            <div class="ba-slider__before" style="position:absolute;top:0;left:0;bottom:0;width:50%;overflow:hidden;">
              <img src="../assets/images/beforeafter/pair11-before.jpg" alt="До — зал со старым потолком" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;min-width:0;">
            </div>
            <div class="ba-slider__handle" style="position:absolute;top:0;bottom:0;left:50%;width:3px;background:#fff;transform:translateX(-50%);z-index:2;box-shadow:0 0 8px rgba(0,0,0,0.3);">
              <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:36px;height:36px;border-radius:50%;background:#fff;box-shadow:0 2px 8px rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 3L2 8L5 13" stroke="#333" stroke-width="1.5" stroke-linecap="round"/><path d="M11 3L14 8L11 13" stroke="#333" stroke-width="1.5" stroke-linecap="round"/></svg>
              </div>
            </div>
            <div style="position:absolute;top:var(--sp-3);left:var(--sp-3);background:rgba(0,0,0,0.55);color:#fff;padding:2px 10px;border-radius:4px;font-size:0.7rem;font-weight:600;z-index:3;">До</div>
            <div style="position:absolute;top:var(--sp-3);right:var(--sp-3);background:var(--color-accent);color:#fff;padding:2px 10px;border-radius:4px;font-size:0.7rem;font-weight:600;z-index:3;">После</div>
          </div>

        </div>
      </div>
    </section>

    <!-- ===== TESTIMONIALS ===== -->
    <section class="section">
      <div class="container">
        <div class="section__header">
          <h2>Отзывы клиентов</h2>
        </div>
        <div class="grid grid--2" style="max-width:800px;margin:0 auto;">
          
          <div style="padding:var(--space-xl);background:var(--color-bg-alt);border-radius:var(--radius-lg);">
            <p style="color:var(--color-text);font-size:var(--font-size-md);line-height:1.7;margin-bottom:var(--space-md);">"Процесс установки был быстрым и профессиональным, результат просто поразительный."</p>
            <div style="display:flex;align-items:center;gap:var(--space-sm);">
              <div>
                <div style="font-weight:600;color:var(--color-primary);">Нитцан Коэн</div>
                <div style="font-size:var(--font-size-xs);color:var(--color-text-light);">Ашдод · 14/07/2025</div>
              </div>
            </div>
          </div>
          <div style="padding:var(--space-xl);background:var(--color-bg-alt);border-radius:var(--radius-lg);">
            <p style="color:var(--color-text);font-size:var(--font-size-md);line-height:1.7;margin-bottom:var(--space-md);">"Опыт сотрудничества с SkyView отличный. Натяжной потолок придал современный и элегантный вид."</p>
            <div style="display:flex;align-items:center;gap:var(--space-sm);">
              <div>
                <div style="font-weight:600;color:var(--color-primary);">Ури Леви</div>
                <div style="font-size:var(--font-size-xs);color:var(--color-text-light);">Бат-Ям · 02/06/2025</div>
              </div>
            </div>
          </div>
        </div>
        <p style="text-align:center;margin-top:var(--space-lg);font-size:var(--font-size-sm);color:var(--color-text-light);">Отзывы реальных клиентов, опубликованные на сайте skyview.co.il</p>
      </div>
    </section>

    <!-- ===== FAQ ===== -->
    <section class="section section--alt">
      <div class="container">
        <div class="section__header">
          <h2>Часто задаваемые вопросы</h2>
        </div>
        <div class="faq-list" style="margin:0 auto;">
          <div class="faq-item">
            <button class="faq-question" aria-expanded="false">
              Сколько стоит натяжной потолок?
              <span class="faq-question__icon">+</span>
            </button>
            <div class="faq-answer">
              <div class="faq-answer__inner">
                Базовая цена — MSD — ₪229/м², TEQTUM — ₪279/м², RENOLIT — ₪339/м². Включая производство, доставку и монтаж. Итоговая цена зависит от площади, покрытия, освещения и сложности.

              </div>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-question" aria-expanded="false">
              Сколько времени занимает установка?
              <span class="faq-question__icon">+</span>
            </button>
            <div class="faq-answer">
              <div class="faq-answer__inner">
                Стандартная комната — 4–8 часов. Вся квартира — обычно один рабочий день. Без грязи, без вскрытия стен, без переноса мебели. <a href="/madrich/hatkana">Читать о процессе установки</a>.
              </div>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-question" aria-expanded="false">
              Подходит ли натяжной для ванной?
              <span class="faq-question__icon">+</span>
            </button>
            <div class="faq-answer">
              <div class="faq-answer__inner">
                Безусловно. Полностью устойчив к воде и влаге, не покрывается плесенью. Поэтому предпочтительнее гипсокартона в ванных и микве. <a href="/hadarim/ambatia">Подробнее о потолках для ванной</a>.
              </div>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-question" aria-expanded="false">
              В чём разница с гипсокартоном?
              <span class="faq-question__icon">+</span>
            </button>
            <div class="faq-answer">
              <div class="faq-answer__inner">
                Натяжной потолок монтируется за день без грязи, водостоек и поставляется с долгой гарантией. Гипсокартон требует нескольких дней, пыли и шпаклёвки, менее устойчив к влаге. По цене — натяжной потолок обычно выгоднее. <a href="/hashvaa/tikra-metuha-o-geves">Полное сравнение</a>.
              </div>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-question" aria-expanded="false">
              В каких регионах вы работаете?
              <span class="faq-question__icon">+</span>
            </button>
            <div class="faq-answer">
              <div class="faq-answer__inner">
                Работаем по всему Израилю — центр, Тель-Авив, Иерусалим, Хайфа и север, Ашдод, Ашкелон, Беэр-Шева и юг. <a href="/azorim">Зоны обслуживания</a>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="cta-section">
      <div class="container">
        <h2>Хотите узнать, сколько будет стоить потолок у вас?</h2>
        <p>Оставьте телефон — перезвоним в течение часа с предварительным диапазоном цен</p>
        <form class="form-inline" style="max-width:500px;margin:0 auto;" action="#" method="POST">
          <input type="tel" class="form-input" name="phone" placeholder="Номер телефона" required dir="ltr" style="text-align:left;">
          <button type="submit" class="btn btn--primary">Перезвоните мне</button>
        </form>
      </div>
    </section>

  </main>

  <!-- ===== FOOTER ===== -->
        <footer class="footer" role="contentinfo">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <div class="footer__brand-name">SkyView — натяжные потолки</div>
          <p>Дизайнерские натяжные потолки для дома и бизнеса. Быстрая и чистая установка по всему Израилю.</p>
          <div style="margin-top:var(--space-lg);">
            <div class="footer__contact-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;margin-right:4px;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> <a href="tel:+972528082988" style="color:var(--color-accent);">052-808-2988</a></div>
            <div class="footer__contact-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;margin-right:4px;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> skyview.co.il@gmail.com</div>
          </div>
          <div class="footer__social" style="display:flex;gap:var(--sp-5);margin-top:var(--sp-8);align-items:center;">
            <a href="https://wa.me/972528082988?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%94%D7%A6%D7%A2%D7%AA%20%D7%9E%D7%97%D7%99%D7%A8%20%D7%9C%D7%AA%D7%A7%D7%A8%D7%94%20%D7%9E%D7%AA%D7%95%D7%97%D7%94" target="_blank" rel="noopener" aria-label="WhatsApp" class="footer__social-link"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.616l4.52-1.476A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.352 0-4.55-.767-6.32-2.066l-.44-.33-2.684.877.893-2.636-.363-.476A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg></a>
            <a href="https://www.instagram.com/skyview.co.il/" target="_blank" rel="noopener" aria-label="Instagram" class="footer__social-link"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg></a>
            <a href="https://www.facebook.com/skyview.co.il" target="_blank" rel="noopener" aria-label="Facebook" class="footer__social-link"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
            <a href="https://www.youtube.com/@skyview7076/featured" target="_blank" rel="noopener" aria-label="YouTube" class="footer__social-link"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg></a>
          </div>
        </div>

        <div>
          <div class="footer__col-title">Услуги</div>
          <ul class="footer__links">
            <li><a href="/tikrot-metuhot">Натяжные потолки</a></li>
            <li><a href="/sugim">Виды потолков</a></li>
            <li><a href="/teura">Освещение</a></li>
            <li><a href="/ru/cena/">Цены</a></li>
            <li><a href="/brisol">Бризоль</a></li>
            <li><a href="/hashvaa/tikra-metuha-o-geves">Натяжной или гипс</a></li>
          </ul>
        </div>

        <div>
          <div class="footer__col-title">Комнаты</div>
          <ul class="footer__links">
            <li><a href="/hadarim/salon">Гостиная</a></li>
            <li><a href="/hadarim/ambatia">Ванная</a></li>
            <li><a href="/hadarim/mitbah">Кухня</a></li>
            <li><a href="/hadarim/heder-sheina">Спальня</a></li>
            <li><a href="/hadarim/misrad">Офис</a></li>
            <li><a href="/hadarim/mikve">Миква</a></li>
          </ul>
        </div>

        <div>
          <div class="footer__col-title">Информация</div>
          <ul class="footer__links">
            <li><a href="/madrich">Руководство</a></li>
            <li><a href="/proyektim">Проекты</a></li>
            <li><a href="/asakim">Для бизнеса</a></li>
            <li><a href="/architects-designers">Архитекторам</a></li>
            <li><a href="/azorim">Зоны обслуживания</a></li>
            <li><a href="/odot">О компании</a></li>
            <li><a href="/contact">Контакты</a></li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <span>© 2026 SkyView — натяжные потолки. Все права защищены.</span>
        <span>
          <a href="/azorim/ashdod" style="color:rgba(255,255,255,0.4);">Ашдод</a> ·
          <a href="/azorim/tel-aviv" style="color:rgba(255,255,255,0.4);">Тель-Авив</a> ·
          <a href="/azorim/yerushalayim" style="color:rgba(255,255,255,0.4);">Иерусалим</a> ·
          <a href="/azorim/haifa" style="color:rgba(255,255,255,0.4);">Хайфа</a> ·
          <a href="/azorim/merkaz" style="color:rgba(255,255,255,0.4);">Центр</a> ·
          <a href="/azorim/darom" style="color:rgba(255,255,255,0.4);">Юг</a>
        </span>
        <span style="color:rgba(255,255,255,0.12);font-size:0.65rem;">v75</span>
      </div>
    </div>
  </footer>

  <!-- Sticky Mobile CTA -->
  <div class="sticky-cta">
    <a href="tel:+972528082988" aria-label="Позвоните нам" class="btn btn--dark">052-808-2988</a>
    <a href="/contact" class="btn btn--primary">Предложение цены</a>
  </div>

  <script src="../js/main.js"></script>
</body>
</html>
`;

const RU_CENA_HTML = `<!DOCTYPE html>
<html lang="ru" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Сколько стоит натяжной потолок — от ₪229/м² | SkyView</title>
  <meta name="description" content="Сколько стоит натяжной потолок? От ₪229/м² включая монтаж. Что влияет на цену — покрытие, освещение, площадь. Быстрый расчёт + точное предложение.">
  <link rel="canonical" href="https://www.skyview.co.il/ru/cena/">
  <link rel="stylesheet" href="../../css/style.css">
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');
  html[lang="ru"],html[lang="ru"] body,html[lang="ru"] h1,html[lang="ru"] h2,html[lang="ru"] h3,html[lang="ru"] button,html[lang="ru"] a,html[lang="ru"] .btn,html[lang="ru"] .header__logo-mark,html[lang="ru"] .feature-card__title,html[lang="ru"] .card__title,html[lang="ru"] .price-card__name{font-family:'Manrope',system-ui,sans-serif!important;}
  </style>
  <script type="application/ld+json">{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Сколько стоит натяжной потолок за м²?", "acceptedAnswer": {"@type": "Answer", "text": "Цена натяжного потолка за м²: MSD — ₪229 (гарантия 10 лет), TEQTUM — ₪279 (12 лет), RENOLIT — ₪339 (15 лет). Включая производство, доставку и монтаж."}}, {"@type": "Question", "name": "Что включено, а что нет?", "acceptedAnswer": {"@type": "Answer", "text": "Цена за м² включает производство, доставку и монтаж. LED-линии, споты, магнитные рельсы, световые потолки, принты и спецотверстия — отдельно."}}, {"@type": "Question", "name": "Сколько стоят дополнения по освещению?", "acceptedAnswer": {"@type": "Answer", "text": "LED-линии от ₪389/м, споты ₪100/шт, магнитный рельс ₪750/м, световой потолок ₪1,000/м². Точная цена зависит от планирования."}}, {"@type": "Question", "name": "Есть ли скидка на несколько комнат?", "acceptedAnswer": {"@type": "Answer", "text": "Да, для проектов на всю квартиру или несколько комнат предоставляется скидка. Оставьте контакты для индивидуального предложения."}}]}</script>

  <meta property="og:title" content="Сколько стоит натяжной потолок — от ₪229/м² | SkyView">
  <meta property="og:description" content="Прайс натяжных потолков по уровню материала. Освещение рассчитывается отдельно. Быстрый калькулятор.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://www.skyview.co.il/ru/cena/">
  <meta property="og:locale" content="ru_IL">
  <meta property="og:site_name" content="SkyView — натяжные потолки">
  <meta property="og:image" content="https://www.skyview.co.il/assets/images/projects/project-2.jpg">

  <script type="application/ld+json">{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная","item":"https://www.skyview.co.il/"},{"@type":"ListItem","position":2,"name":"Цены","item":"https://www.skyview.co.il/ru/cena/"}]}</script>

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:image" content="https://www.skyview.co.il/assets/images/hero/glossy-salon-premium.jpg">

  <link rel="alternate" hreflang="he" href="https://www.skyview.co.il/ru/cena/">
  <link rel="alternate" hreflang="ru" href="https://www.skyview.co.il/ru/cena/">
</head>
<body>
  <!-- Header identical to homepage - in production would be a shared component -->
  <!-- ===== TRUST BAR ===== -->
  <div class="header-trust" role="complementary" aria-label="Информация о компании">
    <div class="header-trust__inner">
      <span class="header-trust__item"><strong>С 2017 года</strong> — более 1000 установок</span>
      <span class="header-trust__sep"></span>
      <span class="header-trust__item">Работаем по всему Израилю</span>
      <span class="header-trust__sep"></span>
      <span class="header-trust__item">Гарантия производителя <strong>до 15 лет</strong></span>

    </div>
  </div>

  <!-- ===== HEADER ===== -->
  <header class="header" role="banner">
    <div class="header__inner">
      <a href="/" class="header__logo" aria-label="SkyView — главная">
        <span class="header__logo-mark">SKYVIEW</span>
        <span class="header__logo-descriptor" aria-hidden="true">
          <span>Натяжные потолки</span>
          <span>Дизайн и освещение</span>
        </span>
      </a>
      <nav class="header__nav" role="navigation" aria-label="Навигация">
        <div class="nav-dropdown">
          <button class="nav-dropdown__trigger" aria-haspopup="true" aria-expanded="false">Натяжные потолки<svg class="nav-dropdown__chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
          <div class="nav-dropdown__panel nav-dropdown__panel--md" role="menu">
            <div class="nav-dropdown__list">
              <a href="/tikrot-metuhot" role="menuitem">Натяжные потолки — обзор</a>
              <a href="/sugim" role="menuitem">Виды потолков</a>
              <a href="/sugim/mavrika" role="menuitem">Глянец</a>
              <a href="/sugim/saten" role="menuitem">Сатин</a>
              <a href="/sugim/hadpas" role="menuitem">Принт / небо</a>
              <a href="/sugim/akustit" role="menuitem">Акустика</a>
              <a href="/brisol" role="menuitem">Бризоль</a>
              <a href="/hanmahat-tikra" role="menuitem">Опускание потолка</a>
            </div>
            <div class="nav-dropdown__divider"></div>
            <a href="/hashvaa/tikra-metuha-o-geves" style="display:flex;align-items:center;gap:8px;padding:9px 16px;font-size:0.8125rem;color:var(--text-soft);border-radius:8px;text-decoration:none;" role="menuitem">Натяжной vs гипс</a>
          </div>
        </div>
        <div class="nav-dropdown">
          <button class="nav-dropdown__trigger" aria-haspopup="true" aria-expanded="false">По комнате<svg class="nav-dropdown__chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
          <div class="nav-dropdown__panel" role="menu">
            <div class="nav-dropdown__list">
              <a href="/hadarim/salon" role="menuitem">Гостиная</a>
              <a href="/hadarim/heder-sheina" role="menuitem">Спальня</a>
              <a href="/hadarim/mitbah" role="menuitem">Кухня</a>
              <a href="/hadarim/ambatia" role="menuitem">Ванная</a>
              <a href="/hadarim/misrad" role="menuitem">Офис</a>
              <a href="/hadarim/mikve" role="menuitem">Миква</a>
              <a href="/hadarim" role="menuitem">Все комнаты →</a>
            </div>
          </div>
        </div>
        <div class="nav-dropdown">
          <button class="nav-dropdown__trigger" aria-haspopup="true" aria-expanded="false">Освещение<svg class="nav-dropdown__chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
          <div class="nav-dropdown__panel" role="menu">
            <div class="nav-dropdown__list">
              <a href="/teura/tikra-mueret" role="menuitem">Световой потолок</a>
              <a href="/teura/pasei-led-shkuim" role="menuitem">LED-линии встроенные</a>
              <a href="/teura/masila-magnetit-shkuaa" role="menuitem">Магнитный рельс встроенный</a>
              <a href="/teura/spotim-shkuim" role="menuitem">Встроенные споты</a>
              <a href="/teura/teura-tluya" role="menuitem">Подвесное освещение</a>
              <a href="/teura/hanmahat-tikra-im-teura" role="menuitem">Опускание со светом</a>
              <a href="/teura" role="menuitem">Все решения освещения →</a>
            </div>
          </div>
        </div>
        <a href="/ru/cena/">Цены</a>
        <a href="/proyektim">Проекты</a>
        <div class="nav-dropdown">
          <button class="nav-dropdown__trigger" aria-haspopup="true" aria-expanded="false">Руководство<svg class="nav-dropdown__chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
          <div class="nav-dropdown__panel" role="menu">
            <div class="nav-dropdown__list">
              <a href="/madrich/ma-ze-tikra-metuha" role="menuitem">Что такое натяжной потолок?</a>
              <a href="/madrich/hatkana" role="menuitem">Процесс установки</a>
              <a href="/madrich/amidut-mayim" role="menuitem">Водостойкость</a>
              <a href="/madrich/orech-hayim" role="menuitem">Долговечность</a>
              <a href="/madrich/nikui" role="menuitem">Уход и обслуживание</a>
              <a href="/madrich" role="menuitem">Все руководства →</a>
            </div>
          </div>
        </div>
        <a href="/asakim">Для бизнеса</a>
      </nav>
      <div class="header__cta-zone">
        <a href="tel:0528082988" class="header__phone-link" aria-label="Позвоните нам">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          <span class="header__phone-text">052-808-2988</span>
        </a>
        <a href="/contact" class="header__cta-btn">Получить цену</a>
      </div>
      <button class="header__mobile-toggle" aria-label="Открыть меню" aria-expanded="false" aria-controls="mobile-menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <!-- Mobile overlay -->
  <div class="mobile-menu-overlay" aria-hidden="true"></div>

  <!-- Mobile menu -->
  <nav class="mobile-menu" id="mobile-menu" role="navigation" aria-label="Мобильное меню">
    <div class="mobile-menu__header">
      <a href="/" class="mobile-menu__logo" aria-label="Главная">SKYVIEW</a>
      <button class="mobile-menu__close" aria-label="Закрыть меню">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <div class="mobile-menu__body">
      <div class="mobile-nav__section">
        <button class="mobile-nav__trigger" aria-expanded="false">Натяжные потолки<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></button>
        <div class="mobile-nav__sub">
          <a href="/tikrot-metuhot">Обзор</a>
          <a href="/sugim">Виды потолков</a>
          <a href="/sugim/mavrika">Глянец</a>
          <a href="/sugim/saten">Сатин</a>
          <a href="/sugim/hadpas">Принт / небо</a>
          <a href="/sugim/akustit">Акустика</a>
          <a href="/brisol">Бризоль</a>
          <a href="/hashvaa/tikra-metuha-o-geves">Натяжной vs гипс</a>
          <a href="/hanmahat-tikra">Опускание потолка</a>
        </div>
      </div>
      <div class="mobile-nav__section">
        <button class="mobile-nav__trigger" aria-expanded="false">По комнате<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></button>
        <div class="mobile-nav__sub">
          <a href="/hadarim/salon">Гостиная</a>
          <a href="/hadarim/heder-sheina">Спальня</a>
          <a href="/hadarim/mitbah">Кухня</a>
          <a href="/hadarim/ambatia">Ванная</a>
          <a href="/hadarim/misrad">Офис</a>
          <a href="/hadarim/mikve">Миква</a>
          <a href="/hadarim">Все комнаты</a>
        </div>
      </div>
      <div class="mobile-nav__section">
        <button class="mobile-nav__trigger" aria-expanded="false">Освещение<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></button>
        <div class="mobile-nav__sub">
          <a href="/teura/tikra-mueret">Световой потолок</a>
          <a href="/teura/pasei-led-shkuim">LED-линии встроенные</a>
          <a href="/teura/masila-magnetit-shkuaa">Магнитный рельс встроенный</a>
          <a href="/teura/spotim-shkuim">Встроенные споты</a>
          <a href="/teura/teura-tluya">Подвесное освещение</a>
          <a href="/teura/hanmahat-tikra-im-teura">Опускание со светом</a>
          <a href="/teura">Все решения освещения</a>
        </div>
      </div>
      <div class="mobile-nav__section">
        <button class="mobile-nav__trigger" aria-expanded="false">Руководство<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></button>
        <div class="mobile-nav__sub">
          <a href="/madrich/ma-ze-tikra-metuha">Что такое натяжной потолок?</a>
          <a href="/madrich/hatkana">Процесс установки</a>
          <a href="/madrich/amidut-mayim">Водостойкость</a>
          <a href="/madrich/orech-hayim">Долговечность</a>
          <a href="/madrich/nikui">Уход и обслуживание</a>
          <a href="/madrich">Все руководства</a>
        </div>
      </div>
      <a href="/mehiron" class="mobile-nav__link">Цены</a>
      <a href="/proyektim" class="mobile-nav__link">Проекты</a>
      <a href="/asakim" class="mobile-nav__link">Для бизнеса</a>
      <a href="/azorim" class="mobile-nav__link">Зоны обслуживания</a>
      <a href="/odot" class="mobile-nav__link">О компании</a>
    </div>
    <div class="mobile-menu__footer">
      <a href="/contact" class="btn btn--primary">Получить предложение</a>
      <a href="tel:0528082988" class="mobile-menu__footer-phone">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
        052-808-2988
      </a>
    </div>
  </nav>

  <main>
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Навигация по сайту">
    <a href="/">Главная</a><span class="breadcrumb__sep">/</span>
    <span class="breadcrumb__current">Цены</span>
  </nav>
        
        <h1>Сколько стоит натяжной потолок — цена за м² и общая стоимость</h1>
        <p>Цена натяжного потолка начинается от ₪229/м², включая производство, доставку и монтаж. Итоговая стоимость зависит от покрытия, освещения и площади. Используйте калькулятор для быстрой оценки — точное предложение после замера.</p>
</div>
    </section>

    <!-- PACKAGES -->
    <section class="section">
      <div class="container">
        <div class="section__header">
          <h2>Цена натяжного потолка — по уровню покрытия и материала</h2>
          <p>Цена по типу материала и покрытия — производство, доставка и монтаж включены. Освещение — отдельно по проекту.</p>
        </div>

        <div class="grid grid--3" style="max-width:960px;margin:0 auto;">
          <!-- BASIC -->
          <div class="price-card">
            <div class="price-card__name">Базовое покрытие</div>
            <div class="price-card__price">от ₪229 <small>/ м²</small></div>
            <ul class="price-card__features">
              <li>Качественный ПВХ (MSD)</li>
              <li>Покрытия: мат, сатин, глянец</li>
              <li>Производство, доставка и монтаж</li>
              <li>Гарантия</li>
            </ul>
            <p style="font-size:var(--text-xs);color:var(--color-text-muted);text-align:center;margin-top:var(--sp-3);">Только потолок. Освещение — отдельно.</p>
            <a href="/contact" class="btn btn--outline btn--block" style="margin-top:var(--sp-4);">Предложение</a>
          </div>

          <!-- RECOMMENDED -->
          <div class="price-card price-card--featured">
            <div class="price-card__name">TEQTUM</div>
            <div class="price-card__price">от ₪279 <small>/ м²</small></div>
            <ul class="price-card__features">
              <li>Материал TEQTUM</li>
              <li>Гарантия 12 лет</li>
              <li>Рекомендуется для гостиной, спальни, кухни</li>
              <li>Производство, доставка и монтаж</li>
              <li>Расширенная гарантия</li>
            </ul>
            <p style="font-size:var(--text-xs);color:var(--color-text-muted);text-align:center;margin-top:var(--sp-3);">Только потолок. Освещение — отдельно.</p>
            <a href="/contact" class="btn btn--primary btn--block" style="margin-top:var(--sp-4);">Предложение</a>
          </div>

          <!-- PREMIUM -->
          <div class="price-card">
            <div class="price-card__name">Покрытие премиум</div>
            <div class="price-card__price">от ₪339 <small>/ м²</small></div>
            <ul class="price-card__features">
              <li>Материал RENOLIT (немецкий производитель)</li>
              <li>Максимальное качество покрытия</li>
              <li>Подходит для дизайнерских проектов и бизнеса</li>
              <li>Производство, доставка и монтаж</li>
              <li>Расширенная гарантия</li>
            </ul>
            <p style="font-size:var(--text-xs);color:var(--color-text-muted);text-align:center;margin-top:var(--sp-3);">Только потолок. Освещение — отдельно.</p>
            <a href="/contact" class="btn btn--outline btn--block" style="margin-top:var(--sp-4);">Предложение</a>
          </div>
        </div>

        <!-- IMPORTANT NOTICE -->
        <div style="max-width:700px;margin:var(--sp-10) auto 0;padding:var(--sp-6);background:var(--color-surface-warm);border:1px solid var(--color-rule);border-radius:var(--r-lg);">
          <h3 style="margin-bottom:var(--sp-3);">Важно знать — что включено, а что нет</h3>
          <p style="max-width:none;margin-bottom:var(--sp-3);color:var(--color-text-mid);">Указанные цены относятся к самому потолку — производство, доставка и монтаж полотна ПВХ в выбранном покрытии. Это базовая цена потолка.</p>
          <p style="max-width:none;margin-bottom:var(--sp-3);color:var(--color-text-mid);"><strong style="color:var(--color-ink);">Дополнения, рассчитываемые отдельно:</strong> LED-линии, споты, магнитные рельсы, световые потолки, принты, ниши для штор, специальные отверстия и сложные строительные работы.</p>
          <p style="max-width:none;margin-bottom:0;color:var(--color-text-mid);">Во многих проектах стоимость дополнений по освещению может достигать или превышать стоимость самого потолка — в зависимости от длины LED-линий, количества спотов, типа профилей и сложности. Поэтому финальное предложение всегда формируется после замера и точного планирования.</p>
        </div>
      </div>
    </section>

    <!-- ADD-ONS SECTION -->
    <section class="section section--alt">
      <div class="container">
        <div class="section__header">
          <h2>Дополнения по освещению и дизайну — рассчитываются отдельно</h2>
          <p>Элементы, добавляемые к потолку — рассчитываются по проекту</p>
        </div>

        <div class="grid grid--3" style="max-width:960px;margin:0 auto;">
          <a href="/teura/pasei-led-shkuim" class="feature-card feature-card--link">
            <div class="feature-card__title">LED-линии и плавающие полосы</div>
            <div class="feature-card__text">Алюминиевый профиль со встроенной LED-лентой в потолке. Рассчитывается по длине, мощности и типу профиля.</div>
            <span class="feature-card__cta">Подробнее →</span>
          </a>
          <a href="/teura/spotim-shkuim" class="feature-card feature-card--link">
            <div class="feature-card__title">Встроенные споты</div>
            <div class="feature-card__text">Точечные светильники, встроенные в потолок. Рассчитываются по количеству и типу спота.</div>
            <span class="feature-card__cta">Подробнее →</span>
          </a>
          <a href="/teura/masila-magnetit-shkuaa" class="feature-card feature-card--link">
            <div class="feature-card__title">Магнитный рельс</div>
            <div class="feature-card__text">Алюминиевый рельс в потолке с передвижными магнитными светильниками. Рассчитывается по длине.</div>
            <span class="feature-card__cta">Подробнее →</span>
          </a>
          <a href="/teura/tikra-mueret" class="feature-card feature-card--link">
            <div class="feature-card__title">Световой потолок</div>
            <div class="feature-card__text">Полупрозрачное полотно с LED-системой сзади — заменяет светильники. Рассчитывается как полный проект.</div>
            <span class="feature-card__cta">Подробнее →</span>
          </a>
          <a href="/sugim/hadpas" class="feature-card feature-card--link">
            <div class="feature-card__title">Принт на потолке</div>
            <div class="feature-card__text">Небо, природа, логотип или любое изображение — прямая печать на полотне. По размеру и разрешению.</div>
            <span class="feature-card__cta">Подробнее →</span>
          </a>
          <a href="/teura/teura-hekifit" class="feature-card feature-card--link">
            <div class="feature-card__title">Периметральная подсветка</div>
            <div class="feature-card__text">Световая полоса по периметру потолка — эффект парящего потолка. По периметру и мощности.</div>
            <span class="feature-card__cta">Подробнее →</span>
          </a>
        </div>

        <div style="text-align:center;margin-top:var(--sp-8);">
          <p style="color:var(--color-text-muted);margin:0 auto var(--sp-4);max-width:500px;font-size:var(--text-sm);">Итоговая цена проекта включает выбранный пакет потолка + все выбранные дополнения. Дадим точное предложение после замера.</p>
          <a href="/contact" class="btn btn--primary btn--lg">Получить точное предложение</a>
        </div>
      </div>
    </section>

    <!-- CALCULATOR -->
    <section class="section">
      <div class="container">
        <div class="section__header">
          <h2>Быстрый калькулятор стоимости</h2>
          <p>Выберите тип потолка и площадь — получите мгновенную предварительную оценку</p>
        </div>
        <div class="calculator" style="max-width:560px;margin:0 auto;background:var(--color-surface);padding:var(--sp-8);border-radius:var(--r-lg);border:1px solid var(--color-rule);">

          <!-- Step 1: Ceiling type -->
          <div style="margin-bottom:var(--sp-6);">
            <label class="form-label" style="font-weight:600;margin-bottom:var(--sp-4);display:block;">Тип потолка</label>
            <div id="calc-type-btns" style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:var(--sp-3);">
              <button type="button" class="calc-type-btn calc-type-btn--active" data-type="standard" style="padding:var(--sp-4) var(--sp-3);border:2px solid var(--color-accent);border-radius:var(--r);background:rgba(140,106,74,0.06);cursor:pointer;text-align:center;">
                <div style="font-weight:600;font-size:var(--text-sm);color:var(--text);">Стандартный</div>
                <div style="font-size:var(--text-xs);color:var(--color-text-muted);margin-top:2px;">Глянец / мат / сатин</div>
              </button>
              <button type="button" class="calc-type-btn" data-type="illuminated" style="padding:var(--sp-4) var(--sp-3);border:2px solid var(--color-rule);border-radius:var(--r);background:transparent;cursor:pointer;text-align:center;">
                <div style="font-weight:600;font-size:var(--text-sm);color:var(--text);">Световой</div>
                <div style="font-size:var(--text-xs);color:var(--color-text-muted);margin-top:2px;">Светящийся потолок</div>
              </button>
              <button type="button" class="calc-type-btn" data-type="printed" style="padding:var(--sp-4) var(--sp-3);border:2px solid var(--color-rule);border-radius:var(--r);background:transparent;cursor:pointer;text-align:center;">
                <div style="font-weight:600;font-size:var(--text-sm);color:var(--text);">С принтом</div>
                <div style="font-size:var(--text-xs);color:var(--color-text-muted);margin-top:2px;">Небо / природа / лого</div>
              </button>
            </div>
          </div>

          <!-- Step 2: Area slider -->
          <div style="margin-bottom:var(--sp-6);">
            <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:var(--sp-4);">
              <label class="form-label" style="font-weight:600;margin:0;">Площадь (м²)</label>
              <span id="calc-area-display" style="font-family:var(--heading);font-size:var(--text-xl);font-weight:700;color:var(--color-accent);">12</span>
            </div>
            <input type="range" id="calc-area-slider" name="area" min="4" max="120" value="12" step="1" style="width:100%;height:6px;accent-color:var(--color-accent);cursor:pointer;">
            <div style="display:flex;justify-content:space-between;margin-top:var(--sp-2);font-size:var(--text-xs);color:var(--color-text-muted);">
              <span>4</span><span>10</span><span>30</span><span>100+</span>
            </div>
          </div>

          <!-- Result -->
          <div class="calculator__result" style="display:none;padding:var(--sp-6);background:var(--color-ink);border-radius:var(--r-lg);color:#fff;text-align:center;">
            <div style="font-size:var(--text-sm);color:rgba(255,255,255,0.5);margin-bottom:var(--sp-2);">Предварительная оценка</div>
            <div class="calculator__result-range" style="color:var(--color-accent);font-family:var(--heading);font-size:var(--text-3xl);font-weight:700;"></div>
            <div class="calculator__min-note" style="display:none;font-size:var(--text-xs);color:rgba(255,255,255,0.4);margin-top:var(--sp-2);"></div>
            <div id="calc-large-msg" style="display:none;font-size:var(--text-sm);color:rgba(255,255,255,0.7);margin-top:var(--sp-3);line-height:1.6;">Для площадей свыше 100 м² — позвоните для уточнения цены<br><a href="tel:+972528082988" style="color:var(--color-accent);font-weight:600;">052-808-2988</a></div>
            <div style="font-size:var(--text-xs);color:rgba(255,255,255,0.3);margin-top:var(--sp-3);line-height:1.5;">* Включая производство, доставку и монтаж. Итоговая цена после замера.</div>
          </div>

          <div style="margin-top:var(--sp-6);display:flex;flex-direction:column;gap:var(--sp-3);">
            <a href="/contact" class="btn btn--primary btn--lg btn--block">Получить точное предложение</a>
            <a href="https://wa.me/972528082988?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%BF%D1%80%D0%B5%D0%B4%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5" data-track="wa" target="_blank" rel="noopener" class="btn btn--outline btn--block">WhatsApp</a>
          </div>
        </div>
      </div>
    </section>

    <!-- WHAT AFFECTS PRICE -->
    <section class="section section--alt">
      <div class="container">
        <h2>Что влияет на итоговую стоимость</h2>
        <div class="grid grid--3" style="margin-top:var(--sp-8);">
          <div class="feature-card"><div class="feature-card__title">Площадь потолка</div><div class="feature-card__text">Чем больше площадь — тем ниже цена за м². Стандартная комната (12–20 м²) — обычная цена. Несколько комнат — скидка по объёму.</div></div>
          <div class="feature-card"><div class="feature-card__title">Покрытие и материал</div><div class="feature-card__text">MSD — ₪229/м². ₪339 — RENOLIT/м². Покрытие (мат, сатин, глянец) включено в цену.</div></div>
          <div class="feature-card"><div class="feature-card__title">Встроенное освещение</div><div class="feature-card__text">Споты, LED-линии, магнитный рельс, <a href="/sugim/pasei-merahvim">плавающие полосы</a> — отдельно по типу и длине. Стоимость освещения часто сопоставима с потолком.</div></div>
          <div class="feature-card"><div class="feature-card__title">Тип решения</div><div class="feature-card__text">Стандартный — дешевле. <a href="/teura/tikra-mueret">Световой потолок</a> — как полный проект. <a href="/sugim/hadpas">Принт / небо</a> — по размеру и разрешению. <a href="/hanmahat-tikra">Опускание потолка</a> — по высоте и сложности.</div></div>
          <div class="feature-card"><div class="feature-card__title">Техническая сложность</div><div class="feature-card__text">Колонны, особые углы, трубы, круглые формы — увеличивают время и стоимость. Простая прямоугольная комната — самый экономичный вариант.</div></div>
          <div class="feature-card"><div class="feature-card__title">Когда лучше позвонить</div><div class="feature-card__text">Площади свыше 100 м², коммерческие проекты, сложное освещение и нестандартные пространства — лучше короткий звонок.</div></div>
        </div>
      </div>
    </section>


    <!-- DEEP PRICE GUIDE -->
    <section class="section">
      <div class="container container--narrow">
        <div class="content-body" style="padding:0;">
          <h2>Цена натяжного потолка — что реально влияет на предложение</h2>
          <p>Цена натяжного потолка за м² — это отправная точка, но итоговое предложение зависит от нескольких факторов, которые стоит знать заранее.</p>

          <h2>Площадь потолка — основной фактор</h2>
          <p>Площадь потолка определяет базовую стоимость. Комната 12 м² обойдётся дешевле 25 м² — но цена за м² снижается с ростом площади. Причина: часть затрат (выезд, оборудование, подготовка) фиксирована. Проект на всю квартиру (3–5 комнат) выгоднее за м², чем одна комната.</p>
          <p>Минимальная цена: для очень маленьких комнат (менее 6 м²) может применяться минимальная цена — фиксированные затраты делятся на меньшую площадь.</p>

          <h2>Тип покрытия — первый выбор</h2>
          <p>Три уровня покрытия — три уровня цены. <a href="/sugim/mat">Мат</a> — классический вид под гипс. <a href="/sugim/saten">Сатин</a> — мягкий блеск. <a href="/sugim/mavrika">Глянец</a> — полное отражение. Все монтируются одинаково — разница во внешнем виде. Покрытие включено в цену за м².</p>

          <h2>Освещение — дополнение, меняющее цену</h2>
          <p>Сам потолок — базовая стоимость. Встроенное освещение рассчитывается отдельно — обычно значительная часть итоговой суммы. <a href="/teura/spotim-shkuim">Встроенные споты</a> (₪100/шт.) — самый экономичный вариант. <a href="/teura/pasei-led-shkuim">Встроенные LED-линии</a> (от ₪389/м.п.) — современные световые полосы. <a href="/teura/masila-magnetit-shkuaa">Магнитный рельс</a> (₪750/м.п.) — гибкость расположения. <a href="/sugim/pasei-merahvim">Плавающие полосы</a> и периметральная подсветка — по периметру. <a href="/teura/tikra-mueret">Световой потолок</a> (от ₪1,000/м²) — заменяет всё освещение.</p>

          <h2>Техническая сложность</h2>
          <p>Простая прямоугольная комната — самый экономичный вариант. Любая сложность повышает цену: углы, колонны, неровные стены, высота более 3 м, трубы и системы, которые нужно обойти, особые формы (круги, арки). В <a href="/hadarim/ambatia">ванной</a> — отверстия под вентилятор и спринклер. В <a href="/hadarim/salon">гостиной</a> — иногда ниша для штор.</p>

          <h2>Что включено в предложение, а что нет</h2>
          <p><strong>Включено:</strong> изготовление полотна по размерам, доставка, профессиональный монтаж, подходящий профиль, гарантия производителя.</p>
          <p><strong>Не включено:</strong> светильники и драйверы (если не оговорено иное), электромонтажные работы лицензированного электрика, демонтаж существующего потолка при необходимости, ремонт штукатурки или гипса до монтажа.</p>

          <h2>Натяжной потолок vs гипсокартон — сравнение стоимости</h2>
          <p>Стоимость <a href="/hanmahat-tikra/gevs">гипсокартонного потолка</a> обычно ₪300–600/м², включая конструкцию, шпаклёвку, шлифовку и краску. Натяжной — от ₪229/м². Гипс требует перекраски каждые 5–10 лет, может трескаться и чувствителен к влаге. Натяжной потолок обслуживания не требует. <a href="/hashvaa/tikra-metuha-o-geves">Полное сравнение</a>.</p>

          <h2>Цена по комнатам — диапазоны оценок</h2>
          <p>Гостиная (15–25 м²): от ₪3 400 базовое, от ₪4 200 продвинутое. Спальня (10–15 м²): от ₪2 290 базовое. Ванная (4–8 м²): может применяться минимальная цена. Кухня (8–15 м²): от ₪1 830 базовое. Цены — только потолок, без освещения.</p>

          <h2>Как получить точное предложение</h2>
          <p>Точное предложение даётся после замера на месте. В ходе первичной консультации (бесплатно) можно получить диапазон цен по площади, покрытию и типу освещения. <a href="/contact">Оставьте контакты</a> или <a href="tel:0528082988">позвоните 052-808-2988</a>.</p>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section">
      <div class="container">
        <h2 style="text-align:center;">Часто задаваемые вопросы о цене натяжного потолка</h2>
        <div class="faq-list" style="margin:var(--sp-8) auto 0;">
          <div class="faq-item"><button class="faq-question" aria-expanded="false">Сколько стоит натяжной потолок за м²?<span class="faq-question__icon">+</span></button><div class="faq-answer"><div class="faq-answer__inner">MSD — ₪229/м². ₪339 — RENOLIT/м². Включая производство, доставку и монтаж. Освещение — отдельно.</div></div></div>
          <div class="faq-item"><button class="faq-question" aria-expanded="false">Что включено в цену?<span class="faq-question__icon">+</span></button><div class="faq-answer"><div class="faq-answer__inner">Цена включает изготовление полотна, доставку и монтаж с профилем. Не включено: LED-линии, споты, магнитный рельс, световой потолок, принты, плавающие полосы — всё отдельно по проекту.</div></div></div>
          <div class="faq-item"><button class="faq-question" aria-expanded="false">Сколько стоит натяжной со встроенным освещением?<span class="faq-question__icon">+</span></button><div class="faq-answer"><div class="faq-answer__inner">Зависит от типа освещения и количества светильников. Один спот — несколько десятков шекелей. <a href="/teura/masila-magnetit-shkuaa">Встроенный магнитный рельс</a> — по длине. <a href="/sugim/pasei-merahvim">Плавающие полосы</a> — по периметру. При полном освещении стоимость сопоставима с потолком. Точное предложение после замера.</div></div></div>
          <div class="faq-item"><button class="faq-question" aria-expanded="false">Сколько стоит натяжной для гостиной?<span class="faq-question__icon">+</span></button><div class="faq-answer"><div class="faq-answer__inner">Средняя гостиная (15–25 м²) с базовым покрытием — ₪3 400–₪5 800. С продвинутым — ₪4 200–₪7 000. Со встроенным освещением (споты / рельс / плавающие полосы) — дополнительно. Используйте калькулятор выше.</div></div></div>
          <div class="faq-item"><button class="faq-question" aria-expanded="false">Есть ли скидка на несколько комнат?<span class="faq-question__icon">+</span></button><div class="faq-answer"><div class="faq-answer__inner">Да. Проект на 3+ комнаты получает более выгодную цену за м². Вся квартира — значительная скидка по сравнению с одной комнатой.</div></div></div>
          <div class="faq-item"><button class="faq-question" aria-expanded="false">В чём разница между покрытиями?<span class="faq-question__icon">+</span></button><div class="faq-answer"><div class="faq-answer__inner"><a href="/sugim/mat">Мат</a> — классический вид, как гипс. <a href="/sugim/saten">Сатин</a> — мягкий элегантный блеск. <a href="/sugim/mavrika">Глянец</a> — полное отражение, роскошный эффект. Все монтируются одинаково — разница только во внешнем виде.</div></div></div>
          <div class="faq-item"><button class="faq-question" aria-expanded="false">Когда лучше позвонить?<span class="faq-question__icon">+</span></button><div class="faq-answer"><div class="faq-answer__inner">Площадь свыше 100 м², коммерческие проекты, сложное освещение или нестандартная комната (колонны, неровные стены, нестандартная высота) — лучше короткий звонок. <a href="tel:0528082988">052-808-2988</a>.</div></div></div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    
    <section class="section">
      <div class="container container--narrow">

      <div class="internal-links-block">
        <h3>Полезные страницы</h3>
        <ul><li><a href="/tikrot-metuhot">Натяжные потолки</a></li><li><a href="/sugim">Виды потолков</a></li><li><a href="/teura">Решения освещения</a></li><li><a href="/hanmahat-tikra">Опускание потолка</a></li><li><a href="/hanmahat-tikra/gevs">Опускание гипсокартонного потолка — цена и процесс</a></li><li><a href="/hashvaa/tikra-metuha-o-geves">Сравнение с гипсом</a></li><li><a href="/sugim/pasei-merahvim">Плавающие полосы</a></li><li><a href="/madrich/ma-mashpia-al-mehir">Что влияет на цену</a></li><li><a href="/madrich/homrim">Материалы</a></li></ul>
      </div>
      </div>
    </section>
<section class="cta-section">
      <div class="container">
        <h2>Хотите точное предложение?</h2>
        <p>Включая потолок + дополнения — после короткого разговора</p>
        <form class="form-inline" style="max-width:480px;margin:var(--sp-8) auto 0;" onsubmit="return skyviewSubmit(this)">
          <input type="tel" class="form-input" name="phone" placeholder="Телефон" required dir="ltr" style="text-align:left;">
          <button type="submit" class="btn btn--primary">Перезвоните мне</button>
        </form>
        <p style="text-align:center;margin-top:var(--sp-4);font-size:var(--text-xs);color:rgba(255,255,255,0.45);">Перезваниваем в течение часа · Консультация бесплатно · Без обязательств</p>
      </div>
    </section>

  </main>

        <footer class="footer" role="contentinfo">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <div class="footer__brand-name">SkyView — натяжные потолки</div>
          <p>Дизайнерские натяжные потолки для дома и бизнеса. Быстрая и чистая установка по всему Израилю.</p>
          <div style="margin-top:var(--space-lg);">
            <div class="footer__contact-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;margin-right:4px;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> <a href="tel:+972528082988" style="color:var(--color-accent);">052-808-2988</a></div>
            <div class="footer__contact-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;margin-right:4px;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> skyview.co.il@gmail.com</div>
          </div>
          <div class="footer__social" style="display:flex;gap:var(--sp-5);margin-top:var(--sp-8);align-items:center;">
            <a href="https://wa.me/972528082988?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%BF%D1%80%D0%B5%D0%B4%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D7%9C%D7%AA%D7%A7%D7%A8%D7%94%20%D7%9E%D7%AA%D7%95%D7%97%D7%94" target="_blank" rel="noopener" aria-label="WhatsApp" class="footer__social-link"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.616l4.52-1.476A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.352 0-4.55-.767-6.32-2.066l-.44-.33-2.684.877.893-2.636-.363-.476A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg></a>
            <a href="https://www.instagram.com/skyview.co.il/" target="_blank" rel="noopener" aria-label="Instagram" class="footer__social-link"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg></a>
            <a href="https://www.facebook.com/skyview.co.il" target="_blank" rel="noopener" aria-label="Facebook" class="footer__social-link"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
            <a href="https://www.youtube.com/@skyview7076/featured" target="_blank" rel="noopener" aria-label="YouTube" class="footer__social-link"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg></a>
          </div>
        </div>

        <div>
          <div class="footer__col-title">Услуги</div>
          <ul class="footer__links">
            <li><a href="/tikrot-metuhot">Натяжные потолки</a></li>
            <li><a href="/sugim">Виды потолков</a></li>
            <li><a href="/teura">Освещение</a></li>
            <li><a href="/ru/cena/">Цены</a></li>
            <li><a href="/brisol">Бризоль</a></li>
            <li><a href="/hashvaa/tikra-metuha-o-geves">Натяжной или гипс</a></li>
          </ul>
        </div>

        <div>
          <div class="footer__col-title">Комнаты</div>
          <ul class="footer__links">
            <li><a href="/hadarim/salon">Гостиная</a></li>
            <li><a href="/hadarim/ambatia">Ванная</a></li>
            <li><a href="/hadarim/mitbah">Кухня</a></li>
            <li><a href="/hadarim/heder-sheina">Спальня</a></li>
            <li><a href="/hadarim/misrad">Офис</a></li>
            <li><a href="/hadarim/mikve">Миква</a></li>
          </ul>
        </div>

        <div>
          <div class="footer__col-title">Информация</div>
          <ul class="footer__links">
            <li><a href="/madrich">Руководство</a></li>
            <li><a href="/proyektim">Проекты</a></li>
            <li><a href="/asakim">Для бизнеса</a></li>
            <li><a href="/architects-designers">Архитекторам</a></li>
            <li><a href="/azorim">Зоны обслуживания</a></li>
            <li><a href="/odot">О компании</a></li>
            <li><a href="/contact">Контакты</a></li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <span>© 2026 SkyView — натяжные потолки. Все права защищены.</span>
        <span>
          <a href="/azorim/ashdod" style="color:rgba(255,255,255,0.4);">Ашдод</a> ·
          <a href="/azorim/tel-aviv" style="color:rgba(255,255,255,0.4);">Тель-Авив</a> ·
          <a href="/azorim/yerushalayim" style="color:rgba(255,255,255,0.4);">Иерусалим</a> ·
          <a href="/azorim/haifa" style="color:rgba(255,255,255,0.4);">Хайфа</a> ·
          <a href="/azorim/merkaz" style="color:rgba(255,255,255,0.4);">Центр</a> ·
          <a href="/azorim/darom" style="color:rgba(255,255,255,0.4);">Юг</a>
        </span>
        <span style="color:rgba(255,255,255,0.12);font-size:0.65rem;">v75</span>
      </div>
    </div>
  </footer>
  <div class="sticky-cta"><a href="tel:+972528082988" class="btn btn--dark">052-808-2988</a><a href="/contact" class="btn btn--primary">Предложение</a></div>
  <script src="../../js/main.js"></script>
</body>
</html>`;

const REDIRECTS = {
  // Wix junk
  '/blank': '/',
  '/blank-1': '/',
  '/blank-2': '/',
  '/copy-of-2': '/',
  '/copy-of-3-rxmap': '/',
  '/blog': '/',
  '/copy-of-תקרה-מתוחה-שמיים': '/proyektim/klinika-shamayim',

  // Hebrew slugs (high GSC traffic)
  '/מחיר-תקרה-מתוחה': '/mehiron',
  '/הנמכת-תקרה-מיוחדת': '/hanmahat-tikra',
  '/הנמכתתקרהמתוחהאוגבס': '/hashvaa/tikra-metuha-o-geves',
  '/סוגי-תקרות-קיימים': '/sugim',
  '/תמונות-השראה-2021': '/proyektim',
  '/תקרה-צפה-מרחפת': '/sugim/tikra-tzafa',
  '/תיקון-שירות-תקרה-מתוחה': '/tikun',
  '/תקרה-מתוחה-מוארת': '/teura/tikra-mueret',
  '/תקרה-מתוחה-פסים-מרחפים': '/sugim/pasei-merahvim',
  '/תקרה-נמתחת-שמיים': '/proyektim/klinika-shamayim',
  '/תקרה-מתוחה-עם-הדפס': '/sugim/hadpas',
  '/תקרה-מתוחה-אשדוד': '/azorim/ashdod',
  '/תקרה-מתוחה-אשקלון': '/azorim/darom',
  '/עיצוב-תקרה-לפי-חדר': '/hadarim',
  '/תיקרה-דמוי-עץ': '/sugim/hadpas',
  '/מחירקרניזגבס': '/hanmahat-tikra/gevs',
  '/תקרה-נמתחת-תלת-מימד': '/sugim',
  '/натяжные-потолки-визраиле-цена': '/mehiron',

  // Legacy Latin slugs
  '/sugei-hanmahot-tikra': '/sugim',
  '/pitronot-teura': '/teura',
  '/hipui-kirot': '/sugim',
  '/ahraiut': '/odot',
  '/sherutim-shelanu': '/tikrot-metuhot',
  '/tikritot-itzuv-hadmaia': '/architects-designers',

  // Old product/finish pages
  '/tikra-metuha-saten': '/sugim/saten',
  '/tikra-metuha-mat': '/sugim/mat',
  '/tikra-metuha-hatkana': '/madrich/hatkana',
  '/tikra-metuha-merkamim': '/sugim',
  '/tikra-metuha-shelot': '/tikrot-metuhot',
  '/tikra-metuha-medidot': '/madrich/hatkana',
  '/tikra-tlatmeimad-3d': '/sugim',

  // Old room pages
  '/tikra-hedershina': '/hadarim/heder-sheina',
  '/tikra-heder-eshivot': '/hadarim',
  '/tikra-beit-kneset': '/hadarim/beit-knesset',

  // Location pages
  '/tikra-tel-aviv': '/azorim/tel-aviv',
  '/tikra-salon-haifa': '/azorim/haifa',
  '/tikra-ramatgan': '/azorim/merkaz',
  '/tikra-natania': '/azorim/merkaz',
  '/tikra-herzelia': '/azorim/merkaz',
  '/tikra-salon-herzelia': '/azorim/merkaz',
  '/tikra-salonpintohel': '/azorim/tel-aviv',
  '/tikra-metbah-telaviv': '/azorim/tel-aviv',
  '/tikra-misrad-kfarsaba': '/hadarim/misrad',
  '/tikra-hanut-hadera': '/hadarim/hanut',


  // Missing location pages
  '/tikra-afula': '/azorim',
  '/tikra-metuha-meuhad': '/tikrot-metuhot',
  '/tikra-metuha-meuhad': '/tikrot-metuhot',

  // Additional RU paths (low traffic but indexed)
  '/ru/תקרה-נמתחת-תלת-מימד': '/sugim',
  '/ru/tikra-hedershina': '/hadarim/heder-sheina',
  '/ru/הנמכתתקרהמתוחהאוגבס': '/hashvaa/tikra-metuha-o-geves',

  // RU specific
  '/ru/натяжные-потолки-визраиле-цена': '/mehiron',
  '/ru/מחיר-תקרה-מתוחה': '/mehiron',
  '/ru/תמונות-השראה-2021': '/proyektim',
  '/ru/תקרה-צפה-מרחפת': '/sugim/pasei-merahvim',
  '/ru/סוגי-תקרות-קיימים': '/sugim',
  '/ru/תקרה-מתוחה-מוארת': '/teura/tikra-mueret',
  '/ru/תקרה-מתוחה-פסים-מרחפים': '/sugim/pasei-merahvim',
  '/ru/הנמכתתקרהמתוחהאוגבס': '/hashvaa/tikra-metuha-o-geves',
  '/ru/הנמכת-תקרה-מיוחדת': '/hanmahat-tikra',
  '/ru/תקרה-מתוחה-אשקלון': '/azorim/darom',
  '/ru/תקרה-מתוחה-אשדוד': '/azorim/ashdod',
  '/ru/pitronot-teura': '/teura',
};

const PREFIX_REDIRECTS = [
  { prefix: '/fullscreen-page/', target: '/proyektim' },
  { prefix: '/blog/categories/', target: '/madrich' },
  { prefix: '/post/', target: '/madrich' },
  { prefix: '/ar/fullscreen-page/', target: '/proyektim' },
  { prefix: '/ar/', target: '/' },
  { prefix: '/ru/post/', target: '/madrich' },
  // /ru/ static pages now served as assets (ru/index.html, ru/cena/index.html)
];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let path = decodeURIComponent(url.pathname);

    // Hard 301 — consolidated warranty page redirect
    if (path === '/madrich-techni/ahrayut-betihut' || path === '/madrich-techni/ahrayut-betihut/') {
      return Response.redirect('https://www.skyview.co.il/aharayut-yatzranim/', 301);
    }

    // Normalize: strip trailing slash except root
    if (path.length > 1 && path.endsWith('/')) {
      path = path.slice(0, -1);
    }

    // 1. Exact-match redirects
    const exact = REDIRECTS[path];
    if (exact) {
      return Response.redirect(new URL(exact, url.origin).href, 301);
    }

    // 2. Prefix-match redirects
    for (const rule of PREFIX_REDIRECTS) {
      if (path.startsWith(rule.prefix) || path === rule.prefix.slice(0, -1)) {
        return Response.redirect(new URL(rule.target, url.origin).href, 301);
      }
    }

    // 3. Russian landing pages — served directly from worker
    if (path === '/ru') {
      return new Response(RU_INDEX_HTML, {
        status: 200,
        headers: { 'Content-Type': 'text/html; charset=UTF-8', 'Cache-Control': 'public, max-age=3600' }
      });
    }
    if (path === '/ru/cena') {
      return new Response(RU_CENA_HTML, {
        status: 200,
        headers: { 'Content-Type': 'text/html; charset=UTF-8', 'Cache-Control': 'public, max-age=3600' }
      });
    }

    // Worker version probe — unique to each deploy
    if (path === '/wv') {
      return new Response(JSON.stringify({worker:'v85',ru:true,ts:Date.now()}), {
        status: 200, headers: {'Content-Type':'application/json'}
      });
    }

    // 4. Static assets
    return env.ASSETS.fetch(request);
  }
};
