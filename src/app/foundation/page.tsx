import { PageShell } from "@/components/layout/PageShell";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { FOUNDATION_PILLARS } from "@/lib/constants";
import {
  Waves, Map, Radio, BookOpen,
  type LucideIcon,
} from "lucide-react";
import type { Metadata } from "next";

const iconMap: Record<string, LucideIcon> = { Waves, Map, Radio, BookOpen };

export const metadata: Metadata = {
  title: "DRedobrai Foundation — IA para ajuda humanitária em catástrofes",
  description:
    "Pesquisa com Inteligência Artificial para ajuda humanitária em catástrofes de cheias e desastres naturais.",
};

export default function FoundationPage() {
  return (
    <PageShell>
      <section className="pt-28 pb-16 gradient-bg-hero">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl">
            <span className="inline-block mb-4 px-3 py-1 rounded-sm text-xs font-medium tracking-wider uppercase bg-brand-100 text-brand-700">
              Impacto Social
            </span>
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight leading-tight">
              DRedobrai{" "}
              <span className="text-brand-600 font-normal">Foundation</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Desenvolvemos pesquisas com Inteligência Artificial para ajuda humanitária
              em catástrofes de cheias e desastres naturais — salvando vidas com tecnologia
              de ponta e propósito.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-normal text-gray-900 tracking-tight leading-snug">
              Quando a água sobe, a tecnologia precisa agir antes
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Milhões de pessoas são afetadas por enchentes todos os anos no Brasil.
              A DRedobrai Foundation une visão computacional, modelos preditivos e
              sistemas de coordenação para dar mais tempo às comunidades e às equipes
              de resgate.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Alertas antecipados baseados em dados de satélite e sensores",
                "Mapeamento automático de áreas inundadas via imagens aéreas",
                "Plataforma de coordenação entre voluntários e abrigos",
                "Pesquisa aberta para universidades e ONGs parceiras",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.15} direction="right">
            <div className="relative rounded-lg overflow-hidden border border-gray-200 aspect-[4/3] bg-gradient-to-br from-brand-700 via-brand-600 to-teal-600 flex items-center justify-center">
              <div className="text-center p-8 text-white">
                <Waves className="w-12 h-12 mx-auto mb-4 opacity-80" strokeWidth={1.5} />
                <p className="text-lg font-light">IA a serviço da vida</p>
                <p className="text-sm opacity-70 mt-2">Pesquisa · Resgate · Esperança</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <SectionHeader
          title="Áreas de pesquisa"
          subtitle="Foco em tecnologias que fazem diferença real no momento da catástrofe."
          align="center"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FOUNDATION_PILLARS.map((pillar, i) => {
            const Icon = iconMap[pillar.icon];
            return (
              <ScrollReveal key={pillar.title} delay={i * 0.08}>
                <div className="ibm-card rounded-sm p-6 bg-white h-full">
                  <Icon className="w-5 h-5 text-brand-600 mb-3" strokeWidth={1.5} />
                  <h3 className="text-sm font-medium text-gray-900 mb-2">{pillar.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{pillar.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-normal text-gray-900 tracking-tight">
            Quer apoiar ou colaborar com a pesquisa?
          </h2>
          <p className="mt-4 text-gray-600">
            ONGs, universidades, voluntários e empresas podem se juntar à DRedobrai Foundation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/#contato" size="lg">
              Entrar em contato
            </Button>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
