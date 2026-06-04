import Link from "next/link";
import { ArrowRight, Calculator, Mail } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { SocialIconLink, type SocialBrand } from "@/components/ui/SocialIcons";
import { legalNavLinks, mainNavLinks } from "@/lib/navData";
import { PAGE_GUTTER, PAGE_INNER } from "@/lib/layout";
import { cn } from "@/lib/cn";

const socialLinks: { brand: SocialBrand; href: string; label: string }[] = [
  { brand: "facebook", href: "https://facebook.com", label: "Facebook" },
  { brand: "x", href: "https://x.com", label: "X" },
  { brand: "instagram", href: "https://instagram.com", label: "Instagram" },
  { brand: "linkedin", href: "https://linkedin.com", label: "LinkedIn" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-shell-border bg-shell-bg text-shell-muted transition-[background-color,border-color] duration-[250ms]">
      <div className="border-b border-shell-border/80 bg-gradient-to-r from-primary/8 via-transparent to-accent/8">
        <div className={cn(PAGE_GUTTER, PAGE_INNER, "py-10 md:py-12")}>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <p className="type-eyebrow text-xs font-medium uppercase tracking-[0.14em] text-primary">
                Get started
              </p>
              <h2 className="shell-heading mt-2 text-2xl md:text-3xl">
                Ready To Calculate Your Percentages?
              </h2>
              <p className="type-lead mt-2 text-shell-muted">
                Open the free calculator — no account required — with formulas
                explained step by step.
              </p>
            </div>
            <Link
              href="/#strumento"
              className={cn(
                "type-btn inline-flex shrink-0 items-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm text-on-primary",
                "shadow-[0_8px_24px_rgba(79,70,229,0.35)] transition-all hover:bg-primary-hover hover:shadow-[0_10px_28px_rgba(79,70,229,0.45)]",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              )}
            >
              <Calculator className="h-5 w-5" aria-hidden="true" />
              Go to calculator
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      <div className={cn(PAGE_GUTTER, PAGE_INNER, "py-12 md:py-16")}>
        <div className="grid w-full gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col gap-5 lg:col-span-4">
            <Link href="/" aria-label="Percentuale — Home">
              <Logo variant="full" width={56} height={56} />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-shell-muted">
              Free, fast, and accurate online percentage calculator for students,
              professionals, and everyday use.
            </p>
            <div className="flex flex-wrap gap-2.5" aria-label="Social media">
              {socialLinks.map(({ brand, href, label }) => (
                <SocialIconLink
                  key={label}
                  brand={brand}
                  href={href}
                  label={label}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-shell-text">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5">
              {mainNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-shell-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-shell-text">
              Legal
            </h3>
            <ul className="flex flex-col gap-2.5">
              {legalNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-shell-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-shell-text">
              Contact
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-shell-muted">
              Questions, feedback, or reports? We are here to help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-shell-border bg-neu-bg/50 px-4 py-2.5 text-sm font-medium text-shell-text transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email us
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-shell-border pt-8 text-center">
          <p className="text-sm text-shell-muted">
            © {year} Percentuale. All rights reserved.
          </p>
        </div>
      </div>

      <div
        className="pointer-events-none h-1 w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        aria-hidden="true"
      />
    </footer>
  );
}
