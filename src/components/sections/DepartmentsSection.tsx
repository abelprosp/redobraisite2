"use client";

import { motion } from "framer-motion";
import {
  Wallet, TrendingUp, Megaphone, Users, Scale, Headphones, ShoppingCart, Settings,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DEPARTMENTS } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Wallet, TrendingUp, Megaphone, Users, Scale, Headphones, ShoppingCart, Settings,
};

export function DepartmentsSection() {
  return (
    <Section id="agentes" className="bg-gray-50">
      <SectionHeader
        title="Transforme o trabalho com agentes de IA especializados"
        subtitle="Cada departamento da sua empresa pode ter um funcionário de IA treinado e pronto para operar."
        align="center"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {DEPARTMENTS.map((dept, i) => {
          const Icon = iconMap[dept.icon];
          return (
            <ScrollReveal key={dept.name} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -2 }}
                className="ibm-card rounded-sm p-5 h-full bg-white transition-shadow"
              >
                <Icon className="w-5 h-5 text-brand-600 mb-3" strokeWidth={1.5} />
                <h3 className="text-gray-900 font-medium text-sm mb-1">{dept.name}</h3>
                <p className="text-gray-500 text-xs">{dept.agent}</p>
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
}
