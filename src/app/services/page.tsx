import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import {
  BookOpen, Receipt, ShieldCheck, BarChart3, Calculator, ClipboardList,
  Building2, Scale, Landmark, ArrowRight, CheckCircle, PhoneCall,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Sharma & Associates CA",
  description:
    "Comprehensive CA services — ITR filing, GST compliance, audit, company incorporation, bookkeeping, NRI taxation, and financial advisory for individuals & businesses.",
};

const services = [
  {
    icon: BookOpen,
    title: "Finance & Accounting",
    slug: "accounting-bookkeeping",
    tagline: "Accurate books, real-time MIS reports, and cloud accounting for businesses of all sizes.",
    features: ["Monthly bookkeeping & ledger maintenance", "Cloud accounting (Tally, Zoho Books, QuickBooks)", "MIS reports & financial statements", "Payroll processing & PF/ESIC filing", "Bank reconciliation & accounts payable/receivable"],
  },
  {
    icon: Receipt,
    title: "Taxation & GST",
    slug: "gst-registration-filing",
    tagline: "End-to-end direct and indirect tax compliance — ITR filing, GST returns, TDS, and advisory.",
    features: ["ITR filing (all forms — ITR-1 to ITR-7)", "GST registration, GSTR-1, GSTR-3B, GSTR-9", "TDS computation, challan payment & returns", "Advance tax planning & computation", "Income tax notice handling & scrutiny support"],
  },
  {
    icon: ShieldCheck,
    title: "Audit & Assurance",
    slug: "audit-assurance",
    tagline: "Statutory, tax, internal, and management audits with UDIN-certified reports.",
    features: ["Statutory audit under Companies Act", "Tax audit u/s 44AB", "Internal audit & process reviews", "Bank audit & concurrent audit", "UDIN generation for all certificates"],
  },
  {
    icon: BarChart3,
    title: "Financial & Management Analysis",
    slug: "tax-planning-advisory",
    tagline: "In-depth financial analysis, performance reporting, and data-driven management insights.",
    features: ["Financial ratio analysis & benchmarking", "Cash flow modelling & forecasting", "Budget preparation & variance analysis", "Management reporting & KPI dashboards", "Business valuation & due diligence"],
  },
  {
    icon: Calculator,
    title: "Cost & Process Analysis",
    slug: "accounting-bookkeeping",
    tagline: "Cost audits, activity-based costing, and process reviews to improve efficiency and margins.",
    features: ["Cost audit under Companies Act", "Activity-based costing (ABC)", "Break-even & profitability analysis", "Process mapping & efficiency review", "Standard costing & variance analysis"],
  },
  {
    icon: ClipboardList,
    title: "Risk Assessment & Internal Controls",
    slug: "audit-assurance",
    tagline: "Risk identification, control framework design, and internal audit to safeguard your business.",
    features: ["Enterprise risk management (ERM)", "Internal control framework design", "SOX / IFC compliance readiness", "Fraud risk assessment", "Operational audit & gap analysis"],
  },
  {
    icon: Building2,
    title: "Corporate & Secretarial Compliance",
    slug: "company-incorporation",
    tagline: "Company incorporation, ROC filings, director KYC, and full MCA compliance management.",
    features: ["Private limited / LLP / OPC incorporation", "Annual ROC filings (AOC-4, MGT-7)", "Director KYC (DIR-3 KYC)", "Share transfer & alteration of capital", "MSME & DPIIT Startup registration"],
  },
  {
    icon: Scale,
    title: "Legal & Regulatory Advisory",
    slug: "nri-taxation",
    tagline: "FEMA, SEBI, RBI, and sector-specific regulatory guidance for businesses and NRIs.",
    features: ["FEMA compliance & RBI reporting", "ODI / FDI advisory & filing", "SEBI compliance for listed entities", "Form 15CA / 15CB certification", "Regulatory representation & liaison"],
  },
  {
    icon: Landmark,
    title: "Ind AS & IFRS Assignments",
    slug: "audit-assurance",
    tagline: "Financial statement preparation, transition support, and advisory under Ind AS and IFRS.",
    features: ["Ind AS / IFRS gap analysis", "Financial statement preparation & restating", "First-time adoption support", "EIR computation (Ind AS 109)", "Deferred tax (Ind AS 12) advisory"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-primary)] pt-20 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "60px 60px" }} aria-hidden="true" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <AnimatedSection>
            <p className="text-[var(--color-accent-gold)] font-bold text-xs uppercase tracking-widest mb-4">Our Services</p>
            <h1 className="text-white font-extrabold leading-tight mb-5 max-w-2xl">
              Everything You Need, <span className="text-[var(--color-accent-gold)]">Under One Roof</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-8">
              From filing your first ITR to managing a listed company's compliance calendar — we cover the full spectrum of financial and regulatory services.
            </p>
            <Button href="/contact" size="lg" variant="secondary" className="border-white text-white hover:bg-white hover:text-[var(--color-primary)]">
              <PhoneCall size={17} /> Book a Free Consultation
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <SectionWrapper>
        <AnimatedSection>
          <SectionHeader eyebrow="Practice Areas" title="Our 9 Service Areas" subtitle="Click any service to learn more about what's included and how we can help you." />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <AnimatedSection key={svc.title} delay={i * 0.06}>
              <Link
                href={`/services/${svc.slug}`}
                className="group flex flex-col h-full p-6 rounded-2xl border border-[var(--color-border)] bg-white hover:border-[var(--color-accent-gold)]/40 hover:shadow-[0_8px_30px_rgba(184,137,76,0.10)] transition-all duration-300"
              >
                <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[var(--color-accent-gold)] to-[#D4A867] mb-5 group-hover:w-full transition-all duration-500" />
                <div className="w-10 h-10 rounded-xl bg-[var(--color-surface)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-accent-gold)]/10 transition-colors">
                  <svc.icon size={20} className="text-[var(--color-primary)] group-hover:text-[var(--color-accent-gold)] transition-colors" />
                </div>
                <h2 className="font-bold text-[var(--color-ink)] text-base mb-2">{svc.title}</h2>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4 flex-1">{svc.tagline}</p>
                <ul className="space-y-1.5 mb-5">
                  {svc.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-[var(--color-body)]">
                      <CheckCircle size={12} className="text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent-gold)] transition-colors">
                  Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-[var(--color-primary)] py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-white font-extrabold text-3xl mb-4">Not sure which service you need?</h2>
            <p className="text-white/65 mb-8 max-w-lg mx-auto">Book a free consultation and we'll assess your exact requirements.</p>
            <Button href="/contact" size="lg" variant="secondary" className="border-white text-white hover:bg-white hover:text-[var(--color-primary)]">
              Book Free Consultation
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
