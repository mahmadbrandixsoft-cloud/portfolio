/* ============================================================
   Muhammad Ahmad — Portfolio v2 (HTML / CSS / JS · GSAP)
   ============================================================ */

/* ====== Data ====== */
const expertise = [
  { id:"webflow", name:"Webflow", tag:"Pixel-perfect, CMS-driven sites", years:"4+ yrs", level:"Expert",
    summary:"I build production Webflow sites end-to-end — clean CMS architecture, reusable components, advanced interactions, and custom code where the editor hits its limits.",
    highlights:[
      "Custom CMS structures the marketing team can actually own",
      "Advanced interactions, scroll effects & micro-animations",
      "Custom JS / CSS embeds when Webflow's UI hits its limits",
      "Cross-browser & responsive QA on every breakpoint"
    ],
    stack:["Webflow","CMS","Interactions","Custom Code","Figma → Webflow"] },
  { id:"shopify", name:"Shopify", tag:"Conversion-focused storefronts", years:"3+ yrs", level:"Advanced",
    summary:"I customize Shopify themes with Liquid, build dynamic sections, and tune storefronts for conversion — from DressBarn-scale merchants to small brands.",
    highlights:[
      "Custom Liquid sections & dynamic product modules",
      "Theme customization without breaking the merchant UI",
      "Mobile-first UX refinements that lift engagement",
      "Defect identification and regression testing across the funnel"
    ],
    stack:["Shopify","Liquid","Theme Dev","Sections","Storefront UX"] },
  { id:"frontend", name:"Frontend", tag:"React, TypeScript & modern UI", years:"4+ yrs", level:"Expert",
    summary:"I turn Figma designs into responsive, accessible, performant interfaces with React and TypeScript. Layout systems, motion, semantic HTML, keyboard nav — I sweat the small stuff.",
    highlights:[
      "React + TypeScript component systems",
      "Tailwind, design tokens & themeable UI",
      "Accessibility (WCAG) and keyboard-first interactions",
      "Performance: code-splitting, lazy assets, Lighthouse 90+"
    ],
    stack:["React","TypeScript","Tailwind","Vite","HTML5","CSS3"] },
  { id:"funnels", name:"Funnel Building", tag:"Pages built to convert", years:"2+ yrs", level:"Advanced",
    summary:"At Deal.ai I designed and shipped end-to-end marketing funnels — capture, nurture, offer pages — built as reusable components and continuously A/B tested.",
    highlights:[
      "End-to-end funnels: capture → nurture → offer",
      "Reusable funnel components in React",
      "Iterative A/B testing with measurable lift",
      "Tight collaboration with marketing & design"
    ],
    stack:["Landing Pages","A/B Testing","Lead Capture","Conversion","React"] },
  { id:"javascript", name:"JavaScript", tag:"Custom logic, anywhere", years:"5+ yrs", level:"Expert",
    summary:"Vanilla JS is the glue under every site I build — custom Webflow code, Shopify theme scripts, React logic, browser APIs. Clean, framework-agnostic, easy to drop anywhere.",
    highlights:[
      "Custom code embeds in Webflow & Shopify themes",
      "DOM, Canvas, IntersectionObserver & modern Web APIs",
      "ES2022+ patterns, async/await, modules",
      "Lightweight scripts — no jQuery bloat"
    ],
    stack:["JavaScript","TypeScript","Web APIs","Canvas","DOM"] },
  { id:"uiux", name:"UI / UX Review", tag:"Designer's eye, dev's hands", years:"4+ yrs", level:"Strong",
    summary:"Beyond writing code, I QA design fidelity — spacing inconsistencies, broken responsive states, micro-interactions that don't feel right — and fix them before the client sees them.",
    highlights:[
      "Pixel-perfect comparison vs. Figma source",
      "Documented defect tracking (Jira / ClickUp)",
      "Cross-browser & cross-device QA",
      "Motion & micro-interaction polish"
    ],
    stack:["Figma","Jira","ClickUp","DevTools","Browser QA"] }
];

