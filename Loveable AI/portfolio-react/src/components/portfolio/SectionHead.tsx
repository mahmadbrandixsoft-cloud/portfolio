type Props = { num: string; eyebrow: string; title: React.ReactNode };

const SectionHead = ({ num, eyebrow, title }: Props) => (
  <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
    <div>
      <p className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
        <span className="rounded bg-primary/10 px-2 py-0.5">{num}</span>
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">{title}</h2>
    </div>
    <span className="font-display text-6xl font-bold text-muted-foreground/30 md:text-8xl">
      {num}
    </span>
  </div>
);

export default SectionHead;