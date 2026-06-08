import { LegalPage } from "@/components/layout/LegalPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { withContactEmail } from "@/lib/legal/common";
import { termsSections } from "@/lib/legal/terms";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/jsonLd";

export const metadata = createMetadata({
  title: "Terms and Conditions",
  description:
    "Percentuale terms of use: calculator service, intellectual property, share/export features, liability, and governing law.",
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
      <LegalPage
        title="Terms and Conditions"
        description="Rules for using the Percentuale percentage calculator, website content, share tools, and limitations of liability."
        sections={withContactEmail(termsSections)}
        currentPath="/terms-and-conditions"
      />
    </>
  );
}
