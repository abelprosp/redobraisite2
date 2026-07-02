import { Section } from "@/components/ui/SectionHeader";

export function AgentsSectionIntro() {
  return (
    <div id="agentes" className="scroll-mt-24 bg-white border-t border-gray-200">
      <Section className="!pb-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block mb-4 px-3 py-1 rounded-sm text-xs font-medium tracking-wider uppercase bg-brand-100 text-brand-700">
            Agentes de IA
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-900 tracking-tight leading-snug">
            O Sistema Operacional para Empresas movidas por Inteligência Artificial
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Crie, conecte, orquestre e monitore funcionários de IA especializados que
            executam processos completos, colaboram entre si e transformam a produtividade
            da sua empresa.
          </p>
        </div>
      </Section>
    </div>
  );
}
