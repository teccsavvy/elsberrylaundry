/* components.js - injects header + footer into every page */

function getActivePage() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  return path;
}

function renderTopBar() {
  return `
  <div class="top-bar">
    <div class="container">
      <div class="top-bar-items">
        <a href="tel:5734855136">📞 573-485-5136</a>
        <a href="mailto:info@elsberrylaundry.com">✉ info@elsberrylaundry.com</a>
        <span>🕐 Open Daily 6 AM - 10 PM</span>
      </div>
      <div class="top-bar-cta">
        <a href="contact.html">Get in Touch</a>
      </div>
    </div>
  </div>`;
}

function renderNav() {
  const active = getActivePage();
  const isActive = (page) => active === page ? 'active' : '';
  return `
  <header class="site-header" id="site-header">
    <div class="container">
      <nav class="nav-inner">
        <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links" id="nav-links">
          <li><a href="index.html" class="${isActive('index.html')}">Home</a></li>
          <li class="has-dropdown">
            <a href="about.html" class="${isActive('about.html')}">About</a>
            <ul class="dropdown">
              <li><a href="about.html">Our Story</a></li>
              <li><a href="faq.html">FAQ</a></li>
              <!--<li><a href="reviews.html">Reviews</a></li>-->
            </ul>
          </li>
          <li><a href="pricing.html" class="${isActive('pricing.html')}">Pricing</a></li>
          <li class="has-dropdown">
            <a href="commercial.html" class="${isActive('commercial.html')}">Commercial</a>
            <ul class="dropdown">
              <li><a href="commercial.html">Commercial Laundry</a></li>
              <li><a href="hotels.html">Hotels & Motels</a></li>
              <li><a href="airbnb.html">Airbnb Hosts</a></li>
            </ul>
          </li>
          <li><a href="wash-fold.html" class="${isActive('wash-fold.html')}">Wash & Fold</a></li>
          <li><a href="self-service.html" class="${isActive('self-service.html')}">Self-Service</a></li>
          <li><button href="contact.html" class="btn btn-primary" style="padding:9px 20px;font-size:13px;">${isActive('contact.html') ? '📍 Contact' : 'Contact Us'}</button></li>
        </ul>
      </nav>
    </div>
  </header>`;
}

