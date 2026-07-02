export type NavChild = { label: string; href: string };

export type NavLink =
  | { label: string; href: string; children?: never }
  | { label: string; children: NavChild[]; href?: never };

export const NAV_LINKS: NavLink[] = [
  {
    label: "Soluções",
    children: [
      { label: "Software Customizado", href: "/#custom" },
      { label: "Visão Computacional", href: "/#visao-computacional" },
      { label: "Agentes de IA", href: "/#agentes" },
    ],
  },
  { label: "DRedobrai Foundation", href: "/foundation" },
  { label: "Redobrai Partner", href: "/partner" },
  { label: "Contato", href: "/#contato" },
];

export const OFFERINGS = [
  {
    title: "Software Customizado",
    description:
      "Desenvolvemos sistemas sob medida para empresas — do planejamento à entrega, com arquitetura escalável e foco no seu negócio.",
    href: "/#custom",
    icon: "Code2",
  },
  {
    title: "Agentes de IA",
    description:
      "Plataforma para criar, orquestrar e monitorar funcionários de Inteligência Artificial que executam processos completos.",
    href: "/#agentes",
    icon: "Bot",
  },
  {
    title: "DRedobrai Foundation",
    description:
      "Pesquisa com IA para ajuda humanitária em catástrofes de cheias e desastres naturais.",
    href: "/foundation",
    icon: "HeartHandshake",
  },
  {
    title: "Redobrai Partner",
    description:
      "Entramos como sócios nas suas ideias — co-criamos, investimos conhecimento e tecnologia no seu projeto.",
    href: "/partner",
    icon: "Handshake",
  },
];

export const CUSTOM_SERVICES = [
  {
    title: "Sistemas sob medida",
    description: "ERPs, portais, integrações e plataformas desenvolvidas para a realidade da sua operação.",
    icon: "Layers",
  },
  {
    title: "Integrações & APIs",
    description: "Conectamos seus sistemas legados a ferramentas modernas com APIs robustas e seguras.",
    icon: "Plug",
  },
  {
    title: "Modernização de legado",
    description: "Migração gradual de sistemas antigos para arquiteturas cloud-native sem parar a operação.",
    icon: "RefreshCw",
  },
  {
    title: "Consultoria técnica",
    description: "Arquitetura, code review, definição de stack e acompanhamento de squads de desenvolvimento.",
    icon: "Users",
  },
];

export const COMPUTER_VISION = [
  {
    title: "Inspeção visual automatizada",
    description: "Detecção de defeitos, classificação de produtos e controle de qualidade em linha de produção.",
    icon: "ScanEye",
  },
  {
    title: "Monitoramento por câmeras",
    description: "Análise de vídeo em tempo real para segurança, contagem de pessoas e detecção de eventos.",
    icon: "Cctv",
  },
  {
    title: "OCR & documentos",
    description: "Leitura inteligente de notas fiscais, contratos e formulários com extração estruturada de dados.",
    icon: "FileSearch",
  },
  {
    title: "Drones & imagens aéreas",
    description: "Processamento de imagens de drones para agricultura, obras, logística e mapeamento territorial.",
    icon: "Plane",
  },
];

export const FOUNDATION_PILLARS = [
  {
    title: "Detecção precoce de cheias",
    description: "Modelos de IA analisam dados de satélite, sensores e histórico para alertar comunidades em risco.",
    icon: "Waves",
  },
  {
    title: "Mapeamento de áreas afetadas",
    description: "Visão computacional identifica regiões inundadas e prioriza rotas de resgate e evacuação.",
    icon: "Map",
  },
  {
    title: "Coordenação de resgate",
    description: "Sistemas que conectam voluntários, abrigos e equipes de emergência em tempo real.",
    icon: "Radio",
  },
  {
    title: "Pesquisa aberta",
    description: "Desenvolvemos tecnologia com foco em impacto social, publicando avanços para a comunidade científica.",
    icon: "BookOpen",
  },
];

export const PARTNER_BENEFITS = [
  {
    title: "Co-fundação técnica",
    description: "Entramos com engenharia, arquitetura e desenvolvimento como sócios do seu produto digital.",
    icon: "Code2",
  },
  {
    title: "Mentoria & estratégia",
    description: "Acesso à experiência da Redobrai em IA, software enterprise e go-to-market B2B.",
    icon: "Lightbulb",
  },
  {
    title: "Infraestrutura de IA",
    description: "Utilize nossa stack de agentes, visão computacional e integrações no seu projeto.",
    icon: "Server",
  },
  {
    title: "Modelo flexível",
    description: "Equity, revenue share ou híbrido — estruturamos a parceria de acordo com a fase da sua ideia.",
    icon: "Scale",
  },
];

