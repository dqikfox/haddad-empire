/* ================================================
   Hadad Family Website — Script
   ================================================ */

// Auto-update copyright year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ─── Mobile Menu ─────────────────────────────── */
const menuToggle = document.querySelector('.menu-toggle');
const siteNav    = document.getElementById('site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.textContent = isOpen ? 'Menu' : 'Close';
    siteNav.classList.toggle('open', !isOpen);
  });

  // Close menu when a nav link is clicked
  siteNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = 'Menu';
      siteNav.classList.remove('open');
    });
  });
}

/* ─── Scroll Reveal ───────────────────────────── */
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach(el => observer.observe(el));
} else {
  // Fallback: show all immediately for older browsers
  revealEls.forEach(el => el.classList.add('visible'));
}
