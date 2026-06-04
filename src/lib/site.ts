export const siteConfig = {
  name: "Percentuale",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://percentuale.it",
  locale: "en_US",
  defaultTitle:
    "Online Percentage Calculator — 3D, Free | Percentuale",
  defaultDescription:
    "Neumorphic 3D percentage calculator on the homepage: increases, discounts, differences, and formulas in English. Light/dark theme, free with no sign-up.",
  ogImage: "/opengraph-image",
  twitterHandle: "@percentuale",
  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
    clarityId: process.env.NEXT_PUBLIC_CLARITY_ID ?? "",
    gscVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? "",
  },
};
