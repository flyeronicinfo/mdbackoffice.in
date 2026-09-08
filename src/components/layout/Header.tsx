"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Phone, Shield, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { label: "ITR Filing", href: "/services/itr-filing" },
  { label: "GST Registration & Filing", href: "/services/gst-registration-filing" },
  { label: "Company Incorporation & ROC", href: "/services/company-incorporation" },
  { label: "Audit & Assurance", href: "/services/audit-assurance" },
  { label: "Accounting & Bookkeeping", href: "/services/accounting-bookkeeping" },
  { label: "Tax Planning & Advisory", href: "/services/tax-planning-advisory" },
  { label: "NRI Taxation", href: "/services/nri-taxation" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-[var(--color-primary-dark)] text-white text-xs py-2 px-6 hidden md:block">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-white/70">
              <Shield size={12} className="text-[var(--color-accent-gold)]" />
              ICAI Registered Firm
            </span>
            <span className="text-white/30">|</span>
            <span className="flex items-center gap-1 text-white/70">
              <Star size={11} fill="#B8894C" className="text-[var(--color-accent-gold)]" />
              4.9 Rating · 480+ Google Reviews
            </span>
          </div>
          <div className="flex items-center gap-3 text-white/70">
            <Phone size={12} className="text-[var(--color-accent-gold)]" />
            <a href="tel:+911234567890" className="hover:text-[var(--color-accent-gold)] transition-colors">
              +91 12345 67890
            </a>
            <span className="text-white/30">·</span>
            <span>Mon–Sat: 9:30 AM – 6:30 PM</span>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/98 backdrop-blur-md border-b border-[var(--color-border)] shadow-[0_2px_20px_rgba(11,46,79,0.06)]"
            : "bg-white border-b border-[var(--color-border)]"
        )}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-[72px]">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-gold)] rounded-sm"
              aria-label="MD backoffice — Home"
            >
              <Image
                src="/logo-full.jpg"
                alt="MD backoffice"
                width={220}
                height={66}
                className="h-14 w-auto object-contain mix-blend-multiply"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setServicesOpen((prev) => !prev)}
                      aria-haspopup="true"
                      aria-expanded={servicesOpen}
                      className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-[var(--color-body)] hover:text-[var(--color-primary)] rounded-lg hover:bg-[var(--color-surface)] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-accent-gold)]"
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={cn("transition-transform duration-200", servicesOpen && "rotate-180")}
                      />
                    </button>

                    {/* Dropdown */}
                    {servicesOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl border border-[var(--color-border)] shadow-[var(--shadow-dropdown)] py-2 z-50">
                        <p className="px-4 py-2 text-[10px] font-bold text-[var(--color-muted)] uppercase tracking-widest border-b border-[var(--color-border)] mb-1">
                          Practice Areas
                        </p>
                        {services.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            onClick={() => setServicesOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-[var(--color-body)] hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)] transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-gold)] flex-shrink-0" />
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="px-4 py-2 text-sm font-semibold text-[var(--color-body)] hover:text-[var(--color-primary)] rounded-lg hover:bg-[var(--color-surface)] transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center gap-2 bg-[var(--color-primary)] text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-[var(--color-primary-dark)] transition-colors shadow-sm"
              >
                Book Free Consultation
              </Link>
              <button
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle navigation"
                className="lg:hidden w-10 h-10 rounded-xl border border-[var(--color-border)] flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-surface)] transition-colors"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[calc(var(--top-bar-h,0px)+68px)] bg-white z-40 overflow-y-auto border-t border-[var(--color-border)] shadow-2xl">
          <nav className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col gap-1" aria-label="Mobile navigation">
            {/* Mobile logo */}
            <div className="flex items-center mb-4 px-4">
              <Image
                src="/logo-full.jpg"
                alt="MD backoffice"
                width={200}
                height={60}
                className="h-12 w-auto object-contain mix-blend-multiply"
              />
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between py-3.5 px-4 text-base font-semibold text-[var(--color-ink)] rounded-xl hover:bg-[var(--color-surface)] transition-colors"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={16} className="text-[var(--color-muted)]" />}
              </Link>
            ))}
            {/* Services list in mobile */}
            <div className="px-4 py-3 border-t border-[var(--color-border)] mt-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-muted)] mb-3">
                Services
              </p>
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2.5 py-2 text-sm text-[var(--color-body)] hover:text-[var(--color-primary)] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-gold)]" />
                  {s.label}
                </Link>
              ))}
            </div>
            <div className="px-4 mt-4">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center bg-[var(--color-primary)] text-white font-semibold py-3.5 rounded-xl hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                Book Free Consultation
              </Link>
              <a
                href="tel:+911234567890"
                className="flex items-center justify-center gap-2 mt-3 text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
              >
                <Phone size={14} /> +91 12345 67890
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
