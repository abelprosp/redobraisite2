import {
  ArrowUpRight,
  Bot,
  Boxes,
  BrainCircuit,
  Braces,
  ChartNoAxesCombined,
  CloudCog,
  Code2,
  Database,
  Factory,
  FileSearch,
  Headphones,
  MessageCircle,
  Network,
  ScanEye,
  ShieldCheck,
  ShoppingCart,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type Solution = {
  name: string;
  description: string;
  icon: LucideIcon;
  monogram?: string;
};

const solutionRows: Solution[][] = [
  [
    { name: "Claude Code", description: "Engenharia assistida", icon: Code2, monogram: "C" },
    { name: "GPT", description: "IA generativa", icon: BrainCircuit, monogram: "GPT" },
    { name: "WhatsApp", description: "Atendimento inteligente", icon: MessageCircle },
    { name: "MCP", description: "Contexto conectado", icon: Network, monogram: "MCP" },
    { name: "Visão Computacional", description: "Análise de imagens", icon: ScanEye },
    { name: "Agentes de IA", description: "Execução autônoma", icon: Bot },
    { name: "Automação", description: "Fluxos de ponta a ponta", icon: Workflow },
    { name: "APIs & Webhooks", description: "Integrações sob medida", icon: Braces },
    { name: "Cloud & DevOps", description: "Operação escalável", icon: CloudCog },
  ],
  [
    { name: "CRM", description: "Relacionamento e vendas", icon: ChartNoAxesCombined, monogram: "CRM" },
    { name: "ERP", description: "Gestão integrada", icon: Boxes, monogram: "ERP" },
    { name: "Dados & BI", description: "Decisões em tempo real", icon: Database },
    { name: "Indústria 4.0", description: "Operações conectadas", icon: Factory },
    { name: "Documentos", description: "Leitura e extração", icon: FileSearch },
    { name: "Cibersegurança", description: "Proteção e governança", icon: ShieldCheck },
    { name: "Customer Success", description: "Suporte que antecipa", icon: Headphones },
    { name: "E-commerce", description: "Jornadas inteligentes", icon: ShoppingCart },
  ],
];

function SolutionCard({ solution }: { solution: Solution }) {
  const Icon = solution.icon;

  return (
    <div className="group flex w-[202px] shrink-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.075] p-3 shadow-[0_14px_35px_rgba(0,0,0,0.12)] backdrop-blur-sm transition-colors duration-300 hover:border-emerald-300/35 hover:bg-white/[0.12] sm:w-[244px] sm:gap-3.5 sm:rounded-2xl sm:p-4">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white text-[#123f34] shadow-sm sm:size-12">
        {solution.monogram ? (
          <span className="text-[11px] font-bold tracking-[-0.02em]">{solution.monogram}</span>
        ) : (
          <Icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
        )}
      </span>
      <span className="min-w-0">
        <span className="block truncate text-sm font-semibold text-white">{solution.name}</span>
        <span className="mt-1 block truncate text-[11px] text-emerald-50/60">
          {solution.description}
        </span>
      </span>
    </div>
  );
}

function SolutionRow({
  solutions,
  reverse = false,
}: {
  solutions: Solution[];
  reverse?: boolean;
}) {
  return (
    <div className="solution-row">
      <div className={`solution-track ${reverse ? "solution-track-reverse" : ""}`}>
        {[false, true].map((duplicate) => (
          <div
            key={duplicate ? "duplicate" : "original"}
            className="solution-group"
            aria-hidden={duplicate || undefined}
          >
            {solutions.map((solution) => (
              <SolutionCard key={solution.name} solution={solution} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function IntegrationsSection() {
  return (
    <section id="integrações" className="bg-white px-3 py-5 sm:px-6 sm:py-10 lg:px-8">
      <div className="solutions-grid relative mx-auto max-w-[1500px] overflow-hidden rounded-[1.5rem] bg-[#103b32] py-12 shadow-[0_32px_90px_-42px_rgba(9,47,39,0.65)] sm:rounded-[2rem] sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(111,220,140,0.14),transparent_38%),linear-gradient(180deg,transparent_55%,rgba(3,24,20,0.22))]" />

        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100/15 bg-white/[0.07] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-100/80">
            <span className="size-1.5 rounded-full bg-emerald-300" />
            Ecossistema Redobra AI
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl text-[1.75rem] font-medium leading-[1.1] tracking-[-0.04em] text-white sm:mt-6 sm:text-4xl lg:text-5xl">
            Sua operação conectada a tudo que faz o negócio avançar.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-emerald-50/65 sm:text-base sm:leading-7">
            Unimos inteligência artificial, software e os sistemas que sua equipe já usa
            para automatizar processos sem interromper a rotina.
          </p>
          <a
            href="#contato"
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-emerald-200/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#103b32] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
          >
            Desenhar minha solução
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div
          className="solutions-marquee relative z-10 mt-10 space-y-3 sm:mt-16 sm:space-y-5"
          aria-label="Soluções e tecnologias Redobra AI"
        >
          <SolutionRow solutions={solutionRows[0]} />
          <SolutionRow solutions={solutionRows[1]} reverse />
        </div>
      </div>
    </section>
  );
}
