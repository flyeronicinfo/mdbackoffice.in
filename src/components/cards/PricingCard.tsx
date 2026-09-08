import Link from "next/link";
import { CheckCircle, Star } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

type PricingPlan = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  featured: boolean;
  cta: string;
  href: string;
  features: string[];
};

type PricingCardProps = {
  plan: PricingPlan;
  delay?: number;
};

export function PricingCard({ plan, delay = 0 }: PricingCardProps) {
  return (
    <AnimatedSection delay={delay} className="h-full">
      <div
        className={`relative flex flex-col h-full rounded-2xl border-2 p-8 transition-all duration-300 ${
          plan.featured
            ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white shadow-[0_20px_60px_rgba(11,46,79,0.25)]"
            : "border-[var(--color-border)] bg-white hover:border-[var(--color-primary)]/30 hover:shadow-[0_8px_30px_rgba(11,46,79,0.08)]"
        }`}
      >
        {/* Featured badge */}
        {plan.featured && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-[var(--color-accent-gold)] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
            <Star size={11} fill="white" />
            Most Popular
          </div>
        )}

        {/* Header */}
        <div className="mb-6">
          <p
            className={`text-xs font-bold uppercase tracking-widest mb-2 ${
              plan.featured ? "text-white/60" : "text-[var(--color-accent-gold)]"
            }`}
          >
            {plan.name}
          </p>
          <p
            className={`text-sm mb-5 ${
              plan.featured ? "text-white/70" : "text-[var(--color-muted)]"
            }`}
          >
            {plan.tagline}
          </p>
          <div className="flex items-end gap-1.5">
            <span
              className={`text-4xl font-extrabold leading-none ${
                plan.featured ? "text-white" : "text-[var(--color-ink)]"
              }`}
            >
              {plan.price}
            </span>
            {plan.price !== "Custom" && (
              <span
                className={`text-sm mb-1 ${
                  plan.featured ? "text-white/60" : "text-[var(--color-muted)]"
                }`}
              >
                /{plan.period}
              </span>
            )}
          </div>
          {plan.price === "Custom" && (
            <p
              className={`text-sm mt-1 ${
                plan.featured ? "text-white/60" : "text-[var(--color-muted)]"
              }`}
            >
              {plan.period}
            </p>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8 flex-1">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm">
              <CheckCircle
                size={15}
                className={`mt-0.5 flex-shrink-0 ${
                  plan.featured ? "text-[var(--color-accent-gold)]" : "text-[var(--color-success)]"
                }`}
              />
              <span className={plan.featured ? "text-white/85" : "text-[var(--color-body-text)]"}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href={plan.href}
          className={`block text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
            plan.featured
              ? "bg-white text-[var(--color-primary)] hover:bg-white/90"
              : "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]"
          }`}
        >
          {plan.cta}
        </Link>
      </div>
    </AnimatedSection>
  );
}
