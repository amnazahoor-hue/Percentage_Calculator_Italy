import { LegalPage } from "@/components/layout/LegalPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { withContactEmail } from "@/lib/legal/common";
import { disclaimerSections } from "@/lib/legal/disclaimer";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/jsonLd";

export const metadata = createMetadata({
  title: "Disclaimer",
  description:
    "Percentuale disclaimer: calculator limitations, no professional advice, accuracy, share/export use, and third-party links.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Disclaimer", path: "/disclaimer" },
        ])}
      />
      <LegalPage
        title="Disclaimer"
        description="Important limitations on how you should use Percentuale, our free percentage calculator, and the information published on this site."
        sections={withContactEmail(disclaimerSections)}
        currentPath="/disclaimer"
      />
    </>
  );
}
