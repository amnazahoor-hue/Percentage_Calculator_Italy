"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  /** Layout a card separate (sezione FAQ a due colonne) */
  variant?: "default" | "faq";
}

export function Accordion({ items, className, variant = "default" }: AccordionProps) {
  const isFaq = variant === "faq";
  const [openId, setOpenId] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();

  return (
    <div
      className={cn("flex flex-col", isFaq ? "gap-2.5" : "gap-3", className)}
      role="region"
      aria-label="Frequently asked questions"
    >
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className={cn(
              "overflow-hidden transition-shadow duration-200",
              isFaq
                ? cn(
                    "faq-accordion-item rounded-2xl border bg-surface",
                    isOpen
                      ? "border-primary/30 shadow-[0_8px_24px_-12px_rgba(79,70,229,0.2)]"
                      : "border-border shadow-[var(--shadow-card)]"
                  )
                : "rounded-[var(--radius-card)] border border-border bg-surface shadow-[var(--shadow-card)]"
            )}
          >
            <h3 className="m-0">
              <button
                type="button"
                id={`accordion-trigger-${item.id}`}
                aria-expanded={isOpen}
                aria-controls={`accordion-panel-${item.id}`}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className={cn(
                  "flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-200",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary",
                  isFaq
                    ? cn(
                        "text-base sm:text-[1.05rem]",
                        isOpen
                          ? "font-semibold text-text hover:bg-neu-bg/50"
                          : "font-medium text-muted hover:bg-neu-bg/60 hover:text-text"
                      )
                    : "text-base font-semibold text-text hover:bg-neu-bg/80 sm:text-lg"
                )}
              >
                <span>{item.title}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 transition-transform duration-300",
                    isFaq ? (isOpen ? "text-primary" : "text-muted") : "text-muted",
                    isOpen && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`accordion-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`accordion-trigger-${item.id}`}
                  initial={reducedMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reducedMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={
                    reducedMotion
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 300, damping: 30 }
                  }
                  className="overflow-hidden"
                >
                  <div className="border-t border-border px-5 pb-5 pt-2 text-body leading-relaxed">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
