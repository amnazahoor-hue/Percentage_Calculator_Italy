import { LegalPage } from "@/components/layout/LegalPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { termsSections } from "@/lib/legal/terms";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/jsonLd";

export const metadata = createMetadata({
  title: "Terms and Conditions",
  description:
    "Percentuale terms of use: intellectual property, liability limitations, and applicable law.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Terms and Conditions", path: "/terms-and-conditions" },
        ])}
      />
      <LegalPage title="Terms and Conditions" sections={termsSections} />
    </>
  );
}
