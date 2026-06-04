import { LegalPage } from "@/components/layout/LegalPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { disclaimerSections } from "@/lib/legal/disclaimer";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/jsonLd";

export const metadata = createMetadata({
  title: "Disclaimer",
  description:
    "Percentuale general disclaimer: use of the tool, liability limitations, and legal information.",
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
      <LegalPage title="Disclaimer" sections={disclaimerSections} />
    </>
  );
}
