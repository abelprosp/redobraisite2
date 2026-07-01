"use client";

import { motion } from "framer-motion";
import { Bot, ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MARKETPLACE_AGENTS } from "@/lib/constants";

export function MarketplaceSection() {
  return (
    <Section className="bg-gray-50">
      <SectionHeader
        title="Marketplace de Agentes"
        subtitle="Dezenas de agentes pré-configurados prontos para deploy."
        align="center"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {MARKETPLACE_AGENTS.map((agent, i) => (
          <ScrollReveal key={agent.name} delay={i * 0.04}>
            <motion.div whileHover={{ y: -2 }} className="ibm-card rounded-sm p-5 h-full bg-white">
              <div className="flex items-start justify-between mb-3">
                <div className="w-9 h-9 rounded-sm bg-brand-100 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-brand-600" strokeWidth={1.5} />
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-400" />
              </div>
              <h3 className="text-gray-900 font-medium text-sm mb-1">{agent.name}</h3>
              <span className="inline-block text-[10px] text-brand-700 bg-brand-100 px-2 py-0.5 rounded-sm mb-2">
                {agent.category}
              </span>
              <p className="text-gray-500 text-xs leading-relaxed">{agent.tasks}</p>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
