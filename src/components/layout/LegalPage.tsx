"use client";

import Link from "next/link";
import { ArrowLeft, FileText, Mail } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { PAGE_GUTTER, PAGE_INNER } from "@/lib/layout";
import { legalContactEmail, legalRelatedPages, legalSiteName } from "@/lib/legal/common";
import { cn } from "@/lib/cn";

interface LegalSection {
  id: string;
  title: string;
  content: string[];
}

interface LegalPageProps {
  title: string;
  description: string;
  sections: LegalSection[];
  currentPath: string;
}

export function LegalPage({
  title,
  description,
  sections,
  currentPath,
}: LegalPageProps) {
  const otherLegalPages = legalRelatedPages.filter((p) => p.href !== currentPath);

  return (
    <article className="legal-page">
      <div className="legal-hero">
        <div className={cn(PAGE_GUTTER, PAGE_INNER, "relative z-[1] py-10 md:py-14")}>
          <FadeIn>
            <Link
              href="/"
              className="legal-back-link type-eyebrow inline-flex items-center gap-2 text-white/85 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to home
            </Link>
            <h1 className="legal-hero-title mt-6 text-white">{title}</h1>
            <p className="legal-hero-copy type-lead mt-4 max-w-3xl text-white/90">
              {description}
            </p>
          </FadeIn>
        </div>
      </div>

      <div className={cn(PAGE_GUTTER, PAGE_INNER, "py-10 md:py-14")}>
        <div className="legal-layout">
          <aside className="legal-toc" aria-label="Table of contents">
            <FadeIn>
              <div className="legal-toc-card">
                <p className="legal-toc-label type-eyebrow">On this page</p>
                <nav>
                  <ol className="legal-toc-list">
                    {sections.map((section, index) => (
                      <li key={section.id}>
                        <a href={`#${section.id}`} className="legal-toc-link">
                          <span className="legal-toc-num" aria-hidden="true">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span>{section.title}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            </FadeIn>
          </aside>

          <div className="legal-content">
            <div className="legal-sections">
              {sections.map((section, index) => (
                <FadeIn key={section.id} delay={index * 0.04}>
                  <section
                    id={section.id}
                    className="legal-section-card scroll-mt-28"
                  >
                    <div className="legal-section-head">
                      <span className="legal-section-num" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="legal-section-title">{section.title}</h2>
                    </div>
                    <div className="legal-section-body prose-max space-y-4">
                      {section.content.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.2}>
              <div className="legal-footer-card">
                <div className="flex items-start gap-3">
                  <span className="legal-footer-icon" aria-hidden="true">
                    <FileText className="h-5 w-5 text-primary" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="legal-footer-title">Questions about this page?</h3>
                    <p className="legal-footer-copy mt-2 text-body">
                      Contact {legalSiteName} for clarifications about this document,
                      your data, or how the calculator works. We aim to respond within
                      a reasonable time.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Link href="/contact" className="legal-footer-btn legal-footer-btn--primary">
                        <Mail className="h-4 w-4" aria-hidden="true" />
                        Contact us
                      </Link>
                      <a
                        href={`mailto:${legalContactEmail}`}
                        className="legal-footer-btn legal-footer-btn--secondary"
                      >
                        {legalContactEmail}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="legal-related">
                  <p className="legal-related-label type-eyebrow">Related legal pages</p>
                  <ul className="legal-related-list">
                    {otherLegalPages.map((page) => (
                      <li key={page.href}>
                        <Link href={page.href} className="legal-related-link">
                          {page.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </article>
  );
}