export const PARTNER_STEPS = [
  { step: "01", title: "Envie sua ideia", desc: "Conte o problema que quer resolver e o estágio do projeto." },
  { step: "02", title: "Avaliação conjunta", desc: "Analisamos viabilidade técnica, mercado e fit com a Redobrai." },
  { step: "03", title: "Estruturação", desc: "Definimos papéis, equity e roadmap de desenvolvimento." },
  { step: "04", title: "Co-criação", desc: "Construímos juntos com nossa equipe integrada ao seu time." },
];

// --- Agentes (mantido) ---

export const DEPARTMENTS = [
  { name: "Financeiro", icon: "Wallet", color: "#198038", agent: "Agente Financeiro" },
  { name: "Vendas", icon: "TrendingUp", color: "#24a148", agent: "Agente Comercial" },
  { name: "Marketing", icon: "Megaphone", color: "#42be65", agent: "Agente Marketing" },
  { name: "RH", icon: "Users", color: "#0e6027", agent: "Agente RH" },
  { name: "Jurídico", icon: "Scale", color: "#08bdba", agent: "Agente Jurídico" },
  { name: "Atendimento", icon: "Headphones", color: "#6fdc8c", agent: "Agente Suporte" },
  { name: "Compras", icon: "ShoppingCart", color: "#009d9a", agent: "Agente Compras" },
  { name: "Operações", icon: "Settings", color: "#198038", agent: "Agente Operações" },
];

export const PLATFORM_MODULES = [
  {
    title: "Builder de Agentes",
    description: "Crie funcionários de IA especializados com interface visual, sem código.",
    icon: "Blocks",
  },
  {
    title: "Orquestrador Inteligente",
    description: "Coordene múltiplos agentes que colaboram e tomam decisões em conjunto.",
    icon: "Network",
  },
  {
    title: "Central de Fluxos",
    description: "Automatize processos completos com fluxos visuais e triggers inteligentes.",
    icon: "GitBranch",
  },
  {
    title: "Monitoramento",
    description: "Acompanhe cada ação, decisão e execução em tempo real.",
    icon: "Activity",
  },
  {
    title: "Base de Conhecimento",
    description: "Treine agentes com documentos, políticas e dados da sua empresa.",
    icon: "BookOpen",
  },
  {
    title: "Gestão de Permissões",
    description: "Controle granular de acesso por departamento, agente e usuário.",
    icon: "Shield",
  },
  {
    title: "Analytics",
    description: "Métricas de produtividade, ROI e performance de cada agente.",
    icon: "BarChart3",
  },
  {
    title: "Governança",
    description: "Compliance, auditoria e versionamento para ambientes enterprise.",
    icon: "Lock",
  },
];

export const ORCHESTRATION_STEPS = [
  { label: "Cliente solicita orçamento", type: "trigger" },
  { label: "Agente Comercial", type: "agent" },
  { label: "Agente Financeiro", type: "agent" },
  { label: "Agente Jurídico", type: "agent" },
  { label: "Agente CRM", type: "agent" },
  { label: "Resposta enviada automaticamente", type: "result" },
];

export const BUILDER_FEATURES = [
  "Drag and Drop",
  "Adicionar ferramentas",
  "Definir personalidade",
  "Conectar APIs",
  "Adicionar documentos",
  "Treinar conhecimento",
  "Criar fluxos",
  "Publicar",
];

export const MARKETPLACE_AGENTS = [
  { name: "Agente SDR", category: "Vendas", tasks: "Prospecção · Qualificação · Follow-up" },
  { name: "Agente Financeiro", category: "Financeiro", tasks: "Conciliação · Cobrança · Relatórios" },
  { name: "Agente RH", category: "Recursos Humanos", tasks: "Onboarding · Folha · Benefícios" },
  { name: "Agente Atendimento", category: "Suporte", tasks: "Tickets · SLA · Resolução" },
  { name: "Agente Marketing", category: "Marketing", tasks: "Campanhas · Conteúdo · Analytics" },
  { name: "Agente Compras", category: "Compras", tasks: "Cotações · Fornecedores · Pedidos" },
  { name: "Agente Jurídico", category: "Jurídico", tasks: "Contratos · Compliance · Análise" },
  { name: "Agente Estoque", category: "Operações", tasks: "Inventário · Reposição · Logística" },
  { name: "Agente BI", category: "Dados", tasks: "Dashboards · Insights · Previsões" },
  { name: "Agente CEO", category: "Executivo", tasks: "KPIs · Estratégia · Relatórios" },
];

