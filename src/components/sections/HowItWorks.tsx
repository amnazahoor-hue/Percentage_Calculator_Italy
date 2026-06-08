"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { PAGE_GUTTER, PAGE_INNER } from "@/lib/layout";
import { cn } from "@/lib/cn";
import {
  Step1Mock,
  Step2Mock,
  Step3Mock,
} from "@/components/sections/HowItWorksMocks";

const steps = [
  {
    number: 1,
    title: "Choose A Calculation Type",
    description:
      "Pick basic percentage, increase, decrease/discount, or difference between two values. Labels update for each mode.",
    Mock: Step1Mock,
  },
  {
    number: 2,
    title: "Enter Your Values",
    description:
      "Type X and Y with the neumorphic keypad or your keyboard. Supports comma and decimal point, with quick tab between fields.",
    Mock: Step2Mock,
  },
  {
    number: 3,
    title: "Calculate And Copy The Result",
    description:
      "Press Calculate: a short animation, count-up result, monospace formula, and one-tap copy.",
    Mock: Step3Mock,
  },
];

export function HowItWorks() {
  return (
    <section
      id="come-funziona"
      className="relative z-[1] scroll-mt-24 py-12 md:py-20"
      aria-labelledby="how-heading"
    >
      <div className={cn(PAGE_GUTTER, PAGE_INNER)}>
        <FadeIn>
          <div className="how-panel overflow-hidden rounded-[28px] px-5 py-10 sm:rounded-[32px] sm:px-8 sm:py-12 md:px-10 md:py-14 lg:px-12 lg:py-16">
            <header className="mx-auto max-w-2xl text-center">
              <p className="how-badge type-eyebrow mx-auto px-4 py-1.5">
                How It Works
              </p>
              <h2
                id="how-heading"
                className="how-heading text-display-h2 mt-5 text-white"
              >
                3 Simple Steps To Calculate
              </h2>
              <p className="how-panel-copy type-lead mx-auto mt-4 max-w-xl text-white/90">
                From the homepage to the final formula: free, in English, and no
                sign-up. Here is how to use the calculator in seconds.
              </p>
            </header>

            <div className="how-steps-grid mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
              {steps.map((step, index) => (
                <FadeIn
                  key={step.number}
                  delay={index * 0.1}
                  className={cn(
                    "h-full",
                    index === 2 && "how-step-item--center-tablet"
                  )}
                >
                  <article className="how-step-card flex h-full min-h-[22rem] flex-col max-md:items-center max-md:text-center sm:min-h-[24rem]">
                    <div className="flex w-full items-start justify-between gap-3 max-md:flex-col max-md:items-center">
                      <h3 className="how-step-title text-white">
                        {step.title}
                      </h3>
                      <span
                        className="how-step-num shrink-0 tabular-nums"
                        aria-hidden="true"
                      >
                        {step.number}
                      </span>
                    </div>
                    <p className="how-panel-copy mt-3 text-sm leading-relaxed">
                      {step.description}
                    </p>
                    <div className="mt-auto pt-6">
                      <step.Mock />
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
