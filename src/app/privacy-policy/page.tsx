import { LegalPage } from "@/components/layout/LegalPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { privacySections } from "@/lib/legal/privacy";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/jsonLd";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Percentuale privacy policy: data collected, cookies, GDPR, Google Analytics, and Microsoft Clarity.",
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
      <LegalPage title="Privacy Policy" sections={privacySections} />
    </>
  );
}
