interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, subtitle, align = "left" }: Props) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <div className={`text-xs font-semibold uppercase tracking-[0.22em] text-primary ${align === "center" ? "" : "accent-bar"}`}>
          {eyebrow}
        </div>
      )}
      <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
