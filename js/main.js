/* ============================================
   SkyView — Main JavaScript
   ============================================ */

// --- Analytics: Site-wide GA4 + FB Pixel ---
// Replace placeholder IDs with real ones when ready
(function() {
  var GA4_ID = '';  // Set your GA4 ID here, e.g. 'G-XXXXXXXXXX'
  var FB_PIXEL_ID = '';  // Set your FB Pixel ID here, e.g. '1234567890'

  // GA4
  if (GA4_ID && GA4_ID !== 'G-XXXXXXXXXX') {
    var gs = document.createElement('script');
    gs.async = true;
    gs.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_ID;
    document.head.appendChild(gs);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() { dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', GA4_ID);
  }

  // FB Pixel
  if (FB_PIXEL_ID && FB_PIXEL_ID !== 'XXXXXXXXXX') {
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbq.js');
    fbq('init', FB_PIXEL_ID);
    fbq('track', 'PageView');
  }
})();

document.addEventListener('DOMContentLoaded', () => {

  // --- Header Scroll Effect ---
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  // --- Mobile Menu Toggle ---
  const mobileToggle = document.querySelector('.header__mobile-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const isOpen = mobileMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Mobile sub-menu toggles
    mobileMenu.querySelectorAll('.mobile-menu__toggle').forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const sub = toggle.nextElementSibling;
        if (sub) {
          sub.classList.toggle('open');
          toggle.classList.toggle('open');
        }
      });
    });
  }

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

    // Solution type prices per sqm
    const solutionPrices = {
      'standard':    { min: 229, max: 280 },
      'illuminated': { min: 339, max: 450 },
      'printed':     { min: 309, max: 420 }
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
      if (area < 4) { if (resultEl) resultEl.style.display = 'none'; return; }

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
      if (typeof gtag === 'function') gtag('event', 'whatsapp_click', {event_category: 'contact', page: location.pathname});
    });
  });
  document.querySelectorAll('a[href*="tel:"]').forEach(function(el) {
    el.addEventListener('click', function() {
      if (typeof gtag === 'function') gtag('event', 'phone_click', {event_category: 'contact', page: location.pathname});
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
  // CONFIGURATION — set your real endpoint here after deployment:
  // Option A: Formspree     → 'https://formspree.io/f/YOUR_FORM_ID'
  // Option B: Google Script → 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'
  // Option C: Custom API    → 'https://your-api.com/leads'
  // Option D: Netlify Forms → leave null and add netlify attribute to <form>
  var LEAD_ENDPOINT = '/api/lead';

  var WA_NUMBER = '972528082988';
  var WA_FALLBACK = true; // show WhatsApp fallback after successful submit

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
    if (!data.name || data.name.trim().length < 2) errors.push('נא להזין שם');
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
      msgEl.textContent = message || 'הפנייה נשלחה. נחזור אליכם בהקדם.';
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
    if (data.name) msg += '\nשם: ' + data.name;
    if (data.phone) msg += '\nטלפון: ' + data.phone;
    if (data.city) msg += '\nעיר: ' + data.city;
    if (data.room) msg += '\nחדר: ' + data.room;
    if (data.notes) msg += '\nהערות: ' + data.notes;
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

    // Track submission attempt
    if (typeof gtag === 'function') gtag('event', 'form_submit_start', { page: location.pathname, form_type: data.form_type });

    // --- SUBMISSION PATH ---
    if (LEAD_ENDPOINT) {
      // Real API endpoint configured
      fetch(LEAD_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      })
      .then(function(res) {
        if (res.ok || res.status === 200 || res.status === 201 || res.status === 302) {
          // Success
          if (typeof gtag === 'function') gtag('event', 'form_submit_success', { page: location.pathname });
          if (typeof fbq === 'function') fbq('track', 'Lead');
          setFormState(form, 'success');
          if (WA_FALLBACK) {
            var msgEl = form.querySelector('.form-message');
            if (msgEl) {
              msgEl.innerHTML += '<br><a href="' + buildWaUrl(data) + '" target="_blank" rel="noopener" style="color:#2D7A56;font-weight:600;">💬 רוצים תשובה מיידית? שלחו וואטסאפ</a>';
            }
          }
          resetForm(form, 6000);
        } else {
          throw new Error('Server returned ' + res.status);
        }
      })
      .catch(function(err) {
        console.error('Lead submission error:', err);
        if (typeof gtag === 'function') gtag('event', 'form_submit_error', { page: location.pathname });
        // Fallback to WhatsApp on error
        setFormState(form, 'error', 'שגיאה בשליחה. ניתן לשלוח ישירות בוואטסאפ.');
        var msgEl = form.querySelector('.form-message');
        if (msgEl) {
          msgEl.innerHTML += '<br><a href="' + buildWaUrl(data) + '" target="_blank" rel="noopener" style="color:#B0413E;font-weight:600;">💬 שלחו בוואטסאפ במקום</a>';
        }
        var retryBtn = form.querySelector('button[type="submit"]');
        if (retryBtn) { retryBtn.disabled = false; retryBtn.textContent = retryBtn.getAttribute('data-orig') || 'שלחו שוב'; }
      });
    } else {
      // Endpoint not reachable — WhatsApp as emergency fallback only
      var waUrl = buildWaUrl(data);
      if (typeof gtag === 'function') gtag('event', 'form_submit_fallback', { page: location.pathname, method: 'whatsapp' });
      setFormState(form, 'error', 'לא ניתן לשלוח כעת. ניתן לפנות ישירות בוואטסאפ:');
      var msgEl = form.querySelector('.form-message');
      if (msgEl) {
        msgEl.innerHTML += '<br><a href="' + waUrl + '" target="_blank" rel="noopener" style="color:#25D366;font-weight:600;">💬 שלחו בוואטסאפ</a>';
      }
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

});
