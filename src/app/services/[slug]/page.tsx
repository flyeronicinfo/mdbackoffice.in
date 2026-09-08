import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import {
  BookOpen, Receipt, ShieldCheck, BarChart3, Calculator, ClipboardList,
  Building2, Scale, Landmark, CheckCircle, ArrowLeft, PhoneCall,
} from "lucide-react";

// Alias map — maps URL slugs to actual data keys
const slugAliases: Record<string, string> = {
  "itr-filing": "gst-registration-filing",
};

const serviceData: Record<string, {
  icon: React.ElementType;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  whoIsItFor: string[];
  faqs: { q: string; a: string }[];
}> = {
  "accounting-bookkeeping": {
    icon: BookOpen,
    title: "Finance & Accounting",
    tagline: "Accurate books, real-time MIS, and cloud accounting.",
    description: "Whether you're a sole proprietor or a growing SME, clean books are the foundation of every smart financial decision. We handle your end-to-end accounting so you have accurate, up-to-date records at all times.",
    features: ["Monthly bookkeeping & ledger maintenance", "Cloud accounting (Tally, Zoho Books, QuickBooks)", "MIS reports & financial statements (P&L, Balance Sheet)", "Payroll processing & PF/ESIC/PT filing", "Bank reconciliation & accounts payable/receivable", "Year-end finalization for audit/tax purposes"],
    whoIsItFor: ["SMEs & startups needing monthly accounting support", "Professionals with business income", "Companies requiring MIS for investor reporting", "Businesses transitioning to cloud accounting"],
    faqs: [{ q: "Which accounting software do you use?", a: "We work with Tally Prime, Zoho Books, QuickBooks Online, and Busy. We also support migration from paper-based to cloud systems." }, { q: "Do I need to share physical documents?", a: "No. We work fully remote. You can share scanned copies, photos, or bank statement downloads — we'll handle the rest." }],
  },
  "gst-registration-filing": {
    icon: Receipt,
    title: "Taxation & GST",
    tagline: "End-to-end tax compliance — ITR, GST, TDS, and advisory.",
    description: "Tax compliance in India is complex and changes every year. We handle everything from your personal income tax return to your business's complete GST and TDS filing calendar — so you're always compliant and never surprised.",
    features: ["ITR filing — all forms (ITR-1 through ITR-7)", "GST registration & composition scheme advisory", "Monthly/quarterly GSTR-1, GSTR-3B, GSTR-9 filing", "TDS computation, challan payment & quarterly returns", "Advance tax computation & reminder alerts", "Income tax notice handling & scrutiny representation"],
    whoIsItFor: ["Salaried individuals with complex income", "Self-employed professionals & freelancers", "F&O / stock market traders", "SMEs & GST-registered businesses", "Companies requiring complete TDS management"],
    faqs: [{ q: "What is your turnaround time for ITR filing?", a: "For a complete document set, we file within 48–72 hours. Simple salaried returns are often done in 24 hours." }, { q: "Do you handle GST notices?", a: "Yes. We respond to GST department notices, SCNs, and adjudication orders at our standard advisory rates." }],
  },
  "audit-assurance": {
    icon: ShieldCheck,
    title: "Audit & Assurance",
    tagline: "UDIN-certified statutory, tax, and internal audits.",
    description: "Our audit team combines deep technical knowledge of Indian Accounting Standards with practical audit methodology to deliver reports that are thorough, transparent, and accepted by regulators, banks, and investors.",
    features: ["Statutory audit under Companies Act, 2013", "Tax audit u/s 44AB of the Income Tax Act", "Internal audit & process efficiency review", "Bank audit & concurrent audit", "UDIN generation for all certificates & reports", "LLP audit & ROC compliance audit"],
    whoIsItFor: ["Private limited companies requiring statutory audit", "Businesses with turnover > ₹1 crore (tax audit)", "Companies seeking internal audit outsourcing", "Banks & NBFCs requiring concurrent audit"],
    faqs: [{ q: "What is UDIN and why does it matter?", a: "UDIN (Unique Document Identification Number) is a 18-digit number mandated by ICAI for all certificates and audit reports. It validates that the document was issued by a practicing CA." }, { q: "How long does a statutory audit take?", a: "For a small company, typically 2–4 weeks after all books are ready. For larger entities, 4–8 weeks. We provide a detailed timeline upfront." }],
  },
  "company-incorporation": {
    icon: Building2,
    title: "Corporate & Secretarial Compliance",
    tagline: "Company incorporation, ROC filings, and MCA compliance.",
    description: "From choosing the right business structure to managing your annual compliance calendar — we handle every aspect of corporate law so your company stays in good standing with the Ministry of Corporate Affairs.",
    features: ["Private limited company, LLP & OPC incorporation", "Annual ROC filings (AOC-4, MGT-7, MGT-7A)", "Director KYC (DIR-3 KYC) & DIN activation", "Share transfer & alteration of share capital", "MSME, DPIIT Startup & Udyam registration", "Strike off & winding up of defunct companies"],
    whoIsItFor: ["Entrepreneurs incorporating a new company", "Existing companies needing ROC compliance support", "Startups seeking DPIIT recognition", "Companies with pending MCA filings"],
    faqs: [{ q: "How long does company incorporation take?", a: "Typically 7–10 working days from submission of all documents. We handle DSC, DIN, name approval, MOA/AOA drafting, and COI filing." }, { q: "Can I incorporate a company remotely?", a: "Yes. The entire process is digital. You only need to provide self-attested scanned documents; no physical visit is required." }],
  },
  "tax-planning-advisory": {
    icon: BarChart3,
    title: "Tax Planning & Advisory",
    tagline: "Proactive tax strategies to reduce your liability legally.",
    description: "Reactive tax filing saves you from penalties. Proactive tax planning saves you real money. Our advisory team works with you through the year — not just at ITR time — to legally minimise your tax outgo.",
    features: ["Annual tax planning & liability projection", "Investment advisory for 80C/80D/80G deductions", "Capital gains tax planning (equity, property, MF)", "HUF structuring & tax-efficient family planning", "Salary structure optimisation for employees", "Advance tax computation & quarterly reminders"],
    whoIsItFor: ["High-income salaried individuals", "Business owners and partners", "Investors with large capital gains", "HNIs with complex financial portfolios"],
    faqs: [{ q: "Is tax planning different from tax evasion?", a: "Completely different. Tax planning uses legitimate provisions in the Income Tax Act — deductions, exemptions, timing strategies — to reduce your legal tax liability. We only recommend compliant strategies." }, { q: "When should I start tax planning?", a: "Ideally at the start of the financial year (April). The earlier you plan, the more options you have for investments, restructuring, and advance tax savings." }],
  },
  "nri-taxation": {
    icon: Scale,
    title: "NRI Taxation",
    tagline: "Complete NRI tax compliance — FEMA, DTAA, and repatriation.",
    description: "Managing Indian tax obligations from abroad is complicated. Between determining residential status, claiming DTAA benefits, repatriating funds, and staying FEMA-compliant — we handle every aspect remotely, efficiently, and correctly.",
    features: ["Residential status determination (RNOR, NRI, Resident)", "ITR filing for NRIs with Indian income", "DTAA benefit claims & TDS refund applications", "Form 15CA / 15CB certification", "FEMA compliance & RBI reporting (ODI, FDI)", "NRO/NRE/FCNR account advisory & repatriation"],
    whoIsItFor: ["NRIs with rental, dividend, or capital gains income in India", "Recent returnees (RNORs) navigating tax status", "NRIs remitting funds to or from India", "Foreign nationals with Indian investment income"],
    faqs: [{ q: "How do I work with you from abroad?", a: "Entirely online. We communicate via email and WhatsApp, and you share documents securely through our client portal or via email. All filings are electronic." }, { q: "What is Form 15CA/15CB and do I need it?", a: "Form 15CA/15CB is required when remitting money from India abroad. It certifies that applicable taxes have been paid. A CA must certify Form 15CB before Form 15CA is filed." }],
  },
};

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resolvedSlug = slugAliases[slug] ?? slug;
  const svc = serviceData[resolvedSlug];
  if (!svc) return { title: "Service Not Found" };
  return {
    title: `${svc.title} | Sharma & Associates CA`,
    description: svc.tagline,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const resolvedSlug = slugAliases[slug] ?? slug;
  const svc = serviceData[resolvedSlug];

  if (!svc) notFound();

  const Icon = svc.icon;

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-primary)] pt-20 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "60px 60px" }} aria-hidden="true" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <AnimatedSection>
            <Link href="/services" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors">
              <ArrowLeft size={14} /> Back to Services
            </Link>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-accent-gold)]/20 border border-[var(--color-accent-gold)]/30 flex items-center justify-center">
                <Icon size={26} className="text-[var(--color-accent-gold)]" />
              </div>
              <div>
                <p className="text-[var(--color-accent-gold)] font-bold text-xs uppercase tracking-widest">Practice Area</p>
                <h1 className="text-white font-extrabold text-2xl leading-tight">{svc.title}</h1>
              </div>
            </div>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-8">{svc.description}</p>
            <Button href="/contact" size="lg" variant="secondary" className="border-white text-white hover:bg-white hover:text-[var(--color-primary)]">
              <PhoneCall size={17} /> Get a Free Quote
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Features */}
          <div className="lg:col-span-2">
            <AnimatedSection>
              <h2 className="text-[var(--color-ink)] font-extrabold text-xl mb-6">What's Included</h2>
              <ul className="space-y-3 mb-12">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 p-4 bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)]">
                    <CheckCircle size={16} className="text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[var(--color-body)] font-medium">{f}</span>
                  </li>
                ))}
              </ul>

              {/* FAQs */}
              <h2 className="text-[var(--color-ink)] font-extrabold text-xl mb-6">Common Questions</h2>
              <div className="space-y-4">
                {svc.faqs.map((faq) => (
                  <div key={faq.q} className="p-5 bg-white rounded-2xl border border-[var(--color-border)]">
                    <p className="font-bold text-[var(--color-ink)] text-sm mb-2">{faq.q}</p>
                    <p className="text-[var(--color-muted)] text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <div>
            <AnimatedSection delay={0.15} direction="right">
              {/* Who it's for */}
              <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6 mb-6">
                <h3 className="font-bold text-[var(--color-ink)] text-base mb-4">Who is this for?</h3>
                <ul className="space-y-2.5">
                  {svc.whoIsItFor.map((who) => (
                    <li key={who} className="flex items-start gap-2.5 text-sm text-[var(--color-body)]">
                      <CheckCircle size={13} className="text-[var(--color-accent-gold)] mt-0.5 flex-shrink-0" />
                      {who}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Card */}
              <div className="bg-[var(--color-primary)] rounded-2xl p-6 text-center">
                <p className="text-white font-bold mb-2">Ready to get started?</p>
                <p className="text-white/65 text-sm mb-5">Book a free 30-minute consultation with a CA today.</p>
                <Button href="/contact" size="md" variant="secondary" className="border-white text-white hover:bg-white hover:text-[var(--color-primary)] w-full justify-center">
                  Book Free Consultation
                </Button>
                <p className="text-white/40 text-xs mt-3">No commitment required</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </SectionWrapper>

      {/* Related Services */}
      <SectionWrapper surface>
        <AnimatedSection>
          <SectionHeader eyebrow="Other Services" title="More Practice Areas" centered={false} className="mb-8" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(serviceData)
            .filter(([s]) => s !== slug)
            .slice(0, 3)
            .map(([s, d]) => (
              <Link key={s} href={`/services/${s}`} className="group p-5 bg-white rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 hover:shadow-md transition-all flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-surface)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-primary)]/8 transition-colors">
                  <d.icon size={18} className="text-[var(--color-primary)]" />
                </div>
                <div>
                  <p className="font-bold text-[var(--color-ink)] text-sm mb-1">{d.title}</p>
                  <p className="text-[var(--color-muted)] text-xs leading-snug">{d.tagline}</p>
                </div>
              </Link>
            ))}
        </div>
      </SectionWrapper>
    </>
  );
}
