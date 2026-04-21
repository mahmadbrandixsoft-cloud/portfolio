import { services } from "@/data/portfolio";
import SectionHead from "./SectionHead";
import { Globe, Code2, ShoppingBag, TrendingUp } from "lucide-react";

const icons = [Globe, Code2, ShoppingBag, TrendingUp];

const Services = () => (
  <section id="services" className="relative px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <SectionHead num="04" eyebrow="What I Offer" title={<>Services that <span className="text-gradient">ship.</span></>} />
      <div className="grid gap-5 md:grid-cols-2">
        {services.map((s, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-7 backdrop-blur transition-smooth hover:border-primary/50 hover:shadow-card-glow"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-smooth group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;