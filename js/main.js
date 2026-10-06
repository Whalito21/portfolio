// ---------- Gallery flow ----------
// Rows marked [data-flow] drift slowly and loop. Hover, touch or keyboard focus
// pauses a row; it can always be swiped / scrolled by hand.
(function () {
  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('[data-flow]').forEach((flow) => {
    if (still) return;
    const track = flow.querySelector('.flow__track');

    // duplicate the photos once so the loop has no visible seam
    [...track.children].forEach((el) => {
      const copy = el.cloneNode(true);
      copy.setAttribute('aria-hidden', 'true');
      copy.tabIndex = -1;
      track.appendChild(copy);
    });

    const dir = flow.dataset.flow === 'right' ? -1 : 1;
    const speed = 0.6; // px per frame
    let pos = 0;
    let paused = false;
    let resumeTimer;

    const half = () => track.scrollWidth / 2;
    const wrap = (x) => { const h = half(); return h ? ((x % h) + h) % h : 0; };

    const pause = () => { clearTimeout(resumeTimer); paused = true; };
    const resumeLater = (ms) => { clearTimeout(resumeTimer); resumeTimer = setTimeout(() => { paused = false; }, ms); };

    flow.addEventListener('mouseenter', pause);
    flow.addEventListener('mouseleave', () => resumeLater(300));
    flow.addEventListener('touchstart', pause, { passive: true });
    flow.addEventListener('touchend', () => resumeLater(2500));
    flow.addEventListener('focusin', pause);
    flow.addEventListener('focusout', () => resumeLater(300));
    // keep our position in sync when someone scrolls by hand
    flow.addEventListener('scroll', () => { if (paused) pos = flow.scrollLeft; }, { passive: true });

    window.addEventListener('load', () => { pos = dir < 0 ? half() : 0; flow.scrollLeft = pos; });

    (function tick() {
      if (!paused) {
        pos = wrap(pos + dir * speed);
        flow.scrollLeft = pos;
      } else if (flow.scrollLeft !== wrap(flow.scrollLeft)) {
        flow.scrollLeft = pos = wrap(flow.scrollLeft);
      }
      requestAnimationFrame(tick);
    })();
  });
})();

// ---------- Image popup ----------
// Links with [data-lightbox] open their image in a <dialog>.
// Without JS the link still opens the image directly.
(function () {
  const box = document.getElementById('lightbox');
  if (!box || typeof box.showModal !== 'function') return;

  const img = box.querySelector('img');

  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-lightbox]');
    if (!link) return;
    e.preventDefault();
    const thumb = link.querySelector('img');
    img.src = link.href;
    img.alt = thumb ? thumb.alt : '';
    box.showModal();
  });

  // close on the × button or a click outside the image (Esc works natively)
  box.addEventListener('click', (e) => {
    if (e.target !== img) box.close();
  });
  box.addEventListener('close', () => { img.src = ''; });
})();

