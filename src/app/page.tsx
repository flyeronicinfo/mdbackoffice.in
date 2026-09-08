import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { BenefitTile } from "@/components/cards/BenefitTile";
import { PersonaCard } from "@/components/cards/PersonaCard";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { PricingCard } from "@/components/cards/PricingCard";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import {
  ShieldCheck,
  Clock,
  Award,
  Users,
  Headphones,
  LineChart,
  Briefcase,
  Building2,
  Globe,
  UserCheck,
  FileText,
  Receipt,
  BookOpen,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Calculator,
  BarChart3,
  Scale,
  ClipboardList,
  Landmark,
  PhoneCall,
} from "lucide-react";
import pricingData from "@/data/pricing.json";
import faqData from "@/data/faq.json";

export const metadata: Metadata = {
  title: "Chartered Accountants & Financial Advisory | MD Backoffice",
  description:
    "Trusted CA firm in Indore, Madhya Pradesh — expert ITR filing, GST compliance, company incorporation, audit, bookkeeping, NRI taxation, and tax planning. Book a free consultation today.",
};

const personas = [
  {
    icon: UserCheck,
    persona: "Salaried Individuals",
    description:
      "You earn well, but navigating Form 16, ESOP gains, rental income, and deductions is complicated. We file your return accurately and maximise your refund.",
    painPoints: [
      "Multiple income sources — salary, rent, freelance",
      "ESOP / RSU taxation & foreign asset reporting",
      "HRA, LTA, 80C/80D deduction optimisation",
      "Capital gains from mutual funds & equity",
    ],
    href: "/services/itr-filing",
  },
  {
    icon: Briefcase,
    persona: "SMEs & Startups",
    description:
      "You're building a business. Leave the accounting, GST compliance, payroll, and ROC filings to us so you can focus on what you do best.",
    painPoints: [
      "GST registration & monthly filings",
      "TDS computation & return filing",
      "Monthly bookkeeping & MIS reports",
      "Startup compliances (ROC, MSME, DPIIT)",
    ],
    href: "/services/gst-registration-filing",
  },
  {
    icon: Globe,
    persona: "NRIs",
    description:
      "Living abroad with India-tied income? We handle everything — from residential status to DTAA claims and FEMA compliance — completely remotely.",
    painPoints: [
      "Residential status determination (RNOR/NR)",
      "DTAA benefit claims & TDS refunds",
      "FEMA compliance & repatriation",
      "NRO/NRE/FCNR account advisory",
    ],
    href: "/services/nri-taxation",
  },
  {
    icon: Building2,
    persona: "Companies & LLPs",
    description:
      "From incorporation to statutory audit, director KYC to annual ROC filings — we manage your end-to-end corporate compliance calendar.",
    painPoints: [
      "MCA / ROC annual filings",
      "Statutory & tax audit",
      "Company secretarial services",
      "Transfer pricing documentation",
    ],
    href: "/services/company-incorporation",
  },
];

const benefits = [
  {
    icon: Award,
    title: "Qualified CA Team",
    description:
      "All work handled by ICAI-qualified Chartered Accountants — not junior staff or software bots. Your returns are reviewed and signed by a CA.",
  },
  {
    icon: ShieldCheck,
    title: "100% Compliant",
    description:
      "We stay updated with every Budget announcement, CBDT circular, and MCA notification so you never face a penalty or notice.",
  },
  {
    icon: Clock,
    title: "Always On Time",
    description:
      "We track every filing deadline for every client and file well ahead of due dates. In 20+ years, we've never missed a deadline.",
  },
  {
    icon: Headphones,
    title: "Responsive Support",
    description:
      "Reach us via email, WhatsApp, or phone. Our team responds within 24 hours on business days — no tickets, no bots.",
  },
  {
    icon: Users,
    title: "Dedicated CA Manager",
    description:
      "You get a single point of contact who knows your complete financial picture — not a different person every time you call.",
  },
  {
    icon: LineChart,
    title: "Proactive Advisory",
    description:
      "We don't just file returns; we call out tax-saving opportunities, flag compliance risks, and send advance tax reminders before you ask.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Share Documents",
    description:
      "Upload your documents to our secure portal or WhatsApp them. We send you a personalised checklist so nothing is missed.",
  },
  {
    step: "02",
    title: "CA Review & Computation",
    description:
      "Your assigned CA reviews everything, reconciles records, computes your liability, and identifies every eligible deduction.",
  },
  {
    step: "03",
    title: "Approve & File",
    description:
      "We share a draft for your approval. Once confirmed, we file within 24 hours and send you the acknowledgement.",
  },
  {
    step: "04",
    title: "Ongoing Compliance",
    description:
      "We track your entire compliance calendar — GST, TDS, advance tax, ROC filings — and alert you before every deadline.",
  },
];

