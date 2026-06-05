"use client";

import { cn } from "@/lib/cn";
import { typeToggleModes, type TypeToggleMode, type BaseVariant } from "@/lib/calc";
import { NeuKey } from "@/components/calc/NeuKey";

interface TypeToggleProps {
  mode: TypeToggleMode;
  baseVariant: BaseVariant;
  onModeChange: (mode: TypeToggleMode) => void;
  onBaseVariantChange: (variant: BaseVariant) => void;
  compact?: boolean;
  hero?: boolean;
  hint?: string;
}

export function TypeToggle({
  mode,
  baseVariant,
  onModeChange,
  onBaseVariantChange,
  compact = false,
  hero = false,
  hint,
}: TypeToggleProps) {
  return (
    <div
      className={cn(
        "space-y-2",
        hero ? "mb-3 lg:mb-3 lg:space-y-2" : compact ? "mb-2" : "mb-3"
      )}
    >
      {hint && (
        <p
          className={cn(
            "text-center text-muted",
            compact ? "text-[10px] leading-snug" : "text-xs"
          )}
        >
          {hint}
        </p>
      )}
      <div
        className={cn(
          "neu-inset flex flex-wrap gap-1",
          hero ? "rounded-2xl p-1" : compact ? "rounded-2xl p-1" : "rounded-[20px] p-1.5"
        )}
        role="radiogroup"
        aria-label="Calculation type"
      >
        {typeToggleModes.map((item) => (
          <button
            key={item.id}
            type="button"
            role="radio"
            aria-checked={mode === item.id}
            onClick={() => onModeChange(item.id)}
            className={cn(
              "min-w-0 flex-1 rounded-xl font-semibold transition-all duration-200",
              hero
                ? "px-1.5 py-2 text-[10px] leading-tight sm:px-2 sm:text-[11px]"
                : compact
                  ? "min-w-[calc(50%-4px)] px-1.5 py-1.5 text-[10px] sm:min-w-0"
                  : "rounded-2xl px-2 py-2 text-xs sm:text-sm",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary",
              mode === item.id
                ? "bg-primary !text-white shadow-sm"
                : "bg-transparent text-muted hover:text-text"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      {mode === "base" && (
        <div
          className={cn("flex", hero ? "gap-2" : compact ? "gap-1.5" : "gap-2")}
          role="radiogroup"
          aria-label="Percentage variant"
        >
          <NeuKey
            className={cn(
              "flex-1",
              hero
                ? "!min-h-[40px] !text-[11px] sm:!text-xs lg:!min-h-[38px]"
                : compact
                  ? "!min-h-[36px] !text-[10px]"
                  : "!text-xs sm:!text-sm",
              baseVariant === "ratio" && "neu-key--primary !text-white"
            )}
            aria-pressed={baseVariant === "ratio"}
            onClick={() => onBaseVariantChange("ratio")}
          >
            X is % of Y
          </NeuKey>
          <NeuKey
            className={cn(
              "flex-1",
              hero
                ? "!min-h-[40px] !text-[11px] sm:!text-xs lg:!min-h-[38px]"
                : compact
                  ? "!min-h-[36px] !text-[10px]"
                  : "!text-xs sm:!text-sm",
              baseVariant === "of" && "neu-key--primary !text-white"
            )}
            aria-pressed={baseVariant === "of"}
            onClick={() => onBaseVariantChange("of")}
          >
            X% of Y
          </NeuKey>
        </div>
      )}
    </div>
  );
}
