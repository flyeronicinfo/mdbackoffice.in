import type { Metadata } from "next";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PricingCard } from "@/components/cards/PricingCard";
import { Button } from "@/components/ui/Button";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CheckCircle, PhoneCall } from "lucide-react";
import pricingData from "@/data/pricing.json";

export const metadata: Metadata = {
  title: "Pricing Plans | Sharma & Associates CA",
  description:
    "Transparent, no-surprise pricing for ITR filing, GST compliance, business accounting, and corporate services. Plans starting at ₹1,499.",
};

const pricingFaqs = [
  { id: "p1", question: "Are there any hidden charges?", answer: "No. The price shown is the all-inclusive fee for the specified scope. If your requirements fall outside the standard scope, we'll discuss and agree on additional fees upfront before starting work." },
  { id: "p2", question: "What payment methods do you accept?", answer: "We accept bank transfer, UPI (PhonePe, GPay, Paytm), and cheque. Invoices are GST-compliant and sent after engagement confirmation." },
  { id: "p3", question: "Can I change plans later?", answer: "Yes. You can upgrade or change your plan at any point. We'll pro-rate any adjustments for the current period and recalculate going forward." },
  { id: "p4", question: "Is there a contract lock-in?", answer: "Individual plans are per-engagement (one filing). Business retainer plans are quarterly — you can review every 3 months. Enterprise plans are annual with monthly billing." },
];

const allIncludes = [
  "Dedicated CA manager assigned to your account",
  "Secure document portal for file sharing",
  "WhatsApp / email support on business days",
  "Filing acknowledgement & computation summary",
  "One round of revision / query handling",
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-primary)] pt-20 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "60px 60px" }} aria-hidden="true" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <AnimatedSection>
            <p className="text-[var(--color-accent-gold)] font-bold text-xs uppercase tracking-widest mb-4">Pricing Plans</p>
            <h1 className="text-white font-extrabold leading-tight mb-5 max-w-2xl">
              Transparent Pricing, <span className="text-[var(--color-accent-gold)]">No Surprises</span>
            </h1>
            <p className="text-white/70 text-lg max-w-xl leading-relaxed">
              Every plan includes a dedicated CA, timely filing, and year-round support — at a price that makes sense for your situation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Cards */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingData.map((plan, i) => (
            <PricingCard key={plan.id} plan={plan} delay={i * 0.1} />
          ))}
        </div>

        {/* All-inclusive note */}
        <AnimatedSection delay={0.35} className="mt-12 max-w-2xl mx-auto">
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6">
            <p className="font-bold text-[var(--color-ink)] text-sm mb-4 text-center">All plans include:</p>
            <ul className="grid sm:grid-cols-2 gap-2.5">
              {allIncludes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--color-body)]">
                  <CheckCircle size={14} className="text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </SectionWrapper>

      {/* Pricing FAQs */}
      <SectionWrapper surface>
        <AnimatedSection>
          <SectionHeader eyebrow="Pricing FAQs" title="Questions About Our Fees?" subtitle="Everything you need to know about how we charge." />
        </AnimatedSection>
        <div className="max-w-3xl mx-auto">
          <FaqAccordion items={pricingFaqs} />
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-[var(--color-primary)] py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-white font-extrabold text-3xl mb-4">Need a custom quote?</h2>
            <p className="text-white/65 mb-8 max-w-lg mx-auto">Tell us about your business and we'll put together a tailored engagement proposal within 24 hours.</p>
            <Button href="/contact" size="lg" variant="secondary" className="border-white text-white hover:bg-white hover:text-[var(--color-primary)]">
              <PhoneCall size={17} /> Request a Custom Quote
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
