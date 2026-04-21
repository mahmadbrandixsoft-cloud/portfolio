import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Send } from "lucide-react";

const TO_EMAIL = "ahmadazhar955@gmail.com";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z
    .string()
    .trim()
    .min(5, "Please enter a valid phone")
    .max(30)
    .regex(/^[+\d\s\-()]+$/, "Only digits and + - ( ) allowed"),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(2000),
});

type FormData = z.infer<typeof schema>;

type Props = {
  open: boolean;
  onOpenChange: (o: boolean) => void;
};

const ContactDialog = ({ open, onOpenChange }: Props) => {
  const [data, setData] = useState<FormData>({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const update = (k: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setData((d) => ({ ...d, [k]: e.target.value }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormData;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});

    const subject = `New project inquiry from ${result.data.name}`;
    const body = [
      `Name: ${result.data.name}`,
      `Email: ${result.data.email}`,
      `Phone: ${result.data.phone}`,
      "",
      "Message:",
      result.data.message,
    ].join("\n");

    const mailto = `mailto:${TO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    toast.success("Opening your email app…", {
      description: "Just hit send in your mail client to deliver the message.",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl border-border bg-card/95 backdrop-blur-xl">
        <DialogHeader>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
            — Let's build something
          </p>
          <DialogTitle className="font-display text-3xl">
            Get in <span className="text-gradient">touch.</span>
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Tell me about your project — I usually reply within 24 hours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-2 grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="cd-name" className="font-mono text-[11px] uppercase tracking-[0.15em]">
                Name
              </Label>
              <Input
                id="cd-name"
                value={data.name}
                onChange={update("name")}
                placeholder="Jane Doe"
                className="mt-2"
                maxLength={100}
              />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </div>
            <div>
              <Label htmlFor="cd-email" className="font-mono text-[11px] uppercase tracking-[0.15em]">
                Email
              </Label>
              <Input
                id="cd-email"
                type="email"
                value={data.email}
                onChange={update("email")}
                placeholder="jane@company.com"
                className="mt-2"
                maxLength={255}
              />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
            </div>
          </div>

          <div>
            <Label htmlFor="cd-phone" className="font-mono text-[11px] uppercase tracking-[0.15em]">
              Phone
            </Label>
            <Input
              id="cd-phone"
              value={data.phone}
              onChange={update("phone")}
              placeholder="+1 555 123 4567"
              className="mt-2"
              maxLength={30}
            />
            {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
          </div>

          <div>
            <Label htmlFor="cd-message" className="font-mono text-[11px] uppercase tracking-[0.15em]">
              Message
            </Label>
            <Textarea
              id="cd-message"
              value={data.message}
              onChange={update("message")}
              placeholder="Tell me about your project, timeline and budget…"
              rows={5}
              className="mt-2 resize-none"
              maxLength={2000}
            />
            {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
          </div>

          <Button
            type="submit"
            size="lg"
            className="mt-2 w-full bg-gradient-brand shadow-glow hover:opacity-90"
          >
            <Send className="mr-2 h-4 w-4" /> Send Message
          </Button>
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            Opens your mail client · sent to {TO_EMAIL}
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
