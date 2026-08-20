/* ============================================================
   FOOTER YEAR
============================================================ */
const yearEl = document.getElementById('year'); if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ============================================================
   JSON CONTENT LOADERS
   - projects.json, certifications.json
   - Each rendered into a scroller; empty array → empty state.
   - Fetch fails silently with empty state (e.g. file:// previews).
============================================================ */

/* helpers */
const esc = s => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

const githubIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-1.95c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.9-.39s1.98.13 2.9.39c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.44-2.7 5.42-5.27 5.7.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>`;

/* show empty state inside a scroller container */
function emptyState(container, { icon, title, body }) {
  container.classList.remove('scroller');
  container.classList.add('empty-wrap');
  container.innerHTML = `
    <div class="empty">
      <div class="icon">${icon}</div>
      <h3>${esc(title)}</h3>
      <p>${esc(body)}</p>
    </div>`;
}

/* render PROJECT cards */
function renderProjects(list, container) {
  if (!list.length) {
    return emptyState(container, {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
      title: 'Projects coming soon',
      body: 'Add entries to projects.json — they will appear here automatically.'
    });
  }
  container.innerHTML = list.map(p => {
    const cover = p.image
      ? `<div class="card-cover" style="background-image:url('${esc(p.image)}');background-size:cover;background-position:center;"></div>`
      : `<div class="card-cover"><span class="glyph">${esc(p.glyph || (p.title || '?')[0].toUpperCase())}</span></div>`;
    const tags = (p.tags || []).map(t => `<span class="tag">${esc(t)}</span>`).join('');
    const ghBtn = (p.github && p.github !== '#')
      ? `<a class="card-action" href="${esc(p.github)}" target="_blank" rel="noopener">${githubIcon}GitHub</a>`
      : '';
    const readMore = (p.link && p.link !== '#')
      ? `<a class="card-action" href="${esc(p.link)}" target="_blank" rel="noopener">Read more →</a>`
      : '';
    const actions = (ghBtn || readMore) ? `<div class="card-actions">${ghBtn}${readMore}</div>` : '';
    return `
      <article class="card" data-id="${esc(p.id)}">
        ${cover}
        <h3 class="card-title">${esc(p.title)}</h3>
        <p class="card-desc">${esc(p.description)}</p>
        <div class="tags">${tags}</div>
        <div class="card-meta"><span>${esc(p.date || '')}</span></div>
        ${actions}
      </article>`;
  }).join('');
}

/* render CERTIFICATION cards */
function renderCerts(list, container) {
  if (!list.length) {
    return emptyState(container, {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
      title: 'Coming soon',
      body: 'Certifications will appear here once added — populate certifications.json to fill this section automatically.'
    });
  }
  container.innerHTML = list.map(c => {
    const tags = (c.tags || []).map(t => `<span class="tag">${esc(t)}</span>`).join('');
    let actions = '';
    if (c.link && c.link !== '#') {
      const external = /^https?:\/\//i.test(c.link);
      const attrs = external ? ' target="_blank" rel="noopener"' : '';
      const label = c.linkLabel || 'View credential →';
      actions = `<div class="card-actions"><a class="card-action" href="${esc(c.link)}"${attrs}>${esc(label)}</a></div>`;
    }
    return `
      <article class="card" data-id="${esc(c.id)}">
        <div class="card-cover"><span class="glyph">✦</span></div>
        <div class="card-meta" style="justify-content:flex-start;">
          <span style="color:var(--accent);text-transform:uppercase;letter-spacing:0.1em;font-size:0.72rem;">${esc(c.issuer || '')}</span>
        </div>
        <h3 class="card-title">${esc(c.title)}</h3>
        <p class="card-desc">${esc(c.description || '')}</p>
        <div class="tags">${tags}</div>
        <div class="card-meta"><span>${esc(c.date || '')}</span></div>
        ${actions}
      </article>`;
  }).join('');
}


/* fetch + render pipeline
   - Markup already has static fallback cards baked in (for file:// previews,
     where fetch can't read local files, and for no-JS contexts).
   - null means "fetch failed" → leave the static fallback alone.
   - [] means "fetched successfully, genuinely empty" → show the empty state. */
async function loadJSON(url) {
  try {
    const r = await fetch(url, { cache: 'no-cache' });
    if (!r.ok) throw new Error(r.status);
    return await r.json();
  } catch (e) {
    console.warn(`Could not load ${url} — keeping existing markup.`, e);
    return null;
  }
}

async function hydrate() {
  const containers = {
    projects: document.querySelectorAll('[data-source="projects.json"]'),
    certs:    document.querySelectorAll('[data-source="certifications.json"]'),
  };

  const needs = (k) => containers[k] && containers[k].length > 0;

  const [projects, certs] = await Promise.all([
    needs('projects') ? loadJSON('projects.json') : Promise.resolve(null),
    needs('certs')    ? loadJSON('certifications.json') : Promise.resolve(null),
  ]);

  if (projects !== null) containers.projects.forEach(c => renderProjects(projects, c));
  if (certs !== null) containers.certs.forEach(c => renderCerts(certs, c));
}

/* ============================================================
   NAV
   - mobile toggle
   - scrolled state
   - scrollspy
============================================================ */
const nav = document.getElementById('nav');
const navLinks = document.getElementById('navLinks');
const navToggle = document.getElementById('navToggle');

if (navToggle && navLinks) navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});
if (navLinks) navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

const onScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 24);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* Scrollspy via IntersectionObserver — keeps active link in sync with viewport.
   Special case: when scrolled within the hero region (before the first observable
   section enters the band), clear all active states so no stale link stays lit. */
const sections = document.querySelectorAll('section[id], header[id]');
const linkMap = {};
if (navLinks) navLinks.querySelectorAll('a[data-link]').forEach(a => { linkMap[a.dataset.link] = a; });

function clearActive() {
  Object.values(linkMap).forEach(l => l.classList.remove('active'));
}

const spy = new IntersectionObserver(entries => {
  entries.forEach(en => {
    const id = en.target.id;
    if (!linkMap[id]) return;
    if (en.isIntersecting) {
      clearActive();
      linkMap[id].classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => spy.observe(s));

/* Clear active state when scrolled near the very top of the page (above any section). */
const topSentinel = document.getElementById('top');
if (topSentinel) {
  const topObserver = new IntersectionObserver(entries => {
    entries.forEach(en => {
      // While the hero/top element is more than 50% visible, no section is "active".
      if (en.intersectionRatio > 0.5) clearActive();
    });
  }, { threshold: [0, 0.25, 0.5, 0.75, 1] });
  topObserver.observe(topSentinel);
}

/* ============================================================
   SCROLL REVEAL
============================================================ */
const reveal = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add('in');
      reveal.unobserve(en.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));

/* kick off JSON hydration */
hydrate();

/* ============================================================
   TOOLBAR
============================================================ */
const root = document.documentElement;
const toolbar = document.getElementById('toolbar');
const toolbarToggle = document.getElementById('toolbarToggle');
const darkSwitch = document.getElementById('darkSwitch');
const shapesSwitch = document.getElementById('shapesSwitch');

const STORE = 'aparna_portfolio_prefs_v1';
const prefs = JSON.parse(localStorage.getItem(STORE) || '{}');

function applyPrefs() {
  root.setAttribute('data-accent', prefs.accent || 'lavender');
  root.setAttribute('data-theme', prefs.theme || 'dark');
  root.setAttribute('data-cards', prefs.cards || 'elevated');
  root.setAttribute('data-shapes', prefs.shapes || 'on');

  // sync UI
  document.querySelectorAll('.tb-swatch').forEach(s =>
    s.classList.toggle('active', s.dataset.accent === (prefs.accent || 'lavender'))
  );
  document.querySelectorAll('.tb-seg button[data-cards]').forEach(b =>
    b.classList.toggle('active', b.dataset.cards === (prefs.cards || 'elevated'))
  );
  darkSwitch.classList.toggle('on', (prefs.theme || 'light') === 'dark');
  shapesSwitch.classList.toggle('on', (prefs.shapes || 'on') === 'on');
}
function save() { localStorage.setItem(STORE, JSON.stringify(prefs)); }

applyPrefs();

toolbarToggle.addEventListener('click', () => toolbar.classList.toggle('open'));
document.addEventListener('click', e => {
  if (!toolbar.contains(e.target)) toolbar.classList.remove('open');
});

document.querySelectorAll('.tb-swatch').forEach(s => {
  s.addEventListener('click', () => {
    prefs.accent = s.dataset.accent;
    save(); applyPrefs();
  });
});
document.querySelectorAll('.tb-seg button[data-cards]').forEach(b => {
  b.addEventListener('click', () => {
    prefs.cards = b.dataset.cards;
    save(); applyPrefs();
  });
});
darkSwitch.addEventListener('click', () => {
  prefs.theme = (prefs.theme === 'dark') ? 'light' : 'dark';
  save(); applyPrefs();
});
shapesSwitch.addEventListener('click', () => {
  prefs.shapes = (prefs.shapes === 'off') ? 'on' : 'off';
  save(); applyPrefs();
});

/* ============================================================
   CERTIFICATE PDF PREVIEW MODAL
   - Opens with a fade animation for cards whose action button
     carries data-pdf (a path to a local PDF certificate).
============================================================ */
const certModal = document.getElementById('certModal');
if (certModal) {
  const certModalFrame = document.getElementById('certModalFrame');
  const certModalTitle = document.getElementById('certModalTitle');
  const certModalOpenLink = document.getElementById('certModalOpenLink');
  const certModalClose = document.getElementById('certModalClose');
  let lastFocused = null;

  function openCertModal(btn) {
    const pdf = btn.dataset.pdf;
    if (!pdf) return;
    lastFocused = document.activeElement;
    certModalTitle.textContent = btn.dataset.pdfTitle || 'Certificate';
    certModalFrame.src = pdf;
    certModalOpenLink.href = pdf;
    certModal.hidden = false;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => certModal.classList.add('open'));
    certModalClose.focus();
  }

  function closeCertModal() {
    certModal.classList.remove('open');
    document.body.style.overflow = '';
    const onEnd = (e) => {
      if (e.target !== certModal) return;
      certModal.hidden = true;
      certModalFrame.src = '';
      certModal.removeEventListener('transitionend', onEnd);
    };
    certModal.addEventListener('transitionend', onEnd);
    if (lastFocused) lastFocused.focus();
  }

  document.addEventListener('click', e => {
    const btn = e.target.closest('.cert-pdf-btn');
    if (btn) { openCertModal(btn); return; }
    if (e.target.closest('[data-cert-modal-close]')) closeCertModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && certModal.classList.contains('open')) closeCertModal();
  });
}

/* ============================================================
   CONTACT FORM (decorative validation only)
============================================================ */
const sendBtnEl = document.getElementById('sendBtn'); if (sendBtnEl) sendBtnEl.addEventListener('click', () => {
  const fields = ['name','email','subj','msg'];
  let valid = true;
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (!el.value.trim()) { el.style.borderColor = '#e07c8c'; valid = false; }
    else { el.style.borderColor = ''; }
  });
  if (!valid) return;
  const btn = document.getElementById('sendBtn');
  const original = btn.innerHTML;
  btn.innerHTML = '✓ Thank you';
  setTimeout(() => { btn.innerHTML = original; fields.forEach(id => document.getElementById(id).value = ''); }, 2200);
});