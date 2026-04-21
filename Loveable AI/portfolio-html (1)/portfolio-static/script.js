/* ============================================================
   Muhammad Ahmad — Portfolio (static JS)
   ============================================================ */

/* ====== Data ====== */
const expertise = [
  { id:"webflow", name:"Webflow", tag:"Pixel-perfect, CMS-driven sites", years:"4+ years", level:"Expert",
    accent:"linear-gradient(135deg,#3b82f6,#6366f1)",
    summary:"I build production Webflow sites end-to-end — from clean CMS architecture and reusable components to advanced interactions and custom code. I've shipped 20+ Webflow projects for agencies and SaaS clients with strong Lighthouse scores and editor-friendly content models.",
    highlights:[
      "Custom CMS structures the marketing team can actually own",
      "Advanced interactions, scroll effects & micro-animations",
      "Custom JS/CSS embeds when Webflow's UI hits its limits",
      "Cross-browser & responsive QA on every breakpoint"
    ],
    stack:["Webflow","CMS","Interactions","Custom Code","Figma → Webflow"]
  },
  { id:"shopify", name:"Shopify", tag:"Conversion-focused storefronts", years:"3+ years", level:"Advanced",
    accent:"linear-gradient(135deg,#10b981,#16a34a)",
    summary:"I customize Shopify themes with Liquid, build dynamic sections, and tune storefronts for conversion. From DressBarn-scale merchants to small brands, I focus on smooth checkout flows, mobile UX, and code that's easy for the next dev to maintain.",
    highlights:[
      "Custom Liquid sections & dynamic product modules",
      "Theme customization without breaking the merchant UI",
      "Mobile-first UX refinements that lift engagement",
      "Defect identification and regression testing across the funnel"
    ],
    stack:["Shopify","Liquid","Theme Dev","Sections","Storefront UX"]
  },
  { id:"frontend", name:"Frontend", tag:"React, TypeScript & modern UI", years:"4+ years", level:"Expert",
    accent:"linear-gradient(135deg,#06b6d4,#3b82f6)",
    summary:"I turn Figma designs into responsive, accessible, performant interfaces with React and TypeScript. I care a lot about the small things — layout systems, motion, semantic HTML, keyboard nav — and write code that's easy to scale and review.",
    highlights:[
      "React + TypeScript component systems",
      "Tailwind, design tokens & themeable UI",
      "Accessibility (WCAG) and keyboard-first interactions",
      "Performance: code-splitting, lazy assets, Lighthouse 90+"
    ],
    stack:["React","TypeScript","Tailwind","Vite","HTML5","CSS3"]
  },
  { id:"funnels", name:"Funnel Building", tag:"Pages built to convert", years:"2+ years", level:"Advanced",
    accent:"linear-gradient(135deg,#f97316,#e11d48)",
    summary:"At Deal.ai I designed and shipped end-to-end marketing funnels — lead capture, nurture, offer pages — built as reusable components and continuously A/B tested. I work tightly with marketing and design to translate a hypothesis into a measurable lift.",
    highlights:[
      "End-to-end funnels: capture → nurture → offer",
      "Reusable funnel components in React",
      "Iterative A/B testing with measurable lift",
      "Tight collaboration with marketing & design"
    ],
    stack:["Landing Pages","A/B Testing","Lead Capture","Conversion","React"]
  },
  { id:"javascript", name:"JavaScript", tag:"Custom logic, anywhere", years:"5+ years", level:"Expert",
    accent:"linear-gradient(135deg,#fbbf24,#ca8a04)",
    summary:"Vanilla JS is the glue under every site I build — custom Webflow code, Shopify theme scripts, React logic, browser APIs. I write clean, framework-agnostic JavaScript that's easy to drop into any environment.",
    highlights:[
      "Custom code embeds in Webflow & Shopify themes",
      "DOM, Canvas, IntersectionObserver & modern Web APIs",
      "ES2022+ patterns, async/await, modules",
      "Lightweight scripts — no jQuery bloat"
    ],
    stack:["JavaScript","TypeScript","Web APIs","Canvas","DOM"]
  },
  { id:"uiux", name:"UI / UX Review", tag:"Designer's eye, dev's hands", years:"4+ years", level:"Strong",
    accent:"linear-gradient(135deg,#d946ef,#a855f7)",
    summary:"Beyond writing code, I QA design fidelity. I catch spacing inconsistencies, broken responsive states, and micro-interactions that don't feel right — then fix them before the client ever sees them.",
    highlights:[
      "Pixel-perfect comparison vs. Figma source",
      "Documented defect tracking (Jira / ClickUp)",
      "Cross-browser & cross-device QA",
      "Motion & micro-interaction polish"
    ],
    stack:["Figma","Jira","ClickUp","DevTools","Browser QA"]
  }
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
  { icon:"icon-layout", title:"Webflow Development", desc:"Custom Webflow builds with clean CMS architecture, interactions, and CMS-driven layouts that the marketing team can actually own." },
  { icon:"icon-code-2", title:"Frontend Engineering", desc:"React, HTML, CSS, JavaScript — turning Figma designs into responsive, accessible, performant interfaces." },
  { icon:"icon-shopping-bag", title:"Shopify Customization", desc:"Liquid theme work, custom sections, and storefront UX improvements that lift conversion and reduce friction." },
  { icon:"icon-trending-up", title:"Funnel Building", desc:"End-to-end funnels — landing pages, lead capture, A/B-tested offers — built to convert and easy to iterate on." }
];

