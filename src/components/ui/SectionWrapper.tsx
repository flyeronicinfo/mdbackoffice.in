import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  children: React.ReactNode;
  id?: string;
  surface?: boolean;
  className?: string;
};

export function SectionWrapper({
  children,
  id,
  surface,
  className,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-24",
        surface ? "bg-[var(--color-surface)]" : "bg-white",
        className
      )}
    >
      <div className="max-w-[1200px] mx-auto px-6">{children}</div>
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12",
        centered ? "text-center max-w-2xl mx-auto" : "",
        className
      )}
    >
      {eyebrow && (
        <p className="text-[var(--color-accent-gold)] font-semibold text-sm uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-[var(--color-ink)] font-extrabold leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[var(--color-muted)] text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
