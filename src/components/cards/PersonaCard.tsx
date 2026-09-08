import Link from "next/link";
import { LucideIcon, CheckCircle, ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

type PersonaCardProps = {
  icon: LucideIcon;
  persona: string;
  description: string;
  painPoints: string[];
  href: string;
  delay?: number;
};

export function PersonaCard({
  icon: Icon,
  persona,
  description,
  painPoints,
  href,
  delay = 0,
}: PersonaCardProps) {
  return (
    <AnimatedSection delay={delay} className="h-full">
      <Link
        href={href}
        className="group flex flex-col h-full p-6 rounded-2xl border border-[var(--color-border)] bg-white hover:border-[var(--color-primary)]/30 hover:shadow-[0_12px_40px_rgba(11,46,79,0.10)] transition-all duration-300 cursor-pointer"
      >
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
          <Icon size={24} className="text-white" />
        </div>

        {/* Title */}
        <h3 className="font-bold text-[var(--color-ink)] text-lg mb-3 leading-snug">
          {persona}
        </h3>

        {/* Description */}
        <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-5">
          {description}
        </p>

        {/* Pain points */}
        <ul className="space-y-2 mb-6 flex-1">
          {painPoints.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-sm text-[var(--color-body-text)]">
              <CheckCircle
                size={14}
                className="text-[var(--color-accent-gold)] mt-0.5 flex-shrink-0"
              />
              {point}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] group-hover:gap-2 transition-all">
          Learn more
          <ChevronRight size={15} />
        </div>
      </Link>
    </AnimatedSection>
  );
}
