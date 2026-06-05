"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CountUp } from "@/components/ui/CountUp";
import { NeuKey } from "@/components/calc/NeuKey";
import { cn } from "@/lib/cn";
import type { CalcResult } from "@/lib/calc";

interface CalcDisplayProps {
  expression: string;
  result: CalcResult | null;
  loading: boolean;
  placeholder?: string;
  compact?: boolean;
  hero?: boolean;
  showFormula?: boolean;
}

export function CalcDisplay({
  expression,
  result,
  loading,
  placeholder = "—",
  compact = false,
  hero = false,
  showFormula = true,
}: CalcDisplayProps) {
  const [copied, setCopied] = useState(false);
  const reducedMotion = useReducedMotion();

  const copyResult = async () => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result.formattedValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div
      className={cn(
        hero ? "neu-inset-hero" : "neu-inset",
        hero
          ? "mb-3 min-h-[5rem] p-3 sm:min-h-[5.5rem] sm:p-3.5 lg:mb-3 lg:min-h-[5rem] lg:p-3"
          : compact
            ? "mb-2 rounded-2xl p-2.5"
            : "mb-4 rounded-[20px] p-4"
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <p
            className={cn(
              "truncate font-mono text-muted",
              hero ? "text-xs leading-snug sm:text-sm" : "text-xs sm:text-sm"
            )}
            aria-live="polite"
          >
            {loading ? "Calculating…" : expression || "Enter values"}
          </p>
          <p
            className={cn(
              "mt-1 text-right font-mono font-bold tabular-nums text-text transition-all",
              loading && "animate-pulse opacity-60",
              result
                ? hero
                  ? "text-2xl text-primary sm:text-3xl"
                  : compact
                    ? "text-2xl text-primary"
                    : "text-3xl sm:text-4xl text-primary"
                : hero
                  ? "text-base text-muted/90 sm:text-lg"
                  : compact
                    ? "text-xl text-muted"
                    : "text-2xl sm:text-3xl text-muted"
            )}
            aria-live="polite"
            aria-atomic="true"
          >
            {loading ? (
              <span
                className={cn(
                  "inline-block rounded-lg bg-border/40",
                  hero ? "h-7 w-28" : "h-9 w-32"
                )}
              />
            ) : result ? (
              <CountUp
                value={result.value}
                display={result.formattedValue}
              />
            ) : (
              placeholder
            )}
          </p>
        </div>
        {result && !loading && (
          <NeuKey
            className="!min-h-[40px] !w-10 shrink-0 !rounded-xl"
            aria-label="Copy result"
            onClick={copyResult}
          >
            <AnimatePresence mode="wait" initial={false}>
              {copied ? (
                <motion.span
                  key="check"
                  initial={reducedMotion ? false : { scale: 0.5 }}
                  animate={{ scale: 1 }}
                >
                  <Check className="h-4 w-4 text-success" />
                </motion.span>
              ) : (
                <motion.span key="copy" initial={false} animate={{ scale: 1 }}>
                  <Copy className="h-4 w-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </NeuKey>
        )}
      </div>
      {result && !loading && showFormula && (
        <p
          className={cn(
            "border-t border-border/50 text-center font-mono leading-relaxed text-muted",
            hero
              ? "mt-2 pt-2 text-[10px]"
              : "mt-3 pt-3 text-[11px] sm:text-xs"
          )}
        >
          {result.formula}
        </p>
      )}
      <AnimatePresence>
        {copied && (
          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0 }}
            className="mt-2 text-center text-xs font-medium text-success"
            role="status"
          >
            Copied!
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
