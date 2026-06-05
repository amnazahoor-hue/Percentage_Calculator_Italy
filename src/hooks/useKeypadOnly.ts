"use client";

import { useEffect, useState } from "react";

/** True on mobile / touch-primary viewports — use on-screen keypad instead of OS keyboard */
export function useKeypadOnly() {
  const [keypadOnly, setKeypadOnly] = useState(false);

  useEffect(() => {
    const touchMq = window.matchMedia("(pointer: coarse)");
    const narrowMq = window.matchMedia("(max-width: 767px)");

    const update = () => {
      setKeypadOnly(touchMq.matches || narrowMq.matches);
    };

    update();
    touchMq.addEventListener("change", update);
    narrowMq.addEventListener("change", update);
    return () => {
      touchMq.removeEventListener("change", update);
      narrowMq.removeEventListener("change", update);
    };
  }, []);

  return keypadOnly;
}
