import { useState } from "react";
import { expertise, type Expertise } from "@/data/portfolio";
import SectionHead from "./SectionHead";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const marqueeItems = [
  "Webflow",
  "React",
  "Shopify",
  "JavaScript",
  "TypeScript",
  "Liquid",
  "Funnel",
  "CSS3",
  "HTML5",
  "Figma",
];

const Skills = () => {
  const [active, setActive] = useState<Expertise | null>(null);

  return (
    <section id="skills" className="relative w-screen px-6 py-24">
      <SectionHead
        num="02"
        eyebrow="Technical Arsenal"
        title={
          <>
            Skills & <span className="text-gradient">Expertise.</span>
          </>
        }
      />

      {/* full-bleed marquee */}
      <div className="relative -mx-6 my-14 overflow-hidden border-y border-border bg-card/30 py-6 backdrop-blur">
        <div className="flex w-max animate-marquee gap-12">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((s, i) => (
            <span
              key={i}
              className="font-display text-3xl font-semibold text-muted-foreground md:text-4xl"
            >
              {s} <span className="text-primary">◆</span>
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {expertise.map((e) => (
          <button
            key={e.id}
            onClick={() => setActive(e)}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 text-left backdrop-blur transition-smooth hover:-translate-y-1 hover:border-primary/50 hover:shadow-card-glow"
          >
            <div
              aria-hidden
              className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${e.accent} opacity-20 blur-2xl transition-opacity group-hover:opacity-40`}
            />
            <div className="relative flex items-start justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                  {e.years} · {e.level}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold">{e.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{e.tagline}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-smooth group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
            </div>
            <div className="relative mt-5 flex flex-wrap gap-1.5">
              {e.stack.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-background/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <span className="relative mt-5 block font-mono text-[11px] uppercase tracking-[0.15em] text-primary opacity-0 transition-smooth group-hover:opacity-100">
              Click to view details →
            </span>
          </button>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-2xl border-border bg-card/95 backdrop-blur-xl">
          {active && (
            <>
              <DialogHeader>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                  {active.years} · {active.level}
                </p>
                <DialogTitle className="font-display text-3xl">{active.name}</DialogTitle>
                <DialogDescription className="text-base text-muted-foreground">
                  {active.tagline}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-2 grid gap-5">
                <p className="text-sm text-muted-foreground">{active.summary}</p>
                <div>
                  <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.15em] text-primary">
                    What I do with {active.name}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {active.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.15em] text-primary">
                    Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {active.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-background/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Skills;
