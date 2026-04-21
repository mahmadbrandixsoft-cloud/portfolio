import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useContactDialog } from "./ContactDialogProvider";

const TO_EMAIL = "ahmadazhar955@gmail.com";

const channels = [
  { icon: Mail, label: "Email", value: TO_EMAIL, href: `mailto:${TO_EMAIL}` },
  { icon: Phone, label: "Phone (PK)", value: "+92 304 4044436", href: "tel:+923044044436" },
  { icon: Phone, label: "Phone (UK)", value: "+44 7346 893954", href: "tel:+447346893954" },
  { icon: MapPin, label: "Location", value: "Lahore, Pakistan", href: "#" },
];

const Contact = () => {
  const { open } = useContactDialog();

  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            — Let's build something
          </p>
          <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
            Let's <span className="text-gradient">connect.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Have a project in mind, a role to fill, or just want to chat about the web?
            Hit the button below — I usually reply within 24 hours.
          </p>
          <Button
            size="lg"
            onClick={open}
            className="mt-8 bg-gradient-brand shadow-glow hover:opacity-90"
          >
            Get in Touch <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-4 backdrop-blur transition-smooth hover:border-primary/50 hover:shadow-card-glow"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                  {c.label}
                </p>
                <p className="truncate text-sm font-medium group-hover:text-primary">
                  {c.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        <footer className="mt-20 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
          <p>© 2026 Muhammad Ahmad. Crafted with precision.</p>
          <p>Built end-to-end · Tested everywhere</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
