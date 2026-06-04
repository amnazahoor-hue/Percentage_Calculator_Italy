import type { LegalSection } from "./types";

export const privacySections: LegalSection[] = [
  {
    id: "introduzione",
    title: "Introduction",
    content: [
      "This Privacy Policy describes how Percentuale collects, uses, stores, and protects the personal data of users who visit the website and use related services, in accordance with Regulation (EU) 2016/679 (GDPR) and applicable Italian law, including Legislative Decree 196/2003 as amended by Legislative Decree 101/2018.",
      "Please read this document carefully to understand our practices and your rights. By using the site, you accept the practices described in this policy, except where the law requires separate consent for specific processing activities.",
    ],
  },
  {
    id: "dati-raccolti",
    title: "Data we collect",
    content: [
      "Technical browsing data: IP address (possibly anonymized), browser type, operating system, pages visited, date and time of access, referrer, and session data collected via technical cookies and aggregated analytics tools, where enabled.",
      "Voluntarily provided data: name, email address, subject, and message content when you complete the Contact form. We do not intentionally collect special categories of data (Article 9 GDPR) through the site's standard forms.",
      "Calculation data: values entered in the percentage calculator are processed in the user's browser to produce the result and are not sent to our servers for calculation purposes, unless explicitly communicated otherwise if future features require server-side processing.",
    ],
  },
  {
    id: "utilizzo",
    title: "How we use data",
    content: [
      "Data is processed to: provide and improve the web service; respond to requests sent via the contact form; ensure security and prevent abuse; comply with legal obligations; and, where the user has given consent to non-technical cookies where required, analyze site use in aggregated form to optimize content and performance.",
      "The legal bases for processing include performance of pre-contractual or contractual measures at the data subject's request (Art. 6(1)(b) GDPR), the controller's legitimate interests (Art. 6(1)(f)) for security and service improvement, consent (Art. 6(1)(a)) for non-essential analytics/marketing cookies, and compliance with legal obligations (Art. 6(1)(c)).",
    ],
  },
  {
    id: "cookie",
    title: "Cookies and similar technologies",
    content: [
      "We use technical cookies necessary for the site to function (e.g. session preferences, security). Third-party analytics cookies (Google Analytics, Microsoft Clarity) may be activated only after keys are configured by the administrator and, where required by applicable law, following a consent banner compliant with the guidelines of the Italian Data Protection Authority (Garante) and the Digital Markets Act where applicable.",
      "You can manage cookie preferences in your browser settings and, when available, via the site's consent panel. Disabling certain cookies may limit functionality or prevent collection of aggregated statistics.",
    ],
  },
  {
    id: "analytics",
    title: "Google Analytics and Microsoft Clarity",
    content: [
      "Google Analytics (GA4) allows analysis of traffic in aggregated form, such as most visited pages, average session duration, and approximate geographic origin. Data may be transferred to servers located outside the EU; Google adopts compliance tools such as Standard Contractual Clauses where applicable.",
      "Microsoft Clarity records aggregated interactions such as scroll and clicks (heatmaps) to improve usability. We do not use these tools for invasive individual profiling or for automated decisions with legal effects on the user.",
      "API keys and measurement IDs must be entered by the site operator in the environment variables documented in the README. Until activated, such scripts do not send data to third parties.",
    ],
  },
  {
    id: "conservazione",
    title: "Data retention",
    content: [
      "Contact messages are retained for as long as necessary to handle the request and, where applicable, to comply with legal obligations or legal defense, generally not longer than 24 months unless disputes are ongoing.",
      "Technical logs and aggregated analytics data are retained according to periods set by the respective providers (e.g. GA4) or for a shorter duration configured by the administrator.",
    ],
  },
  {
    id: "diritti",
    title: "Your rights (GDPR)",
    content: [
      "As a data subject, you have the right of access, rectification, erasure, restriction of processing, data portability (where applicable), objection to processing based on legitimate interest, and withdrawal of consent without affecting the lawfulness of processing based on consent given before withdrawal.",
      "You may lodge a complaint with the Italian Data Protection Authority (Garante per la protezione dei dati personali) at www.garanteprivacy.it. To exercise your rights, write via the Contact page specifying your request; we may ask for additional information to verify your identity.",
    ],
  },
  {
    id: "sicurezza",
    title: "Security",
    content: [
      "We adopt appropriate technical and organizational measures, including HTTPS connections, security updates to the framework, limited administrative access, and sound development practices, to protect data from unauthorized access, loss, or alteration.",
      "No system is completely invulnerable; please do not send unnecessary sensitive data via the contact form and protect the credentials on your devices.",
    ],
  },
  {
    id: "modifiche-privacy",
    title: "Changes to this policy",
    content: [
      "We may update this policy to reflect regulatory, technological, or organizational changes. The date of last update is shown at the top of the page. We recommend checking this section periodically.",
    ],
  },
  {
    id: "contatti-privacy",
    title: "Contact",
    content: [
      "For privacy-related requests and to exercise GDPR rights, use the Contact form with the subject «Privacy» or the dedicated email published on that page. We will respond within the time limits set out in Article 12 GDPR, generally within one month, extendable where necessary.",
    ],
  },
];
