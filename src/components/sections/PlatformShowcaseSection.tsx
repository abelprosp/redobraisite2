"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";

function PlatformMockup() {
  const sidebarItems = ["Dashboard", "Agentes", "Fluxos", "Integrações", "Analytics", "Config"];
  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="absolute -inset-6 bg-gradient-to-b from-brand-100/60 via-teal-100/40 to-white rounded-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative glass-ui rounded-lg overflow-hidden"
      >
        <div className="flex">
          <div className="w-48 bg-gray-50 border-r border-gray-200 p-4 hidden md:block">
            <div className="text-xs font-semibold text-gray-900 mb-4">Redobrai</div>
            <nav className="space-y-1">
              {sidebarItems.map((item, i) => (
                <div
                  key={item}
                  className={`px-3 py-2 text-xs rounded-sm ${
                    i === 1
                      ? "bg-brand-100 text-brand-700 font-medium"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {item}
                </div>
              ))}
            </nav>
          </div>
          <div className="flex-1 p-6 bg-white">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-medium text-gray-900">Central de Agentes</h3>
              <button className="px-3 py-1.5 bg-brand-600 text-white text-xs rounded-sm">
                + Novo Agente
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {["Comercial", "Financeiro", "RH", "Jurídico", "Marketing", "Suporte"].map(
                (agent) => (
                  <div
                    key={agent}
                    className="border border-gray-200 rounded-sm p-3 hover:border-brand-300 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-sm bg-brand-100 flex items-center justify-center text-brand-700 text-xs font-bold mb-2">
                      {agent[0]}
                    </div>
                    <div className="text-xs font-medium text-gray-900">{agent}</div>
                    <div className="text-[10px] text-brand-600 mt-1">● Ativo</div>
                  </div>
                )
              )}
            </div>
            <div className="border border-gray-200 rounded-sm p-4">
              <div className="text-xs text-gray-500 mb-3">Fluxo em execução</div>
              <div className="flex items-center gap-2">
                {["Trigger", "Comercial", "Financeiro", "CRM", "Output"].map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <div
                      className={`px-2 py-1 text-[10px] rounded-sm ${
                        i === 0
                          ? "bg-brand-600 text-white"
                          : "bg-gray-100 text-gray-700 border border-gray-200"
                      }`}
                    >
                      {step}
                    </div>
                    {i < 4 && <span className="text-gray-300">→</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function PlatformShowcaseSection() {
  return (
    <Section id="plataforma" className="bg-gray-50 section-padding-lg">
      <SectionHeader
        title="Opere agentes de IA em escala"
        subtitle="Uma plataforma unificada para criar, orquestrar e monitorar sua força de trabalho baseada em Inteligência Artificial."
        align="center"
      />
      <PlatformMockup />
    </Section>
  );
}
