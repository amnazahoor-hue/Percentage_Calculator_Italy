import type { LegalSection } from "./types";

export const disclaimerSections: LegalSection[] = [
  {
    id: "general",
    title: "General disclaimer",
    content: [
      "This Disclaimer governs access to and use of the Percentuale website, percentage calculator, guides, FAQs, and all related content. By using the site, you confirm that you have read and understood this document together with our Privacy Policy and Terms and Conditions.",
      "Percentuale is a free informational and calculation tool. It does not provide tax, legal, financial, medical, accounting, or other professional advice, and does not create a client–professional relationship.",
      "Use of the site is at your sole risk. We apply reasonable diligence to keep formulas accurate and the service operational, but we cannot guarantee uninterrupted access, complete absence of errors, or suitability for every specific professional context.",
    ],
  },
  {
    id: "calculator-use",
    title: "Use of the calculator",
    content: [
      "The calculator applies standard mathematical formulas to values you enter. Supported modes include: percentage ratio (X is % of Y), percentage of a number (X% of Y), percentage increase, percentage decrease/discount, and percentage change between two values.",
      "Calculations run locally in your browser. Numeric inputs are not sent to our servers to generate results unless a future feature explicitly states otherwise in an updated Privacy Policy.",
      "Results are rounded to a maximum of two decimal places and formatted for readability. Always verify outcomes independently before using them in contracts, invoices, tax filings, academic grading, medical dosing, or other high-stakes decisions.",
      "You agree to use the tool lawfully and not to attempt to compromise site security, abuse automation, or degrade service availability for other visitors.",
    ],
  },
  {
    id: "share-export",
    title: "Share, PDF, and email features",
    content: [
      "Optional share and export features let you send or save your calculation summary via WhatsApp, PDF, or email. These actions occur on your device or through third-party apps you choose to use.",
      "Exported PDFs and shared messages may contain your entered values and results. Review content carefully before distributing it to others.",
      "Percentuale is not responsible for how you share exported information or for the policies of third-party platforms you use to transmit it.",
    ],
  },
  {
    id: "no-professional-advice",
    title: "No professional advice",
    content: [
      "Editorial content, step-by-step guides, FAQs, and formula explanations are for general information and education only. They are not tailored recommendations for your specific situation.",
      "Percentages in business, employment, statistics, VAT, margins, and contracts may have sector-specific rules. Consult qualified professionals when a calculation affects significant rights, obligations, or compliance duties.",
    ],
  },
  {
    id: "accuracy",
    title: "Accuracy of information",
    content: [
      "We review formulas, UI behavior, and explanatory text regularly, but typographical errors, temporary bugs, or delayed updates may still occur.",
      "If you believe a result or explanation is incorrect, contact us via the Contact page with sample inputs, selected mode, expected outcome, and your browser/device details so we can investigate promptly.",
    ],
  },
  {
    id: "third-party-links",
    title: "Third-party links",
    content: [
      "Hyperlinks to external websites or social profiles are provided for convenience. Percentuale does not control and is not responsible for third-party content, availability, or privacy practices.",
      "Access external resources at your own risk and review their terms and privacy notices.",
    ],
  },
  {
    id: "affiliation",
    title: "Affiliation and advertising",
    content: [
      "If sponsored content, affiliate links, or advertising are introduced in the future, they will be clearly identified in line with applicable advertising and consumer protection rules.",
      "The core percentage calculator is currently offered free of charge without registration.",
    ],
  },
  {
    id: "errors-omissions",
    title: "Errors and omissions",
    content: [
      "We do not warrant that the site is free of viruses, malware, or harmful components, nor that data transmission over the internet is fully secure — factors that also depend on your network and device environment.",
      "We may correct errors, update content, or suspend parts of the service for maintenance, security, or force majeure, with or without prior notice where permitted by law.",
    ],
  },
  {
    id: "educational-use",
    title: "Educational and workplace use",
    content: [
      "Teachers, students, retailers, and office workers may use Percentuale as a supplementary aid. It should not replace institutional policies, approved software, official tax tables, or validated internal procedures where formal accuracy requirements apply.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this disclaimer",
    content: [
      "We may update this Disclaimer at any time. Changes take effect upon publication on this page. Continued use after publication constitutes acceptance of the updated version.",
      "Material changes affecting user rights may be communicated through a more visible notice on the homepage or another appropriate channel.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    content: [
      "For questions about this Disclaimer or how Percentuale works, use the Contact page or email {contactEmail}.",
      "The data controller and full details on personal data processing are set out in the Privacy Policy, including how to exercise GDPR rights.",
    ],
  },
];
