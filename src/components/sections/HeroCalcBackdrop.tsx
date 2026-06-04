"use client";

import { cn } from "@/lib/cn";

const symbols = ["%", "+", "−", "Δ", "="];

export function HeroCalcBackdrop({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute left-1/2 top-1/2 z-0 h-[min(130%,36rem)] w-[min(130%,36rem)] -translate-x-1/2 -translate-y-1/2",
        className
      )}
      aria-hidden="true"
    >
      <svg
        className="calc-aura-svg"
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="calcAuraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.45" />
          </linearGradient>
        </defs>
        <circle
          cx="160"
          cy="160"
          r="140"
          stroke="url(#calcAuraGrad)"
          strokeWidth="1.5"
          strokeDasharray="8 14"
          opacity="0.7"
        />
        <circle
          cx="160"
          cy="160"
          r="108"
          stroke="url(#calcAuraGrad)"
          strokeWidth="1"
          opacity="0.45"
        />
        <circle
          cx="160"
          cy="160"
          r="76"
          stroke="var(--primary)"
          strokeWidth="0.75"
          strokeOpacity="0.35"
        />
        <text
          x="160"
          y="178"
          textAnchor="middle"
          fill="var(--primary)"
          fillOpacity="0.12"
          fontSize="120"
          fontWeight="700"
          fontFamily="var(--font-sans), system-ui, sans-serif"
        >
          %
        </text>
        <path
          d="M160 24 L160 56 M160 264 L160 296 M24 160 L56 160 M264 160 L296 160"
          stroke="url(#calcAuraGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>

      <div className="calc-aura-glow" />
      <div className="calc-aura-ring calc-aura-ring--outer" />
      <div className="calc-aura-ring calc-aura-ring--inner" />
      <div className="calc-aura-orbit">
        <span className="calc-aura-dot" />
      </div>
      {symbols.map((sym, i) => (
        <span
          key={sym}
          className="calc-aura-symbol"
          style={{ ["--aura-i" as string]: i }}
        >
          {sym}
        </span>
      ))}
    </div>
  );
}
