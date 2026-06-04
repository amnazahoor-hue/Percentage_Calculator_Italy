"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { HelpCircle } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { FadeIn } from "@/components/ui/FadeIn";
import { PAGE_GUTTER, PAGE_INNER } from "@/lib/layout";
import { faqItems } from "@/lib/faqData";
import { cn } from "@/lib/cn";

export function Faq() {
  const contentColRef = useRef<HTMLDivElement>(null);
  const [visualHeight, setVisualHeight] = useState<number | null>(null);

  const syncVisualHeight = useCallback(() => {
    if (typeof window === "undefined" || window.innerWidth < 1024) {
      setVisualHeight(null);
      return;
    }
    const col = contentColRef.current;
    if (!col) return;
    setVisualHeight(col.offsetHeight);
  }, []);

  useLayoutEffect(() => {
    syncVisualHeight();
  }, [syncVisualHeight]);

  useEffect(() => {
    window.addEventListener("resize", syncVisualHeight);
    const t = window.setTimeout(syncVisualHeight, 150);
    return () => {
      window.removeEventListener("resize", syncVisualHeight);
      window.clearTimeout(t);
    };
  }, [syncVisualHeight]);

  const accordionItems = faqItems.map((item) => ({
    id: item.id,
    title: item.question,
    content: item.answer,
  }));

  return (
    <section
      id="faq"
      className="faq-section relative scroll-mt-24 border-t border-border/50 py-16 md:py-24"
      aria-labelledby="faq-heading"
    >
      <div className={cn(PAGE_GUTTER, PAGE_INNER)}>
        <div className="faq-grid">
          {/* Immagine — centrata su mobile/tablet, colonna sinistra su desktop */}
          <FadeIn className="faq-visual-col w-full">
            <div
              className="faq-visual-stack"
              style={
                visualHeight != null ? { height: `${visualHeight}px` } : undefined
              }
            >
              <figure className="faq-visual-frame relative">
                <Image
                  src="/images/faq-desk-flatlay.png"
                  alt="Desk with a numbers book and laptop, top-down view"
                  fill
                  loading="lazy"
                  className="faq-img faq-img--desk"
                  sizes="(max-width: 639px) 92vw, (max-width: 1023px) 80vw, 44vw"
                />
              </figure>
            </div>
          </FadeIn>

          {/* Testo + accordion — centrato su mobile/tablet */}
          <div
            ref={contentColRef}
            className="faq-content-col mx-auto max-md:items-center max-md:text-center"
          >
            <FadeIn className="faq-content-intro w-full">
              <p className="faq-badge type-eyebrow items-center gap-2 px-4 py-1.5">
                <HelpCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                FAQ
              </p>
              <h2 id="faq-heading" className="faq-heading text-display-h2">
                Frequently Asked Questions
              </h2>
            </FadeIn>

            <FadeIn delay={0.12} className="faq-accordion-wrap w-full max-md:mx-auto">
              <Accordion items={accordionItems} variant="faq" />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
