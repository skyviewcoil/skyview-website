/* ============================================
   SkyView — Main JavaScript
   ============================================ */

// --- Analytics: GA4 + Meta Pixel (production only) ---
// CAPI is handled by the existing GTM server-side / Meta partner integration.
// This file sends browser-side events only. GTM reads dataLayer and forwards
// to Meta CAPI automatically. event_id is included for browser↔server dedup.
(function() {
  // Production guard — no tracking on staging or local
  var host = location.hostname;
  if (host !== 'skyview.co.il' && host !== 'www.skyview.co.il') return;

  var GA4_ID      = 'G-D4CNRL48EP';
  var META_PIX_ID = '919952583222085';

  // ── event_id generator — used for GTM/CAPI deduplication ─────────────────
  // GTM server-side container reads this from dataLayer and passes it to Meta
  // CAPI, matching it against the browser pixel event to prevent double-count.
  window._svEventId = function() {
    return 'sv-' + Date.now() + '-' + Math.random().toString(36).slice(2, 9);
  };

  // ── GA4 ───────────────────────────────────────────────────────────────────
  // Guard against duplicate injection (e.g. if GTM also loads GA4)
  if (!window.__ga4Loaded) {
    window.__ga4Loaded = true;
    var gs = document.createElement('script');
    gs.async = true;
    gs.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_ID;
    document.head.appendChild(gs);
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function() { dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', GA4_ID, { send_page_view: true });
  }

  // ── Meta Pixel ────────────────────────────────────────────────────────────
  // GTM Pixel_Setup tag handles fbq('init') and PageView on DOM Ready.
  // main.js does NOT init fbq to prevent double-init — GTM is the single source.
  // fbq('track', ...) calls in event handlers below rely on GTM having run first.
})();

document.addEventListener('DOMContentLoaded', () => {

  // --- Trust bar + Header Scroll ---
  const trustBar = document.querySelector('.header-trust');
  const header = document.querySelector('.header');
  if (header) {
    const updateScroll = () => {
      const y = window.scrollY;
      header.classList.toggle('scrolled', y > 20);
      if (trustBar) {
        const hide = y > 50;
        trustBar.classList.toggle('hidden', hide);
        header.classList.toggle('trust-hidden', hide);
      }
    };
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
  }

  // --- Desktop Dropdown (hover + click) ---
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  const isDesktop = () => window.matchMedia('(min-width: 1024px)').matches;

  dropdowns.forEach(dd => {
    const trigger = dd.querySelector('.nav-dropdown__trigger');
    if (!trigger) return;
    let hoverTimer = null;

    // Click — works on all devices
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dd.classList.contains('open');
      dropdowns.forEach(d => d.classList.remove('open'));
      if (!isOpen) dd.classList.add('open');
    });
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); trigger.click(); }
      if (e.key === 'Escape') dd.classList.remove('open');
    });

    // Hover — desktop only
    dd.addEventListener('mouseenter', () => {
      if (!isDesktop()) return;
      clearTimeout(hoverTimer);
      dropdowns.forEach(d => { if (d !== dd) d.classList.remove('open'); });
      dd.classList.add('open');
    });
    dd.addEventListener('mouseleave', () => {
      if (!isDesktop()) return;
      hoverTimer = setTimeout(() => dd.classList.remove('open'), 120);
    });
  });
  document.addEventListener('click', () => {
    dropdowns.forEach(d => d.classList.remove('open'));
  });

  // --- Mobile Menu ---
  const mobileToggle = document.querySelector('.header__mobile-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileOverlay = document.querySelector('.mobile-menu-overlay');
  const mobileClose = document.querySelector('.mobile-menu__close');

  function openMobileMenu() {
    mobileMenu && mobileMenu.classList.add('open');
    mobileOverlay && mobileOverlay.classList.add('open');
    mobileToggle && mobileToggle.classList.add('active');
    mobileToggle && mobileToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMobileMenu() {
    mobileMenu && mobileMenu.classList.remove('open');
    mobileOverlay && mobileOverlay.classList.remove('open');
    mobileToggle && mobileToggle.classList.remove('active');
    mobileToggle && mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', () => {
    mobileMenu && mobileMenu.classList.contains('open') ? closeMobileMenu() : openMobileMenu();
  });
  if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);

  document.querySelectorAll('.mobile-nav__trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const sub = trigger.nextElementSibling;
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('.mobile-nav__trigger').forEach(t => {
        if (t !== trigger) {
          t.setAttribute('aria-expanded', 'false');
          const s = t.nextElementSibling;
          if (s) s.classList.remove('open');
        }
      });
      trigger.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      if (sub) sub.classList.toggle('open', !isOpen);
    });
  });
  if (mobileMenu) mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMobileMenu));

  // --- Active nav state ---
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.header__nav > a, .nav-dropdown__list a').forEach(link => {
    const href = link.getAttribute('href') || '';
    const normalized = href.replace(/\/$/, '');
    if (normalized && path.startsWith(normalized) && normalized !== '') {
      link.classList.add('active');
      const parentDd = link.closest('.nav-dropdown');
      if (parentDd) {
        const trig = parentDd.querySelector('.nav-dropdown__trigger');
        if (trig) trig.classList.add('active');
      }
    }
  });

  // --- FAQ Accordion ---
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      
      // Close all siblings
      item.parentElement.querySelectorAll('.faq-item').forEach(sibling => {
        sibling.classList.remove('open');
      });
      
      // Toggle current
      if (!wasOpen) {
        item.classList.add('open');
      }
    });
  });

  // --- Calculator: simplified slider-based ---
  const calcForm = document.querySelector('.calculator');
  if (calcForm) {
    const slider = document.getElementById('calc-area-slider');
    const areaDisplay = document.getElementById('calc-area-display');
    const resultEl = calcForm.querySelector('.calculator__result');
    const resultRange = calcForm.querySelector('.calculator__result-range');
    const minNote = calcForm.querySelector('.calculator__min-note');
    const largeMsg = document.getElementById('calc-large-msg');
    const typeBtns = calcForm.querySelectorAll('.calc-type-btn');

    // Solution type prices per sqm (approved pricing source)
    // standard = base MSD price - range estimate only
    // illuminated = luminous ceiling system ₪1,000/m²
    // sky = sky print ceiling ₪350/m²
    const solutionPrices = {
      'standard':    { min: 229, max: 229 },
      'illuminated': { min: 1000, max: 1000 },
      'sky':         { min: 350, max: 350 }
    };

    var selectedType = 'standard';
    var MIN_ORDER_PRICE = 1500;

    // Type button clicks
    typeBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        typeBtns.forEach(function(b) {
          b.classList.remove('calc-type-btn--active');
          b.style.borderColor = 'var(--color-rule)';
          b.style.background = 'transparent';
        });
        btn.classList.add('calc-type-btn--active');
        btn.style.borderColor = 'var(--color-accent)';
        btn.style.background = 'rgba(140,106,74,0.06)';
        selectedType = btn.getAttribute('data-type');
        calculate();
      });
    });

    function calculate() {
      var area = parseInt(slider?.value) || 0;
      if (areaDisplay) areaDisplay.textContent = area >= 120 ? '100+' : area;
      if (area < 4) {
        if (resultEl) resultEl.style.display = 'none';
        if (minNote) minNote.textContent = 'גודל מינימלי להזמנה: 4 מ"ר';
        if (minNote) minNote.style.display = 'block';
        return;
      }

      var isLarge = area >= 100;
      var range = solutionPrices[selectedType] || solutionPrices.standard;
      var totalMin = Math.round(area * range.min);
      var totalMax = Math.round(area * range.max);
      var belowMinimum = totalMax < MIN_ORDER_PRICE;
      var effectiveMin = Math.max(totalMin, MIN_ORDER_PRICE);
      var effectiveMax = Math.max(totalMax, MIN_ORDER_PRICE);

      if (resultEl) resultEl.style.display = 'block';

      if (isLarge) {
        // Large area: show phone message instead of price
        if (resultRange) resultRange.textContent = '';
        if (largeMsg) largeMsg.style.display = 'block';
        if (minNote) minNote.style.display = 'none';
      } else {
        if (largeMsg) largeMsg.style.display = 'none';
        var text;
        if (belowMinimum) {
          text = '₪' + MIN_ORDER_PRICE.toLocaleString();
        } else if (effectiveMin === effectiveMax) {
          text = '₪' + effectiveMin.toLocaleString();
        } else {
          text = '₪' + effectiveMin.toLocaleString() + ' – ₪' + effectiveMax.toLocaleString();
        }
        if (resultRange) resultRange.textContent = text;
        if (minNote) {
          if (belowMinimum) {
            minNote.textContent = 'מחיר מינימום להזמנה: ₪' + MIN_ORDER_PRICE.toLocaleString();
            minNote.style.display = 'block';
          } else {
            minNote.style.display = 'none';
          }
        }
      }

      // Store for lead data
      calcForm.setAttribute('data-effective-min', effectiveMin);
      calcForm.setAttribute('data-effective-max', effectiveMax);
      calcForm.setAttribute('data-below-minimum', belowMinimum ? '1' : '0');
      calcForm.setAttribute('data-type', selectedType);
    }

    // Bind slider
    var calcTracked = false;
    if (slider) {
      slider.addEventListener('input', function() {
        calculate();
        if (!calcTracked) {
          calcTracked = true;
          if (typeof gtag === 'function') gtag('event', 'calculator_start', {event_category: 'engagement', page: location.pathname});
        }
      });
    }

    // Initialize
    calculate();
  }

  // --- WhatsApp & Phone click tracking ---
  document.querySelectorAll('a[href*="wa.me"]').forEach(function(el) {
    el.addEventListener('click', function() {
      if (typeof dataLayer !== 'undefined') dataLayer.push({ event: 'whatsapp_click', page: location.pathname });
      if (typeof gtag === 'function') gtag('event', 'whatsapp_click', { event_category: 'contact', page: location.pathname });
      if (typeof fbq === 'function') fbq('track', 'Contact');
    });
  });
  document.querySelectorAll('a[href*="tel:"]').forEach(function(el) {
    el.addEventListener('click', function() {
      if (typeof dataLayer !== 'undefined') dataLayer.push({ event: 'phone_click', page: location.pathname });
      if (typeof gtag === 'function') gtag('event', 'phone_click', { event_category: 'contact', page: location.pathname });
      if (typeof fbq === 'function') fbq('track', 'Contact');
    });
  });

  // --- Quote request CTA click tracking ---
  document.querySelectorAll('a.btn--primary[href="/contact"], a.btn--primary[href*="mehiron"]').forEach(function(el) {
    el.addEventListener('click', function() {
      if (typeof dataLayer !== 'undefined') dataLayer.push({ event: 'quote_request_click', cta_text: el.textContent.trim(), page: location.pathname });
      if (typeof gtag === 'function') gtag('event', 'quote_request_click', { event_category: 'engagement', cta_text: el.textContent.trim(), page: location.pathname });
    });
  });

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // --- Intersection Observer for fade-in ---
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });

});

