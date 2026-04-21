import { education } from "@/data/portfolio";
import SectionHead from "./SectionHead";

const Education = () => (
  <section id="education" className="relative px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <SectionHead num="07" eyebrow="Academic Foundation" title="Education" />
      <div className="grid gap-5 md:grid-cols-2">
        {education.map((e) => (
          <div
            key={e.num}
            className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-smooth hover:border-primary/50 hover:shadow-card-glow"
          >
            <span className="block font-mono text-[11px] uppercase tracking-[0.15em] text-primary">
              {e.num}
            </span>
            <h3 className="mt-2 font-display text-xl font-semibold">{e.title}</h3>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-primary">
              {e.meta}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{e.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;