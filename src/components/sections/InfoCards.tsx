"use client";

import { Check, Layers, Moon, Percent, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { PAGE_GUTTER, PAGE_INNER } from "@/lib/layout";
import { cn } from "@/lib/cn";

const cards = [
  {
    icon: Percent,
    title: "Correct Math Formulas",
    description:
      "Percentage of a total, what is X% of Y, markups, discounts, and percent change — each mode uses the standard formula rounded to two decimals.",
    tags: ["4 modes", "2 decimals", "Formula shown"],
    accent: "primary" as const,
  },
  {
    icon: Layers,
    title: "3D Neumorphic Interface",
    description:
      "Dual-shadow keys, glass-style display, and smooth theme transitions for a tactile, modern experience.",
    tags: ["Keypad", "Count-up", "Premium UX"],
    accent: "accent" as const,
  },
  {
    icon: Moon,
    title: "Light And Dark Theme",
    description:
      "System preference or manual choice from the header. Contrast tuned for readability day and night.",
    tags: ["Auto / manual", "WCAG-friendly", "No account"],
    accent: "primary" as const,
  },
];

const highlights = [
  "Free forever",
  "No sign-up",
  "100% in English",
];

export function InfoCards() {
  return (
    <section
      className="info-section relative overflow-hidden py-16 md:py-24"
      aria-labelledby="info-heading"
    >
      <div className="info-section-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-primary/8 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent/8 blur-[100px]"
        aria-hidden="true"
      />

      <div className={cn(PAGE_GUTTER, PAGE_INNER, "relative z-[1]")}>
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="info-badge type-eyebrow mx-auto items-center gap-2 px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            Benefits
          </p>
          <h2 id="info-heading" className="mt-5 text-display-h2 text-text">
            Why Use Our{" "}
            <span className="info-heading-accent text-accent-word">Calculator</span>
          </h2>
          <p className="type-lead mx-auto mt-4 max-w-2xl">
            Not a generic widget: a premium tool built into the homepage for
            accuracy, speed, and visual comfort.
          </p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-surface/90 px-3 py-1 text-xs font-medium text-body shadow-sm"
              >
                <Check className="h-3.5 w-3.5 text-success" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-3 md:gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <FadeIn key={card.title} delay={index * 0.1} className="h-full">
              <article
                className={cn(
                  "info-feature-card group relative flex h-full flex-col overflow-hidden rounded-[22px] p-6 sm:p-7",
                  card.accent === "accent" && "info-feature-card--accent"
                )}
              >
                <div
                  className="info-feature-card-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="relative z-[1] flex flex-1 flex-col max-md:items-center max-md:text-center">
                  <div className="mb-5 flex items-start justify-between gap-3 max-md:flex-col max-md:items-center">
                    <div
                      className={cn(
                        "info-feature-icon flex h-14 w-14 items-center justify-center rounded-2xl",
                        card.accent === "accent"
                          ? "info-feature-icon--accent"
                          : "info-feature-icon--primary"
                      )}
                    >
                      <card.icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <span
                      className="text-4xl font-bold tabular-nums text-primary/10 transition-colors group-hover:text-primary/20"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-text">
                    {card.title}
                  </h3>
                  <p className="type-lead mt-3 flex-1 text-sm">
                    {card.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap justify-center gap-1.5 max-md:justify-center md:justify-start">
                    {card.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-lg border border-border/70 bg-neu-bg/80 px-2.5 py-1 text-[11px] font-medium text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
