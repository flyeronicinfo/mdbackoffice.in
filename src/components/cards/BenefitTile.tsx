import { LucideIcon } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

type BenefitTileProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
};

export function BenefitTile({ icon: Icon, title, description, delay = 0 }: BenefitTileProps) {
  return (
    <AnimatedSection delay={delay}>
      <div className="group p-6 rounded-2xl border border-[var(--color-border)] bg-white hover:border-[var(--color-primary)]/20 hover:shadow-[0_8px_30px_rgba(11,46,79,0.08)] transition-all duration-300 h-full">
        <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/8 flex items-center justify-center mb-5 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
          <Icon
            size={22}
            className="text-[var(--color-primary)] group-hover:text-white transition-colors duration-300"
          />
        </div>
        <h3 className="font-bold text-[var(--color-ink)] text-base mb-2.5 leading-snug">
          {title}
        </h3>
        <p className="text-[var(--color-muted)] text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </AnimatedSection>
  );
}
