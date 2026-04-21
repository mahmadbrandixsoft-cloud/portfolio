import { useState } from "react";
import { projects, type Project } from "@/data/portfolio";
import SectionHead from "./SectionHead";
import { ArrowUpRight, Box } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Projects = () => {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHead num="05" eyebrow="Featured Work" title="Key Projects" />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p)}
              className="group relative flex flex-col rounded-2xl border border-border bg-card/60 p-6 text-left backdrop-blur transition-smooth hover:-translate-y-1 hover:border-primary/50 hover:shadow-card-glow"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Box className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-smooth group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-primary">
                Client · {p.client}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{p.short}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-background/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="mt-5 font-mono text-[11px] uppercase tracking-[0.15em] text-primary opacity-0 transition-smooth group-hover:opacity-100">
                Click to view details →
              </span>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-2xl border-border bg-card/95 backdrop-blur-xl">
          {active && (
            <>
              <DialogHeader>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                  {active.client} · {active.year}
                </p>
                <DialogTitle className="font-display text-3xl">
                  {active.title}
                </DialogTitle>
                <DialogDescription className="text-base text-muted-foreground">
                  {active.description}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-2 grid gap-4">
                <div>
                  <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.15em] text-primary">
                    Role
                  </p>
                  <p className="text-sm">{active.role}</p>
                </div>
                <div>
                  <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.15em] text-primary">
                    Highlights
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
                    {active.tags.map((t) => (
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

export default Projects;