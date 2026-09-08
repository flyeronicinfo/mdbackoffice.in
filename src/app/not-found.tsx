import Link from "next/link";
import { Home, ArrowLeft, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-[var(--color-accent-gold)] font-black text-7xl mb-4">404</p>
        <h1 className="text-[var(--color-ink)] font-extrabold text-2xl mb-3">Page Not Found</h1>
        <p className="text-[var(--color-muted)] text-base leading-relaxed mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[var(--color-primary-dark)] transition-colors text-sm"
          >
            <Home size={16} /> Go Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold px-6 py-3 rounded-xl hover:bg-[var(--color-primary)] hover:text-white transition-colors text-sm"
          >
            <ArrowLeft size={16} /> View Services
          </Link>
          <a
            href="tel:+919425066170"
            className="inline-flex items-center gap-2 text-[var(--color-muted)] font-semibold px-6 py-3 rounded-xl hover:text-[var(--color-primary)] transition-colors text-sm"
          >
            <Phone size={16} /> Call Us
          </a>
        </div>
      </div>
    </div>
  );
}
