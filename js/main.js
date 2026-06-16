/* ─────────────────────────────────────────────────────────
   Global Solutions — main.js
   Scroll animations · Nav behaviour · Micro-interactions
   ───────────────────────────────────────────────────────── */

(function () {
  'use strict';

  /* ── Scroll-reveal via IntersectionObserver ─────────────── */
  const revealEls = document.querySelectorAll('.reveal');

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach((el) => io.observe(el));

  /* ── Nav: add .scrolled class on scroll ──────────────────── */
  const nav = document.getElementById('nav');

  const onScroll = () => {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  /* ── Parallax: hero background text ─────────────────────── */
  const heroBgText = document.querySelector('.hero__bg-text');

  if (heroBgText && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const parallaxHero = () => {
      const y = window.scrollY;
      heroBgText.style.transform = `translateY(${y * 0.25}px)`;
    };
    window.addEventListener('scroll', parallaxHero, { passive: true });
  }

  /* ── Stagger cards in grids ──────────────────────────────── */
  const staggerGroups = [
    '.services__grid .service-card',
    '.clients__grid .client-tile',
    '.process__steps .process__step',
  ];

  staggerGroups.forEach((selector) => {
    const items = document.querySelectorAll(selector);
    items.forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.1}s`;
    });
  });

  /* ── Active nav link highlight on section enter ──────────── */
  const sections = document.querySelectorAll('section[id]');
  const navCta = document.querySelector('.nav__cta');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id === 'contact') {
          navCta.style.color = 'var(--gold)';
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((s) => sectionObserver.observe(s));

  /* ── Smooth scroll for anchor links (fallback) ────────────── */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Hero rule animate on load ────────────────────────────── */
  const heroRule = document.querySelector('.hero__rule');
  if (heroRule) {
    setTimeout(() => heroRule.classList.add('visible'), 400);
  }

})();
