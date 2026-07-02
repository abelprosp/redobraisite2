import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/sections/Hero";
import { OfferingsSection } from "@/components/sections/OfferingsSection";
import { CustomSoftwareSection } from "@/components/sections/CustomSoftwareSection";
import { AgentsSectionIntro } from "@/components/sections/AgentsSectionIntro";
import { ValuePropSection } from "@/components/sections/ValuePropSection";
import { PlatformShowcaseSection } from "@/components/sections/PlatformShowcaseSection";
import { OrchestrationSection } from "@/components/sections/OrchestrationSection";
import { DepartmentsSection } from "@/components/sections/DepartmentsSection";
import { BuilderSection } from "@/components/sections/BuilderSection";
import { MarketplaceSection } from "@/components/sections/MarketplaceSection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { GovernanceSection } from "@/components/sections/GovernanceSection";
import { AnalyticsSection } from "@/components/sections/AnalyticsSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { InitiativesSection } from "@/components/sections/InitiativesSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <OfferingsSection />
      <CustomSoftwareSection />
      <AgentsSectionIntro />
      <ValuePropSection />
      <PlatformShowcaseSection />
      <OrchestrationSection />
      <DepartmentsSection />
      <BuilderSection />
      <MarketplaceSection />
      <IntegrationsSection />
      <GovernanceSection />
      <AnalyticsSection />
      <UseCasesSection />
      <InitiativesSection />
      <FAQSection />
      <CTASection />
    </PageShell>
  );
}
