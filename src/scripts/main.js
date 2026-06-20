import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const root = document.documentElement;
root.classList.remove('no-js');
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = window.matchMedia('(pointer: fine)').matches;

/* ---------- Smooth scroll (Lenis) ---------- */
let lenis = null;
if (!reduce) {
  lenis = new Lenis({ lerp: 0.1, smoothWheel: true, wheelMultiplier: 0.9 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  root.classList.add('lenis');
}

/* ---------- Anchor navigation ---------- */
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id && id.length > 1) {
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        if (lenis) lenis.scrollTo(el, { offset: -70 });
        else el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

/* ---------- Reveal on scroll (IntersectionObserver, robusto) ----------
   Usamos IntersectionObserver en vez de ScrollTrigger para las apariciones:
   se dispara de forma fiable aunque el scroll suave de Lenis pase rápido por
   una sección, y nunca deja un elemento colgado en opacity 0. */
(() => {
  const singles = gsap.utils.toArray('[data-reveal]');
  const items = [];
  gsap.utils.toArray('[data-reveal-group]').forEach((group) => {
    group.querySelectorAll('[data-reveal-item]').forEach((el, i) => {
      // escalonado por posición dentro del grupo
      el.dataset.revealDelay = (i * 0.08).toFixed(2);
      items.push(el);
    });
  });
  const all = [...singles, ...items];
  if (!all.length) return;

  if (reduce) {
    gsap.set(all, { opacity: 1, y: 0 });
    return;
  }

  gsap.set(all, { opacity: 0, y: 40 });
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      gsap.to(el, {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        delay: parseFloat(el.dataset.revealDelay || 0),
      });
      obs.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  all.forEach((el) => io.observe(el));
})();

/* ---------- Animated counters ---------- */
gsap.utils.toArray('[data-count]').forEach((el) => {
  const to = parseFloat(el.dataset.count);
  const locale = el.dataset.locale || 'es-ES';
  const obj = { v: 0 };
  ScrollTrigger.create({
    trigger: el, start: 'top 92%', once: true,
    onEnter: () => gsap.to(obj, {
      v: to, duration: 1.8, ease: 'power2.out',
      onUpdate: () => { el.textContent = Math.round(obj.v).toLocaleString(locale); },
    }),
  });
});

/* ---------- Hero split text (por palabras, sin cortes a media palabra) ---------- */
gsap.utils.toArray('[data-split]').forEach((line) => {
  const text = line.textContent;
  line.textContent = '';
  const words = text.split(' ');
  words.forEach((word, wi) => {
    if (word.length) {
      const wspan = document.createElement('span');
      wspan.className = 'word';
      [...word].forEach((ch) => {
        const s = document.createElement('span');
        s.className = 'char';
        s.textContent = ch;
        wspan.appendChild(s);
      });
      line.appendChild(wspan);
    }
    if (wi < words.length - 1) line.appendChild(document.createTextNode(' '));
  });
});
gsap.from('[data-split] .char', {
  yPercent: 120, opacity: 0, duration: 0.9, ease: 'power4.out', stagger: 0.025, delay: 0.25,
});

/* ---------- Magnetic buttons ---------- */
if (!reduce && fine) {
  document.querySelectorAll('[data-magnetic]').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      gsap.to(btn, { x: x * 0.4, y: y * 0.5, duration: 0.4, ease: 'power2.out' });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    });
  });
}

/* ---------- Accent cursor ---------- */
const dot = document.querySelector('.cursor-dot');
if (dot && !reduce && fine) {
  let mx = 0, my = 0, dx = 0, dy = 0;
  window.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; dot.style.opacity = '1'; });
  gsap.ticker.add(() => {
    dx += (mx - dx) * 0.2; dy += (my - dy) * 0.2;
    dot.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
  });
  document.querySelectorAll('a, button, [data-magnetic], [data-cursor]').forEach((el) => {
    el.addEventListener('mouseenter', () => { dot.style.width = '54px'; dot.style.height = '54px'; dot.style.background = 'rgba(201,162,75,0.15)'; });
    el.addEventListener('mouseleave', () => { dot.style.width = '30px'; dot.style.height = '30px'; dot.style.background = 'transparent'; });
  });
}

/* ---------- Header behaviour ---------- */
const header = document.querySelector('[data-header]');
if (header) {
  let last = 0;
  ScrollTrigger.create({
    start: 0, end: 'max',
    onUpdate: (self) => {
      const y = self.scroll();
      header.classList.toggle('is-scrolled', y > 100);
      header.classList.toggle('is-hidden', y > last && y > 320);
      last = y;
    },
  });
}

/* ---------- Floating CTA ---------- */
const fab = document.querySelector('[data-fab]');
if (fab) {
  ScrollTrigger.create({
    trigger: '#inicio', start: 'bottom 75%',
    onEnter: () => fab.classList.add('is-visible'),
    onLeaveBack: () => fab.classList.remove('is-visible'),
  });
}

