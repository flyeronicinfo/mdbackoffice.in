import Link from "next/link";
import { LucideIcon, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  tagline: string;
  href: string;
  delay?: number;
};

export function ServiceCard({ icon: Icon, title, tagline, href, delay = 0 }: ServiceCardProps) {
  return (
    <AnimatedSection delay={delay} className="h-full">
      <Link
        href={href}
        className="group flex flex-col h-full p-6 rounded-2xl border border-[var(--color-border)] bg-white hover:border-[var(--color-accent-gold)]/40 hover:shadow-[0_8px_30px_rgba(184,137,76,0.10)] transition-all duration-300"
      >
        {/* Top accent bar */}
        <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[var(--color-accent-gold)] to-[#D4A867] mb-5 group-hover:w-full transition-all duration-500" />

        {/* Icon */}
        <div className="w-10 h-10 rounded-xl bg-[var(--color-surface)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-accent-gold)]/10 transition-colors">
          <Icon size={20} className="text-[var(--color-primary)] group-hover:text-[var(--color-accent-gold)] transition-colors" />
        </div>

        {/* Content */}
        <h3 className="font-bold text-[var(--color-ink)] text-base mb-2.5 leading-snug flex-1">
          {title}
        </h3>
        <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-5">
          {tagline}
        </p>

        {/* CTA */}
        <div className="flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent-gold)] transition-colors">
          Explore service
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </AnimatedSection>
  );
}
