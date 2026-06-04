import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { JsonLd } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/jsonLd";
import { Target, Users, Zap } from "lucide-react";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about Percentuale: a reliable, free online percentage calculator built for students and professionals.",
  path: "/about-us",
});

const values = [
  {
    icon: Target,
    title: "Accuracy First",
    text: "Every formula follows standard math and is tested on real use cases, with clear explanations in plain English.",
  },
  {
    icon: Zap,
    title: "Speed And Simplicity",
    text: "No sign-up, no download. Open the site, enter your numbers, and get a result in under a second.",
  },
  {
    icon: Users,
    title: "For Everyone",
    text: "Students, teachers, retailers, analysts, and casual users get an accessible, mobile-friendly interface.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about-us" },
        ])}
      />
      <article className="py-12 md:py-16">
        <Container>
          <FadeIn>
            <h1 className="text-display-h1 text-text">About Us</h1>
            <p className="prose-max mt-6 text-body">
              Percentuale was built to offer a modern, free, and trustworthy web
              tool for the most common percentage calculations — without intrusive
              ads, without barriers, and with a steady focus on accessibility,
              privacy, and user experience.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-12">
            <h2 className="text-display-h2 text-text">Our Mission</h2>
            <p className="prose-max mt-4 text-body">
              Make percentage math instant and understandable for everyone. We
              believe a useful tool should be fast to use, transparent about its
              formulas, and respectful of personal data. That is why we always show
              the formula applied next to the result and keep our legal pages clear
              and up to date.
            </p>
            <p className="prose-max mt-4 text-body">
              The team behind Percentuale combines web development, interface
              design, and digital communication. We use a modern stack (Next.js,
              React, TypeScript) to deliver strong performance, mobile compatibility,
              and alignment with SEO and accessibility best practices (WCAG).
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((item, i) => (
              <FadeIn key={item.title} delay={0.15 + i * 0.05}>
                <Card hover padding="lg" className="h-full">
                  <item.icon
                    className="h-8 w-8 text-primary"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 text-display-h3 text-text">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-body">{item.text}</p>
                </Card>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2} className="mt-12">
            <h2 className="text-display-h2 text-text">
              Why You Can Trust Our Tool
            </h2>
            <p className="prose-max mt-4 text-body">
              We follow E-E-A-T principles (Experience, Expertise, Authoritativeness,
              Trustworthiness) recommended for quality web content: hands-on use of
              the calculator, sound math, transparency about how it works, and
              complete legal pages.
            </p>
            <p className="prose-max mt-4 text-body">
              We do not sell your calculation data and do not require an account to
              use the calculator. For aggregate traffic analysis we only use tools
              configured by the site administrator, as documented in the Privacy
              Policy. For feedback or reports, the Contact form is always available.
            </p>
          </FadeIn>
        </Container>
      </article>
    </>
  );
}
