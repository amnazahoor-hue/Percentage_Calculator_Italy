"use client";

import { forwardRef } from "react";
import { useKeypadOnly } from "@/hooks/useKeypadOnly";
import { cn } from "@/lib/cn";

export interface CalcFieldProps {
  id: string;
  label: string;
  shortLabel: string;
  value: string;
  placeholder: string;
  active: boolean;
  error?: string;
  disabled?: boolean;
  onFocus: () => void;
  onChange: (value: string) => void;
  onEnter?: () => void;
  compact?: boolean;
  hero?: boolean;
}

/** Consente solo cifre, virgola e punto (formato italiano). */
export function sanitizeNumericInput(raw: string): string {
  let out = "";
  let sep = false;
  for (const ch of raw) {
    if (ch >= "0" && ch <= "9") out += ch;
    else if ((ch === "," || ch === ".") && !sep) {
      out += ",";
      sep = true;
    }
  }
  return out;
}

export const CalcField = forwardRef<HTMLInputElement, CalcFieldProps>(
  (
    {
      id,
      label,
      shortLabel,
      value,
      placeholder,
      active,
      error,
      disabled,
      onFocus,
      onChange,
      onEnter,
      compact,
      hero = false,
    },
    ref
  ) => {
    const keypadOnly = useKeypadOnly();

    return (
      <div className="min-w-0">
        <label
          htmlFor={id}
          className={cn(
            "mb-1 flex items-center gap-1.5 font-medium text-muted",
            hero ? "text-xs" : compact ? "text-[10px]" : "text-xs"
          )}
        >
          <span className="truncate">{shortLabel}</span>
          {active && !hero && (
            <span className="shrink-0 rounded-md bg-primary/15 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-primary">
              Attivo
            </span>
          )}
        </label>
        <input
          ref={ref}
          id={id}
          type="text"
          inputMode={keypadOnly ? "none" : "decimal"}
          autoComplete="off"
          enterKeyHint={onEnter ? "done" : "next"}
          readOnly={keypadOnly}
          disabled={disabled}
          value={value}
          placeholder={placeholder}
          aria-label={label}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          onFocus={onFocus}
          onChange={(e) => onChange(sanitizeNumericInput(e.target.value))}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              onEnter?.();
            }
          }}
          className={cn(
            "w-full rounded-xl border bg-surface font-mono font-semibold tabular-nums text-text transition-all",
            "placeholder:font-sans placeholder:font-normal placeholder:text-muted/70",
            "focus:outline-none focus:ring-2",
            keypadOnly && "cursor-pointer caret-transparent",
            hero
              ? "min-h-[3rem] px-3 py-2.5 text-base sm:min-h-[3.25rem] sm:py-3 lg:min-h-[3.125rem] lg:px-3 lg:py-2.5 lg:text-base"
              : compact
                ? "px-2.5 py-2.5 text-base"
                : "px-3 py-3 text-lg",
            active
              ? "border-primary ring-2 ring-primary/25"
              : "border-border hover:border-primary/35",
            error && "border-error ring-2 ring-error/25",
            disabled && "cursor-not-allowed opacity-60"
          )}
        />
        {error && (
          <p
            id={`${id}-error`}
            role="alert"
            className="mt-1 text-[11px] font-medium text-error"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

CalcField.displayName = "CalcField";