export const INTEGRATIONS = [
  { name: "WhatsApp", category: "comunicação" },
  { name: "Microsoft 365", category: "produtividade" },
  { name: "Google Workspace", category: "produtividade" },
  { name: "Slack", category: "comunicação" },
  { name: "Teams", category: "comunicação" },
  { name: "Salesforce", category: "crm" },
  { name: "HubSpot", category: "crm" },
  { name: "SAP", category: "erp" },
  { name: "Oracle", category: "erp" },
  { name: "Totvs", category: "erp" },
  { name: "RD Station", category: "marketing" },
  { name: "Pipedrive", category: "crm" },
  { name: "OpenAI", category: "ia" },
  { name: "Anthropic", category: "ia" },
  { name: "Google Gemini", category: "ia" },
  { name: "Claude", category: "ia" },
  { name: "DeepSeek", category: "ia" },
  { name: "MCP", category: "protocolo" },
  { name: "APIs REST", category: "protocolo" },
  { name: "Webhooks", category: "protocolo" },
  { name: "PostgreSQL", category: "banco" },
  { name: "MySQL", category: "banco" },
  { name: "MongoDB", category: "banco" },
  { name: "SQL Server", category: "banco" },
];

export const GOVERNANCE = [
  { title: "Controle de acesso", icon: "KeyRound" },
  { title: "Auditoria", icon: "FileSearch" },
  { title: "Logs", icon: "ScrollText" },
  { title: "Permissões", icon: "UserCog" },
  { title: "LGPD", icon: "ShieldCheck" },
  { title: "Versionamento", icon: "GitCommit" },
  { title: "Monitoramento", icon: "Eye" },
  { title: "Segurança", icon: "Shield" },
  { title: "Compliance", icon: "BadgeCheck" },
];

export const ANALYTICS_METRICS = [
  { label: "Tarefas executadas", value: "2.4M", change: "+34%" },
  { label: "Economia de horas", value: "18.7K", change: "+28%" },
  { label: "ROI médio", value: "340%", change: "+12%" },
  { label: "Agentes ativos", value: "1.247", change: "+56%" },
  { label: "Tempo economizado", value: "94%", change: "+8%" },
  { label: "Chamadas API", value: "8.2M", change: "+41%" },
  { label: "Fluxos executados", value: "456K", change: "+22%" },
  { label: "Precisão média", value: "97.3%", change: "+3%" },
];

export const USE_CASES = [
  { name: "Indústria", icon: "Factory" },
  { name: "Construtoras", icon: "HardHat" },
  { name: "Hospitais", icon: "HeartPulse" },
  { name: "Escritórios", icon: "Building2" },
  { name: "Advocacia", icon: "Gavel" },
  { name: "Contabilidade", icon: "Calculator" },
  { name: "Varejo", icon: "Store" },
  { name: "E-commerce", icon: "ShoppingBag" },
  { name: "Telecom", icon: "Radio" },
  { name: "Educação", icon: "GraduationCap" },
  { name: "Logística", icon: "Truck" },
];

export const FAQ_ITEMS = [
  {
    question: "O que é a Redobrai Corp?",
    answer:
      "A Redobrai é uma empresa de tecnologia brasileira que desenvolve software customizado, soluções de visão computacional, plataforma de agentes de IA, pesquisa humanitária via DRedobrai Foundation e parcerias estratégicas via Redobrai Partner.",
  },
  {
    question: "Vocês desenvolvem software sob medida?",
    answer:
      "Sim. Criamos sistemas personalizados para empresas — desde integrações e APIs até plataformas completas, com foco em arquitetura escalável e entrega ágil.",
  },
  {
    question: "Preciso saber programar para criar agentes?",
    answer:
      "Não. Nossa plataforma oferece um builder visual com drag and drop. Desenvolvedores também podem usar APIs e webhooks para integrações avançadas.",
  },
  {
    question: "O que é a DRedobrai Foundation?",
    answer:
      "É o braço de pesquisa da Redobrai focado em IA para ajuda humanitária em catástrofes de cheias e desastres naturais. Saiba mais em /foundation.",
  },
  {
    question: "Como funciona o Redobrai Partner?",
    answer:
      "Entramos como sócios técnicos nas suas ideias — oferecemos engenharia, IA e mentoria em troca de equity ou modelo híbrido. Visite /partner para enviar sua proposta.",
  },
  {
    question: "Como solicitar uma demonstração?",
    answer:
      "Preencha o formulário na seção de contato com seu nome, empresa e WhatsApp. Você será direcionado ao nosso WhatsApp para agendar uma conversa.",
  },
];

export const FOOTER_LINKS = {
  Soluções: [
    { label: "Software Customizado", href: "/#custom" },
    { label: "Visão Computacional", href: "/#visao-computacional" },
    { label: "Agentes de IA", href: "/#agentes" },
  ],
  Iniciativas: [
    { label: "DRedobrai Foundation", href: "/foundation" },
    { label: "Redobrai Partner", href: "/partner" },
  ],
  Empresa: [
    { label: "Contato", href: "/#contato" },
    { label: "Privacidade", href: "#" },
    { label: "LGPD", href: "#" },
  ],
};
