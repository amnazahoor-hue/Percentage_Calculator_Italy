"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(
          "type-btn inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-200",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "motion-safe:active:scale-[0.98] motion-safe:hover:scale-[1.02]",
          size === "sm" && "px-4 py-2 text-sm",
          size === "md" && "px-6 py-3 text-[0.9375rem]",
          size === "lg" && "px-8 py-3.5 text-base",
          variant === "primary" &&
            "bg-primary text-on-primary shadow-[var(--shadow-card)] hover:bg-primary-hover",
          variant === "secondary" &&
            "bg-neu-bg text-text border border-border hover:border-primary/40",
          variant === "outline" &&
            "border border-border bg-surface text-text hover:border-primary hover:text-primary",
          variant === "ghost" && "text-primary hover:bg-neu-bg",
          className
        )}
        {...props}
      >
        {loading && (
          <Loader2 className="h-4 w-4 shrink-0 animate-spin" aria-hidden="true" />
        )}
        {loading ? (
          <span className="inline-flex items-center gap-2 opacity-80">{children}</span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
