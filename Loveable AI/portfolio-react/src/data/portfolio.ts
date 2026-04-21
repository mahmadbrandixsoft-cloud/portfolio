export type Project = {
  id: string;
  title: string;
  client: string;
  short: string;
  description: string;
  role: string;
  year: string;
  tags: string[];
  highlights: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    id: "highest-stakes",
    title: "The Highest of Stakes",
    client: "Punch Group",
    short:
      "Webflow build with CMS integration, optimized for performance and UI consistency.",
    description:
      "End-to-end Webflow development including custom layouts, CMS structure, and interaction design. Conducted thorough QA across breakpoints, browsers, and devices to guarantee pixel-perfect delivery.",
    role: "Webflow Senior Developer",
    year: "2023",
    tags: ["Webflow", "CMS", "UI/UX Review", "Performance"],
    highlights: [
      "Custom Webflow CMS architecture for editorial content",
      "Cross-browser & responsive QA with documented defect tracking",
      "Lighthouse performance optimization (90+ scores)",
    ],
  },
  {
    id: "dressbarn",
    title: "DressBarn",
    client: "RashFlash",
    short:
      "Shopify storefront customization with focus on UX, responsiveness, and conversion.",
    description:
      "Built and customized Shopify pages and theme components for DressBarn — improving the shopping experience, fixing functional issues, and ensuring a smooth checkout flow on every device.",
    role: "Shopify Developer",
    year: "2022",
    tags: ["Shopify", "Liquid", "Theme Customization", "QA"],
    highlights: [
      "Custom Liquid sections & dynamic product modules",
      "Defect identification and regression testing across the funnel",
      "Mobile-first UX refinements that lifted engagement",
    ],
  },
  {
    id: "deal-funnels",
    title: "Conversion Funnels",
    client: "Deal.ai",
    short:
      "High-converting marketing funnels built and optimized for AI-powered SaaS launches.",
    description:
      "Designed and built end-to-end marketing funnels for Deal.ai — covering lead capture, nurture sequences, and offer pages. Iterated based on analytics to improve conversion rates.",
    role: "Funnel Builder & Frontend Developer",
    year: "2022 – 2023",
    tags: ["Funnel", "React", "A/B Testing", "Conversion"],
    highlights: [
      "Built reusable funnel components in React",
      "Iterative A/B testing with measurable lift",
      "Tight collaboration with marketing & design",
    ],
  },
];

export const experience = [
  {
    role: "Webflow Developer & Frontend Developer",
    company: "Deadon Agency",
    period: "Sep 2023 – Present",
    text:
      "Developing custom Webflow and frontend builds end-to-end — translating design into pixel-perfect, responsive, performant experiences for agency clients.",
  },
  {
    role: "Funnel Builder",
    company: "Deal.ai",
    period: "2022 – 2023",
    text:
      "Built and optimized marketing & sales funnels for an AI SaaS — combining frontend craft with conversion-focused iteration.",
  },
  {
    role: "Software Frontend Engineer & Webflow Senior Developer",
    company: "Punch",
    period: "2021 – 2022",
    text:
      "Led senior-level Webflow and frontend engineering work — architecting CMS structures, building interactive layouts, and mentoring on QA discipline.",
  },
  {
    role: "Shopify Developer",
    company: "RashFlash",
    period: "2020 – 2021",
    text:
      "Built and customized Shopify storefronts and theme components, improving conversion and ensuring smooth, defect-free shopping experiences.",
  },
];

