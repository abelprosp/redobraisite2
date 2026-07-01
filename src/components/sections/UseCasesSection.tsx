"use client";

import { motion } from "framer-motion";
import {
  Factory, HardHat, HeartPulse, Building2, Gavel, Calculator, Store, ShoppingBag, Radio, GraduationCap, Truck,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { USE_CASES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Factory, HardHat, HeartPulse, Building2, Gavel, Calculator, Store, ShoppingBag, Radio, GraduationCap, Truck,
};

export function UseCasesSection() {
  return (
    <Section id="casos-de-uso" className="bg-gray-50">
      <SectionHeader title="Casos de Uso" subtitle="A Redobrai se adapta a qualquer setor." align="center" />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {USE_CASES.map((useCase, i) => {
          const Icon = iconMap[useCase.icon];
          return (
            <ScrollReveal key={useCase.name} delay={i * 0.04}>
              <motion.div whileHover={{ y: -2 }} className="ibm-card rounded-sm p-5 text-center bg-white">
                <Icon className="w-5 h-5 text-brand-600 mx-auto mb-3" strokeWidth={1.5} />
                <h3 className="text-gray-900 font-medium text-sm">{useCase.name}</h3>
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
}