function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="site-logo" style="margin-bottom:0">
            <span class="logo-text" style="display:flex">
              <span class="logo-script">Elsberry</span>
              <span class="logo-block">Laundry Co.</span>
              <span class="logo-sub">Wash · Dry · Fold</span>
            </span>
          </div>
          <p>Serving Elsberry and the surrounding Lincoln County area since day one. Clean clothes, friendly faces, and a business built right here at home.</p>
          <div class="footer-social">
            <a href="https://www.facebook.com/people/Elsberry-Laundry-Co/61590427354394/" title="Facebook">f</a>
            <a href="#" title="Instagram">ig</a>
            <a href="#" title="Google">g</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="self-service.html">Self-Service Laundry</a></li>
            <li><a href="wash-fold.html">Wash & Fold</a></li>
            <li><a href="commercial.html">Commercial Laundry</a></li>
            <li><a href="hotels.html">Hotel Service</a></li>
            <li><a href="airbnb.html">Airbnb Service</a></li>
            <li><a href="pricing.html">Pricing</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="reviews.html">Customer Reviews</a></li>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Find Us</h4>
          <div class="footer-contact-item">
            <span class="icon">📍</span>
            <span>306 N. Main St<br>Elsberry, MO 63343</span>
          </div>
          <div class="footer-contact-item">
            <span class="icon">📞</span>
            <a href="tel:5734855136" style="color:inherit">573-485-5136</a>
          </div>
          <div class="footer-contact-item">
            <span class="icon">✉</span>
            <a href="mailto:info@elsberrylaundry.com" style="color:inherit">info@elsberrylaundry.com</a>
          </div>
          <div class="footer-contact-item">
            <span class="icon">🕐</span>
            <span>Open Daily · 8 AM - 8 PM</span>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Elsberry Laundry Co. · Elsberry, Missouri · All rights reserved.</span>
        <span><a href="#">Privacy Policy</a> · <a href="#">Terms of Use</a></span>
      </div>
    </div>
  </footer>`;
}

function initNav() {
  const toggle = document.getElementById('nav-toggle');
  const header = document.getElementById('site-header');
  if (toggle && header) {
    toggle.addEventListener('click', () => {
      header.classList.toggle('nav-mobile-open');
    });
  }
  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

function setPhoneError(input, message) {
  input.style.borderColor = 'var(--error, #c0392b)';
  input.title = message;
  let hint = input.parentElement.querySelector('.phone-error-hint');
  if (!hint) {
    hint = document.createElement('span');
    hint.className = 'phone-error-hint';
    hint.style.cssText = 'display:block;font-size:12px;color:var(--error,#c0392b);margin-top:4px';
    input.parentElement.appendChild(hint);
  }
  hint.textContent = message;
}

function clearPhoneError(input) {
  input.style.borderColor = '';
  input.title = '';
  const hint = input.parentElement.querySelector('.phone-error-hint');
  if (hint) hint.remove();
}

function formatPhoneDigits(digits) {
  if (digits.length === 0) return '';
  if (digits.length <  3)  return `(${digits}`;
  if (digits.length === 3) return `(${digits}) `;
  if (digits.length <  6)  return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  if (digits.length === 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}-`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function initPhoneInput(input) {
  input.addEventListener('input', () => {
    const digits = input.value.replace(/\D/g, '').slice(0, 10);
    input.value = formatPhoneDigits(digits);
    clearPhoneError(input);
  });

  input.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;

    if (e.key === 'Backspace') {
      const val = input.value;
      const atEnd = input.selectionStart === input.selectionEnd && input.selectionStart === val.length;
      if (atEnd && val.endsWith(') ')) {
        // Remove ') ' and the 3rd digit together so the cursor doesn't stall at the boundary
        e.preventDefault();
        input.value = val.slice(0, -3);
        clearPhoneError(input);
      } else if (atEnd && val.endsWith('-')) {
        // Remove '-' and the 6th digit together for the same reason
        e.preventDefault();
        input.value = val.slice(0, -2);
        clearPhoneError(input);
      }
      return;
    }

    const controlKeys = ['Delete','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Tab','Home','End','Enter'];
    if (!controlKeys.includes(e.key) && !/^\d$/.test(e.key)) {
      e.preventDefault();
    }
  });

  input.addEventListener('blur', () => {
    const digits = input.value.replace(/\D/g, '');
    if (digits.length > 0 && digits.length !== 10) {
      setPhoneError(input, 'Please enter a complete 10-digit phone number, e.g. (573) 485-5136.');
    }
  });

  input.addEventListener('focus', () => clearPhoneError(input));
}

function sendContactMessage() {
  const firstName = (document.getElementById('contact-first-name')?.value || '').trim();
  const lastName  = (document.getElementById('contact-last-name')?.value  || '').trim();
  const email     = (document.getElementById('contact-email')?.value       || '').trim();
  const phone     = (document.getElementById('contact-phone')?.value       || '').trim();
  const topic     = (document.getElementById('contact-topic')?.value       || '').trim();
  const message   = (document.getElementById('contact-message')?.value     || '').trim();

  if (!firstName || !email || !message) {
    alert('Please fill in your first name, email address, and message before sending.');
    return;
  }

  const phoneInput = document.getElementById('contact-phone');
  const phoneDigits = phone.replace(/\D/g, '');
  if (phoneDigits.length > 0 && phoneDigits.length !== 10) {
    if (phoneInput) setPhoneError(phoneInput, 'Please enter a complete 10-digit phone number, e.g. (573) 485-5136.');
    phoneInput?.focus();
    return;
  }
  if (phoneInput) clearPhoneError(phoneInput);

  const name    = [firstName, lastName].filter(Boolean).join(' ');
  const subject = `Website Inquiry${topic ? ': ' + topic : ''} - ${name}`;
  const body    =
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    (phone   ? `Phone: ${phone}\n`   : '') +
    (topic   ? `Topic: ${topic}\n`   : '') +
    `\nMessage:\n${message}`;

  window.location.href =
    `mailto:info@elsberrylaundry.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const topBarEl = document.getElementById('top-bar-placeholder');
  const navEl    = document.getElementById('nav-placeholder');
  const footerEl = document.getElementById('footer-placeholder');
  if (topBarEl) topBarEl.outerHTML = renderTopBar();
  if (navEl)    navEl.outerHTML    = renderNav();
  if (footerEl) footerEl.outerHTML = renderFooter();
  initNav();

  const submitBtn = document.getElementById('contact-submit');
  if (submitBtn) submitBtn.addEventListener('click', sendContactMessage);

  const phoneInput = document.getElementById('contact-phone');
  if (phoneInput) initPhoneInput(phoneInput);
});
