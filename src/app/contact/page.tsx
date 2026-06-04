import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { FadeIn } from "@/components/ui/FadeIn";
import { JsonLd } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/jsonLd";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact the Percentuale team with questions, feedback, or requests about the online percentage calculator.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <section className="py-12 md:py-16" aria-labelledby="contact-heading">
        <Container size="narrow">
          <FadeIn className="text-center">
            <h1 id="contact-heading" className="text-display-h1 text-text">
              Contact
            </h1>
            <p className="prose-max mx-auto mt-4 text-body">
              Questions about the calculator, suggestions, or legal requests? Fill
              out the form and we will get back to you as soon as we can.
            </p>
          </FadeIn>
          <div className="mt-10">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
