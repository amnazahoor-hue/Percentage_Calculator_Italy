export interface NavLink {
  href: string;
  label: string;
  section?: string;
  description?: string;
}

export const mainNavLinks: NavLink[] = [
  { href: "/", label: "Home" },
  {
    href: "/#strumento",
    label: "Tool",
    section: "strumento",
    description: "3D calculator",
  },
  {
    href: "/#come-funziona",
    label: "How It Works",
    section: "come-funziona",
    description: "Quick guide",
  },
  {
    href: "/#faq",
    label: "FAQ",
    section: "faq",
    description: "Common questions",
  },
  {
    href: "/about-us",
    label: "About Us",
    description: "Our team",
  },
];

export const legalNavLinks: NavLink[] = [
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/contact", label: "Contact" },
];

export const footerNavLinks: NavLink[] = [
  ...mainNavLinks.filter((l) => l.href !== "/"),
  ...legalNavLinks,
];
