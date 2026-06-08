import { LegalPage } from "@/components/layout/LegalPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { withContactEmail } from "@/lib/legal/common";
import { privacySections } from "@/lib/legal/privacy";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/jsonLd";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "How Percentuale collects, uses, and protects your data — calculator privacy, cookies, GDPR rights, and share/export features.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ])}
      />
      <LegalPage
        title="Privacy Policy"
        description="Transparent information about data we collect, how the calculator handles your inputs, cookies, analytics, GDPR rights, and optional share or export features."
        sections={withContactEmail(privacySections)}
        currentPath="/privacy-policy"
      />
    </>
  );
}
