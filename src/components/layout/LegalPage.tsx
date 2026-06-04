import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";

interface LegalSection {
  id: string;
  title: string;
  content: string[];
}

interface LegalPageProps {
  title: string;
  sections: LegalSection[];
}

export function LegalPage({ title, sections }: LegalPageProps) {
  return (
    <article className="py-12 md:py-16">
      <Container size="narrow">
        <FadeIn>
          <p className="type-eyebrow text-muted">Last updated: May 2026</p>
          <h1 className="mt-2 text-display-h1 text-text">{title}</h1>
        </FadeIn>
        <div className="mt-10 space-y-10">
          {sections.map((section, index) => (
            <FadeIn key={section.id} delay={index * 0.05}>
              <section id={section.id} className="scroll-mt-24">
                <h2 className="text-display-h3 text-text">{section.title}</h2>
                <div className="prose-max mt-4 space-y-4 text-body">
                  {section.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </section>
            </FadeIn>
          ))}
        </div>
      </Container>
    </article>
  );
}
