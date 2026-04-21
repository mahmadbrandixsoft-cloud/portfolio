import { ShieldCheck, Code2, Rocket } from "lucide-react";

const cards = [
  { icon: Code2, title: "Frontend Craft", desc: "Translating designs into clean, responsive, performant interfaces." },
  { icon: Rocket, title: "Funnel Building", desc: "High-converting landing pages and full marketing funnels that ship fast." },
  { icon: ShieldCheck, title: "Quality Mindset", desc: "Cross-browser, cross-device QA built into every deliverable." },
];

const About = () => (
  <section id="about" className="relative px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
        <span className="rounded bg-primary/10 px-2 py-0.5">01</span> About Me
      </p>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
          Building <span className="text-gradient">fast</span>, shipping{" "}
          <span className="text-gradient">confidently</span>.
        </h2>
        <div className="flex flex-col gap-5 text-muted-foreground">
          <p>
            I'm a Webflow and frontend developer with 4+ years building production websites,
            funnels, and Shopify stores for agencies and SaaS teams.
          </p>
          <p>
            My work spans Webflow CMS architecture, React frontends, Shopify Liquid
            customization, and full marketing funnels — always with a focus on speed,
            polish, and conversion.
          </p>
          <p>
            I hold an MSc in IT & Project Management from the University of the West of
            Scotland and a BSc in Computer Science from COMSATS.
          </p>
        </div>
      </div>
      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {cards.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-smooth hover:border-primary/50 hover:shadow-card-glow"
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <c.icon className="h-5 w-5" />
            </div>
            <h3 className="mb-2 font-display text-lg font-semibold">{c.title}</h3>
            <p className="text-sm text-muted-foreground">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;