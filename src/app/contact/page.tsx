"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-primary)] pt-20 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "60px 60px" }} aria-hidden="true" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <AnimatedSection>
            <p className="text-[var(--color-accent-gold)] font-bold text-xs uppercase tracking-widest mb-4">Get in Touch</p>
            <h1 className="text-white font-extrabold leading-tight mb-5 max-w-2xl">
              Let's Talk About <span className="text-[var(--color-accent-gold)]">Your Finances</span>
            </h1>
            <p className="text-white/70 text-lg max-w-xl leading-relaxed">
              Book a free 30-minute consultation or drop us a message. We'll get back to you within one business day.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <AnimatedSection>
              <h2 className="text-[var(--color-ink)] font-extrabold text-2xl mb-2">Send us a message</h2>
              <p className="text-[var(--color-muted)] text-sm mb-8">Fill in your details and we'll match you with the right CA for your needs.</p>

              {submitted ? (
                <div className="flex flex-col items-center text-center py-16 px-8 bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)]">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-success)]/10 flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-[var(--color-success)]" />
                  </div>
                  <h3 className="font-bold text-[var(--color-ink)] text-xl mb-2">Message Received!</h3>
                  <p className="text-[var(--color-muted)] text-sm max-w-sm">Thank you, <strong>{form.name}</strong>. We'll reach out to {form.email} within one business day to schedule your free consultation.</p>
                  <Button href="/" size="md" variant="secondary" className="mt-8">Back to Home</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[var(--color-ink)] mb-1.5">Full Name *</label>
                      <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Rahul Sharma" className="w-full px-4 py-3 text-sm border border-[var(--color-border)] rounded-xl bg-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors placeholder:text-[var(--color-muted)]/60" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[var(--color-ink)] mb-1.5">Email Address *</label>
                      <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="rahul@example.com" className="w-full px-4 py-3 text-sm border border-[var(--color-border)] rounded-xl bg-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors placeholder:text-[var(--color-muted)]/60" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-[var(--color-ink)] mb-1.5">Phone Number</label>
                      <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className="w-full px-4 py-3 text-sm border border-[var(--color-border)] rounded-xl bg-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors placeholder:text-[var(--color-muted)]/60" />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-[var(--color-ink)] mb-1.5">Service Required</label>
                      <select id="service" name="service" value={form.service} onChange={handleChange} className="w-full px-4 py-3 text-sm border border-[var(--color-border)] rounded-xl bg-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors text-[var(--color-body)]">
                        <option value="">Select a service…</option>
                        <option>ITR Filing</option>
                        <option>GST Registration & Filing</option>
                        <option>Company Incorporation</option>
                        <option>Audit & Assurance</option>
                        <option>Accounting & Bookkeeping</option>
                        <option>NRI Taxation</option>
                        <option>Tax Planning & Advisory</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[var(--color-ink)] mb-1.5">Your Message</label>
                    <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Tell us about your situation — income sources, business type, specific queries…" className="w-full px-4 py-3 text-sm border border-[var(--color-border)] rounded-xl bg-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors resize-none placeholder:text-[var(--color-muted)]/60" />
                  </div>
                  <button type="submit" className="inline-flex items-center gap-2.5 bg-[var(--color-primary)] text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-[var(--color-primary-dark)] transition-colors text-sm shadow-sm">
                    <Send size={16} /> Send Message
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <AnimatedSection delay={0.15} direction="right">
              <h2 className="text-[var(--color-ink)] font-extrabold text-2xl mb-2">Contact Details</h2>
              <p className="text-[var(--color-muted)] text-sm mb-8">Prefer to call or visit? Here's where to find us.</p>

              <div className="space-y-5 mb-8">
                {[
                  { icon: MapPin, label: "Office", value: "12, Finance Tower, MG Road,\nBengaluru, Karnataka 560001" },
                  { icon: Phone, label: "Phone", value: "+91 12345 67890", href: "tel:+911234567890" },
                  { icon: Mail, label: "Email", value: "info@sharmaassociates.in", href: "mailto:info@sharmaassociates.in" },
                  { icon: Clock, label: "Hours", value: "Mon–Sat: 9:30 AM – 6:30 PM\nSundays & Holidays: Closed" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 p-4 bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)]">
                    <div className="w-9 h-9 rounded-lg bg-[var(--color-primary)]/8 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[var(--color-muted)] uppercase tracking-wide mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm text-[var(--color-ink)] hover:text-[var(--color-accent-gold)] transition-colors font-medium">{value}</a>
                      ) : (
                        <p className="text-sm text-[var(--color-ink)] font-medium whitespace-pre-line">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full bg-[#25D366] text-white font-semibold py-3.5 px-5 rounded-xl hover:bg-[#1ebe5d] transition-colors text-sm justify-center"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.005 0C5.373 0 0 5.373 0 12.005c0 2.117.553 4.102 1.522 5.825L.057 24l6.304-1.654A11.93 11.93 0 0012.005 24C18.627 24 24 18.627 24 12.005 24 5.373 18.627 0 12.005 0zm0 21.9a9.868 9.868 0 01-5.034-1.375l-.36-.214-3.741.981.998-3.648-.235-.374a9.869 9.869 0 01-1.528-5.27C2.105 6.528 6.528 2.1 12.005 2.1c5.476 0 9.9 4.424 9.9 9.905 0 5.477-4.424 9.895-9.9 9.895z"/></svg>
                WhatsApp Us
              </a>
            </AnimatedSection>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