const projects = [
  { id:"highest-stakes", title:"The Highest of Stakes", client:"Punch Group", year:"2023",
    short:"Webflow build with CMS integration, optimized for performance and UI consistency.",
    description:"End-to-end Webflow development including custom layouts, CMS structure, and interaction design. Conducted thorough QA across breakpoints, browsers, and devices to guarantee pixel-perfect delivery.",
    role:"Webflow Senior Developer",
    tags:["Webflow","CMS","UI/UX Review","Performance"],
    highlights:[
      "Custom Webflow CMS architecture for editorial content",
      "Cross-browser & responsive QA with documented defect tracking",
      "Lighthouse performance optimization (90+ scores)"
    ] },
  { id:"dressbarn", title:"DressBarn", client:"RashFlash", year:"2022",
    short:"Shopify storefront customization with focus on UX, responsiveness, and conversion.",
    description:"Built and customized Shopify pages and theme components for DressBarn — improving the shopping experience, fixing functional issues, and ensuring a smooth checkout flow on every device.",
    role:"Shopify Developer",
    tags:["Shopify","Liquid","Theme Customization","QA"],
    highlights:[
      "Custom Liquid sections & dynamic product modules",
      "Defect identification and regression testing across the funnel",
      "Mobile-first UX refinements that lifted engagement"
    ] },
  { id:"deal-funnels", title:"Conversion Funnels", client:"Deal.ai", year:"2022 – 2023",
    short:"High-converting marketing funnels built and optimized for AI-powered SaaS launches.",
    description:"Designed and built end-to-end marketing funnels for Deal.ai — covering lead capture, nurture sequences, and offer pages. Iterated based on analytics to improve conversion rates.",
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
    description:"Recognized by Webflow for advanced platform mastery — CMS architecture, interactions, custom code, and production-grade site delivery." },
  { title:"Shopify Theme Development", issuer:"Shopify", year:"2022", image:"assets/cert-shopify.jpg",
    description:"Hands-on theme development with Liquid, sections, dynamic blocks, and Shopify's storefront architecture." },
  { title:"Frontend Web Development", issuer:"Meta", year:"2022", image:"assets/cert-meta.jpg",
    description:"Comprehensive frontend program covering modern JavaScript, React, responsive design, and accessibility best practices." }
];

const education = [
  { num:"01", title:"MSc IT & Project Management", meta:"University of the West of Scotland",
    text:"Master's degree bridging technology and management — agile methodologies, project lifecycles, and software quality." },
  { num:"02", title:"BSc Computer Science", meta:"COMSATS University",
    text:"Foundation in algorithms, data structures, software engineering, and web technologies." }
];