export const services = [
  {
    title: "Webflow Development",
    desc: "Custom Webflow builds with clean CMS architecture, interactions, and CMS-driven layouts that the marketing team can actually own.",
  },
  {
    title: "Frontend Engineering",
    desc: "React, HTML, CSS, JavaScript — turning Figma designs into responsive, accessible, performant interfaces.",
  },
  {
    title: "Shopify Customization",
    desc: "Liquid theme work, custom sections, and storefront UX improvements that lift conversion and reduce friction.",
  },
  {
    title: "Funnel Building",
    desc: "End-to-end funnels — landing pages, lead capture, A/B-tested offers — built to convert and easy to iterate on.",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  year?: string;
  url?: string;
  image?: string;
  description?: string;
};

export const certifications: Certification[] = [
  {
    title: "Webflow Expert",
    issuer: "Webflow",
    year: "2023",
    url: "#",
    image: "/placeholder.svg",
    description:
      "Recognized by Webflow for advanced platform mastery — CMS architecture, interactions, custom code, and production-grade site delivery.",
  },
  {
    title: "Shopify Theme Development",
    issuer: "Shopify",
    year: "2022",
    url: "#",
    image: "/placeholder.svg",
    description:
      "Hands-on theme development with Liquid, sections, dynamic blocks, and Shopify's storefront architecture.",
  },
  {
    title: "Frontend Web Development",
    issuer: "Meta",
    year: "2022",
    url: "#",
    image: "/placeholder.svg",
    description:
      "Comprehensive frontend program covering modern JavaScript, React, responsive design, and accessibility best practices.",
  },
];

export const education = [
  {
    num: "01",
    title: "MSc IT & Project Management",
    meta: "University of the West of Scotland",
    text:
      "Master's degree bridging technology and management — agile methodologies, project lifecycles, and software quality.",
  },
  {
    num: "02",
    title: "BSc Computer Science",
    meta: "COMSATS University",
    text:
      "Foundation in algorithms, data structures, software engineering, and web technologies.",
  },
];

export const skills = [
  { num: "01", title: "Webflow & CMS", items: ["Webflow", "CMS Collections", "Interactions", "Custom Code"] },
  { num: "02", title: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript"] },
  { num: "03", title: "E-commerce", items: ["Shopify", "Liquid", "Theme Dev", "Storefront UX"] },
  { num: "04", title: "Funnels & Marketing", items: ["Landing Pages", "A/B Testing", "Lead Capture", "Conversion"] },
  { num: "05", title: "Tools", items: ["Git", "Jira", "Figma", "ClickUp"] },
  { num: "06", title: "Soft Skills", items: ["Communication", "Detail-Oriented", "Ownership", "Speed"] },
];

export type Expertise = {
  id: string;
  name: string;
  tagline: string;
  years: string;
  level: string;
  summary: string;
  highlights: string[];
  stack: string[];
  accent: string; // tailwind gradient classes
};

export const expertise: Expertise[] = [
  {
    id: "webflow",
    name: "Webflow",
    tagline: "Pixel-perfect, CMS-driven sites",
    years: "4+ years",
    level: "Expert",
    summary:
      "I build production Webflow sites end-to-end — from clean CMS architecture and reusable components to advanced interactions and custom code. I've shipped 20+ Webflow projects for agencies and SaaS clients with strong Lighthouse scores and editor-friendly content models.",
    highlights: [
      "Custom CMS structures the marketing team can actually own",
      "Advanced interactions, scroll effects & micro-animations",
      "Custom JS/CSS embeds when Webflow's UI hits its limits",
      "Cross-browser & responsive QA on every breakpoint",
    ],
    stack: ["Webflow", "CMS", "Interactions", "Custom Code", "Figma → Webflow"],
    accent: "from-blue-500 to-indigo-600",
  },
  {
    id: "shopify",
    name: "Shopify",
    tagline: "Conversion-focused storefronts",
    years: "3+ years",
    level: "Advanced",
    summary:
      "I customize Shopify themes with Liquid, build dynamic sections, and tune storefronts for conversion. From DressBarn-scale merchants to small brands, I focus on smooth checkout flows, mobile UX, and code that's easy for the next dev to maintain.",
    highlights: [
      "Custom Liquid sections & dynamic product modules",
      "Theme customization without breaking the merchant UI",
      "Mobile-first UX refinements that lift engagement",
      "Defect identification and regression testing across the funnel",
    ],
    stack: ["Shopify", "Liquid", "Theme Dev", "Sections", "Storefront UX"],
    accent: "from-emerald-500 to-green-600",
  },
  {
    id: "frontend",
    name: "Frontend",
    tagline: "React, TypeScript & modern UI",
    years: "4+ years",
    level: "Expert",
    summary:
      "I turn Figma designs into responsive, accessible, performant interfaces with React and TypeScript. I care a lot about the small things — layout systems, motion, semantic HTML, keyboard nav — and write code that's easy to scale and review.",
    highlights: [
      "React + TypeScript component systems",
      "Tailwind, design tokens & themeable UI",
      "Accessibility (WCAG) and keyboard-first interactions",
      "Performance: code-splitting, lazy assets, Lighthouse 90+",
    ],
    stack: ["React", "TypeScript", "Tailwind", "Vite", "HTML5", "CSS3"],
    accent: "from-cyan-500 to-blue-600",
  },
  {
    id: "funnels",
    name: "Funnel Building",
    tagline: "Pages built to convert",
    years: "2+ years",
    level: "Advanced",
    summary:
      "At Deal.ai I designed and shipped end-to-end marketing funnels — lead capture, nurture, offer pages — built as reusable components and continuously A/B tested. I work tightly with marketing and design to translate a hypothesis into a measurable lift.",
    highlights: [
      "End-to-end funnels: capture → nurture → offer",
      "Reusable funnel components in React",
      "Iterative A/B testing with measurable lift",
      "Tight collaboration with marketing & design",
    ],
    stack: ["Landing Pages", "A/B Testing", "Lead Capture", "Conversion", "React"],
    accent: "from-orange-500 to-rose-600",
  },
  {
    id: "javascript",
    name: "JavaScript",
    tagline: "Custom logic, anywhere",
    years: "5+ years",
    level: "Expert",
    summary:
      "Vanilla JS is the glue under every site I build — custom Webflow code, Shopify theme scripts, React logic, browser APIs. I write clean, framework-agnostic JavaScript that's easy to drop into any environment.",
    highlights: [
      "Custom code embeds in Webflow & Shopify themes",
      "DOM, Canvas, IntersectionObserver & modern Web APIs",
      "ES2022+ patterns, async/await, modules",
      "Lightweight scripts — no jQuery bloat",
    ],
    stack: ["JavaScript", "TypeScript", "Web APIs", "Canvas", "DOM"],
    accent: "from-amber-400 to-yellow-600",
  },
  {
    id: "uiux",
    name: "UI / UX Review",
    tagline: "Designer's eye, dev's hands",
    years: "4+ years",
    level: "Strong",
    summary:
      "Beyond writing code, I QA design fidelity. I catch spacing inconsistencies, broken responsive states, and micro-interactions that don't feel right — then fix them before the client ever sees them.",
    highlights: [
      "Pixel-perfect comparison vs. Figma source",
      "Documented defect tracking (Jira / ClickUp)",
      "Cross-browser & cross-device QA",
      "Motion & micro-interaction polish",
    ],
    stack: ["Figma", "Jira", "ClickUp", "DevTools", "Browser QA"],
    accent: "from-fuchsia-500 to-purple-600",
  },
];