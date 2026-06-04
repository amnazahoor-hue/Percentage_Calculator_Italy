"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface CountUpProps {
  value: number;
  display: string;
  duration?: number;
  className?: string;
}

export function CountUp({
  value,
  display,
  duration = 600,
  className,
}: CountUpProps) {
  const reducedMotion = useReducedMotion();
  const [shown, setShown] = useState(display);

  useEffect(() => {
    if (reducedMotion) {
      setShown(display);
      return;
    }

    const start = performance.now();
    const from = 0;
    const to = value;
    const hasPercent = display.includes("%");

    let frame: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = from + (to - from) * eased;

      const formatted = current.toLocaleString("en-US", {
        maximumFractionDigits: 2,
        minimumFractionDigits: 0,
      });

      setShown(hasPercent ? `${formatted}%` : formatted);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setShown(display);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value, display, duration, reducedMotion]);

  return <span className={className}>{shown}</span>;
}
