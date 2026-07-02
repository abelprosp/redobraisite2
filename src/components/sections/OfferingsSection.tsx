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
      <ScrollReveal className="mb-12 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-900 tracking-tight leading-snug">
          Tecnologia que transforma negócios e impacta vidas
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          A Redobrai atua em software customizado, inteligência artificial, pesquisa humanitária
          e parcerias estratégicas — tudo com excelência técnica e visão de longo prazo.
        </p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {OFFERINGS.map((item, i) => {
          const Icon = iconMap[item.icon];
          return (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <Link href={item.href}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="ibm-card rounded-sm p-6 h-full bg-white group cursor-pointer"
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
