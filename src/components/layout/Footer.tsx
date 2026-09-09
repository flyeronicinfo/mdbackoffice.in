import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Share2, Globe, Users2 } from "lucide-react";

const serviceLinks = [
  { label: "ITR Filing", href: "/services/itr-filing" },
  { label: "GST Registration & Filing", href: "/services/gst-registration-filing" },
  { label: "Company Incorporation", href: "/services/company-incorporation" },
  { label: "Audit & Assurance", href: "/services/audit-assurance" },
  { label: "Accounting & Bookkeeping", href: "/services/accounting-bookkeeping" },
  { label: "Tax Planning & Advisory", href: "/services/tax-planning-advisory" },
  { label: "NRI Taxation", href: "/services/nri-taxation" },
];

const quickLinks = [
  { label: "About the Firm", href: "/about" },
  { label: "Pricing Plans", href: "/pricing" },
  { label: "Contact Us", href: "/contact" },
  { label: "FAQs", href: "/#faq" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary-dark)] text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5" aria-label="MD backoffice — Home">
              <div className="bg-white rounded-xl px-3 py-2 inline-flex items-center">
                <Image
                  src="/logo-full.png"
                  alt="MD backoffice"
                  width={252}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Your trusted partner for tax, compliance, and financial advisory. Serving individuals, businesses, and NRIs since 2002.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Share2 size={15} />
              </a>
              <a
                aria-label="Twitter / X"
                href="#"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Globe size={15} />
              </a>
              <a
                aria-label="Facebook"
                href="#"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Users2 size={15} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-[var(--color-accent)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-[var(--color-accent)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm leading-relaxed">
                  {/* PLACEHOLDER — Replace with actual office address */}
                  138E-II Raj Plaza Complex,<br />
                  Chhawani, Indore, Madhya Pradesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[var(--color-accent)] flex-shrink-0" />
                <a
                  href="tel:+919425066170"
                  className="text-white/60 text-sm hover:text-[var(--color-accent)] transition-colors"
                >
                  +91 94250 66170
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[var(--color-accent)] flex-shrink-0" />
                <a
                  href="mailto:team@mdbackoffice.in"
                  className="text-white/60 text-sm hover:text-[var(--color-accent)] transition-colors"
                >
                  team@mdbackoffice.in
                </a>
              </li>
            </ul>
            <div className="mt-5 p-3 rounded-[8px] bg-white/5 border border-white/10">
              <p className="text-white/50 text-xs font-medium mb-1">Office Hours</p>
              <p className="text-white/70 text-xs">Mon–Sat: 9:30 AM – 6:30 PM</p>
              <p className="text-white/50 text-xs">Sundays & Public Holidays: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} MD Backoffice. All rights reserved.{" "}
            {/* PLACEHOLDER — Replace firm name */}
          </p>
          <p className="text-white/30 text-xs text-center md:text-right max-w-lg">
            Disclaimer: Information on this website is for general guidance only and does not constitute professional advice. Consult a qualified CA for advice specific to your situation.
          </p>
        </div>
      </div>

      {/* Partner attribution */}
      <div className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex justify-center md:justify-end">
          <a
            href="https://flyeronic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 opacity-40 hover:opacity-70 transition-opacity duration-300"
          >
            <span className="text-white/50 text-xs tracking-wide">
              Digital Media Partner
            </span>
            <Image
              src="/partners/flyeronic-logo.svg"
              alt="Flyeronic"
              width={140}
              height={32}
              className="h-6 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
