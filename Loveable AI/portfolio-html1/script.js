/* ========== Data ========== */
const skills = [
  { num: '01', title: 'Webflow & CMS', items: ['Webflow', 'CMS Collections', 'Interactions', 'Custom Code'] },
  { num: '02', title: 'Frontend',      items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript'] },
  { num: '03', title: 'E-commerce',    items: ['Shopify', 'Liquid', 'Theme Dev', 'Storefront UX'] },
  { num: '04', title: 'Funnels & Marketing', items: ['Landing Pages', 'A/B Testing', 'Lead Capture', 'Conversion'] },
  { num: '05', title: 'Tools',         items: ['Git', 'Jira', 'Figma', 'ClickUp'] },
  { num: '06', title: 'Soft Skills',   items: ['Communication', 'Detail-Oriented', 'Ownership', 'Speed'] },
];

const experience = [
  { role: 'Webflow Developer & Frontend Developer', company: 'Deadon Agency', period: 'Sep 2023 – Present',
    text: 'Developing custom Webflow and frontend builds end-to-end — translating design into pixel-perfect, responsive, performant experiences for agency clients.' },
  { role: 'Funnel Builder', company: 'Deal.ai', period: '2022 – 2023',
    text: 'Built and optimized marketing & sales funnels for an AI SaaS — combining frontend craft with conversion-focused iteration.' },
  { role: 'Software Frontend Engineer & Webflow Senior Developer', company: 'Punch', period: '2021 – 2022',
    text: 'Led senior-level Webflow and frontend engineering work — architecting CMS structures, building interactive layouts, and mentoring on QA discipline.' },
  { role: 'Shopify Developer', company: 'RashFlash', period: '2020 – 2021',
    text: 'Built and customized Shopify storefronts and theme components, improving conversion and ensuring smooth, defect-free shopping experiences.' },
];

const services = [
  { title: 'Webflow Development', desc: 'Custom Webflow builds with clean CMS architecture, interactions, and CMS-driven layouts that the marketing team can actually own.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>' },
  { title: 'Frontend Engineering', desc: 'React, HTML, CSS, JavaScript — turning Figma designs into responsive, accessible, performant interfaces.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>' },
  { title: 'Shopify Customization', desc: 'Liquid theme work, custom sections, and storefront UX improvements that lift conversion and reduce friction.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>' },
  { title: 'Funnel Building', desc: 'End-to-end funnels — landing pages, lead capture, A/B-tested offers — built to convert and easy to iterate on.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>' },
];

const projects = [
  {
    id: 'highest-stakes',
    title: 'The Highest of Stakes',
    client: 'Punch Group',
    short: 'Webflow build with CMS integration, optimized for performance and UI consistency.',
    description: 'End-to-end Webflow development including custom layouts, CMS structure, and interaction design. Conducted thorough QA across breakpoints, browsers, and devices to guarantee pixel-perfect delivery.',
    role: 'Webflow Senior Developer',
    year: '2023',
    tags: ['Webflow', 'CMS', 'UI/UX Review', 'Performance'],
    highlights: [
      'Custom Webflow CMS architecture for editorial content',
      'Cross-browser & responsive QA with documented defect tracking',
      'Lighthouse performance optimization (90+ scores)'
    ],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>'
  },
  {
    id: 'dressbarn',
    title: 'DressBarn',
    client: 'RashFlash',
    short: 'Shopify storefront customization with focus on UX, responsiveness, and conversion.',
    description: 'Built and customized Shopify pages and theme components for DressBarn — improving the shopping experience, fixing functional issues, and ensuring a smooth checkout flow on every device.',
    role: 'Shopify Developer',
    year: '2022',
    tags: ['Shopify', 'Liquid', 'Theme Customization', 'QA'],
    highlights: [
      'Custom Liquid sections & dynamic product modules',
      'Defect identification and regression testing across the funnel',
      'Mobile-first UX refinements that lifted engagement'
    ],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>'
  },
  {
    id: 'deal-funnels',
    title: 'Conversion Funnels',
    client: 'Deal.ai',
    short: 'High-converting marketing funnels built and optimized for AI-powered SaaS launches.',
    description: 'Designed and built end-to-end marketing funnels for Deal.ai — covering lead capture, nurture sequences, and offer pages. Iterated based on analytics to improve conversion rates.',
    role: 'Funnel Builder & Frontend Developer',
    year: '2022 – 2023',
    tags: ['Funnel', 'React', 'A/B Testing', 'Conversion'],
    highlights: [
      'Built reusable funnel components in React',
      'Iterative A/B testing with measurable lift',
      'Tight collaboration with marketing & design'
    ],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>'
  },
];

// IMPORTANT: replace `url` values with your real credential links
const certifications = [
  { title: 'Webflow Expert',              issuer: 'Webflow',  year: '2023', url: '#' },
  { title: 'Shopify Theme Development',   issuer: 'Shopify',  year: '2022', url: '#' },
  { title: 'Frontend Web Development',    issuer: 'Meta',     year: '2022', url: '#' },
];

const education = [
  { num: '01', title: 'MSc IT & Project Management', meta: 'University of the West of Scotland',
    text: "Master's degree bridging technology and management — agile methodologies, project lifecycles, and software quality." },
  { num: '02', title: 'BSc Computer Science', meta: 'COMSATS University',
    text: 'Foundation in algorithms, data structures, software engineering, and web technologies.' },
];

const channels = [
  { label: 'Email',       value: 'ahmadazhar955@gmail.com', href: 'mailto:ahmadazhar955@gmail.com',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>' },
  { label: 'Phone (PK)',  value: '+92 304 4044436', href: 'tel:+923044044436',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>' },
  { label: 'Phone (UK)',  value: '+44 7346 893954', href: 'tel:+447346893954',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>' },
  { label: 'Location',    value: 'Lahore, Pakistan', href: '#',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>' },
];

const TO_EMAIL = 'ahmadazhar955@gmail.com';

/* ========== Render ========== */
const $ = (sel) => document.querySelector(sel);

// Marquee
const marqueeItems = ['Webflow', 'React', 'Shopify', 'JavaScript', 'TypeScript', 'Liquid', 'Funnel', 'CSS3', 'HTML5', 'Figma'];
$('#marqueeTrack').innerHTML = [...marqueeItems, ...marqueeItems, ...marqueeItems]
  .map(s => `<span>${s} <i>◆</i></span>`).join('');

// Skills
$('#skillsGrid').innerHTML = skills.map(s => `
  <div class="card">
    <span class="card-num">${s.num} — ${s.title}</span>
    <ul>${s.items.map(i => `<li>${i}</li>`).join('')}</ul>
  </div>`).join('');

// Timeline
$('#timeline').innerHTML = experience.map(e => `
  <div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-card">
      <p class="company">${e.company}</p>
      <h3 class="role">${e.role}</h3>
      <p class="period">${e.period}</p>
      <p>${e.text}</p>
    </div>
  </div>`).join('');

// Services
$('#servicesGrid').innerHTML = services.map(s => `
  <div class="service-card">
    <div class="s-icon">${s.icon}</div>
    <h3>${s.title}</h3>
    <p>${s.desc}</p>
  </div>`).join('');

// Projects
$('#projectsGrid').innerHTML = projects.map(p => `
  <button class="project-card" data-project="${p.id}" type="button">
    <div class="top">
      <div class="icon">${p.icon}</div>
      <svg class="arrow" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
    </div>
    <h3>${p.title}</h3>
    <p class="client">Client · <em>${p.client}</em></p>
    <p class="desc">${p.short}</p>
    <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
    <span class="open-hint">Click to view details →</span>
  </button>`).join('');

// Certifications
$('#certsGrid').innerHTML = certifications.map(c => `
  <a class="cert-card" href="${c.url}" ${c.url && c.url !== '#' ? 'target="_blank" rel="noreferrer"' : ''}>
    <div class="top">
      <div class="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><polyline points="8.21 13.89 7 22 12 19 17 22 15.79 13.88"/></svg></div>
      <svg class="ext" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
    </div>
    <h3>${c.title}</h3>
    <p class="meta">${c.issuer}${c.year ? ' · ' + c.year : ''}</p>
    <span class="view">View credential →</span>
  </a>`).join('');

// Education
$('#educationGrid').innerHTML = education.map(e => `
  <div class="card">
    <span class="card-num">${e.num}</span>
    <h3>${e.title}</h3>
    <p class="card-meta">${e.meta}</p>
    <p>${e.text}</p>
  </div>`).join('');

// Channels
$('#channels').innerHTML = channels.map(c => `
  <a class="channel" href="${c.href}">
    <div class="ch-icon">${c.icon}</div>
    <div>
      <p class="ch-label">${c.label}</p>
      <p class="ch-value">${c.value}</p>
    </div>
  </a>`).join('');

/* ========== Navbar scroll ========== */
const navbar = $('#navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

/* ========== Mobile menu ========== */
const menuToggle = $('#menuToggle');
const mobileMenu = $('#mobileMenu');
menuToggle.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

/* ========== Reveal on scroll ========== */
// Only animate small in-section elements — never wrap entire sections
// (a section being below the fold would otherwise hide all of its content).
const revealEls = document.querySelectorAll('.card, .timeline-item, .project-card, .service-card, .cert-card, .channel, .reveal');
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

function checkReveal() {
  const vh = window.innerHeight;
  revealEls.forEach(el => {
    if (el.classList.contains('visible')) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < vh - 40 && rect.bottom > 0) {
      el.classList.add('visible');
      observer.unobserve(el);
    } else {
      observer.observe(el);
    }
  });
}
checkReveal();
window.addEventListener('load', checkReveal);
window.addEventListener('scroll', () => requestAnimationFrame(checkReveal), { passive: true });

/* ========== Project modal ========== */
const modal = $('#projectModal');
const modalContent = $('#modalContent');

function openProject(id) {
  const p = projects.find(x => x.id === id);
  if (!p) return;
  modalContent.innerHTML = `
    <p class="modal-eyebrow">${p.client} · ${p.year}</p>
    <h3 class="modal-title">${p.title}</h3>
    <p class="modal-desc">${p.description}</p>
    <div class="modal-section">
      <span class="label">Role</span>
      <p>${p.role}</p>
    </div>
    <div class="modal-section">
      <span class="label">Highlights</span>
      <ul>${p.highlights.map(h => `<li>${h}</li>`).join('')}</ul>
    </div>
    <div class="modal-section">
      <span class="label">Stack</span>
      <div class="modal-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
    </div>
  `;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
document.addEventListener('click', (e) => {
  const trigger = e.target.closest('[data-project]');
  if (trigger) { openProject(trigger.dataset.project); return; }
  if (e.target.closest('[data-close]')) closeModal();
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

/* ========== Toast ========== */
const toastEl = $('#toast');
let toastTimer;
function toast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), 4000);
}

/* ========== Contact form (mailto) ========== */
const form = $('#contactForm');
const validators = {
  name:    (v) => v.trim().length === 0 ? 'Name is required' : (v.length > 100 ? 'Too long' : ''),
  email:   (v) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? 'Please enter a valid email' : '',
  phone:   (v) => v.trim().length < 5 ? 'Please enter a valid phone' : (!/^[+\d\s\-()]+$/.test(v.trim()) ? 'Only digits and + - ( ) allowed' : ''),
  message: (v) => v.trim().length < 10 ? 'Message should be at least 10 characters' : (v.length > 2000 ? 'Too long' : ''),
};
function showError(name, msg) {
  const el = form.querySelector(`.error[data-for="${name}"]`);
  if (el) el.textContent = msg || '';
}
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    message: form.message.value,
  };
  let valid = true;
  for (const k of Object.keys(validators)) {
    const msg = validators[k](data[k]);
    showError(k, msg);
    if (msg) valid = false;
  }
  if (!valid) return;

  const subject = `New project inquiry from ${data.name.trim()}`;
  const body = [
    `Name: ${data.name.trim()}`,
    `Email: ${data.email.trim()}`,
    `Phone: ${data.phone.trim()}`,
    '',
    'Message:',
    data.message.trim(),
  ].join('\n');

  window.location.href = `mailto:${TO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  toast('Opening your email app… just hit send to deliver the message.');
});
// live-clear errors as user types
['name','email','phone','message'].forEach(k => {
  form[k].addEventListener('input', () => showError(k, ''));
});

/* ========== Cursor-reactive grid background ========== */
(function initGrid() {
  const canvas = document.getElementById('bgGrid');
  const ctx = canvas.getContext('2d');
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  const cellSize = 44;
  const radius = 160;
  const mouse = { x: -9999, y: -9999 };

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('pointermove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener('pointerleave', () => { mouse.x = -9999; mouse.y = -9999; });

  function draw() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    ctx.clearRect(0, 0, w, h);

    const cols = Math.ceil(w / cellSize) + 1;
    const rows = Math.ceil(h / cellSize) + 1;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * cellSize;
        const y = j * cellSize;
        const cx = x + cellSize / 2;
        const cy = y + cellSize / 2;
        const dx = cx - mouse.x;
        const dy = cy - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const t = Math.max(0, 1 - dist / radius);

        ctx.strokeStyle = `rgba(120, 130, 160, ${0.06 + t * 0.22})`;
        ctx.lineWidth = 1;
        ctx.strokeRect(x + 0.5, y + 0.5, cellSize, cellSize);

        if (t > 0.05) {
          ctx.fillStyle = `rgba(59, 130, 246, ${t * 0.18})`;
          ctx.fillRect(x, y, cellSize, cellSize);
        }
      }
    }
    requestAnimationFrame(draw);
  }
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    requestAnimationFrame(draw);
  }
})();
