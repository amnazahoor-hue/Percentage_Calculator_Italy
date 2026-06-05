/** Padding orizzontale condiviso da header, hero e footer (full width). */
export const PAGE_GUTTER =
  "w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-20";

export const PAGE_INNER = "mx-auto w-full max-w-[1920px]";

/** Hero — stesso contenitore di header/footer (allineamento bordi). */
export const HERO_GUTTER = PAGE_GUTTER;
export const HERO_INNER = PAGE_INNER;

/** Calcolatrice hero — larghezza colonna destra, altezza minima. */
export const HERO_CALC_WIDTH =
  "relative z-10 flex w-full max-w-full flex-col xl:max-w-[min(100%,30rem)] 2xl:max-w-[min(100%,34rem)]";

export const HERO_CALC_MAX_H =
  "max-h-[calc(100svh-5rem)] sm:max-h-[calc(100svh-5.5rem)] xl:max-h-full";
