"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2, Bot, HeartHandshake, Handshake,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { OFFERINGS } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Code2, Bot, HeartHandshake, Handshake,
};

export function OfferingsSection() {
  return (
    <Section className="bg-white">
      <ScrollReveal className="mx-auto mb-9 max-w-3xl text-center sm:mb-12">
        <h2 className="text-[1.75rem] font-normal leading-[1.16] tracking-[-0.025em] text-gray-900 sm:text-3xl lg:text-4xl">
          Tecnologia que transforma negócios e impacta vidas
        </h2>
        <p className="mt-4 text-[15px] leading-6 text-gray-600 sm:text-base sm:leading-relaxed">
          A Redobrai atua em software customizado, inteligência artificial, pesquisa humanitária
          e parcerias estratégicas — tudo com excelência técnica e visão de longo prazo.
        </p>
      </ScrollReveal>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {OFFERINGS.map((item, i) => {
          const Icon = iconMap[item.icon];
          return (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <Link href={item.href}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="ibm-card group h-full cursor-pointer rounded-sm bg-white p-5 sm:p-6"
                >
                  <Icon className="w-5 h-5 text-brand-600 mb-4" strokeWidth={1.5} />
                  <h3 className="text-base font-medium text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              </Link>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
}
