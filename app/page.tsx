import { Header } from "./components/Header";
import { RevealInit } from "./components/RevealInit";
import { Hero } from "./components/sections/Hero";
import { Problem } from "./components/sections/Problem";
import { HowItWorks } from "./components/sections/HowItWorks";
import { Features } from "./components/sections/Features";
import { Showcase } from "./components/sections/Showcase";
import { Pricing } from "./components/sections/Pricing";
import { SocialProof } from "./components/sections/SocialProof";
import { CtaBanner } from "./components/sections/CtaBanner";
import { Faq } from "./components/sections/Faq";
import { FinalCta } from "./components/sections/FinalCta";
import { Footer } from "./components/sections/Footer";
import { site } from "@/lib/site";
import { faqItems } from "@/lib/faq";

/* Dados estruturados (SEO) — produto + FAQ pra rich results no Google */
function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: site.name,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: site.description,
        url: site.url,
        offers: [
          {
            "@type": "Offer",
            name: "Essencial",
            price: site.precoEssencial.replace(",", "."),
            priceCurrency: "BRL",
          },
          {
            "@type": "Offer",
            name: "Pro",
            price: site.precoPro.replace(",", "."),
            priceCurrency: "BRL",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <StructuredData />
      <span id="top" />
      <Header />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <Showcase />
        <Pricing />
        <CtaBanner />
        <SocialProof />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <RevealInit />
    </>
  );
}
