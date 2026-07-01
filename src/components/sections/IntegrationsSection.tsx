"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { INTEGRATIONS } from "@/lib/constants";

const categoryColors: Record<string, string> = {
  comunicação: "#198038",
  produtividade: "#24a148",
  crm: "#08bdba",
  erp: "#0e6027",
  marketing: "#42be65",
  ia: "#198038",
  protocolo: "#6fdc8c",
  banco: "#009d9a",
};

export function IntegrationsSection() {
  return (
    <Section id="integrações" className="bg-white">
      <SectionHeader
        title="Integrações"
        subtitle="Conecte-se a centenas de ferramentas, sistemas e modelos de IA."
        align="center"
      />

      <ScrollReveal>
        <div className="ibm-card rounded-sm p-8 lg:p-10 bg-white">
          <div className="flex flex-wrap justify-center gap-3">
            {INTEGRATIONS.map((integration, i) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                whileHover={{ y: -2 }}
                className="border border-gray-200 rounded-sm px-4 py-2.5 flex items-center gap-2 bg-white hover:border-brand-300 hover:shadow-sm transition-all"
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: categoryColors[integration.category] || "#198038" }}
                />
                <span className="text-sm text-gray-700 font-medium">{integration.name}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <span className="text-2xl font-light text-brand-600">500+</span>
            <span className="text-sm text-gray-600 ml-2">integrações disponíveis</span>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
