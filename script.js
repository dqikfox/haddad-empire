const menuToggle = document.querySelector("[data-menu-toggle]");
const siteNav = document.querySelector("[data-site-nav]");
const yearTarget = document.querySelector("[data-current-year]");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear());
}

const currentPage = window.location.pathname.split("\\").pop() || window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("[data-nav-link]").forEach((link) => {
  const linkTarget = link.getAttribute("href");

  if (linkTarget === currentPage || (currentPage === "" && linkTarget === "index.html")) {
    link.classList.add("is-active");
  }
});

/* ─── Scroll Reveal ───────────────────────────── */
const revealElements = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window && revealElements.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  revealElements.forEach((el) => observer.observe(el));
} else {
  revealElements.forEach((el) => el.classList.add("is-visible"));
}
