"use client";

import { motion } from "framer-motion";
import { GripVertical, Wrench, Sparkles, Link2, FileText, Brain, GitBranch, Rocket } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BUILDER_FEATURES } from "@/lib/constants";

const featureIcons = [GripVertical, Wrench, Sparkles, Link2, FileText, Brain, GitBranch, Rocket];

export function BuilderSection() {
  return (
    <Section id="builder" className="bg-white">
      <SectionHeader
        title="Construa Agentes sem programação"
        subtitle="Interface visual intuitiva para criar funcionários de IA especializados em minutos."
        align="center"
      />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <div className="grid grid-cols-2 gap-3">
            {BUILDER_FEATURES.map((feature, i) => {
              const Icon = featureIcons[i];
              return (
                <div
                  key={feature}
                  className="ibm-card rounded-sm p-4 flex items-center gap-3 bg-white"
                >
                  <Icon className="w-4 h-4 text-brand-600 shrink-0" strokeWidth={1.5} />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} direction="right">
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg bg-white">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 bg-gray-50">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-gray-300" />
                <div className="w-2 h-2 rounded-full bg-gray-300" />
                <div className="w-2 h-2 rounded-full bg-gray-300" />
              </div>
              <span className="text-[10px] text-gray-400 font-mono">Agent Builder</span>
            </div>
            <div className="p-4 grid grid-cols-12 gap-3 min-h-[300px]">
              <div className="col-span-3 border border-gray-200 rounded-sm p-2 space-y-2 bg-gray-50">
                <div className="text-[9px] text-gray-500 uppercase px-1">Componentes</div>
                {["Trigger", "LLM", "Tool", "API", "Flow"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-1.5 p-2 rounded-sm bg-white border border-gray-200 text-[10px] text-gray-600"
                  >
                    <GripVertical className="w-3 h-3 text-gray-400" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="col-span-6 border border-gray-200 rounded-sm p-3 bg-white">
                <div className="text-[9px] text-gray-500 uppercase mb-3">Canvas</div>
                <div className="space-y-2">
                  <div className="border-2 border-brand-300 bg-brand-50 rounded-sm p-3">
                    <div className="text-[10px] text-brand-700 font-medium">Agente Comercial</div>
                  </div>
                  <div className="flex justify-center"><div className="w-px h-3 bg-gray-300" /></div>
                  <div className="border border-teal-300 bg-teal-50 rounded-sm p-3">
                    <div className="text-[10px] text-teal-700 font-medium">Conectar CRM</div>
                  </div>
                  <div className="flex justify-center"><div className="w-px h-3 bg-gray-300" /></div>
                  <div className="border border-brand-400 bg-brand-100 rounded-sm p-3">
                    <div className="text-[10px] text-brand-800 font-medium">Publicar</div>
                  </div>
                </div>
              </div>
              <div className="col-span-3 border border-gray-200 rounded-sm p-2 bg-gray-50">
                <div className="text-[9px] text-gray-500 uppercase mb-2">Propriedades</div>
                <div className="space-y-2">
                  <div className="h-6 rounded-sm bg-white border border-gray-200" />
                  <div className="h-6 rounded-sm bg-white border border-gray-200 text-[9px] text-gray-500 flex items-center px-2">
                    GPT-4o
                  </div>
                  <div className="h-1.5 rounded-full bg-gray-200">
                    <div className="h-full w-2/3 rounded-full bg-brand-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
