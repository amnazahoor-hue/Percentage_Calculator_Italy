"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { InfoBenefitsIllustration } from "@/components/sections/InfoBenefitsIllustration";
import { PAGE_GUTTER, PAGE_INNER } from "@/lib/layout";
import { cn } from "@/lib/cn";

const benefits = [
  {
    title: "Correct Math Formulas",
    description:
      "Four calculation modes with standard formulas, rounded to two decimals and shown step by step.",
  },
  {
    title: "3D Neumorphic Interface",
    description:
      "Soft-shadow keys, glass display, and smooth interactions built for everyday use.",
  },
  {
    title: "Light And Dark Theme",
    description:
      "Follow system settings or switch manually. Contrast tuned for day and night reading.",
  },
];

export function InfoCards() {
  const openCalculator = () => {
    document.getElementById("strumento")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => {
      document.getElementById("calc-input-1")?.focus({ preventScroll: true });
    }, 400);
  };

  return (
    <section
      className="info-section relative overflow-hidden py-14 md:py-20"
      aria-labelledby="info-heading"
    >
      <div className="info-section-stars pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="info-star info-star--1" />
        <span className="info-star info-star--2" />
        <span className="info-star info-star--3" />
        <span className="info-star info-star--4" />
      </div>

      <div className={cn(PAGE_GUTTER, PAGE_INNER, "relative z-[1]")}>
        <FadeIn>
          <div className="info-panel">
            <div className="info-panel-clouds" aria-hidden="true">
              <span className="info-cloud info-cloud--1" />
              <span className="info-cloud info-cloud--2" />
              <span className="info-cloud info-cloud--3" />
            </div>

            <div className="info-panel-main">
              <div className="info-panel-copy">
                <p className="info-badge type-eyebrow">Benefits</p>
                <h2 id="info-heading" className="info-panel-title text-display-h2 text-text">
                  Why Use Our Calculator
                </h2>

                <ol className="info-steps">
                  {benefits.map((item, index) => (
                    <li key={item.title} className="info-step">
                      <span className="info-step-num" aria-hidden="true">
                        {index + 1}
                      </span>
                      <div className="info-step-body">
                        <h3 className="info-step-title">{item.title}</h3>
                        <p className="info-step-text">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="info-panel-visual">
                <InfoBenefitsIllustration />
              </div>
            </div>

            <div className="info-panel-cta">
              <h3 className="info-cta-title">Start Calculating</h3>
              <p className="info-cta-sub">
                Free on this page — no account needed. Enter your values and get
                the formula in seconds.
              </p>
              <div className="info-cta-row">
                <Button
                  size="lg"
                  onClick={openCalculator}
                  className="info-cta-btn gap-2 rounded-full px-8"
                >
                  Calculate now
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
