import { type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Copy, Percent, Play } from "lucide-react";

function MockShell({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "how-panel-mock rounded-xl border border-border/80 bg-surface p-3 shadow-[var(--shadow-card)]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Step1Mock() {
  const tabs = ["Percent", "Increase", "Decrease", "Difference"];
  return (
    <div className="how-panel-mock flex flex-col gap-2">
      <MockShell className="rotate-0 md:rotate-[-2deg]">
        <p className="mb-2 text-[10px] font-semibold text-muted">Calculation type</p>
        <div className="flex flex-wrap gap-1">
          {tabs.map((tab, i) => (
            <span
              key={tab}
              className={cn(
                "rounded-lg px-2 py-1 text-[9px] font-semibold",
                i === 0
                  ? "bg-primary !text-white"
                  : "bg-neu-bg text-muted"
              )}
            >
              {tab}
            </span>
          ))}
        </div>
        <div className="mt-2 flex gap-1">
          <span className="flex-1 rounded-lg bg-primary px-2 py-1.5 text-center text-[9px] font-semibold !text-white">
            X is % of Y
          </span>
          <span className="flex-1 rounded-lg bg-neu-bg px-2 py-1.5 text-center text-[9px] text-muted">
            X% of Y
          </span>
        </div>
      </MockShell>
      <div className="how-mock-cta flex items-center justify-center gap-2 text-white">
        <Percent className="h-5 w-5" aria-hidden="true" />
        <span className="text-xs font-medium !text-white">Choose a mode</span>
      </div>
    </div>
  );
}

export function Step2Mock() {
  return (
    <div className="how-panel-mock relative flex flex-col items-center gap-3">
      <MockShell className="w-full rotate-0 md:rotate-[1deg]">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] font-semibold text-muted">Input</span>
          <span className="rounded-md bg-primary/10 px-1.5 py-0.5 text-[9px] font-bold text-primary">
            Active
          </span>
        </div>
        <div className="space-y-2">
          <div>
            <span className="text-[9px] text-muted">Value X</span>
            <div className="mt-0.5 rounded-lg border-2 border-primary/40 bg-neu-bg px-2 py-2 font-mono text-sm font-semibold text-text">
              25
            </div>
          </div>
          <div>
            <span className="text-[9px] text-muted">Total Y</span>
            <div className="mt-0.5 rounded-lg border border-border bg-surface px-2 py-2 font-mono text-sm text-muted">
              80
            </div>
          </div>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-neu-bg">
          <div className="h-full w-2/3 animate-pulse rounded-full bg-primary/60" />
        </div>
      </MockShell>
    </div>
  );
}

export function Step3Mock() {
  return (
    <div className="how-panel-mock flex flex-col gap-2">
      <MockShell className="rotate-0 md:rotate-[-1deg]">
        <p className="text-[10px] text-muted">What % is X of Y?</p>
        <p className="mt-1 text-right font-mono text-2xl font-bold text-primary">31.25%</p>
        <p className="mt-2 border-t border-border/60 pt-2 text-center font-mono text-[9px] text-muted">
          (25 ÷ 80) × 100
        </p>
      </MockShell>
      <MockShell className="flex items-center justify-between gap-2 py-2">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15">
            <Play className="h-3.5 w-3.5 fill-primary text-primary" aria-hidden="true" />
          </span>
          <div>
            <p className="text-[10px] font-semibold text-text">Result ready</p>
            <p className="text-[9px] text-muted">Formula included</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 rounded-lg border border-border bg-neu-bg px-2 py-1 text-[9px] font-medium text-primary">
          <Copy className="h-3 w-3" aria-hidden="true" />
          Copy
        </span>
      </MockShell>
    </div>
  );
}
