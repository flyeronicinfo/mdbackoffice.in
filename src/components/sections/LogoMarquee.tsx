const clients = [
  "TechNova Solutions",
  "Meridian Healthcare",
  "BlueSky Digital",
  "Apex Logistics",
  "Vanguard Capital",
  "OmniRetail Pvt Ltd",
  "Zenith Finserv",
  "NovaBuild Infra",
  "ClearPath Advisory",
  "GlobalEdge Exports",
];

export function LogoMarquee() {
  // Duplicate for seamless loop
  const items = [...clients, ...clients];

  return (
    <div className="pause-marquee overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--color-surface)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--color-surface)] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex gap-6 w-max">
        {items.map((name, i) => (
          <div
            key={i}
            className="flex-shrink-0 h-12 px-6 rounded-xl border border-[var(--color-border)] bg-white flex items-center justify-center text-sm font-semibold text-[var(--color-muted)] whitespace-nowrap hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/30 transition-colors"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}