const experience = [
  { role:"Webflow Developer & Frontend Developer", company:"Deadon Agency", period:"Sep 2023 – Present",
    text:"Developing custom Webflow and frontend builds end-to-end — translating design into pixel-perfect, responsive, performant experiences for agency clients." },
  { role:"Funnel Builder", company:"Deal.ai", period:"2022 – 2023",
    text:"Built and optimized marketing & sales funnels for an AI SaaS — combining frontend craft with conversion-focused iteration." },
  { role:"Software Frontend Engineer & Webflow Senior Developer", company:"Punch", period:"2021 – 2022",
    text:"Led senior-level Webflow and frontend engineering work — architecting CMS structures, building interactive layouts, and mentoring on QA discipline." },
  { role:"Shopify Developer", company:"RashFlash", period:"2020 – 2021",
    text:"Built and customized Shopify storefronts and theme components, improving conversion and ensuring smooth, defect-free shopping experiences." }
];

const services = [
  { icon:"icon-layout-template", title:"Webflow Development", desc:"Custom Webflow builds with clean CMS architecture, interactions and CMS-driven layouts the marketing team can actually own." },
  { icon:"icon-code-2", title:"Frontend Engineering", desc:"React, HTML, CSS, JavaScript — turning Figma into responsive, accessible, performant interfaces." },
  { icon:"icon-shopping-bag", title:"Shopify Customization", desc:"Liquid theme work, custom sections and storefront UX improvements that lift conversion and reduce friction." },
  { icon:"icon-trending-up", title:"Funnel Building", desc:"End-to-end funnels — landing pages, lead capture, A/B-tested offers — built to convert and easy to iterate on." }
];

const projects = [
  { id:"highest-stakes", title:"The Highest of Stakes", client:"Punch Group", year:"2023", num:"01",
    short:"Webflow build with CMS integration, optimized for performance and UI consistency.",
    description:"End-to-end Webflow development including custom layouts, CMS structure, and interaction design. Conducted thorough QA across breakpoints, browsers and devices to guarantee pixel-perfect delivery.",
    role:"Webflow Senior Developer",
    tags:["Webflow","CMS","UI/UX Review","Performance"],
    highlights:[
      "Custom Webflow CMS architecture for editorial content",
      "Cross-browser & responsive QA with documented defect tracking",
      "Lighthouse performance optimization (90+ scores)"
    ] },
  { id:"dressbarn", title:"DressBarn", client:"RashFlash", year:"2022", num:"02",
    short:"Shopify storefront customization with focus on UX, responsiveness and conversion.",
    description:"Built and customized Shopify pages and theme components for DressBarn — improving the shopping experience, fixing functional issues, and ensuring a smooth checkout flow on every device.",
    role:"Shopify Developer",
    tags:["Shopify","Liquid","Theme Customization","QA"],
    highlights:[
      "Custom Liquid sections & dynamic product modules",
      "Defect identification and regression testing across the funnel",
      "Mobile-first UX refinements that lifted engagement"
    ] },
  { id:"deal-funnels", title:"Conversion Funnels", client:"Deal.ai", year:"2022 – 2023", num:"03",
    short:"High-converting marketing funnels for AI-powered SaaS launches.",
    description:"Designed and built end-to-end marketing funnels for Deal.ai — covering lead capture, nurture sequences and offer pages. Iterated based on analytics to lift conversion.",
    role:"Funnel Builder & Frontend Developer",
    tags:["Funnel","React","A/B Testing","Conversion"],
    highlights:[
      "Built reusable funnel components in React",
      "Iterative A/B testing with measurable lift",
      "Tight collaboration with marketing & design"
    ] }
];

const certifications = [
  { title:"Webflow Expert", issuer:"Webflow", year:"2023", image:"assets/cert-webflow.jpg",
    description:"Recognized by Webflow for advanced platform mastery — CMS architecture, interactions, custom code and production-grade site delivery." },
  { title:"Shopify Theme Development", issuer:"Shopify", year:"2022", image:"assets/cert-shopify.jpg",
    description:"Hands-on theme development with Liquid, sections, dynamic blocks and Shopify's storefront architecture." },
  { title:"Frontend Web Development", issuer:"Meta", year:"2022", image:"assets/cert-meta.jpg",
    description:"Comprehensive frontend program covering modern JavaScript, React, responsive design and accessibility best practices." }
];

