"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { mainNavLinks, type NavLink } from "@/lib/navData";
import { PAGE_GUTTER, PAGE_INNER } from "@/lib/layout";
import { cn } from "@/lib/cn";

const SECTION_IDS = ["strumento", "come-funziona", "faq"] as const;

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const max = scrollHeight - clientHeight;
      setProgress(max > 0 ? Math.min(scrollTop / max, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
}

function useActiveSection(pathname: string) {
  const [section, setSection] = useState<string | null>(null);

  useEffect(() => {
    if (pathname !== "/") {
      setSection(null);
      return;
    }

    const update = () => {
      const offset = 120;
      let current: string | null = null;

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }

      setSection(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [pathname]);

  return section;
}

function NavItem({
  link,
  active,
  onClick,
  variant = "desktop",
}: {
  link: NavLink;
  active: boolean;
  onClick?: () => void;
  variant?: "desktop" | "mobile";
}) {
  const reducedMotion = useReducedMotion();

  if (variant === "mobile") {
    return (
      <Link
        href={link.href}
        onClick={onClick}
        className={cn(
          "group flex items-center gap-3 rounded-2xl border px-4 py-3.5 transition-all duration-200",
          active
            ? "border-primary/30 bg-primary/10 text-primary shadow-[var(--shadow-card)]"
            : "border-transparent bg-neu-bg/60 text-text hover:border-border hover:bg-surface"
        )}
      >
        <span className="min-w-0 flex-1">
          <span className="type-nav block font-semibold">{link.label}</span>
          {link.description && (
            <span className="mt-0.5 block text-xs text-muted">
              {link.description}
            </span>
          )}
        </span>
        <ArrowRight
          className={cn(
            "h-4 w-4 shrink-0 transition-transform",
            active
              ? "text-primary"
              : "text-muted opacity-0 group-hover:translate-x-0.5 group-hover:opacity-100"
          )}
          aria-hidden="true"
        />
      </Link>
    );
  }

  return (
    <Link
      href={link.href}
      onClick={onClick}
      className={cn(
        "type-nav relative flex flex-1 items-center justify-center whitespace-nowrap rounded-xl px-3 py-2.5 transition-colors duration-200 xl:px-4",
        active ? "text-on-primary" : "text-muted hover:text-text"
      )}
    >
      {active && !reducedMotion && (
        <motion.span
          layoutId="header-nav-active"
          className="absolute inset-0 rounded-xl bg-primary shadow-[0_4px_14px_rgba(79,70,229,0.35)] dark:shadow-[0_4px_14px_rgba(124,140,255,0.25)]"
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
        />
      )}
      {active && reducedMotion && (
        <span className="absolute inset-0 rounded-xl bg-primary shadow-md" />
      )}
      <span className="relative z-10">{link.label}</span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const scrollProgress = useScrollProgress();
  const activeSection = useActiveSection(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [menuOpen, closeMenu]);

  const isActive = (link: NavLink) => {
    if (link.href === "/") return pathname === "/" && !activeSection;
    if (link.section) {
      return pathname === "/" && activeSection === link.section;
    }
    return pathname === link.href;
  };

  const handleLogoClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (pathname !== "/") return;
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
    },
    [pathname, reducedMotion]
  );

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className="pointer-events-none absolute bottom-0 left-0 z-10 h-[3px] bg-gradient-to-r from-primary via-accent to-primary transition-[width] duration-150 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
        aria-hidden="true"
      />

      <div
        className={cn(
          "relative w-full border-b border-shell-border transition-all duration-300",
          "bg-shell-bg/95 backdrop-blur-xl",
          scrolled &&
            "shadow-[0_10px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_-12px_rgba(0,0,0,0.4)]"
        )}
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          aria-hidden="true"
        />

        {/* Full-width bar */}
        <div className={cn(PAGE_GUTTER, PAGE_INNER)}>
          <div className="grid h-[4.5rem] w-full grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-4 md:gap-5 xl:h-[5rem] xl:gap-8">
            {/* Logo — left edge */}
            <Link
              href="/"
              onClick={handleLogoClick}
              className="header-logo group relative z-20 flex shrink-0 cursor-pointer items-center gap-3 rounded-2xl py-1 pr-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-safe:transition-transform motion-safe:hover:scale-[1.02] md:gap-4"
              aria-label="Percentuale — Back to home"
            >
              <span className="relative flex shrink-0 items-center justify-center">
                <span
                  className="absolute -inset-1 rounded-2xl bg-primary/15 opacity-0 blur-md transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                />
                <Logo variant="full" width={52} height={52} priority className="relative" />
              </span>
            </Link>

            {/* Nav — spans entire center column */}
            <nav
              className="hidden min-w-0 xl:block"
              aria-label="Main navigation"
            >
              <div
                className={cn(
                  "flex w-full items-stretch gap-1 rounded-2xl border border-border/70 p-1.5",
                  "bg-neu-bg/90 shadow-[inset_3px_3px_8px_var(--shadow-dark),inset_-3px_-3px_8px_var(--shadow-light)]"
                )}
              >
                {mainNavLinks.map((link) => (
                  <NavItem
                    key={link.href}
                    link={link}
                    active={isActive(link)}
                    variant="desktop"
                  />
                ))}
              </div>
            </nav>

            {/* Actions — right edge */}
            <div className="header-actions flex shrink-0 items-center justify-end gap-2 sm:gap-2.5 md:gap-3">
              <div
                className={cn(
                  "hidden items-center gap-2 rounded-2xl border border-border/70 bg-neu-bg/80 p-1.5 md:flex",
                  "shadow-[inset_2px_2px_6px_var(--shadow-dark),inset_-2px_-2px_6px_var(--shadow-light)]"
                )}
              >
                <span className="rounded-xl bg-surface/80 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-success">
                  Free
                </span>

                <span
                  className="mx-0.5 h-6 w-px bg-border/80"
                  aria-hidden="true"
                />

                <ThemeToggle className="!h-9 !w-9 !min-h-0 !rounded-xl" />
              </div>

              <ThemeToggle className="!h-10 !w-10 !min-h-0 !rounded-full md:hidden" />

              <Link
                href="/#strumento"
                className={cn(
                  "type-btn hidden items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm text-on-primary sm:inline-flex md:px-5 xl:rounded-2xl xl:px-6 xl:py-3",
                  "shadow-[0_4px_16px_rgba(79,70,229,0.35)] transition-all duration-200",
                  "hover:bg-primary-hover hover:shadow-[0_6px_20px_rgba(79,70,229,0.45)]",
                  "motion-safe:hover:scale-[1.02] active:scale-[0.98]",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                )}
              >
                Calculate now
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <button
                type="button"
                className={cn(
                  "neu-key inline-flex !min-h-[42px] !w-[42px] items-center justify-center !rounded-xl xl:hidden",
                  menuOpen && "neu-key--primary text-on-primary"
                )}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen((o) => !o)}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {menuOpen ? (
                    <motion.span
                      key="close"
                      initial={reducedMotion ? false : { rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={reducedMotion ? undefined : { rotate: 90, opacity: 0 }}
                    >
                      <X className="h-5 w-5" aria-hidden="true" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={reducedMotion ? false : { rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={reducedMotion ? undefined : { rotate: -90, opacity: 0 }}
                    >
                      <Menu className="h-5 w-5" aria-hidden="true" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm xl:hidden"
              initial={reducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reducedMotion ? undefined : { opacity: 0 }}
              onClick={closeMenu}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-menu"
              ref={menuRef}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              className="fixed inset-x-4 top-[4.75rem] z-50 mx-auto max-h-[calc(100vh-5.5rem)] max-w-[1920px] overflow-hidden rounded-2xl border border-shell-border bg-shell-bg shadow-[var(--shadow-calc)] sm:inset-x-6 md:inset-x-8 xl:hidden 2xl:inset-x-20"
              initial={reducedMotion ? false : { opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reducedMotion ? undefined : { opacity: 0, y: -8, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 34 }}
            >
              <div className="border-b border-border/80 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 px-4 py-3 sm:px-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Menu
                </p>
                <p className="text-sm text-muted">Browse the site</p>
              </div>

              <nav
                className="flex max-h-[min(60vh,420px)] flex-col gap-2 overflow-y-auto p-3 sm:p-4"
                aria-label="Mobile menu"
              >
                {mainNavLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={reducedMotion ? false : { opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <NavItem
                      link={link}
                      active={isActive(link)}
                      onClick={closeMenu}
                      variant="mobile"
                    />
                  </motion.div>
                ))}
              </nav>

              <div className="border-t border-border p-3 sm:p-4">
                <Link
                  href="/#strumento"
                  onClick={closeMenu}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-semibold text-on-primary shadow-md transition-transform active:scale-[0.98]"
                >
                  Calculate now
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
