import { useState } from "react";
import { certifications, type Certification } from "@/data/portfolio";
import SectionHead from "./SectionHead";
import { Award, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Certifications = () => {
  const [active, setActive] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          num="06"
          eyebrow="Verified Expertise"
          title={
            <>
              Certifications &amp; <span className="text-gradient">Credentials.</span>
            </>
          }
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c) => (
            <button
              key={c.title}
              onClick={() => setActive(c)}
              className="group flex flex-col rounded-2xl border border-border bg-card/60 p-6 text-left backdrop-blur transition-smooth hover:-translate-y-1 hover:border-primary/50 hover:shadow-card-glow"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
                  <Award className="h-5 w-5" />
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground transition-smooth group-hover:text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold">{c.title}</h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-primary">
                {c.issuer}
                {c.year ? ` · ${c.year}` : ""}
              </p>
              <span className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                Click to view certificate →
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
                  {active.issuer}
                  {active.year ? ` · ${active.year}` : ""}
                </p>
                <DialogTitle className="font-display text-2xl md:text-3xl">
                  {active.title}
                </DialogTitle>
                {active.description && (
                  <DialogDescription className="text-muted-foreground">
                    {active.description}
                  </DialogDescription>
                )}
              </DialogHeader>

              {active.image && (
                <div className="mt-2 overflow-hidden rounded-xl border border-border bg-background/40">
                  <img
                    src={active.image}
                    alt={`${active.title} certificate by ${active.issuer}`}
                    className="h-auto w-full object-contain"
                    loading="lazy"
                  />
                </div>
              )}

              {active.url && active.url !== "#" && (
                <a
                  href={active.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-2 self-start rounded-full border border-primary/40 bg-primary/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-primary transition-smooth hover:bg-primary/20"
                >
                  Verify credential <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Certifications;
