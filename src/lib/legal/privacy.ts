import type { LegalSection } from "./types";

export const privacySections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    content: [
      "This Privacy Policy explains how Percentuale («we», «us», or «the site») collects, uses, stores, and protects personal data when you visit our website and use our free online percentage calculator and related services.",
      "We process data in accordance with Regulation (EU) 2016/679 (GDPR), applicable Italian law including Legislative Decree 196/2003 as amended by Legislative Decree 101/2018, and ePrivacy rules where relevant.",
      "By using Percentuale, you acknowledge the practices described in this policy. Where the law requires separate consent — for example, for non-essential analytics cookies — we will request it through an appropriate mechanism before activating such tools.",
    ],
  },
  {
    id: "data-controller",
    title: "Data controller",
    content: [
      "The data controller for personal data collected through Percentuale is the operator of the website published at percentuale.it.",
      "For privacy requests, GDPR rights, or questions about this policy, contact us at {contactEmail} or via the Contact page with the subject line «Privacy». We will respond within the time limits set out in Article 12 GDPR, generally within one month.",
    ],
  },
  {
    id: "data-we-collect",
    title: "Data we collect",
    content: [
      "Technical browsing data: IP address (which may be truncated or anonymized by analytics providers), browser type and version, operating system, device type, pages visited, session duration, referrer URL, and approximate geographic region. This data is collected through server logs, technical cookies, and analytics tools where enabled.",
      "Voluntarily provided data: name, email address, subject, and message body when you submit the Contact form. Do not send special categories of personal data (Article 9 GDPR) unless strictly necessary and lawful.",
      "Calculator input data: numbers and modes you enter in the percentage calculator are processed locally in your browser to produce results. They are not transmitted to our servers for calculation purposes.",
      "Theme and interface preferences: if you switch between light and dark mode, your choice may be stored locally in your browser (for example via localStorage) to remember your preference on return visits. This data stays on your device.",
    ],
  },
  {
    id: "how-we-use-data",
    title: "How we use data",
    content: [
      "We use personal and technical data to: operate and secure the website; deliver calculator functionality; respond to contact requests; prevent abuse and fraud; comply with legal obligations; improve content, performance, and usability; and, where permitted and consented to, analyze aggregated traffic patterns.",
      "Legal bases include: performance of measures at your request (Art. 6(1)(b) GDPR) for contact enquiries; legitimate interests (Art. 6(1)(f)) for security, service improvement, and aggregated analytics; consent (Art. 6(1)(a)) for non-essential cookies; and legal obligation (Art. 6(1)(c)) where applicable.",
    ],
  },
  {
    id: "share-and-export",
    title: "Share, PDF export, and email features",
    content: [
      "After calculating a result, you may optionally share or export it using built-in tools: WhatsApp share, PDF download, or your device's email client.",
      "WhatsApp sharing opens WhatsApp (web or app) with a pre-filled message containing your calculation summary and a link to Percentuale. We do not receive the content of messages you send through WhatsApp.",
      "PDF export generates a document in your browser using your current result, formula, and inputs. The PDF is saved locally on your device; we do not store exported PDFs on our servers.",
      "The email option opens your default mail application with a pre-filled subject and body. You choose whether to send the message and to whom. We do not access your email drafts or sent messages.",
      "Because these features run on your device or through third-party apps you control, you are responsible for reviewing the content before sharing it with others.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies and similar technologies",
    content: [
      "We use strictly necessary technical mechanisms for site operation, including session stability, security, and remembered theme preferences where implemented.",
      "Analytics cookies (Google Analytics 4, Microsoft Clarity) may be activated only when configured by the site administrator and, where required by law, after you provide consent through a compliant cookie notice.",
      "You can manage or delete cookies through your browser settings. Blocking certain cookies may limit functionality or prevent collection of aggregated statistics.",
    ],
  },
  {
    id: "analytics",
    title: "Google Analytics and Microsoft Clarity",
    content: [
      "Google Analytics 4 helps us understand aggregated traffic: popular pages, average session length, and general acquisition channels. Data may be processed on servers outside the EU; Google applies appropriate safeguards such as Standard Contractual Clauses where required.",
      "Microsoft Clarity provides aggregated interaction insights (for example scroll depth and click patterns) to improve usability. It is not used for invasive individual profiling or automated decisions with legal effects on you.",
      "Measurement IDs are configured via environment variables by the site operator. Until activated, these scripts do not send data to third parties.",
    ],
  },
  {
    id: "retention",
    title: "Data retention",
    content: [
      "Contact form messages are retained for as long as needed to handle your request and for legal defense or compliance, generally up to 24 months unless a longer period is required by ongoing disputes or law.",
      "Server logs and aggregated analytics are retained according to provider defaults or shorter periods configured by the administrator.",
      "Calculator values are not retained on our servers after you close the page, unless future features explicitly state otherwise in an updated policy.",
    ],
  },
  {
    id: "your-rights",
    title: "Your rights under GDPR",
    content: [
      "You have the right to access, rectify, erase, restrict processing, object (where based on legitimate interest), data portability (where applicable), and withdraw consent without affecting prior lawful processing.",
      "You may lodge a complaint with the Italian Data Protection Authority (Garante) at www.garanteprivacy.it.",
      "To exercise your rights, email {contactEmail} or use the Contact page. We may request reasonable identity verification before fulfilling sensitive requests.",
    ],
  },
  {
    id: "children",
    title: "Children's privacy",
    content: [
      "Percentuale is a general-purpose educational and utility tool. We do not knowingly collect personal data from children under 16 without appropriate parental consent where required by law.",
      "If you believe a child has submitted personal data through our Contact form without authorization, contact us and we will take appropriate steps to delete it.",
    ],
  },
  {
    id: "security",
    title: "Security",
    content: [
      "We implement appropriate technical and organizational measures, including HTTPS, framework security updates, restricted administrative access, and secure development practices, to protect data against unauthorized access, loss, or alteration.",
      "No online system is completely risk-free. Avoid sending unnecessary sensitive information via the contact form and keep your devices protected.",
    ],
  },
  {
    id: "international-transfers",
    title: "International transfers",
    content: [
      "Where data is processed outside the European Economic Area by analytics or hosting providers, we rely on adequacy decisions, Standard Contractual Clauses, or other mechanisms recognized under GDPR Chapter V.",
    ],
  },
  {
    id: "policy-changes",
    title: "Changes to this policy",
    content: [
      "We may update this Privacy Policy to reflect legal, technical, or organizational changes. The current version is always published on this page. We recommend reviewing it periodically.",
      "Material changes affecting your rights may be highlighted on the homepage or through another appropriate channel.",
    ],
  },
];
