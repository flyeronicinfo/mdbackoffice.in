import type { Metadata } from "next";
import Image from "next/image";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import {
  Award, ShieldCheck, Clock, Users, TrendingUp, Landmark, ArrowRight, CheckCircle, PhoneCall,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | MD Backoffice CA",
  description:
    "Learn about MD Backoffice — an Indore-based CA firm with 22+ years of experience in taxation, audit, GST compliance, and financial advisory.",
};

const milestones = [
  { year: "2002", title: "Founded", desc: "Established in Indore with a focus on direct taxation and compliance." },
  { year: "2008", title: "GST & Indirect Tax Wing", desc: "Expanded services to cover indirect taxes ahead of the GST era." },
  { year: "2015", title: "Corporate & NRI Practice", desc: "Launched a dedicated NRI desk and corporate secretarial services." },
  { year: "2020", title: "Cloud-First Transition", desc: "Moved all client workflows to secure cloud platforms for 100% remote servicing." },
  { year: "2024", title: "2,000+ Clients", desc: "Crossed 2,000 active clients across 15+ Indian cities and 8 countries." },
];

const values = [
  { icon: Award, title: "CA-Grade Quality", desc: "Every file is reviewed and signed by a qualified Chartered Accountant. We never outsource to non-CA staff." },
  { icon: ShieldCheck, title: "Compliance First", desc: "We track every regulatory change — Budget, CBDT circular, MCA notification — so you're always ahead of the law." },
  { icon: Clock, title: "Deadline Discipline", desc: "In 22 years, we have never missed a client filing deadline. Our internal calendar system ensures this." },
  { icon: Users, title: "Client-Centric", desc: "You get a single dedicated CA who knows your complete financial picture — not a call centre." },
  { icon: TrendingUp, title: "Proactive Advisory", desc: "We don't wait to be asked. We flag risks, opportunities, and reminders before deadlines approach." },
  { icon: Landmark, title: "Ethical Practice", desc: "We follow ICAI's Code of Ethics strictly. No aggressive tax evasion schemes — only legitimate optimisation." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-primary)] pt-20 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "60px 60px" }} aria-hidden="true" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <AnimatedSection>
            <p className="text-[var(--color-accent-gold)] font-bold text-xs uppercase tracking-widest mb-4">About the Firm</p>
            <h1 className="text-white font-extrabold leading-tight mb-5 max-w-2xl">
              Two Decades of Trust, <span className="text-[var(--color-accent-gold)]">One Commitment to Excellence</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-8">
              MD Backoffice is an Indore-based Chartered Accountancy firm founded in 2002. We serve 2,000+ individuals, businesses, and NRIs across India with expert tax, audit, compliance, and financial advisory services.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" size="lg" variant="secondary" className="border-white text-white hover:bg-white hover:text-[var(--color-primary)]">
                <PhoneCall size={17} /> Book a Free Consultation
              </Button>
              <Button href="/services" size="lg" variant="ghost" className="text-white hover:bg-white/10">
                Our Services <ArrowRight size={17} />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-[var(--color-primary-dark)] text-white">
        <div className="max-w-[1200px] mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { v: "2,000+", l: "Happy Clients" },
            { v: "22+", l: "Years of Experience" },
            { v: "₹50Cr+", l: "Tax Savings Delivered" },
            { v: "100%", l: "On-Time Filing Rate" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <p className="text-2xl font-black text-[var(--color-accent-gold)]">{s.v}</p>
              <p className="text-white/60 text-xs mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <p className="text-[var(--color-accent-gold)] font-bold text-xs uppercase tracking-widest mb-3">Our Story</p>
            <h2 className="text-[var(--color-ink)] font-extrabold mb-5">Started Small. Grown With Our Clients.</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              MD Backoffice was founded in 2002 by a team of ICAI-qualified Chartered Accountants with a single goal: to give every client — whether a salaried individual or a growing company — the same quality of financial guidance that was once reserved for large corporations.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              Over two decades, we have grown from a small tax practice to a comprehensive financial services firm, adding expertise in GST, audit, corporate law, NRI taxation, transfer pricing, and management consulting along the way.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Today, we serve clients across 15+ Indian cities and 8 countries — entirely through our secure, paperless workflow that makes working with us as easy as sending a WhatsApp message.
            </p>
          </AnimatedSection>

          {/* Timeline */}
          <AnimatedSection delay={0.15} direction="right">
            <div className="space-y-5">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0">
                      <span className="text-[var(--color-accent-gold)] font-black text-[10px]">{m.year}</span>
                    </div>
                    <div className="w-px flex-1 bg-[var(--color-border)] mt-2" />
                  </div>
                  <div className="pb-5">
                    <p className="font-bold text-[var(--color-ink)] text-sm mb-1">{m.title}</p>
                    <p className="text-[var(--color-muted)] text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Founder */}
      <SectionWrapper surface>
        <AnimatedSection>
          <SectionHeader eyebrow="Leadership" title="Meet Our Founder" subtitle="The vision and expertise behind two decades of trusted financial guidance." />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start bg-white rounded-2xl border border-[var(--color-border)] p-8 md:p-10">
            <div className="mx-auto md:mx-0">
              <Image
                src="/team/founder-murli-dhar-garg.jpg"
                alt="CA Murli Dhar Garg, Founder of MD Backoffice"
                width={280}
                height={280}
                className="rounded-2xl object-cover w-[220px] h-[220px] md:w-[280px] md:h-[280px] border border-[var(--color-border)]"
              />
            </div>
            <div>
              <h3 className="font-extrabold text-[var(--color-ink)] text-xl mb-1">CA Murli Dhar Garg</h3>
              <p className="text-[var(--color-accent-gold)] font-bold text-xs uppercase tracking-widest mb-4">Founder &amp; Managing Partner</p>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="px-3 py-1 rounded-full bg-[var(--color-primary)]/8 text-[var(--color-primary)] text-xs font-bold">FCA</span>
                <span className="px-3 py-1 rounded-full bg-[var(--color-primary)]/8 text-[var(--color-primary)] text-xs font-bold">M.Com</span>
                <span className="px-3 py-1 rounded-full bg-[var(--color-primary)]/8 text-[var(--color-primary)] text-xs font-bold">29+ Years of Experience</span>
              </div>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                CA Murli Dhar Garg is a Fellow Chartered Accountant (FCA) and holds a Master&apos;s degree in Commerce (M.Com), bringing over 29 years of experience in taxation, audit, GST compliance, and financial advisory.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Under his leadership, MD Backoffice has grown into a trusted name for individuals, businesses, and NRIs across Indore and Madhya Pradesh — built on a foundation of technical expertise, ethical practice, and client-first service.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper surface>
        <AnimatedSection>
          <SectionHeader eyebrow="Our Values" title="What We Stand For" subtitle="These aren't wall posters — they are the principles that guide every client interaction and every filing we make." />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.07}>
              <div className="p-6 bg-white rounded-2xl border border-[var(--color-border)] hover:shadow-[0_8px_30px_rgba(11,46,79,0.08)] transition-shadow h-full">
                <div className="w-11 h-11 rounded-xl bg-[var(--color-primary)]/8 flex items-center justify-center mb-4">
                  <v.icon size={20} className="text-[var(--color-primary)]" />
                </div>
                <h3 className="font-bold text-[var(--color-ink)] mb-2 text-base">{v.title}</h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-[var(--color-primary)] py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-white font-extrabold text-3xl mb-4">Ready to work with us?</h2>
            <p className="text-white/65 mb-8 max-w-lg mx-auto">Book a free 30-minute consultation. No obligation, no jargon.</p>
            <Button href="/contact" size="lg" variant="secondary" className="border-white text-white hover:bg-white hover:text-[var(--color-primary)]">
              Book Free Consultation
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
