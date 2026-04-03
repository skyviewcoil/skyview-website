/* ============================================
   SkyView — Main JavaScript
   ============================================ */

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

  // --- Calculator: ceiling + add-ons ---
  const calcForm = document.querySelector('.calculator');
  if (calcForm) {
    const areaInput = calcForm.querySelector('[name="area"]');
    const typeSelect = calcForm.querySelector('[name="type"]');
    const addonChecks = calcForm.querySelectorAll('[name="addon"]');
    const resultEl = calcForm.querySelector('.calculator__result');
    const resultRange = calcForm.querySelector('.calculator__result-range');
    const ceilingPriceEl = document.getElementById('calc-ceiling-price');
    const addonsRowEl = document.getElementById('calc-addons-row');
    const addonsPriceEl = document.getElementById('calc-addons-price');
    const addonsNoteEl = document.getElementById('calc-addons-note');

    // Ceiling base prices per m²
    const ceilingPrices = {
      'standard': { min: 229, max: 260 },
      'premium':  { min: 279, max: 320 },
      'top':      { min: 339, max: 400 }
    };

    // Add-on estimates (rough ranges for calculator only)
    const addonEstimates = {
      'led':          { min: 180, max: 280, unit: 'מ׳', label: 'פסי LED', needsQuote: false },
      'spots':        { min: 120, max: 200, unit: 'יחידה', label: 'ספוטים', needsQuote: false },
      'track':        { min: 350, max: 550, unit: 'מ׳', label: 'מסילה מגנטית', needsQuote: false },
      'illuminated':  { min: 0, max: 0, unit: '', label: 'תקרה מוארת', needsQuote: true },
      'print':        { min: 0, max: 0, unit: '', label: 'הדפס', needsQuote: true },
      'niche':        { min: 0, max: 0, unit: '', label: 'נישת וילון', needsQuote: true }
    };

    function calculate() {
      const area = parseFloat(areaInput?.value) || 0;
      if (area <= 0) {
        if (resultEl) resultEl.style.display = 'none';
        return;
      }

      const type = typeSelect?.value || 'standard';
      const range = ceilingPrices[type] || ceilingPrices.standard;

      // Ceiling cost
      const ceilMin = Math.round(area * range.min);
      const ceilMax = Math.round(area * range.max);

      if (ceilingPriceEl) {
        ceilingPriceEl.textContent = '₪' + ceilMin.toLocaleString() + ' – ₪' + ceilMax.toLocaleString();
      }

      // Add-ons
      const selectedAddons = [];
      let addonsMin = 0;
      let addonsMax = 0;
      let hasCustomQuote = false;
      const quoteItems = [];

      addonChecks.forEach(function(cb) {
        if (cb.checked) {
          const info = addonEstimates[cb.value];
          if (info) {
            selectedAddons.push(info.label);
            if (info.needsQuote) {
              hasCustomQuote = true;
              quoteItems.push(info.label);
            } else {
              // Rough estimate: assume ~3-5 units/meters for a typical room
              var factor = area < 15 ? 3 : area < 25 ? 4 : 5;
              addonsMin += info.min * factor;
              addonsMax += info.max * factor;
            }
          }
        }
      });

      if (addonsRowEl) {
        if (selectedAddons.length > 0) {
          addonsRowEl.style.display = 'block';
          var priceText = '';
          if (addonsMin > 0) {
            priceText = '₪' + addonsMin.toLocaleString() + ' – ₪' + addonsMax.toLocaleString();
          }
          if (hasCustomQuote) {
            if (priceText) priceText += ' +';
            else priceText = 'דורש הצעת מחיר';
          }
          if (addonsPriceEl) addonsPriceEl.textContent = priceText;
          if (addonsNoteEl) {
            if (hasCustomQuote) {
              addonsNoteEl.textContent = quoteItems.join(', ') + ' — מתומחרים לפי הפרויקט';
            } else {
              addonsNoteEl.textContent = 'הערכה בלבד — תלוי באורך, כמות ומורכבות';
            }
          }
        } else {
          addonsRowEl.style.display = 'none';
        }
      }

      // Total
      var totalMin = ceilMin + addonsMin;
      var totalMax = ceilMax + addonsMax;
      var totalText = '₪' + totalMin.toLocaleString() + ' – ₪' + totalMax.toLocaleString();
      if (hasCustomQuote) totalText += '+';

      if (resultRange) resultRange.textContent = totalText;
      if (resultEl) resultEl.style.display = 'block';
    }

    // Bind events
    [areaInput, typeSelect].forEach(function(el) {
      if (el) el.addEventListener('input', calculate);
      if (el) el.addEventListener('change', calculate);
    });
    addonChecks.forEach(function(cb) {
      cb.addEventListener('change', calculate);
    });
  }

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
      data.calculator = {
        area: areaInput ? areaInput.value : '',
        package: typeSelect ? typeSelect.options[typeSelect.selectedIndex].text : '',
        estimate: calcResult.textContent
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
    if (data.calculator) msg += '\nהערכה: ' + data.calculator.estimate + ' (' + data.calculator.package + ')';
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

});