/* ---------- Language bars ---------- */
gsap.utils.toArray('[data-bar]').forEach((bar) => {
  gsap.fromTo(bar, { width: '0%' }, {
    width: bar.dataset.bar + '%', duration: 1.4, ease: 'power3.out',
    scrollTrigger: { trigger: bar, start: 'top 92%' },
  });
});

/* ---------- Experience horizontal scroll (pinned) ---------- */
const hWrap = document.querySelector('[data-h-wrap]');
const hTrack = document.querySelector('[data-h-track]');
if (hWrap && hTrack && !reduce && window.innerWidth > 900) {
  const distance = () => hTrack.scrollWidth - hWrap.clientWidth;
  gsap.to(hTrack, {
    x: () => -distance(), ease: 'none',
    scrollTrigger: {
      trigger: hWrap, start: 'top top', end: () => '+=' + distance(),
      pin: true, scrub: 1, invalidateOnRefresh: true, anticipatePin: 1,
    },
  });
}

/* ---------- Mobile menu ---------- */
const burger = document.querySelector('[data-burger]');
const headerEl = document.querySelector('[data-header]');
if (burger && headerEl) {
  const close = () => { headerEl.classList.remove('is-open'); burger.setAttribute('aria-expanded', 'false'); };
  burger.addEventListener('click', () => {
    const open = headerEl.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.querySelectorAll('[data-nav] a').forEach((a) => a.addEventListener('click', close));
}

/* ---------- Scroll progress bar ---------- */
const prog = document.querySelector('[data-progress]');
if (prog) {
  ScrollTrigger.create({
    start: 0, end: 'max',
    onUpdate: (self) => { prog.style.width = (self.progress * 100).toFixed(2) + '%'; },
  });
}

/* ---------- Hero mouse parallax ---------- */
const heroEl = document.querySelector('#inicio');
const geoEl = document.querySelector('.hero__geo');
const photoEl = document.querySelector('.hero__photo');
if (heroEl && !reduce && fine) {
  heroEl.addEventListener('mousemove', (e) => {
    const cx = e.clientX / window.innerWidth - 0.5;
    const cy = e.clientY / window.innerHeight - 0.5;
    if (geoEl) gsap.to(geoEl, { x: cx * 44, y: cy * 32, duration: 0.7, ease: 'power2.out' });
    if (photoEl) gsap.to(photoEl, { x: cx * -24, y: cy * -18, duration: 0.7, ease: 'power2.out' });
  });
  heroEl.addEventListener('mouseleave', () => {
    if (geoEl) gsap.to(geoEl, { x: 0, y: 0, duration: 0.9, ease: 'power2.out' });
    if (photoEl) gsap.to(photoEl, { x: 0, y: 0, duration: 0.9, ease: 'power2.out' });
  });
}

/* ---------- Card tilt 3D ---------- */
if (!reduce && fine) {
  document.querySelectorAll('[data-tilt]').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(800px) rotateX(${-py * 6}deg) rotateY(${px * 6}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
}

/* ---------- Parallax decorative shapes ---------- */
gsap.utils.toArray('[data-parallax]').forEach((el) => {
  const speed = parseFloat(el.dataset.parallax) || 0.2;
  gsap.to(el, {
    yPercent: speed * 100, ease: 'none',
    scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
  });
});

/* ---------- Modal: recibir CV ---------- */
const cvModal = document.querySelector('[data-cv-modal]');
if (cvModal) {
  const form = cvModal.querySelector('[data-cv-form]');
  const msg = cvModal.querySelector('[data-cv-msg]');
  const openModal = () => {
    cvModal.hidden = false;
    document.documentElement.classList.add('modal-open');
    if (lenis) lenis.stop();
    const first = cvModal.querySelector('input[name="firstName"]');
    if (first) setTimeout(() => first.focus(), 50);
  };
  const closeModal = () => {
    cvModal.hidden = true;
    document.documentElement.classList.remove('modal-open');
    if (lenis) lenis.start();
  };
  document.querySelectorAll('[data-cv-open]').forEach((b) => b.addEventListener('click', openModal));
  cvModal.querySelectorAll('[data-cv-close]').forEach((b) => b.addEventListener('click', closeModal));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !cvModal.hidden) closeModal(); });

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      msg.className = 'cvform__msg';
      msg.textContent = form.dataset.sending;
      btn.disabled = true;
      try {
        const data = Object.fromEntries(new FormData(form).entries());
        data.consent = form.querySelector('[name="consent"]').checked;
        const res = await fetch(form.dataset.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data),
        });
        const out = await res.json().catch(() => ({}));
        if (!res.ok || !out.success) throw new Error('request failed');
        msg.textContent = form.dataset.ok;
        msg.classList.add('is-ok');
        form.reset();
      } catch (err) {
        msg.textContent = form.dataset.err;
        msg.classList.add('is-err');
      } finally {
        btn.disabled = false;
      }
    });
  }
}

window.addEventListener('load', () => ScrollTrigger.refresh());
