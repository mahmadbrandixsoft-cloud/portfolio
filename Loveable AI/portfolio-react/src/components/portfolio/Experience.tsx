import { experience } from "@/data/portfolio";
import SectionHead from "./SectionHead";

const Experience = () => (
  <section id="experience" className="relative px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <SectionHead num="03" eyebrow="Career Journey" title="Experience" />

      <div className="relative">
        <div className="absolute left-[18px] top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-1/2" />
        <div className="flex flex-col gap-10">
          {experience.map((e, i) => (
            <div
              key={e.role}
              className={`relative pl-12 md:w-1/2 md:pl-0 md:pr-12 ${
                i % 2 === 1 ? "md:ml-auto md:pl-12 md:pr-0" : ""
              }`}
            >
              <span
                className={`absolute top-2 h-3.5 w-3.5 rounded-full border-2 border-background bg-primary shadow-glow left-3 md:left-1/2 md:-translate-x-1/2`}
              />
              <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-smooth hover:border-primary/50 hover:shadow-card-glow">
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-primary">
                  {e.company}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold">{e.role}</h3>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{e.period}</p>
                <p className="mt-3 text-sm text-muted-foreground">{e.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;