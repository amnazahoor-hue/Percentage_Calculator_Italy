import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { InfoCards } from "@/components/sections/InfoCards";
import { Faq } from "@/components/sections/Faq";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  websiteJsonLd,
  webAppJsonLd,
  faqPageJsonLd,
} from "@/lib/jsonLd";

export default function HomePage() {
  return (
    <>
      <JsonLd data={[websiteJsonLd, webAppJsonLd, faqPageJsonLd]} />
      <Hero />
      <HowItWorks />
      <InfoCards />
      <Faq />
    </>
  );
}
