"use client";

import Link from "next/link";
import { ArrowRight, HeartHandshake, Handshake } from "lucide-react";
import { Section } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const initiatives = [
  {
    icon: HeartHandshake,
    title: "DRedobrai Foundation",
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
      <ScrollReveal className="mb-12 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-normal text-gray-900 tracking-tight">
          Iniciativas Redobrai
        </h2>
        <p className="mt-4 text-gray-600">
          Além do software comercial, investimos em impacto social e parcerias de co-criação.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6">
        {initiatives.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 0.1}>
            <Link href={item.href}>
              <div className={`ibm-card rounded-sm p-8 h-full bg-gradient-to-br ${item.accent} group cursor-pointer hover:shadow-md transition-shadow`}>
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
