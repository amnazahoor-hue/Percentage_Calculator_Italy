"use client";

import { Delete } from "lucide-react";
import { NeuKey } from "@/components/calc/NeuKey";
import { cn } from "@/lib/cn";

interface CalcKeypadProps {
  onKey: (key: string) => void;
  onBackspace: () => void;
  onClear: () => void;
  disabled?: boolean;
  compact?: boolean;
  hero?: boolean;
}

const rows: string[][] = [
  ["7", "8", "9"],
  ["4", "5", "6"],
  ["1", "2", "3"],
  [",", "0", "back"],
];

export function CalcKeypad({
  onKey,
  onBackspace,
  onClear,
  disabled,
  compact = false,
  hero = false,
}: CalcKeypadProps) {
  const keyClass = hero
    ? "!min-h-[40px] !text-base !rounded-xl"
    : compact
      ? "!min-h-[38px] !text-sm !rounded-[14px]"
      : "";

  return (
    <div
      className={cn(
        "grid grid-cols-3",
        hero ? "gap-1.5" : compact ? "gap-1.5" : "gap-2 sm:gap-2.5"
      )}
      role="group"
      aria-label="Numeric keypad"
    >
      {rows.map((row) =>
        row.map((key) => {
          if (key === "back") {
            return (
              <NeuKey
                key={`${key}-row`}
                className={keyClass}
                aria-label="Delete last digit"
                disabled={disabled}
                onClick={onBackspace}
              >
                <Delete
                  className={compact ? "h-4 w-4" : "h-5 w-5"}
                  aria-hidden="true"
                />
              </NeuKey>
            );
          }
          return (
            <NeuKey
              key={key}
              className={keyClass}
              disabled={disabled}
              onClick={() => onKey(key)}
              aria-label={key === "," ? "Decimal separator" : `Number ${key}`}
            >
              {key}
            </NeuKey>
          );
        })
      )}
      <NeuKey
        className={cn(
          "col-span-3",
          hero ? "!min-h-[32px] !text-xs" : compact ? "!min-h-[36px] !text-xs" : "!text-sm"
        )}
        variant="accent"
        disabled={disabled}
        onClick={onClear}
        aria-label="Clear selected field"
      >
        Clear field
      </NeuKey>
    </div>
  );
}
