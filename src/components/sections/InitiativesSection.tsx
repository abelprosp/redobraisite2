"use client";

import Link from "next/link";
import { ArrowRight, HeartHandshake, Handshake } from "lucide-react";
import { Section } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const initiatives = [
  {
    icon: HeartHandshake,
    title: "Redobrai Foundation",
    description:
      "Pesquisa com IA para ajuda humanitária em catástrofes de cheias — detecção precoce, mapeamento e coordenação de resgate.",
    href: "/foundation",
    cta: "Conhecer a Foundation",
    accent: "from-brand-50 to-teal-100",
  },
  {
    icon: Handshake,
    title: "Redobrai Partner",
    description:
      "Tem uma ideia? Entramos como sócios — co-criamos produtos digitais com nossa engenharia, IA e mentoria estratégica.",
    href: "/partner",
    cta: "Seja um Partner",
    accent: "from-gray-50 to-brand-50",
  },
];

export function InitiativesSection() {
  return (
    <Section className="bg-gray-50">
      <ScrollReveal className="mx-auto mb-9 max-w-3xl text-center sm:mb-12">
        <h2 className="text-[1.75rem] font-normal leading-[1.16] tracking-[-0.025em] text-gray-900 md:text-3xl">
          Iniciativas Redobrai
        </h2>
        <p className="mt-4 text-gray-600">
          Além do software comercial, investimos em impacto social e parcerias de co-criação.
        </p>
      </ScrollReveal>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {initiatives.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 0.1}>
            <Link href={item.href}>
              <div className={`ibm-card h-full rounded-sm bg-gradient-to-br p-5 sm:p-8 ${item.accent} group cursor-pointer transition-shadow hover:shadow-md`}>
                <item.icon className="w-6 h-6 text-brand-600 mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">{item.description}</p>
                <span className="link-arrow text-sm">
                  {item.cta}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
