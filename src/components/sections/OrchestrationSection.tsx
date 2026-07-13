"use client";

import { motion } from "framer-motion";
import { ArrowDown, Zap, Bot, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ORCHESTRATION_STEPS } from "@/lib/constants";

function DarkControlPanel() {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-gray-950">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-gray-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-gray-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-gray-700" />
        </div>
        <span className="text-[10px] text-gray-500 font-mono ml-2">orchestrator.config</span>
      </div>
      <div className="p-5 space-y-4 font-mono text-xs">
        <div className="text-gray-500">{"// Configuração do fluxo"}</div>
        <div>
          <span className="text-brand-400">agent</span>
          <span className="text-gray-400">: </span>
          <span className="text-white">&quot;comercial&quot;</span>
        </div>
        <div>
          <span className="text-brand-400">trigger</span>
          <span className="text-gray-400">: </span>
          <span className="text-white">&quot;orcamento_solicitado&quot;</span>
        </div>
        <div>
          <span className="text-brand-400">chain</span>
          <span className="text-gray-400">: [</span>
        </div>
        <div className="pl-4 space-y-1">
          {["financeiro", "juridico", "crm"].map((a) => (
            <div key={a} className="text-teal-400">&quot;{a}&quot;,</div>
          ))}
        </div>
        <div className="text-gray-400">]</div>
        <div className="pt-2 border-t border-gray-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
            <span className="text-gray-400">Status: </span>
            <span className="text-brand-400">executando</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function OrchestrationSection() {
  const features = [
  {
    title: "Crie agentes especializados",
    desc: "Configure funcionários de IA para cada departamento com personalidade, ferramentas e conhecimento específico.",
  },
  {
    title: "Orquestre fluxos completos",
    desc: "Coordene múltiplos agentes que colaboram automaticamente em processos de ponta a ponta.",
  },
  {
    title: "Controle e monitore tudo",
    desc: "Acompanhe cada decisão, execução e resultado com logs, auditoria e analytics em tempo real.",
  },
];

  return (
    <Section id="soluções" className="bg-white">
      <div className="grid items-start gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-20">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-900 leading-snug tracking-tight mb-8">
            Crie, orquestre e controle agentes de IA
          </h2>
          <div className="space-y-6">
            {features.map((f) => (
              <div key={f.title} className="border-l-2 border-brand-600 pl-5">
                <h3 className="text-base font-medium text-gray-900 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15} direction="right">
          <DarkControlPanel />
        </ScrollReveal>
      </div>

      <div className="mt-14 sm:mt-20">
        <h3 className="mb-7 text-center text-lg font-normal text-gray-900 sm:mb-10 sm:text-xl">
          Exemplo de orquestração em ação
        </h3>
        <div className="max-w-xl mx-auto space-y-0">
          {ORCHESTRATION_STEPS.map((step, i) => (
            <div key={step.label}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex items-center gap-3 rounded-sm border p-3 sm:gap-4 sm:p-4 ${
                  step.type === "trigger"
                    ? "bg-brand-50 border-brand-200"
                    : step.type === "result"
                      ? "bg-brand-100 border-brand-300"
                      : "ibm-card"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-sm flex items-center justify-center shrink-0 ${
                    step.type === "result" ? "bg-brand-600" : "bg-brand-100"
                  }`}
                >
                  {step.type === "trigger" && <Zap className="w-4 h-4 text-brand-600" />}
                  {step.type === "agent" && <Bot className="w-4 h-4 text-brand-600" />}
                  {step.type === "result" && <CheckCircle2 className="w-4 h-4 text-white" />}
                </div>
                <span className="text-sm text-gray-900 font-medium">{step.label}</span>
              </motion.div>
              {i < ORCHESTRATION_STEPS.length - 1 && (
                <div className="flex justify-center py-1">
                  <ArrowDown className="w-4 h-4 text-brand-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
