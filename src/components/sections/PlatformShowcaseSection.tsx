"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";

function PlatformMockup() {
  const sidebarItems = ["Dashboard", "Agentes", "Fluxos", "Integrações", "Analytics", "Config"];
  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="absolute -inset-3 rounded-2xl bg-gradient-to-b from-brand-100/60 via-teal-100/40 to-white sm:-inset-6 sm:rounded-3xl" />
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
          <div className="min-w-0 flex-1 bg-white p-3 min-[380px]:p-4 sm:p-6">
            <div className="mb-5 flex flex-col items-start gap-3 min-[380px]:flex-row min-[380px]:items-center min-[380px]:justify-between sm:mb-6">
              <h3 className="text-sm font-medium text-gray-900">Central de Agentes</h3>
              <button className="min-h-10 rounded-sm bg-brand-600 px-3 py-1.5 text-xs text-white">
                + Novo Agente
              </button>
            </div>
            <div className="mb-5 grid grid-cols-2 gap-2 min-[480px]:grid-cols-3 sm:mb-6 sm:gap-3">
              {["Comercial", "Financeiro", "RH", "Jurídico", "Marketing", "Suporte"].map(
                (agent) => (
                  <div
                    key={agent}
                    className="min-w-0 rounded-sm border border-gray-200 p-2.5 transition-colors hover:border-brand-300 sm:p-3"
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
            <div className="rounded-sm border border-gray-200 p-3 sm:p-4">
              <div className="text-xs text-gray-500 mb-3">Fluxo em execução</div>
              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:justify-start sm:gap-2">
                {["Trigger", "Comercial", "Financeiro", "CRM", "Output"].map((step, i) => (
                  <div key={step} className="flex items-center gap-1.5 sm:gap-2">
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