// ---------- Full gallery viewer ----------
// "View all photos" opens every gallery photo in a full-screen, swipe/scroll-through
// view. Tapping a photo on the wall opens the viewer at that photo.
(function () {
  const viewer = document.getElementById('viewer');
  const gallery = document.querySelector('.exhibit');
  if (!viewer || !gallery || typeof viewer.showModal !== 'function') return;

  const list = viewer.querySelector('.viewer__list');
  const count = viewer.querySelector('.viewer__count');

  // originals only (the moving rows also contain hidden clones)
  const photos = [...gallery.querySelectorAll('.frame:not([aria-hidden="true"]) img')]
    .map((img) => ({ src: img.getAttribute('src'), alt: img.alt, w: img.width, h: img.height }));
  const total = photos.length;

  const openBtn = gallery.querySelector('[data-viewer-open]');
  if (openBtn) openBtn.textContent = `View all ${total} photos`;

  list.innerHTML = photos.map((p, i) =>
    `<figure class="viewer__item" data-i="${i}"><img src="${p.src}" width="${p.w}" height="${p.h}" alt="${p.alt.replace(/"/g, '&quot;')}" loading="lazy"></figure>`
  ).join('');
  const items = [...list.children];

  const setCount = (i) => { count.textContent = `${i + 1} / ${total}`; };
  const current = () => Math.min(total - 1, Math.round(list.scrollTop / list.clientHeight));
  list.addEventListener('scroll', () => setCount(current()), { passive: true });

  function open(i) {
    document.documentElement.style.overflow = 'hidden';
    viewer.showModal();
    setCount(i);
    items[i].scrollIntoView({ block: 'start' });
  }

  if (openBtn) openBtn.addEventListener('click', () => open(0));

  // tap a framed photo → open the viewer there (capture phase, so the single-image popup doesn't fire)
  gallery.addEventListener('click', (e) => {
    const frame = e.target.closest('.frame');
    if (!frame) return;
    e.preventDefault();
    e.stopPropagation();
    const src = frame.querySelector('img').getAttribute('src');
    open(Math.max(0, photos.findIndex((p) => p.src === src)));
  }, true);

  viewer.querySelector('.viewer__close').addEventListener('click', () => viewer.close());
  viewer.addEventListener('close', () => { document.documentElement.style.overflow = ''; });

  // keyboard: arrows / page keys move one photo
  viewer.addEventListener('keydown', (e) => {
    const keys = { ArrowDown: 1, ArrowRight: 1, PageDown: 1, ArrowUp: -1, ArrowLeft: -1, PageUp: -1 };
    if (!(e.key in keys)) return;
    e.preventDefault();
    const now = current();
    const next = Math.min(total - 1, Math.max(0, now + keys[e.key]));
    items[next].scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
})();

// ---------- "Read the caption" ----------
// The button opens a full reading overlay (<dialog>) with an EN / Thai switch.
// When the button first scrolls into view it glows a few times to invite a tap
// (skipped for reduced motion).
(function () {
  const buttons = document.querySelectorAll('[data-reader-open]');
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    const reader = document.getElementById(btn.dataset.readerOpen);
    if (!reader || typeof reader.showModal !== 'function') return;

    const tabs = reader.querySelectorAll('[role="tab"]');
    const showLang = (lang) => {
      tabs.forEach((t) => t.setAttribute('aria-selected', String(t.dataset.lang === lang)));
      reader.querySelectorAll('.reader__text').forEach((text) => { text.hidden = text.dataset.lang !== lang; });
      reader.querySelector('.reader__scroll').scrollTop = 0;
    };

    btn.addEventListener('click', () => {
      btn.classList.remove('is-glowing');
      // open on the site's current language (Thai site → Thai caption first)
      showLang(document.documentElement.lang === 'th' ? 'th' : 'en');
      reader.showModal();
    });
    reader.querySelector('.reader__close').addEventListener('click', () => reader.close());
    // click on the dimmed backdrop (outside the panel) closes it
    reader.addEventListener('click', (e) => { if (e.target === reader) reader.close(); });

    tabs.forEach((tab) => tab.addEventListener('click', () => showLang(tab.dataset.lang)));
  });

  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-glowing');
      io.unobserve(entry.target);
    });
  }, { threshold: 1, rootMargin: '0px 0px -15% 0px' });
  buttons.forEach((btn) => {
    io.observe(btn);
    btn.addEventListener('animationend', () => btn.classList.remove('is-glowing'));
  });
})();

// ---------- B35 film strip: "you can swipe this" ----------
// First time the strip is on screen it peeks sideways and back. The hint chip and
// edge fade go away once the visitor scrolls the strip themselves.
(function () {
  const wrap = document.querySelector('.filmstrip-wrap');
  if (!wrap) return;
  const strip = wrap.querySelector('.filmstrip');
  let nudging = false;

  strip.addEventListener('scroll', () => {
    if (!nudging && strip.scrollLeft > 20) wrap.classList.add('is-swiped');
  }, { passive: true });

  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const io = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    io.disconnect();
    if (strip.scrollLeft > 0) return;
    nudging = true;
    // scroll-snap would cancel a small nudge, so switch it off for the peek
    strip.style.scrollSnapType = 'none';
    setTimeout(() => strip.scrollTo({ left: 90, behavior: 'smooth' }), 300);
    setTimeout(() => strip.scrollTo({ left: 0, behavior: 'smooth' }), 1100);
    setTimeout(() => { strip.style.scrollSnapType = ''; nudging = false; }, 1900);
  }, { threshold: .6 });
  io.observe(strip);
})();
