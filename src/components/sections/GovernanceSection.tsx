"use client";

import { motion } from "framer-motion";
import {
  KeyRound, FileSearch, ScrollText, UserCog, ShieldCheck, GitCommit, Eye, Shield, BadgeCheck,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GOVERNANCE } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  KeyRound, FileSearch, ScrollText, UserCog, ShieldCheck, GitCommit, Eye, Shield, BadgeCheck,
};

export function GovernanceSection() {
  return (
    <Section className="bg-gray-50">
      <SectionHeader
        title="Governança Empresarial"
        subtitle="Segurança, compliance e controle total para operações de IA em escala corporativa."
        align="center"
      />

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {GOVERNANCE.map((item, i) => {
          const Icon = iconMap[item.icon];
          return (
            <ScrollReveal key={item.title} delay={i * 0.05}>
              <motion.div whileHover={{ y: -2 }} className="ibm-card h-full rounded-sm bg-white p-4 text-center sm:p-6">
                <Icon className="w-5 h-5 text-brand-600 mx-auto mb-3" strokeWidth={1.5} />
                <h3 className="text-gray-900 font-medium text-sm">{item.title}</h3>
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
}
