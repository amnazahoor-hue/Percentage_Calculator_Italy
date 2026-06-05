"use client";

import { Calculator } from "@/components/calc/Calculator";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { HeroCalcBackdrop } from "@/components/sections/HeroCalcBackdrop";
import { HeroPercentDecor } from "@/components/sections/HeroPercentDecor";
import {
  HERO_CALC_MAX_H,
  HERO_CALC_WIDTH,
  HERO_GUTTER,
  HERO_INNER,
} from "@/lib/layout";
import { cn } from "@/lib/cn";
import { Gift, Percent, Play, Timer } from "lucide-react";

const proofIcons = [
  { icon: Percent, label: "Percent" },
  { icon: Timer, label: "Fast" },
  { icon: Gift, label: "Free" },
];

export function Hero() {
  const scrollToHow = () => {
    document.getElementById("come-funziona")?.scrollIntoView({ behavior: "smooth" });
  };

  const focusCalculator = () => {
    document.getElementById("calc-input-1")?.focus({ preventScroll: true });
  };

  return (
    <section
      className={cn(
        "hero-section-bg relative isolate flex w-full",
        "min-h-[calc(100svh-4.25rem)] border-b border-border/40",
        "overflow-x-clip py-8 sm:py-10",
        "md:min-h-0 md:py-10",
        "xl:h-[calc(100svh-5rem)] xl:max-h-[calc(100svh-5rem)] xl:overflow-hidden xl:pt-2 xl:pb-5 2xl:pt-3 2xl:pb-6"
      )}
      aria-labelledby="hero-heading"
    >
      <div className="hero-grid-pattern pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-20 top-[18%] h-64 w-64 rounded-full bg-primary/15 blur-[80px]" />
        <div className="absolute -right-16 top-[8%] h-80 w-80 rounded-full bg-accent/12 blur-[90px]" />
      </div>

      <div
        className={cn(
          HERO_GUTTER,
          HERO_INNER,
          "relative z-[1] flex w-full flex-1 flex-col justify-center xl:min-h-0"
        )}
      >
        <div className="hero-grid grid w-full min-h-0 grid-cols-1 items-center gap-8 md:gap-10 xl:grid-cols-2 xl:items-start xl:gap-8 2xl:gap-12">
          <div className="hero-copy-col flex min-h-0 w-full min-w-0 flex-col justify-center xl:justify-start xl:py-0 2xl:py-2">
            <FadeIn className="hero-copy-stack">
              <p className="hero-badge-pill type-eyebrow">
                <span className="hero-badge-icon" aria-hidden="true">
                  <Percent className="h-3 w-3" strokeWidth={2.5} />
                </span>
                The Best Free Percentage Tool
              </p>

              <div className="hero-headline-block">
                <h1 id="hero-heading" className="hero-headline">
                  <span className="hero-headline-line hero-headline-line--lead">
                    <span className="hero-headline-word">Calculate</span>
                    <HeroPercentDecor className="hero-percent-decor--inline" />
                  </span>
                  <span className="hero-headline-line">Any</span>
                  <span className="hero-headline-line">Percentage</span>
                  <span className="hero-headline-line">
                    In{" "}
                    <span className="hero-headline-accent text-accent-word">Seconds!</span>
                  </span>
                </h1>
              </div>

              <div className="hero-cta-row">
                <Button
                  size="lg"
                  onClick={focusCalculator}
                  className="hero-cta-primary hero-cta-pill min-h-[3.25rem] px-8 sm:min-h-[3.5rem] sm:px-10"
                >
                  Start calculating
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={scrollToHow}
                  className="hero-cta-secondary hero-cta-pill min-h-[3.25rem] gap-2.5 border-primary/25 bg-surface px-6 sm:min-h-[3.5rem] sm:px-8"
                >
                  <span className="hero-cta-play" aria-hidden="true">
                    <Play className="h-3.5 w-3.5 fill-current" />
                  </span>
                  How it works
                </Button>
              </div>

              <div className="hero-proof-card">
                <div className="hero-proof-body">
                  <p className="hero-proof-stat type-stat">4+</p>
                  <p className="hero-proof-text type-lead">
                    Calculation modes in one free tool — percent, increase,
                    discount, and difference with formulas shown step by step.
                  </p>
                </div>
                <div className="hero-proof-icons" aria-hidden="true">
                  {proofIcons.map(({ icon: Icon, label }) => (
                    <span key={label} className="hero-proof-icon" title={label}>
                      <Icon className="h-4 w-4" strokeWidth={2.25} />
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="flex min-h-0 w-full min-w-0 items-start justify-center xl:justify-end">
            <div
              className={cn(
                "hero-calc-stage relative flex w-full max-h-full items-start justify-center xl:justify-end",
                HERO_CALC_WIDTH,
                HERO_CALC_MAX_H
              )}
            >
              <HeroCalcBackdrop />
              <FadeIn
                delay={0.12}
                className="relative z-10 flex w-full max-w-full flex-col"
              >
                <div className="calc-shell flex w-full flex-col">
                  <div className="calc-shell-inner flex flex-col">
                    <div className="hero-calc-body p-2.5 sm:p-3 xl:p-2">
                      <Calculator variant="hero" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
