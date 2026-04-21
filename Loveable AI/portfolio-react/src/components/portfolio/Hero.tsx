import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useContactDialog } from "./ContactDialogProvider";

const roles = ["Webflow Developer", "Frontend Engineer", "Funnel Builder", "Shopify Developer"];

const Hero = () => {
  const { open } = useContactDialog();

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28 pb-16 text-center"
    >
      {/* glowing orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-60 blur-[120px]"
        style={{ background: "var(--gradient-brand)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 right-10 -z-10 h-[300px] w-[300px] rounded-full bg-primary/30 opacity-40 blur-[120px] animate-float"
      />

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.3em] text-primary backdrop-blur animate-fade-up">
          <Sparkles className="h-3.5 w-3.5" />
          I am Ahmad
        </p>

        <h1
          className="font-display font-bold leading-[0.9] tracking-tight animate-fade-up"
          style={{ fontSize: "clamp(3.5rem, 14vw, 11rem)", animationDelay: "0.1s" }}
        >
          Muhammad
          <br />
          <span className="text-gradient inline-block">Ahmad.</span>
        </h1>

        <p
          className="mt-6 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl animate-fade-up"
          style={{ animationDelay: "0.25s" }}
        >
          I build fast, beautiful, conversion-focused websites — from{" "}
          <strong className="text-foreground">Webflow</strong> and{" "}
          <strong className="text-foreground">Shopify</strong> storefronts to{" "}
          <strong className="text-foreground">React</strong> frontends and high-performing
          marketing funnels.
        </p>

        <div
          className="mt-8 flex flex-wrap justify-center gap-2 animate-fade-up"
          style={{ animationDelay: "0.35s" }}
        >
          {roles.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-card/60 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground backdrop-blur"
            >
              {t}
            </span>
          ))}
        </div>

        <div
          className="mt-10 flex flex-wrap justify-center gap-3 animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          <Button asChild size="lg" className="bg-gradient-brand shadow-glow hover:opacity-90">
            <a href="#projects">
              View My Work <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" onClick={open}>
            Get in Touch
          </Button>
        </div>

        <div
          className="mt-16 grid w-full max-w-2xl grid-cols-3 gap-8 border-t border-border pt-8 animate-fade-up"
          style={{ animationDelay: "0.55s" }}
        >
          {[
            { v: "4+", l: "Years Experience" },
            { v: "20+", l: "Projects Shipped" },
            { v: "MSc", l: "IT & PM, UWS" },
          ].map((s) => (
            <div key={s.l} className="flex flex-col items-center">
              <strong className="font-display text-3xl font-bold text-primary md:text-4xl">
                {s.v}
              </strong>
              <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                {s.l}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 animate-float">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1">
          <span className="h-1.5 w-1 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
