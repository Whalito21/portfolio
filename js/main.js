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
