import type { LegalSection } from "./types";

export const legalContactEmail = "contact@percentuale.it";

export const legalSiteName = "Percentuale";

export const legalRelatedPages = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/contact", label: "Contact" },
] as const;

export function withContactEmail(sections: LegalSection[]): LegalSection[] {
  return sections.map((section) => ({
    ...section,
    content: section.content.map((p) =>
      p.replace(/\{contactEmail\}/g, legalContactEmail)
    ),
  }));
}