/* ====== Helpers ====== */
const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));
const escapeHTML = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/* ====== Render sections ====== */
function renderExpertise(){
  $('#expertise-grid').innerHTML = expertise.map(e => `
    <button class="exp-card" data-expertise="${e.id}" style="--card-accent:${e.accent}">
      <div class="exp-card__top">
        <h3 class="exp-card__name">${escapeHTML(e.name)}</h3>
        <span class="exp-card__years">${escapeHTML(e.years)}</span>
      </div>
      <p class="exp-card__tag">${escapeHTML(e.tag)}</p>
      <div class="exp-card__chips">${e.stack.slice(0,4).map(s=>`<span>${escapeHTML(s)}</span>`).join('')}</div>
      <span class="exp-card__more">View details <i class="icon icon-arrow-right"></i></span>
    </button>
  `).join('');
}

function renderTimeline(){
  $('#timeline').innerHTML = experience.map(x => `
    <div class="timeline__item" data-aos="fade-up">
      <span class="timeline__date">${escapeHTML(x.period)}</span>
      <h3 class="timeline__role">${escapeHTML(x.role)}</h3>
      <p class="timeline__company">${escapeHTML(x.company)}</p>
      <p class="timeline__text">${escapeHTML(x.text)}</p>
    </div>
  `).join('');
}

function renderServices(){
  $('#services-grid').innerHTML = services.map(s => `
    <div class="service" data-aos="fade-up">
      <div class="service__icon"><i class="icon ${s.icon}"></i></div>
      <h3>${escapeHTML(s.title)}</h3>
      <p>${escapeHTML(s.desc)}</p>
    </div>
  `).join('');
}

function renderProjects(){
  $('#projects-grid').innerHTML = projects.map(p => `
    <button class="project" data-project="${p.id}" data-aos="fade-up">
      <span class="project__year">${escapeHTML(p.year)}</span>
      <h3 class="project__title">${escapeHTML(p.title)}</h3>
      <p class="project__client">${escapeHTML(p.client)}</p>
      <p class="project__short">${escapeHTML(p.short)}</p>
      <div class="project__tags">${p.tags.map(t=>`<span>${escapeHTML(t)}</span>`).join('')}</div>
      <span class="project__more">View case study <i class="icon icon-arrow-right"></i></span>
    </button>
  `).join('');
}

function renderCerts(){
  $('#cert-grid').innerHTML = certifications.map((c,i) => `
    <button class="cert" data-cert="${i}" data-aos="fade-up">
      <div class="cert__icon"><i class="icon icon-award"></i></div>
      <h3 class="cert__title">${escapeHTML(c.title)}</h3>
      <p class="cert__issuer">${escapeHTML(c.issuer)}</p>
      <span class="cert__year">${escapeHTML(c.year || '')}</span>
    </button>
  `).join('');
}

function renderEducation(){
  $('#edu-grid').innerHTML = education.map(e => `
    <div class="edu" data-aos="fade-up">
      <span class="edu__num">${escapeHTML(e.num)}</span>
      <h3>${escapeHTML(e.title)}</h3>
      <p class="edu__meta">${escapeHTML(e.meta)}</p>
      <p>${escapeHTML(e.text)}</p>
    </div>
  `).join('');
}

/* ====== Modals ====== */
const modal = $('#modal');
const modalBody = $('#modal-body');
const contactModal = $('#contact-modal');