const education = [
  { num:"01", title:"MSc IT & Project Management", meta:"University of the West of Scotland",
    text:"Master's degree bridging technology and management — agile methodologies, project lifecycles and software quality." },
  { num:"02", title:"BSc Computer Science", meta:"COMSATS University",
    text:"Foundation in algorithms, data structures, software engineering and web technologies." }
];

/* ====== Helpers ====== */
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/* ====== Theme toggle ====== */
const themeBtn = $('#theme-toggle');
const themeIcon = $('#theme-icon');
const initialTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', initialTheme);
themeIcon.className = `icon ${initialTheme === 'light' ? 'icon-moon' : 'icon-sun'}`;
themeBtn.addEventListener('click', () => {
  const cur = document.documentElement.getAttribute('data-theme');
  const next = cur === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  themeIcon.className = `icon ${next === 'light' ? 'icon-moon' : 'icon-sun'}`;
  localStorage.setItem('theme', next);
});

/* ====== Mobile drawer ====== */
const navMenu = $('#nav-menu');
const drawer = $('#drawer');
navMenu.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  drawer.classList.toggle('open');
});
$$('.drawer a').forEach(a => a.addEventListener('click', () => {
  navMenu.classList.remove('open'); drawer.classList.remove('open');
}));

/* ====== Clock ====== */
const clock = $('#clock');
function tick(){
  const d = new Date();
  // Lahore = UTC+5
  const utc = d.getTime() + d.getTimezoneOffset()*60000;
  const lhr = new Date(utc + 5*3600000);
  const pad = n => String(n).padStart(2,'0');
  clock.textContent = `${pad(lhr.getHours())}:${pad(lhr.getMinutes())}:${pad(lhr.getSeconds())}`;
}
setInterval(tick, 1000); tick();

/* ====== Render: projects rail ====== */
function renderRail(){
  $('#rail-track').innerHTML = projects.map(p => `
    <button class="proj" data-project="${p.id}">
      <span class="proj__num">${esc(p.num)}</span>
      <span class="proj__year">${esc(p.year)}</span>
      <span class="proj__client">${esc(p.client)}</span>
      <h3 class="proj__title">${esc(p.title)}</h3>
      <p class="proj__short">${esc(p.short)}</p>
      <div class="proj__tags">${p.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div>
      <span class="proj__more">Read case study →</span>
    </button>
  `).join('');
}

/* ====== Render: expertise accordion ====== */
function renderAcc(){
  $('#acc').innerHTML = expertise.map((e,i) => `
    <div class="acc__item" data-acc="${e.id}">
      <button class="acc__head">
        <span class="acc__num">0${i+1}</span>
        <span class="acc__name">${esc(e.name)}</span>
        <span class="acc__years">${esc(e.years)} · ${esc(e.level)}</span>
        <span class="acc__plus">+</span>
      </button>
      <div class="acc__body">
        <div>
          <p>${esc(e.summary)}</p>
          <div class="acc__chips">${e.stack.map(s=>`<span>${esc(s)}</span>`).join('')}</div>
        </div>
        <ul>${e.highlights.map(h=>`<li>${esc(h)}</li>`).join('')}</ul>
      </div>
    </div>
  `).join('');

  $$('.acc__head').forEach(btn => btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const open = item.classList.contains('open');
    $$('.acc__item').forEach(i => i.classList.remove('open'));
    if (!open) item.classList.add('open');
  }));
  // open first by default
  $('.acc__item')?.classList.add('open');
}

/* ====== Render: experience ====== */
function renderExp(){
  $('#exp-list').innerHTML = experience.map(x => `
    <div class="exp__item">
      <div class="exp__date">${esc(x.period)}</div>
      <h3 class="exp__role">${esc(x.role)}<em>${esc(x.company)}</em></h3>
      <p class="exp__text">${esc(x.text)}</p>
    </div>
  `).join('');
}

/* ====== Render: services ====== */
function renderServ(){
  $('#serv-grid').innerHTML = services.map((s,i) => `
    <div class="serv__card">
      <span class="serv__num">0${i+1} / 04</span>
      <span class="serv__icon"><i class="icon ${s.icon}"></i></span>
      <h3>${esc(s.title)}</h3>
      <p>${esc(s.desc)}</p>
    </div>
  `).join('');
}