const serviceCards = [
  {
    icon: BookOpen,
    title: "Finance & Accounting",
    tagline: "Accurate books, real-time MIS reports, and cloud accounting for businesses of all sizes.",
    href: "/services/accounting-bookkeeping",
  },
  {
    icon: Receipt,
    title: "Taxation & GST",
    tagline: "End-to-end direct and indirect tax compliance — ITR filing, GST returns, TDS, and advisory.",
    href: "/services/gst-registration-filing",
  },
  {
    icon: ShieldCheck,
    title: "Audit & Assurance",
    tagline: "Statutory, tax, internal, and management audits with UDIN-certified reports.",
    href: "/services/audit-assurance",
  },
  {
    icon: BarChart3,
    title: "Financial & Management Analysis",
    tagline: "In-depth financial analysis, performance reporting, and data-driven management insights.",
    href: "/services/tax-planning-advisory",
  },
  {
    icon: Calculator,
    title: "Cost & Process Analysis",
    tagline: "Cost audits, activity-based costing, and process reviews to improve efficiency and margins.",
    href: "/services/accounting-bookkeeping",
  },
  {
    icon: ClipboardList,
    title: "Risk Assessment & Internal Controls",
    tagline: "Risk identification, control framework design, and internal audit to safeguard your business.",
    href: "/services/audit-assurance",
  },
  {
    icon: Building2,
    title: "Corporate & Secretarial Compliance",
    tagline: "Company incorporation, ROC filings, director KYC, and full MCA compliance management.",
    href: "/services/company-incorporation",
  },
  {
    icon: Scale,
    title: "Legal & Regulatory Advisory",
    tagline: "FEMA, SEBI, RBI, and sector-specific regulatory guidance for businesses and NRIs.",
    href: "/services/nri-taxation",
  },
  {
    icon: Landmark,
    title: "Ind AS & IFRS Assignments",
    tagline: "Financial statement preparation, transition support, and advisory under Ind AS and IFRS.",
    href: "/services/audit-assurance",
  },
];

const stats = [
  { value: "2,000+", label: "Happy Clients" },
  { value: "22+", label: "Years of Experience" },
  { value: "₹50Cr+", label: "Tax Savings Delivered" },
  { value: "100%", label: "On-Time Filing Rate" },
];

const trustBadges = ["ICAI Member", "UDIN Verified", "Confidentiality Assured", "ISO 27001 Compliant"];