function openModal(html){
  modalBody.innerHTML = html;
  modal.classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(){
  modal.classList.remove('open');
  document.body.style.overflow='';
}
function openContact(){
  contactModal.classList.add('open');
  document.body.style.overflow='hidden';
}
function closeContact(){
  contactModal.classList.remove('open');
  document.body.style.overflow='';
}

document.addEventListener('click', (e) => {
  const t = e.target.closest('[data-open-contact]');
  if (t){ openContact(); return; }
  if (e.target.closest('[data-close-contact]')) { closeContact(); return; }
  if (e.target.closest('[data-close-modal]')) { closeModal(); return; }

  const exp = e.target.closest('[data-expertise]');
  if (exp){
    const item = expertise.find(x => x.id === exp.dataset.expertise);
    if (!item) return;
    openModal(`
      <p class="eyebrow">— ${escapeHTML(item.level)} · ${escapeHTML(item.years)}</p>
      <h3>${escapeHTML(item.name)}</h3>
      <p class="meta">${escapeHTML(item.tag)}</p>
      <p>${escapeHTML(item.summary)}</p>
      <h4 style="margin-top:1.25rem;font-family:'JetBrains Mono';font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--primary)">Highlights</h4>
      <ul>${item.highlights.map(h => `<li>${escapeHTML(h)}</li>`).join('')}</ul>
      <h4 style="margin-top:1rem;font-family:'JetBrains Mono';font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--primary)">Stack</h4>
      <div class="chip-row">${item.stack.map(s => `<span>${escapeHTML(s)}</span>`).join('')}</div>
    `);
    return;
  }
  const proj = e.target.closest('[data-project]');
  if (proj){
    const item = projects.find(x => x.id === proj.dataset.project);
    if (!item) return;
    openModal(`
      <p class="eyebrow">— ${escapeHTML(item.client)} · ${escapeHTML(item.year)}</p>
      <h3>${escapeHTML(item.title)}</h3>
      <p class="meta">Role: ${escapeHTML(item.role)}</p>
      <p>${escapeHTML(item.description)}</p>
      <h4 style="margin-top:1.25rem;font-family:'JetBrains Mono';font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--primary)">Highlights</h4>
      <ul>${item.highlights.map(h => `<li>${escapeHTML(h)}</li>`).join('')}</ul>
      <h4 style="margin-top:1rem;font-family:'JetBrains Mono';font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--primary)">Stack</h4>
      <div class="chip-row">${item.tags.map(s => `<span>${escapeHTML(s)}</span>`).join('')}</div>
    `);
    return;
  }
  const cert = e.target.closest('[data-cert]');
  if (cert){
    const item = certifications[+cert.dataset.cert];
    if (!item) return;
    openModal(`
      <img class="cert-image-real" src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)} certificate" />
      <p class="eyebrow">— ${escapeHTML(item.issuer)} · ${escapeHTML(item.year || '')}</p>
      <h3>${escapeHTML(item.title)}</h3>
      <p>${escapeHTML(item.description || '')}</p>
    `);
    return;
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape'){ closeModal(); closeContact(); }
});

/* ====== Contact form (mailto) ====== */
const TO_EMAIL = "ahmadazhar955@gmail.com";
const form = $('#contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  const errs = {};
  if (!data.name || data.name.trim().length < 1) errs.name = "Name is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((data.email||'').trim())) errs.email = "Please enter a valid email";
  if (!/^[+\d\s\-()]{5,}$/.test((data.phone||'').trim())) errs.phone = "Please enter a valid phone";
  if (!data.message || data.message.trim().length < 10) errs.message = "Message should be at least 10 characters";

  $$('.err').forEach(el => { el.textContent=''; el.classList.remove('show'); });
  Object.entries(errs).forEach(([k,v]) => {
    const el = $(`[data-err="${k}"]`);
    if (el){ el.textContent = v; el.classList.add('show'); }
  });
  if (Object.keys(errs).length) return;

  const subject = `New project inquiry from ${data.name}`;
  const body = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    "",
    "Message:",
    data.message
  ].join("\n");
  window.location.href = `mailto:${TO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  toast("Opening your email app…");
  closeContact();
  form.reset();
});

/* ====== Toast ====== */
let toastTimer;
function toast(msg){
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2400);
}

/* ====== Mobile menu ====== */
$('#nav-toggle').addEventListener('click', () => {
  $('#mobile-menu').classList.toggle('open');
});
$$('#mobile-menu a').forEach(a => a.addEventListener('click', () => $('#mobile-menu').classList.remove('open')));

/* ====== Navbar scroll state ====== */
const navbar = $('#navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive:true });

/* ====== Counters ====== */
function animateCounters(){
  $$('[data-counter]').forEach(el => {
    const target = +el.dataset.counter;
    const duration = 1400;
    const start = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + (p === 1 ? "+" : "");
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

/* ====== Cursor ====== */
const dot = $('#cursor-dot'), ring = $('#cursor-ring');
let mx=-100,my=-100, rx=-100,ry=-100;
window.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; dot.style.transform=`translate(${mx}px,${my}px) translate(-50%,-50%)`; });
function loop(){
  rx += (mx - rx) * .18; ry += (my - ry) * .18;
  ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
  requestAnimationFrame(loop);
}
loop();
document.addEventListener('mouseover', e => {
  if (e.target.closest('a,button,[role="button"]')) ring.classList.add('hover');
  else ring.classList.remove('hover');
});

/* ====== Interactive grid background ====== */
function initGrid(){
  const canvas = $('#grid-canvas');
  const ctx = canvas.getContext('2d');
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let mouseX = -9999, mouseY = -9999;
  const cellSize = 48, radius = 220;

  function resize(){
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = innerWidth * dpr;
    canvas.height = innerHeight * dpr;
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  resize();
  addEventListener('resize', resize);
  addEventListener('pointermove', e => { mouseX = e.clientX; mouseY = e.clientY; });
  addEventListener('pointerleave', () => { mouseX = -9999; mouseY = -9999; });

  function draw(time){
    const w = innerWidth, h = innerHeight;
    ctx.clearRect(0,0,w,h);
    const cols = Math.ceil(w / cellSize) + 1;
    const rows = Math.ceil(h / cellSize) + 1;
    const wave = Math.sin(time * 0.0008) * 0.5 + 0.5;
    for (let i=0;i<cols;i++){
      for (let j=0;j<rows;j++){
        const x = i*cellSize, y = j*cellSize;
        const cx = x + cellSize/2, cy = y + cellSize/2;
        const dx = cx - mouseX, dy = cy - mouseY;
        const dist = Math.sqrt(dx*dx + dy*dy);
        const t = Math.max(0, 1 - dist / radius);

        // base grid lines — always visible boxes
        ctx.strokeStyle = `rgba(120, 130, 180, ${0.10 + t * 0.35})`;
        ctx.lineWidth = 1;
        ctx.strokeRect(x + 0.5, y + 0.5, cellSize, cellSize);
        if (t > 0.05){
          // glow box near cursor
          ctx.fillStyle = `rgba(99, 130, 246, ${t * 0.32})`;
          ctx.fillRect(x, y, cellSize, cellSize);
          // inner accent square
          if (t > 0.5){
            ctx.fillStyle = `rgba(168, 130, 246, ${(t-0.5) * 0.5})`;
            ctx.fillRect(x + cellSize*0.3, y + cellSize*0.3, cellSize*0.4, cellSize*0.4);
          }
        }
        // ambient diagonal pulse
        const diag = ((i + j) * 0.2 + time * 0.0015) % 6;
        if (diag < 0.4){
          ctx.fillStyle = `rgba(168, 130, 246, ${0.04 * (1 - diag/0.4) * (1-wave*0.4)})`;
          ctx.fillRect(x, y, cellSize, cellSize);
        }
      }
    }
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
}

/* ====== Hero GSAP intro + ScrollTrigger ====== */
function initGSAP(){
  if (typeof gsap === 'undefined') return;
  if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  // gentle orb parallax on scroll (hero title left untouched to avoid layout shift)
  gsap.to('.bg-orb--1', { yPercent: 25, ease:'none', scrollTrigger:{ trigger:'body', start:'top top', end:'bottom top', scrub:true }});
  gsap.to('.bg-orb--2', { yPercent: -20, ease:'none', scrollTrigger:{ trigger:'body', start:'top top', end:'bottom top', scrub:true }});

  // section heads tilt-in
  ScrollTrigger.batch('.section-head h2', {
    onEnter: batch => gsap.fromTo(batch, { y:30, opacity:0 }, { y:0, opacity:1, duration:.9, stagger:.1, ease:'power3.out' })
  });
}

/* ====== Boot ====== */
document.addEventListener('DOMContentLoaded', () => {
  renderExpertise();
  renderTimeline();
  renderServices();
  renderProjects();
  renderCerts();
  renderEducation();

  if (window.AOS) AOS.init({ duration: 700, once: true, offset: 80 });
  initGrid();
  initGSAP();
  setTimeout(animateCounters, 500);
});
