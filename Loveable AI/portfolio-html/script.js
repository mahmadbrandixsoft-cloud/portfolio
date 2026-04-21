// ===== Theme Toggle =====
const root = document.documentElement;
const themeBtn = document.getElementById('themeToggle');
const stored = localStorage.getItem('theme');
if (stored) root.setAttribute('data-theme', stored);
themeBtn.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// ===== Navbar scroll =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ===== Mobile menu =====
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
menuToggle.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

// ===== Data =====
const skills = [
  { num: '01', title: 'Quality Assurance', items: ['SDLC & Agile Basics', 'Manual Testing', 'Test Case & Scenario Understanding', 'Requirement Review', 'Defect Identification'] },
  { num: '02', title: 'Programming & Markup', items: ['HTML5', 'CSS3', 'JavaScript', 'JQuery', 'React'] },
  { num: '03', title: 'Tools & Platforms', items: ['Jira', 'ClickUp', 'Microsoft Teams', 'Git'] },
  { num: '04', title: 'Data & Analytics', items: ['SQL (Basic Queries)', 'Excel', 'Python (pandas, basic)'] },
  { num: '05', title: 'CMS & Website Builders', items: ['WordPress', 'Webflow', 'Shopify', 'Wix'] },
  { num: '06', title: 'Soft Skills', items: ['Attention to Detail', 'Communication', 'Analytical Thinking', 'Time Management'] },
];

const experience = [
  { role: 'QA Engineer & Webflow Developer', company: 'Deadon Agency', period: 'Sep 2023 – Present', text: 'Developing custom Webflow websites and conducting manual QA testing. Reviewing requirements, identifying defects, and collaborating with developers to ensure high-quality, responsive deliverables.' },
  { role: 'Frontend Developer', company: 'Deal.ai', period: '2022 – 2023', text: 'Built responsive web interfaces using React, HTML5, CSS3, and JavaScript. Collaborated with designers and backend engineers to deliver polished user experiences.' },
  { role: 'Web Developer', company: 'Punch Group', period: '2021 – 2022', text: 'Designed and developed custom WordPress and Shopify websites. Performed cross-browser testing and optimization to ensure consistent quality.' },
];

const projects = [
  { title: 'The Highest of Stakes', client: 'Punch Group', text: 'Developed Webflow layouts and integrated CMS, also reviewing functionality for UI consistency, responsiveness, and performance to ensure a high-quality user experience.', tags: ['Webflow', 'CMS', 'UI/UX Review', 'Performance Testing'], icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>' },
  { title: 'DressBarn', client: 'RashFlash', text: 'Responsible for developing Shopify pages and customizations for UI/UX consistency, responsiveness, and functionality, identifying issues to ensure a smooth and high-quality user experience.', tags: ['Shopify', 'Customization', 'QA', 'Defect Identification'], icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>' },
];

const education = [
  { num: '01', title: 'MSc IT & Project Management', meta: 'University of the West of Scotland', text: 'Master\'s degree focused on bridging technology and management — covering project lifecycles, agile methodologies, and software quality.' },
  { num: '02', title: 'BSc Computer Science', meta: 'COMSATS University', text: 'Foundation in algorithms, data structures, software engineering, and web technologies — the technical bedrock of my QA practice.' },
];

const orgs = [
  { title: 'School Officer — CEPS', text: 'Representing students in the School of Computing Engineering and Physical Sciences at the University of the West of Scotland. Acting as liaison between students and faculty, responsible for managing events and workshops.', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>' },
  { title: 'Volunteer — Blood Donation Society', text: 'Coordinated donors and hospitals to ensure timely blood availability. Supported logistics for multiple blood donation drives.', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' },
];

const channels = [
  { label: 'Email', value: 'ahmadazhar955@gmail.com', href: 'mailto:ahmadazhar955@gmail.com', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>' },
  { label: 'Phone (PK)', value: '+92 304 4044436', href: 'tel:+923044044436', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>' },
  { label: 'Phone (UK)', value: '+44 7346 893954', href: 'tel:+447346893954', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>' },
  { label: 'Location', value: 'Lahore, Pakistan', href: '#', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>' },
];

// ===== Render =====
document.getElementById('skillsGrid').innerHTML = skills.map(s => `
  <div class="card">
    <span class="card-num">${s.num} — ${s.title}</span>
    <ul>${s.items.map(i => `<li>${i}</li>`).join('')}</ul>
  </div>`).join('');

document.getElementById('timeline').innerHTML = experience.map(e => `
  <div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-card">
      <p class="company">${e.company}</p>
      <h3 class="role">${e.role}</h3>
      <p class="period">${e.period}</p>
      <p>${e.text}</p>
    </div>
  </div>`).join('');

document.getElementById('projectsGrid').innerHTML = projects.map(p => `
  <article class="project-card">
    <div class="top">
      <div class="icon">${p.icon}</div>
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
    </div>
    <h3>${p.title}</h3>
    <p class="client">Client: <em>${p.client}</em></p>
    <p class="desc">${p.text}</p>
    <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
  </article>`).join('');

document.getElementById('educationGrid').innerHTML = education.map(e => `
  <div class="card">
    <span class="card-num">${e.num}</span>
    <h3>${e.title}</h3>
    <p class="card-meta">${e.meta}</p>
    <p>${e.text}</p>
  </div>`).join('');

document.getElementById('orgsGrid').innerHTML = orgs.map(o => `
  <div class="card">
    <div class="card-icon">${o.icon}</div>
    <h3>${o.title}</h3>
    <p>${o.text}</p>
  </div>`).join('');

document.getElementById('channels').innerHTML = channels.map(c => `
  <a class="channel" href="${c.href}">
    <div class="ch-icon">${c.icon}</div>
    <div>
      <p class="ch-label">${c.label}</p>
      <p class="ch-value">${c.value}</p>
    </div>
  </a>`).join('');

// ===== Reveal on scroll =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.section, .card, .timeline-item, .project-card').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});