export default function HomePage() {
  return (
    <>
      {/* ──────── HERO ──────── */}
      <section className="relative min-h-[90vh] flex items-center bg-[var(--color-primary)] overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-white/[0.025]" />
          <div className="absolute -bottom-32 -left-24 w-[500px] h-[500px] rounded-full bg-white/[0.025]" />
          <div className="absolute top-1/3 right-1/4 w-[280px] h-[280px] rounded-full bg-[var(--color-accent-gold)]/[0.07]" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 w-full py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-accent-gold)]/20 border border-[var(--color-accent-gold)]/30 text-[var(--color-accent-gold)] text-xs font-bold uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-gold)]" />
                Trusted CA Firm · Indore, MP
              </div>

              <h1 className="text-white font-extrabold leading-[1.08] mb-6 text-[clamp(2.25rem,4.5vw,3.5rem)]">
                Expert Financial Guidance,{" "}
                <span className="text-[var(--color-accent-gold)]">
                  Exactly When You Need It
                </span>
              </h1>

              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">
                We bring together expertise across{" "}
                <strong className="text-white/90">
                  Finance, Accounting, Taxation, Audit, Compliance, Cost Management, Risk Assessment and Legal Advisory
                </strong>
                , supported by data-driven analysis and a multidisciplinary professional network to help businesses identify risks, improve processes and make better decisions.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Button
                  href="/contact"
                  size="lg"
                  variant="secondary"
                  className="border-white text-white hover:bg-white hover:text-[var(--color-primary)] font-bold"
                >
                  <PhoneCall size={18} />
                  Book a Free Consultation
                </Button>
                <Button
                  href="/services"
                  size="lg"
                  variant="ghost"
                  className="text-white hover:bg-white/10 font-semibold"
                >
                  Explore Services
                  <ArrowRight size={18} />
                </Button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2.5">
                {trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="flex items-center gap-1.5 text-xs font-semibold text-white/65 bg-white/[0.07] border border-white/10 rounded-full px-3.5 py-1.5 backdrop-blur-sm"
                  >
                    <CheckCircle size={11} className="text-[var(--color-accent-gold)]" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Stats grid */}
            <div>
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm hover:bg-white/10 transition-colors"
                  >
                    <p className="text-3xl font-black text-white mb-1.5">{stat.value}</p>
                    <p className="text-white/55 text-xs font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA card */}
              <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-5 backdrop-blur-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-gold)]/20 border border-[var(--color-accent-gold)]/30 flex items-center justify-center flex-shrink-0">
                  <FileText size={20} className="text-[var(--color-accent-gold)]" />
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-bold mb-0.5">File your ITR today</p>
                  <p className="text-white/55 text-xs">Starting at ₹1,499 · 48-hour turnaround</p>
                </div>
                <Button href="/contact" size="sm" variant="secondary" className="border-white/30 text-white text-xs hover:bg-white hover:text-[var(--color-primary)] flex-shrink-0">
                  Start Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── WHO WE SERVE ──────── */}
      <SectionWrapper surface id="who-we-serve">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Who We Serve"
            title="Services Tailored to Your Situation"
            subtitle="Whether you're a salaried professional, a growing business, an NRI, or a company — we have the expertise and processes designed specifically for you."
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, i) => (
            <PersonaCard
              key={persona.persona}
              {...persona}
              delay={i * 0.08}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* ──────── WHY CHOOSE US ──────── */}
      <SectionWrapper id="why-choose-us">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Why MD Backoffice"
            title="The CA Firm That Treats You Like a Priority"
            subtitle="We combine CA-grade expertise with the responsiveness and personal attention you deserve — not just at tax time, but all year round."
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <BenefitTile
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={i * 0.07}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* ──────── HOW WE WORK ──────── */}
      <SectionWrapper surface id="how-we-work">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Our Process"
            title="Simple, Transparent, Stress-Free"
            subtitle="From the moment you share your documents to acknowledgement — here's exactly how we work."
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line desktop */}
          <div
            className="hidden lg:block absolute top-10 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent"
            aria-hidden="true"
          />
          {processSteps.map((step, i) => (
            <AnimatedSection key={step.step} delay={i * 0.1} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative z-10 w-20 h-20 rounded-full bg-white border-2 border-[var(--color-primary)]/15 flex items-center justify-center mb-5 shadow-[0_4px_20px_rgba(11,46,79,0.08)]">
                  <span className="text-2xl font-black text-[var(--color-primary)]">{step.step}</span>
                </div>
                <h3 className="font-bold text-[var(--color-ink)] mb-2 text-base">{step.title}</h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* ──────── SERVICES OVERVIEW ──────── */}
      <SectionWrapper id="services">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <SectionHeader
              eyebrow="Our Services"
              title="Everything You Need Under One Roof"
              centered={false}
              className="mb-0"
            />
            <Button href="/services" variant="secondary" size="sm" className="self-start sm:self-auto flex-shrink-0">
              View All Services
              <ArrowRight size={15} />
            </Button>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((svc, i) => (
            <ServiceCard
              key={svc.title}
              icon={svc.icon}
              title={svc.title}
              tagline={svc.tagline}
              href={svc.href}
              delay={i * 0.07}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* ──────── PRICING ──────── */}
      <SectionWrapper surface id="pricing">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Engagement Plans"
            title="Transparent Pricing, No Surprises"
            subtitle="Choose the plan that fits your needs. All plans include a dedicated CA, timely filing, and year-round support."
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mt-4">
          {pricingData.map((plan, i) => (
            <PricingCard key={plan.id} plan={plan} delay={i * 0.1} />
          ))}
        </div>
        <AnimatedSection delay={0.3} className="text-center mt-8">
          <p className="text-[var(--color-muted)] text-sm">
            Need something custom?{" "}
            <a href="/contact" className="text-[var(--color-primary)] font-semibold hover:underline">
              Talk to us about a bespoke engagement →
            </a>
          </p>
        </AnimatedSection>
      </SectionWrapper>

      {/* ──────── TESTIMONIALS ──────── */}
      <SectionWrapper id="testimonials">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Client Testimonials"
            title="What Our Clients Say"
            subtitle="Don't take our word for it — hear from 2,000+ businesses and individuals who trust us with their finances."
          />
        </AnimatedSection>
        <TestimonialCarousel />
      </SectionWrapper>

      {/* ──────── LOGO MARQUEE ──────── */}
      <SectionWrapper surface className="py-10 md:py-12">
        <AnimatedSection className="text-center mb-8">
          <p className="text-[var(--color-muted)] text-sm font-semibold uppercase tracking-widest">
            Trusted by businesses across India
          </p>
        </AnimatedSection>
        <LogoMarquee />
      </SectionWrapper>

      {/* ──────── FAQ ──────── */}
      <SectionWrapper id="faq">
        <AnimatedSection>
          <SectionHeader
            eyebrow="FAQs"
            title="Answers to Common Questions"
            subtitle="Can't find what you're looking for? Reach out — we're happy to help."
          />
        </AnimatedSection>
        <div className="max-w-3xl mx-auto">
          <FaqAccordion items={faqData} limit={6} />
          <AnimatedSection delay={0.2} className="text-center mt-8">
            <Button href="/contact" variant="secondary" size="md">
              Have a different question? Ask us
            </Button>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* ──────── CTA BANNER ──────── */}
      <section className="relative bg-[var(--color-primary)] py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white/[0.03]" />
          <div className="absolute -bottom-16 -left-16 w-[300px] h-[300px] rounded-full bg-[var(--color-accent-gold)]/[0.07]" />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <p className="text-[var(--color-accent-gold)] font-bold text-xs uppercase tracking-widest mb-4">
              Get Started Today
            </p>
            <h2 className="text-white font-extrabold text-[clamp(1.875rem,3.5vw,2.75rem)] mb-5 max-w-2xl mx-auto leading-tight">
              Ready to Take Control of Your Finances?
            </h2>
            <p className="text-white/65 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Book a free 30-minute consultation with a CA. No obligation, no jargon — just clarity on what you need.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                href="/contact"
                size="lg"
                variant="secondary"
                className="border-white text-white hover:bg-white hover:text-[var(--color-primary)] font-bold"
              >
                <PhoneCall size={18} />
                Book a Free Consultation
              </Button>
              <Button
                href="/pricing"
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/10 font-semibold"
              >
                View Pricing Plans
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
