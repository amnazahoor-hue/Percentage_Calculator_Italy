"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { Accordion } from "@/components/ui/Accordion";
import { FadeIn } from "@/components/ui/FadeIn";
import { PAGE_GUTTER, PAGE_INNER } from "@/lib/layout";
import { faqItems } from "@/lib/faqData";
import { cn } from "@/lib/cn";

const DESKTOP_FAQ_BP = 1024;

const FAQ_IMAGE = {
  src: "/images/faq-desk-flatlay.png",
  alt: "Desk with a blue calculator, pen, and laptop, top-down view",
  position: "center 42%",
} as const;

export function Faq() {
  const introRef = useRef<HTMLDivElement>(null);
  const accordionWrapRef = useRef<HTMLDivElement>(null);
  const lockedHeightRef = useRef<number | null>(null);
  const lockedOffsetRef = useRef<number | null>(null);
  const [visualHeight, setVisualHeight] = useState<number | null>(null);
  const [visualOffset, setVisualOffset] = useState<number | null>(null);

  const measureCollapsedLayout = useCallback(() => {
    const intro = introRef.current;
    const accordion = accordionWrapRef.current;
    if (!intro || !accordion) return null;

    const introRect = intro.getBoundingClientRect();
    const accordionRect = accordion.getBoundingClientRect();

    if (accordionRect.height <= 0) return null;

    return {
      height: Math.round(accordionRect.height),
      offset: Math.round(accordionRect.top - introRect.top),
    };
  }, []);

  const applyLockedLayout = useCallback((height: number, offset: number) => {
    lockedHeightRef.current = height;
    lockedOffsetRef.current = offset;
    setVisualHeight(height);
    setVisualOffset(offset);
  }, []);

  const lockVisualLayout = useCallback(() => {
    if (typeof window === "undefined" || window.innerWidth < DESKTOP_FAQ_BP) {
      lockedHeightRef.current = null;
      lockedOffsetRef.current = null;
      setVisualHeight(null);
      setVisualOffset(null);
      return;
    }

    if (lockedHeightRef.current != null) {
      setVisualHeight(lockedHeightRef.current);
      setVisualOffset(lockedOffsetRef.current ?? 0);
      return;
    }

    const layout = measureCollapsedLayout();
    if (layout == null || layout.height <= 0) return;

    applyLockedLayout(layout.height, layout.offset);
  }, [applyLockedLayout, measureCollapsedLayout]);

  const unlockVisualLayout = useCallback(() => {
    lockedHeightRef.current = null;
    lockedOffsetRef.current = null;
    setVisualHeight(null);
    setVisualOffset(null);
  }, []);

  useLayoutEffect(() => {
    lockVisualLayout();
  }, [lockVisualLayout]);

  useEffect(() => {
    let cancelled = false;
    let lastIsDesktop = window.innerWidth >= DESKTOP_FAQ_BP;

    const tryLock = () => {
      if (!cancelled && lockedHeightRef.current == null) lockVisualLayout();
    };

    const onResize = () => {
      const isDesktop = window.innerWidth >= DESKTOP_FAQ_BP;
      if (lastIsDesktop !== isDesktop) {
        if (isDesktop) {
          unlockVisualLayout();
          requestAnimationFrame(() => lockVisualLayout());
        } else {
          unlockVisualLayout();
        }
      }
      lastIsDesktop = isDesktop;
    };

    window.addEventListener("resize", onResize);

    const timers = [0, 100, 300, 600].map((delay) =>
      window.setTimeout(tryLock, delay)
    );

    document.fonts?.ready.then(() => {
      if (!cancelled && lockedHeightRef.current == null) lockVisualLayout();
    });

    return () => {
      cancelled = true;
      window.removeEventListener("resize", onResize);
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [lockVisualLayout, unlockVisualLayout]);

  const accordionItems = faqItems.map((item) => ({
    id: item.id,
    title: item.question,
    content: item.answer,
  }));

  const isSynced = visualHeight != null;
  const offset = visualOffset ?? 0;

  const fixedVisualStyle = isSynced
    ? ({
        ["--faq-visual-h" as string]: `${visualHeight}px`,
        ["--faq-visual-offset" as string]: `${offset}px`,
      } as React.CSSProperties)
    : undefined;

  return (
    <section
      id="faq"
      className="faq-section relative scroll-mt-24 border-t border-border/50 py-16 md:py-24"
      aria-labelledby="faq-heading"
    >
      <div className={cn(PAGE_GUTTER, PAGE_INNER)}>
        <div className="faq-grid">
          <FadeIn className="faq-content-intro w-full max-md:mx-auto max-md:items-center max-md:text-center">
            <div ref={introRef}>
              <p className="faq-badge type-eyebrow px-4 py-1.5">FAQ</p>
              <h2 id="faq-heading" className="faq-heading text-display-h2">
                Frequently Asked Questions
              </h2>
            </div>
          </FadeIn>

          <FadeIn className="faq-visual-col w-full">
            <div
              className={cn(
                "faq-visual-single",
                isSynced && "faq-visual-single--desktop-sync"
              )}
              style={fixedVisualStyle}
            >
              <figure className="faq-visual-single__frame">
                <Image
                  src={FAQ_IMAGE.src}
                  alt={FAQ_IMAGE.alt}
                  width={900}
                  height={560}
                  loading="lazy"
                  className="faq-img faq-img--desk"
                  sizes="(max-width: 639px) 92vw, (max-width: 1023px) 80vw, 44vw"
                  style={{ objectPosition: FAQ_IMAGE.position }}
                />
              </figure>
            </div>
          </FadeIn>

          <div className="faq-accordion-wrap w-full max-md:mx-auto">
            <div ref={accordionWrapRef}>
              <Accordion items={accordionItems} variant="faq" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
