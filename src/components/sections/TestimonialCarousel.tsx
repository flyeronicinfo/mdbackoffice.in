"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ankit Sharma",
    role: "Senior Engineer, Infosys",
    rating: 5,
    text: "I had ESOP gains, salary from two companies, and rental income to declare. MD Backoffice handled everything flawlessly and even found deductions I didn't know I could claim. Saved me nearly ₹60,000!",
    tag: "ITR Filing",
  },
  {
    id: 2,
    name: "Priya Menon",
    role: "Founder, HealthTech Startup",
    rating: 5,
    text: "As a founder, I don't have time to think about GST and ROC deadlines. Their business retainer plan is a lifesaver. I get monthly MIS reports, all filings are done on time, and I have a CA just a WhatsApp away.",
    tag: "Business Retainer",
  },
  {
    id: 3,
    name: "Dr. Rajan Patel",
    role: "NRI — Cardiologist, Houston TX",
    rating: 5,
    text: "Managing taxes while living in the US is complicated. They handled my DTAA claim, NRO account advisory, and Form 15CA/CB within 24 hours. Completely remote, completely stress-free.",
    tag: "NRI Taxation",
  },
  {
    id: 4,
    name: "Meera Krishnan",
    role: "CFO, Logistics Company",
    rating: 5,
    text: "We've been with MD Backoffice for 8 years now. Their statutory audit team is thorough, professional, and always available for queries. The board has complete confidence in their reports.",
    tag: "Statutory Audit",
  },
];

export function TestimonialCarousel() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));
  const t = testimonials[active];

  return (
    <div className="relative">
      {/* Main testimonial */}
      <div className="max-w-3xl mx-auto">
        <div className="relative bg-white rounded-2xl border border-[var(--color-border)] p-10 shadow-[0_8px_40px_rgba(11,46,79,0.06)]">
          {/* Quote icon */}
          <Quote
            size={48}
            className="text-[var(--color-primary)]/8 absolute top-6 left-8"
            aria-hidden="true"
          />

          {/* Stars */}
          <div className="flex gap-1 mb-6" aria-label={`Rating: ${t.rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={18}
                className={i < t.rating ? "text-[var(--color-accent-gold)]" : "text-[var(--color-border)]"}
                fill={i < t.rating ? "currentColor" : "none"}
              />
            ))}
          </div>

          {/* Tag */}
          <span className="inline-block text-xs font-semibold text-[var(--color-primary)] bg-[var(--color-primary)]/8 px-3 py-1 rounded-full mb-5">
            {t.tag}
          </span>

          {/* Quote text */}
          <blockquote className="text-[var(--color-ink)] text-lg leading-relaxed mb-8 font-medium">
            &ldquo;{t.text}&rdquo;
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center text-white font-bold text-lg">
              {t.name[0]}
            </div>
            <div>
              <p className="font-bold text-[var(--color-ink)] text-sm">{t.name}</p>
              <p className="text-[var(--color-muted)] text-sm">{t.role}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="w-10 h-10 rounded-full border-2 border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Dots */}
        <div className="flex gap-2" role="tablist">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-8 bg-[var(--color-primary)]"
                  : "w-2 bg-[var(--color-border)] hover:bg-[var(--color-muted)]"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next testimonial"
          className="w-10 h-10 rounded-full border-2 border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