document.addEventListener('DOMContentLoaded', function() {

  // ============================================
  // SkyView Lead Submission System
  // ============================================
  // Supabase + Resend — same method as the calculator
  // ============================================
  // REQUIRED: Set your Supabase project values below.
  // These are PUBLIC keys — safe to expose in frontend.
  var SUPABASE_URL = 'https://glmzuqyvybzwvhptpvrr.supabase.co';
  var SUPABASE_ANON_KEY = 'sb_publishable_Vdxz7xwb4x0R13MAzL7ujg_2CNoRSgO';
  var LEAD_FUNCTION = 'send-callback-email';
  var LEAD_ENDPOINT = SUPABASE_URL + '/functions/v1/' + LEAD_FUNCTION;

  var WA_NUMBER = '972528082988';


  // --- Collect lead data from any form ---
  function collectLead(form) {
    var data = {
      name:      (form.querySelector('[name="name"]') || {}).value || '',
      phone:     (form.querySelector('[name="phone"]') || {}).value || '',
      email:     (form.querySelector('[name="email"]') || {}).value || '',
      city:      (form.querySelector('[name="city"]') || {}).value || '',
      room:      (form.querySelector('[name="room"]') || {}).value || '',
      notes:     (form.querySelector('[name="notes"]') || {}).value || '',
      source:    location.pathname,
      page_title: document.title,
      form_type: form.getAttribute('data-form') || 'general',
      timestamp: new Date().toISOString()
    };

    // Collect calculator context if on pricing page
    var calcResult = document.querySelector('.calculator__result-range');
    if (calcResult && calcResult.textContent) {
      var typeSelect = document.getElementById('type');
      var areaInput = document.getElementById('area');
      var calcFormEl = document.querySelector('.calculator');
      var effectiveMin = calcFormEl ? calcFormEl.getAttribute('data-effective-min') : '';
      var effectiveMax = calcFormEl ? calcFormEl.getAttribute('data-effective-max') : '';
      var belowMin = calcFormEl ? calcFormEl.getAttribute('data-below-minimum') === '1' : false;

      data.calculator = {
        area: areaInput ? areaInput.value : '',
        package: typeSelect ? typeSelect.options[typeSelect.selectedIndex].text : '',
        estimate: calcResult.textContent,
        effective_price_min: effectiveMin,
        effective_price_max: effectiveMax,
        minimum_applied: belowMin
      };
      // Collect selected add-ons
      var addons = [];
      document.querySelectorAll('[name="addon"]:checked').forEach(function(cb) {
        addons.push(cb.parentElement.querySelector('span').textContent);
      });
      if (addons.length) data.calculator.addons = addons.join(', ');
    }

    return data;
  }

  // --- Validate required fields ---
  function validateLead(data) {
    var errors = [];
    if (!data.phone || !/^0\d{8,9}$/.test(data.phone.replace(/[\s\-]/g, ''))) errors.push('נא להזין מספר טלפון תקין');
    return errors;
  }

  // --- Show form state ---
  function setFormState(form, state, message) {
    var btn = form.querySelector('button[type="submit"]');
    var msgEl = form.querySelector('.form-message');
    if (!msgEl) {
      msgEl = document.createElement('div');
      msgEl.className = 'form-message';
      msgEl.style.cssText = 'text-align:center;margin-top:8px;font-size:0.8125rem;padding:8px;border-radius:6px;';
      form.appendChild(msgEl);
    }

    if (state === 'loading') {
      if (btn) { btn.disabled = true; btn.textContent = 'שולח...'; }
      msgEl.style.display = 'none';
    } else if (state === 'success') {
      if (btn) { btn.disabled = true; btn.textContent = 'נשלח בהצלחה ✓'; btn.style.background = '#2D7A56'; btn.style.borderColor = '#2D7A56'; }
      msgEl.textContent = message || 'הפרטים התקבלו. נציג יצור קשר בהקדם.';
      msgEl.style.display = 'block';
      msgEl.style.background = 'rgba(45,122,86,0.1)';
      msgEl.style.color = '#2D7A56';
    } else if (state === 'error') {
      if (btn) { btn.disabled = false; btn.textContent = 'שלחו שוב'; btn.style.background = ''; btn.style.borderColor = ''; }
      msgEl.textContent = message || 'שגיאה בשליחה. נסו שוב או צרו קשר בוואטסאפ.';
      msgEl.style.display = 'block';
      msgEl.style.background = 'rgba(176,65,62,0.1)';
      msgEl.style.color = '#B0413E';
    } else if (state === 'validation') {
      msgEl.textContent = message;
      msgEl.style.display = 'block';
      msgEl.style.background = 'rgba(200,135,58,0.1)';
      msgEl.style.color = '#C8873A';
    }
  }

  // --- Reset form after delay ---
  function resetForm(form, delay) {
    setTimeout(function() {
      var btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.disabled = false;
        btn.textContent = btn.getAttribute('data-orig') || 'שלחו';
        btn.style.background = '';
        btn.style.borderColor = '';
      }
      var msgEl = form.querySelector('.form-message');
      if (msgEl) msgEl.style.display = 'none';
      form.reset();
    }, delay || 5000);
  }

  // --- Build WhatsApp URL from lead data ---
  function buildWaUrl(data) {
    var msg = 'שלום, אשמח לקבל הצעת מחיר לתקרה מתוחה.';
    if (data.phone) msg += '\nטלפון: ' + data.phone;
    if (data.email) msg += '\nמייל: ' + data.email;
    if (data.notes) msg += '\nהערות: ' + data.notes;
    if (data.source) msg += '\nמקור: ' + data.source;
    if (data.calculator) {
      msg += '\nהערכה: ' + data.calculator.estimate + ' (' + data.calculator.package + ')';
      if (data.calculator.minimum_applied) msg += '\n(מחיר מינימום הוזמנה)';
    }
    return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg);
  }

  // --- Submit lead ---
  function submitLead(form) {
    var data = collectLead(form);

    // Validate
    var errors = validateLead(data);
    if (errors.length > 0) {
      setFormState(form, 'validation', errors[0]);
      return false;
    }

    // Save original button text
    var btn = form.querySelector('button[type="submit"]');
    if (btn && !btn.getAttribute('data-orig')) btn.setAttribute('data-orig', btn.textContent);

    // Loading state
    setFormState(form, 'loading');

    // event_id for browser↔server deduplication via GTM
    // GTM server-side reads this from dataLayer and passes it to Meta CAPI
    var eventId = (typeof window._svEventId === 'function')
      ? window._svEventId()
      : 'sv-' + Date.now() + '-' + Math.random().toString(36).slice(2, 9);

    data.event_id = eventId;

    // Track submission attempt
    if (typeof dataLayer !== 'undefined') dataLayer.push({ event: 'form_submit_start', form_type: data.form_type, page: location.pathname });
    if (typeof gtag === 'function') gtag('event', 'form_submit_start', { form_type: data.form_type, page: location.pathname });

    // --- Deliver via WhatsApp (fallback) ---
    function deliverWhatsApp() {
      var waUrl = buildWaUrl(data);
      window.open(waUrl, '_blank');
      if (typeof dataLayer !== 'undefined') dataLayer.push({ event: 'lead', lead_type: 'whatsapp_fallback', event_id: eventId, page: location.pathname });
      if (typeof gtag === 'function') gtag('event', 'generate_lead', { lead_type: 'whatsapp_fallback', event_id: eventId, page: location.pathname });
      if (typeof fbq === 'function') fbq('track', 'Lead', {}, { eventID: eventId });
      setFormState(form, 'success');
      resetForm(form, 6000);
    }

    // --- SUBMISSION PATH ---
    if (LEAD_ENDPOINT && SUPABASE_URL.indexOf('YOUR_PROJECT') === -1) {
      fetch(LEAD_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
          'apikey': SUPABASE_ANON_KEY
        },
        body: JSON.stringify(data)
      })
      .then(function(res) {
        if (res.ok) {
          // Push to dataLayer — GTM server-side picks this up for CAPI
          if (typeof dataLayer !== 'undefined') dataLayer.push({ event: 'lead', lead_type: 'email_sent', event_id: eventId, form_type: data.form_type, page: location.pathname });
          if (typeof gtag === 'function') gtag('event', 'generate_lead', { lead_type: 'email_sent', event_id: eventId, form_type: data.form_type, page: location.pathname });
          if (typeof fbq === 'function') fbq('track', 'Lead', {}, { eventID: eventId });
          setFormState(form, 'success');
          resetForm(form, 6000);
        } else {
          return res.json().then(function(err) {
            console.error('Lead API error:', err);
            deliverWhatsApp();
          });
        }
      })
      .catch(function(err) {
        console.warn('Lead API unreachable:', err.message);
        deliverWhatsApp();
      });
    } else {
      deliverWhatsApp();
    }

    return false;
  }

  // --- Wire all forms ---
  window.skyviewSubmit = submitLead;

  document.querySelectorAll('form').forEach(function(form) {
    // Skip forms that are already explicitly wired with onsubmit
    if (form.getAttribute('onsubmit') && form.getAttribute('onsubmit').indexOf('skyviewSubmit') !== -1) return;

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      submitLead(form);
    });
  });

  // --- Before/After Slider ---
  document.querySelectorAll('.ba-slider').forEach(function(slider) {
    var beforeDiv = slider.querySelector('.ba-slider__before');
    var handle = slider.querySelector('.ba-slider__handle');
    var beforeImg = beforeDiv ? beforeDiv.querySelector('img') : null;
    if (!beforeDiv || !handle) return;

    function setPosition(x) {
      var rect = slider.getBoundingClientRect();
      // RTL: calculate from right edge
      var pct = ((rect.right - x) / rect.width) * 100;
      pct = Math.max(5, Math.min(95, pct));
      beforeDiv.style.width = pct + '%';
      handle.style.right = pct + '%';
      // Keep before image full width so it aligns with after
      if (beforeImg) {
        beforeImg.style.width = (rect.width) + 'px';
      }
    }

    // Initialize before image width
    function initWidth() {
      if (beforeImg) {
        beforeImg.style.width = slider.offsetWidth + 'px';
      }
    }
    initWidth();
    window.addEventListener('resize', initWidth);

    var dragging = false;

    slider.addEventListener('mousedown', function(e) {
      dragging = true;
      setPosition(e.clientX);
      e.preventDefault();
    });
    document.addEventListener('mousemove', function(e) {
      if (dragging) setPosition(e.clientX);
    });
    document.addEventListener('mouseup', function() { dragging = false; });

    slider.addEventListener('touchstart', function(e) {
      dragging = true;
      setPosition(e.touches[0].clientX);
    }, {passive: true});
    document.addEventListener('touchmove', function(e) {
      if (dragging) setPosition(e.touches[0].clientX);
    }, {passive: true});
    document.addEventListener('touchend', function() { dragging = false; });
  });

  // ── Scroll reveal observer ─────────────────────────────────────────────
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function(el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show everything immediately
    revealEls.forEach(function(el) { el.classList.add('visible'); });
  }

});
