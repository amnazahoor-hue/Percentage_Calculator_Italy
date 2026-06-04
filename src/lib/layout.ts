/** Padding orizzontale condiviso da header, hero e footer (full width). */
export const PAGE_GUTTER =
  "w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-20";

export const PAGE_INNER = "mx-auto w-full max-w-[1920px]";

/** Hero — stesso contenitore di header/footer (allineamento bordi). */
export const HERO_GUTTER = PAGE_GUTTER;
export const HERO_INNER = PAGE_INNER;

/** Calcolatrice hero — larghezza colonna destra, altezza minima. */
export const HERO_CALC_WIDTH =
  "relative z-10 flex w-full max-w-full flex-col lg:max-w-[min(100%,32rem)] xl:max-w-[min(100%,34rem)]";

export const HERO_CALC_MIN_H =
  "min-h-[26rem] sm:min-h-[28rem] lg:min-h-[30rem] xl:min-h-[32rem]";
