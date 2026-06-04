"use client";

import { useCallback, useState, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

function haptic() {
  if (typeof navigator !== "undefined" && navigator.vibrate) {
    navigator.vibrate(8);
  }
}

export interface NeuKeyProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "accent";
  wide?: boolean;
}

export function NeuKey({
  className,
  variant = "default",
  wide,
  children,
  onPointerDown,
  onPointerUp,
  onPointerLeave,
  onClick,
  ...props
}: NeuKeyProps) {
  const [pressed, setPressed] = useState(false);

  const release = useCallback(() => setPressed(false), []);

  return (
    <button
      type="button"
      data-pressed={pressed || undefined}
      className={cn(
        "neu-key flex min-h-[44px] items-center justify-center text-base font-medium",
        wide && "col-span-2",
        variant === "primary" && "neu-key--primary",
        variant === "accent" && "neu-key--accent",
        className
      )}
      onPointerDown={(e) => {
        setPressed(true);
        haptic();
        onPointerDown?.(e);
      }}
      onPointerUp={(e) => {
        release();
        onPointerUp?.(e);
      }}
      onPointerLeave={(e) => {
        release();
        onPointerLeave?.(e);
      }}
      onClick={(e) => {
        onClick?.(e);
      }}
      {...props}
    >
      {children}
    </button>
  );
}
