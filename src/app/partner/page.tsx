import { PageShell } from "@/components/layout/PageShell";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { PARTNER_BENEFITS, PARTNER_STEPS } from "@/lib/constants";
import {
  Code2, Lightbulb, Server, Scale,
  type LucideIcon,
} from "lucide-react";
import type { Metadata } from "next";

const iconMap: Record<string, LucideIcon> = { Code2, Lightbulb, Server, Scale };

export const metadata: Metadata = {
  title: "Redobrai Partner — Entramos como sócios na sua ideia",
  description:
    "Programa de parceria da Redobrai: co-criamos produtos digitais com engenharia, IA e mentoria estratégica.",
};

export default function PartnerPage() {
  return (
    <PageShell>
      <section className="gradient-bg-hero pb-12 pt-24 sm:pb-16 sm:pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl">
            <span className="inline-block mb-4 px-3 py-1 rounded-sm text-xs font-medium tracking-wider uppercase bg-brand-100 text-brand-700">
              Co-criação
            </span>
            <h1 className="text-[2.25rem] font-light leading-tight tracking-[-0.035em] text-gray-900 sm:text-4xl md:text-5xl">
              Redobrai{" "}
              <span className="text-brand-600 font-normal">Partner</span>
            </h1>
            <p className="mt-5 text-[15px] leading-6 text-gray-600 sm:mt-6 sm:text-lg sm:leading-relaxed">
              Tem uma ideia transformadora? Entramos como sócios — oferecemos engenharia,
              inteligência artificial e mentoria estratégica para construir o produto juntos.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Section className="bg-white">
        <SectionHeader
          title="O que oferecemos como sócios"
          subtitle="Mais do que investimento — entregamos capacidade técnica real para tirar sua ideia do papel."
          align="center"
        />

        <div className="mb-14 grid gap-4 sm:mb-20 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {PARTNER_BENEFITS.map((b, i) => {
            const Icon = iconMap[b.icon];
            return (
              <ScrollReveal key={b.title} delay={i * 0.08}>
                <div className="ibm-card h-full rounded-sm bg-white p-5 sm:p-6">
                  <Icon className="w-5 h-5 text-brand-600 mb-3" strokeWidth={1.5} />
                  <h3 className="text-sm font-medium text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{b.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <SectionHeader title="Como funciona" align="center" />

        <div className="mx-auto grid max-w-5xl gap-8 min-[420px]:grid-cols-2 min-[420px]:gap-6 lg:grid-cols-4">
          {PARTNER_STEPS.map((s, i) => (
            <ScrollReveal key={s.step} delay={i * 0.1}>
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-700 font-medium text-sm flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">{s.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-normal text-gray-900 tracking-tight">
            Pronto para construir algo grande juntos?
          </h2>
          <p className="mt-4 text-gray-600">
            Envie sua ideia e nossa equipe avaliará a oportunidade de parceria.
          </p>
          <div className="mt-8">
            <Button href="/#contato" size="lg" className="w-full min-[420px]:w-auto">
              Enviar minha ideia
            </Button>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
