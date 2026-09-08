"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
  limit?: number;
};

export function FaqAccordion({ items, limit }: FaqAccordionProps) {
  const [open, setOpen] = useState<string | null>(null);
  const displayed = limit ? items.slice(0, limit) : items;

  return (
    <div className="space-y-3">
      {displayed.map((item) => {
        const isOpen = open === item.id;
        return (
          <div
            key={item.id}
            className={cn(
              "border rounded-2xl overflow-hidden transition-all duration-300",
              isOpen
                ? "border-[var(--color-primary)]/30 shadow-[0_4px_20px_rgba(11,46,79,0.08)]"
                : "border-[var(--color-border)] hover:border-[var(--color-primary)]/20"
            )}
          >
            <button
              id={`faq-btn-${item.id}`}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${item.id}`}
              onClick={() => setOpen(isOpen ? null : item.id)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-semibold text-[var(--color-ink)] text-sm leading-snug">
                {item.question}
              </span>
              <ChevronDown
                size={18}
                className={cn(
                  "flex-shrink-0 text-[var(--color-muted)] transition-transform duration-300",
                  isOpen && "rotate-180 text-[var(--color-primary)]"
                )}
              />
            </button>

            <div
              id={`faq-panel-${item.id}`}
              role="region"
              aria-labelledby={`faq-btn-${item.id}`}
              className={cn(
                "overflow-hidden transition-all duration-300",
                isOpen ? "max-h-[500px]" : "max-h-0"
              )}
            >
              <p className="px-6 pb-5 text-[var(--color-muted)] text-sm leading-relaxed border-t border-[var(--color-border)] pt-4">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
