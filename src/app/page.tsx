import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ValuePropSection } from "@/components/sections/ValuePropSection";
import { PlatformShowcaseSection } from "@/components/sections/PlatformShowcaseSection";
import { OrchestrationSection } from "@/components/sections/OrchestrationSection";
import { DemoSection } from "@/components/sections/DemoSection";
import { DepartmentsSection } from "@/components/sections/DepartmentsSection";
import { BuilderSection } from "@/components/sections/BuilderSection";
import { MarketplaceSection } from "@/components/sections/MarketplaceSection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { GovernanceSection } from "@/components/sections/GovernanceSection";
import { AnalyticsSection } from "@/components/sections/AnalyticsSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ValuePropSection />
        <PlatformShowcaseSection />
        <OrchestrationSection />
        <DemoSection />
        <DepartmentsSection />
        <BuilderSection />
        <MarketplaceSection />
        <IntegrationsSection />
        <GovernanceSection />
        <AnalyticsSection />
        <UseCasesSection />
        <ResourcesSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