/* ====== Render: certs + edu ====== */
function renderCerts(){
  $('#cert-grid').innerHTML = certifications.map((c,i) => `
    <button class="cert" data-cert="${i}">
      <div class="cert__img"><img src="${esc(c.image)}" alt="${esc(c.title)} certificate" loading="lazy" /></div>
      <div class="cert__body">
        <h3 class="cert__title">${esc(c.title)}</h3>
        <div class="cert__meta"><span>${esc(c.issuer)}</span><span>${esc(c.year)}</span></div>
      </div>
    </button>
  `).join('');
}
function renderEdu(){
  $('#edu-grid').innerHTML = education.map(e => `
    <div class="edu">
      <span class="edu__num">[ ${esc(e.num)} ]</span>
      <h3>${esc(e.title)}</h3>
      <p class="edu__meta">${esc(e.meta)}</p>
      <p>${esc(e.text)}</p>
    </div>
  `).join('');
}

/* ====== Modal ====== */
const modal = $('#modal');
const modalBody = $('#modal-body');
function openModal(html){
  modalBody.innerHTML = html;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  modal.classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('click', (e) => {
  if (e.target.closest('[data-close]')) return closeModal();
  const proj = e.target.closest('[data-project]');
  if (proj){
    const item = projects.find(p => p.id === proj.dataset.project);
    if (!item) return;
    openModal(`
      <p class="meta">— ${esc(item.client)} · ${esc(item.year)}</p>
      <h3>${esc(item.title)}</h3>
      <p class="meta">Role: ${esc(item.role)}</p>
      <p style="color:var(--ink-soft);font-size:16px;line-height:1.65;margin-top:1rem">${esc(item.description)}</p>
      <h4>Highlights</h4>
      <ul>${item.highlights.map(h=>`<li>${esc(h)}</li>`).join('')}</ul>
      <h4>Stack</h4>
      <div class="chip-row">${item.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div>
    `);
    return;
  }
  const cert = e.target.closest('[data-cert]');
  if (cert){
    const item = certifications[+cert.dataset.cert];
    if (!item) return;
    openModal(`
      <img class="cert-img" src="${esc(item.image)}" alt="${esc(item.title)} certificate" />
      <p class="meta">— ${esc(item.issuer)} · ${esc(item.year)}</p>
      <h3>${esc(item.title)}</h3>
      <p style="color:var(--ink-soft);margin-top:.75rem">${esc(item.description)}</p>
    `);
    return;
  }
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ====== Cursor ====== */
const cur = $('#cursor');
const curF = $('#cursor-follow');
let mx = -100, my = -100, fx = -100, fy = -100;
window.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cur.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
});
function curLoop(){
  fx += (mx - fx) * .15; fy += (my - fy) * .15;
  curF.style.transform = `translate(${fx}px,${fy}px) translate(-50%,-50%)`;
  requestAnimationFrame(curLoop);
}
curLoop();
document.addEventListener('mouseover', e => {
  const hov = e.target.closest('a,button,[data-magnet],.proj,.cert');
  if (hov){ cur.classList.add('hover'); curF.classList.add('hover'); }
  else { cur.classList.remove('hover'); curF.classList.remove('hover'); }
});

/* ====== Magnetic buttons ====== */
function magnet(){
  $$('[data-magnet]').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width/2;
      const y = e.clientY - r.top - r.height/2;
      el.style.transform = `translate(${x*.25}px, ${y*.35}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });
}

/* ====== Counters ====== */
function countUp(el){
  const target = +el.dataset.counter;
  const dur = 1500;
  const start = performance.now();
  const tick = (t) => {
    const p = Math.min(1, (t-start)/dur);
    const eased = 1 - Math.pow(1-p, 3);
    el.textContent = Math.round(target * eased) + (p === 1 ? '+' : '');
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* ====== Loader ====== */
function runLoader(){
  return new Promise(resolve => {
    const c = $('#loader-count');
    const bar = $('#loader-bar');
    let n = 0;
    const id = setInterval(() => {
      n += Math.max(1, Math.round((100-n) * 0.08));
      if (n >= 100){ n = 100; clearInterval(id); setTimeout(resolve, 350); }
      c.textContent = n;
      bar.style.width = n + '%';
    }, 35);
  });
}

/* ====== GSAP entrance ====== */
function splitWordsToSpans(el){
  // Replace each child .hero__word/.rw-word: wrap in another inner span for translate
  $$('[data-split] > *', el.parentElement || document).forEach(node => {
    if (node.dataset.wrapped) return;
    const t = node.textContent;
    node.innerHTML = `<span style="display:inline-block">${t}</span>`;
    node.dataset.wrapped = '1';
  });
}

function buildRevealWords(){
  $$('.reveal-words').forEach(el => {
    const text = el.textContent.trim();
    // preserve <em> via simple parse: split by spaces, keep nodes
    // simpler: wrap each word in span with overflow line
    const parts = el.innerHTML.split(/(\s+)/);
    el.innerHTML = parts.map(p => {
      if (/^\s+$/.test(p)) return p;
      return `<span class="rw-line"><span class="rw-word">${p}</span></span>`;
    }).join('');
  });
}

function initGsap(){
  if (typeof gsap === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // Hero split words
  const heroWords = $$('.hero__word');
  heroWords.forEach(w => {
    w.innerHTML = `<span style="display:inline-block">${w.innerHTML}</span>`;
  });
  gsap.from('.hero__word > span', {
    yPercent: 110, duration: 1, ease: 'power4.out',
    stagger: 0.06, delay: 0.1
  });
  gsap.from('.hero__intro, .hero__numbers, .hero__meta, .hero__scroll', {
    y: 30, opacity: 0, duration: 1, ease: 'power3.out',
    stagger: 0.1, delay: 0.6
  });

  // Counters when hero numbers appear
  ScrollTrigger.create({
    trigger: '.hero__numbers',
    start: 'top 90%',
    once: true,
    onEnter: () => $$('[data-counter]').forEach(countUp),
  });

  // Reveal-words sections
  buildRevealWords();
  $$('.reveal-words').forEach(el => {
    const words = el.querySelectorAll('.rw-word');
    gsap.from(words, {
      yPercent: 110, opacity: 0, duration: 0.9, ease: 'power3.out',
      stagger: 0.04,
      scrollTrigger: { trigger: el, start: 'top 85%' }
    });
  });

  // Section heads + generic fade-up groups
  $$('.section__head, .about__col, .about__list li, .exp__item, .serv__card, .cert, .edu, .ch').forEach((el, i) => {
    gsap.from(el, {
      y: 40, opacity: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%' }
    });
  });

  // Parallax band
  gsap.to('.band__track', {
    xPercent: -10,
    scrollTrigger: { trigger: '.band', start: 'top bottom', end: 'bottom top', scrub: 1 }
  });

  // Horizontal rail — drag + scroll
  initRail();
}

function initRail(){
  const rail = $('#rail');
  const track = $('#rail-track');
  if (!rail || !track) return;

  // wheel-to-horizontal
  rail.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
    rail.scrollLeft += e.deltaY;
    e.preventDefault();
  }, { passive:false });

  // Make rail scrollable horizontally via overflow, since track uses flex
  rail.style.overflowX = 'auto';
  rail.style.scrollbarWidth = 'none';
  rail.style.scrollSnapType = 'x proximity';
  $$('.proj').forEach(p => p.style.scrollSnapAlign = 'start');

  // hide webkit scrollbar
  const style = document.createElement('style');
  style.textContent = `.rail::-webkit-scrollbar{display:none}`;
  document.head.appendChild(style);

  // Drag-to-scroll (manual, no GSAP Draggable required)
  let isDown = false, startX = 0, startScroll = 0;
  rail.addEventListener('pointerdown', e => {
    isDown = true; rail.classList.add('dragging');
    startX = e.clientX; startScroll = rail.scrollLeft;
    rail.setPointerCapture(e.pointerId);
  });
  rail.addEventListener('pointermove', e => {
    if (!isDown) return;
    rail.scrollLeft = startScroll - (e.clientX - startX);
  });
  ['pointerup','pointercancel','pointerleave'].forEach(ev =>
    rail.addEventListener(ev, () => { isDown = false; rail.classList.remove('dragging'); })
  );
}

/* ====== Init ====== */
async function init(){
  renderRail();
  renderAcc();
  renderExp();
  renderServ();
  renderCerts();
  renderEdu();
  magnet();

  await runLoader();
  $('#loader').classList.add('hidden');
  initGsap();
}

document.addEventListener('DOMContentLoaded', init);
