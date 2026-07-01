"use client";

import { ArrowRight, BookOpen, Users, GraduationCap, Headphones } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const resources = [
  {
    icon: BookOpen,
    title: "Documentação",
    desc: "Guias completos para criar, configurar e publicar seus agentes de IA.",
    link: "Acessar docs",
  },
  {
    icon: Users,
    title: "Comunidade",
    desc: "Conecte-se com outros profissionais e compartilhe melhores práticas.",
    link: "Participar",
  },
  {
    icon: GraduationCap,
    title: "Treinamento",
    desc: "Cursos e certificações para dominar a plataforma Redobrai.",
    link: "Ver cursos",
  },
  {
    icon: Headphones,
    title: "Suporte",
    desc: "Equipe dedicada para empresas com planos enterprise.",
    link: "Falar com suporte",
  },
];

export function ResourcesSection() {
  return (
    <Section className="bg-white">
      <SectionHeader title="Recursos e suporte" align="center" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {resources.map((r, i) => (
          <ScrollReveal key={r.title} delay={i * 0.08}>
            <div className="ibm-card rounded-sm p-6 h-full flex flex-col bg-white">
              <r.icon className="w-5 h-5 text-brand-600 mb-4" strokeWidth={1.5} />
              <h3 className="text-base font-medium text-gray-900 mb-2">{r.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-4">{r.desc}</p>
              <a href="#" className="link-arrow text-sm">
                {r.link}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
