// ---------- Story animations ----------
// Content is ALWAYS visible by default. When a block scrolls in, it gets .rv-in, which only
// plays a one-off CSS animation on top (rise in, count up, bars grow, stamp, rings…).
// With JS off, reduced motion on, or a missed signal, the page simply shows without animation.
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('motion');

  // blocks that rise in, one after another inside the same parent
  const REVEAL = [
    '.hero__text > *', '.hero .arch',
    '.cs-hero__text > *', '.cs-hero .arch', '.cs-hero__visual', '.cs-poster', '.b35-hero__text > *', '.collage',
    '.section-title', '.card', '.numbers .stat', '.posters__head > *', '.poster',
    '.cs-section > h2', '.cs-section__body > *', '.part__text > *', '.part__logo', '.part__poster',
    '.did li', '.facts li', '.ground li', '.series li', '.views__bars li', '.values article', '.day li',
    '.fix dl > div', '.target__key li', '.flow-steps li', '.role-strip li', '.top-post__row li', '.memo__goals li',
    '.roll__head > *', '.filmstrip-wrap', '.golden > *', '.night__head > *', '.night__grid li',
    '.school', '.certs li', '.about__text > *', '.contact > *', '.exhibit__head > *', '.next',
  ].join(',');
  // story pieces with their own animation (no generic rise needed)
  const STORY = '.target__rings, .views, .meter, .poster__stamp';

  const els = [...document.querySelectorAll(REVEAL + ',' + STORY)].filter((el) => !el.closest('dialog'));
  const order = new Map();
  els.forEach((el) => {
    const n = order.get(el.parentElement) || 0;
    order.set(el.parentElement, n + 1);
    el.style.setProperty('--rv-i', Math.min(n, 6));
    el.classList.add('rv');
  });

  // ---- count-up: numbers roll from 0 to their real value, then snap back to the exact text ----
  const NUM = '.stat b, .facts strong, .top-post__big b, .top-post__row b, .series__num b, .meter figcaption strong, .views__track b';
  const ease = (t) => 1 - Math.pow(1 - t, 3);
  function countUp(el) {
    if (el.dataset.counted) return;
    const final = el.textContent;
    const m = final.match(/^(\D*?)(\d[\d,]*\.?\d*)(.*)$/);
    if (!m) return;
    el.dataset.counted = '1';
    const [, pre, num, post] = m;
    const target = parseFloat(num.replace(/,/g, ''));
    const decimals = (num.split('.')[1] || '').length;
    const commas = num.includes(',');
    const fmt = (v) => (commas
      ? Number(v.toFixed(decimals)).toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
      : v.toFixed(decimals));
    const t0 = performance.now(), dur = 1300;
    el.style.fontVariantNumeric = 'tabular-nums';
    (function tick(now) {
      const t = Math.min(1, (now - t0) / dur);
      el.textContent = pre + fmt(target * ease(t)) + post;
      if (t < 1) requestAnimationFrame(tick);
      else { el.textContent = final; el.style.fontVariantNumeric = ''; }
    })(t0);
  }
  const countIn = (scope) => { if (scope.matches(NUM)) countUp(scope); scope.querySelectorAll(NUM).forEach(countUp); };

  function reveal(el) {
    if (el.classList.contains('rv-in')) return;
    el.classList.add('rv-in');
    countIn(el);
  }

  // start a little before a block reaches the screen, so nothing ever looks empty
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { reveal(e.target); io.unobserve(e.target); } });
  }, { threshold: 0, rootMargin: '0px 0px 8% 0px' });
  els.forEach((el) => io.observe(el));

  // numbers outside a revealed block still count when they come on screen
  const numIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { countUp(e.target); numIO.unobserve(e.target); } });
  }, { threshold: .6 });
  document.querySelectorAll(NUM).forEach((el) => numIO.observe(el));
})();
