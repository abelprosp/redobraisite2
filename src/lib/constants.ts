export const NAV_LINKS = [
  {
    label: "Produtos",
    children: ["Plataforma", "Agentes", "Soluções", "Integrações", "Casos de Uso"],
  },
  { label: "Empresa", href: "#empresa" },
  { label: "Contato", href: "#contato" },
];

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

export const TESTIMONIALS = [
  {
    quote:
      "A Redobrai transformou nossa operação. 47 agentes trabalhando em conjunto reduziram nosso tempo de resposta em 89%.",
    author: "Mariana Costa",
    role: "CTO",
    company: "Nexa Industries",
    avatar: "MC",
  },
  {
    quote:
      "Finalmente uma plataforma que entende enterprise. Governança, compliance e orquestração em um só lugar.",
    author: "Ricardo Almeida",
    role: "Diretor de Operações",
    company: "Grupo Horizonte",
    avatar: "RA",
  },
  {
    quote:
      "Implementamos agentes em 8 departamentos em 3 semanas. O ROI foi visível no primeiro mês.",
    author: "Fernanda Lima",
    role: "CEO",
    company: "Velox Digital",
    avatar: "FL",
  },
];

export const FAQ_ITEMS = [
  {
    question: "O que é a Redobrai Computer?",
    answer:
      "A Redobrai é a principal plataforma brasileira para criação, orquestração e gerenciamento de Agentes de Inteligência Artificial para empresas. Funciona como um sistema operacional onde você cria funcionários de IA especializados que colaboram entre si.",
  },
  {
    question: "Preciso saber programar para criar agentes?",
    answer:
      "Não. Nossa plataforma oferece um builder visual com drag and drop, permitindo criar, configurar e publicar agentes sem escrever código. Desenvolvedores também podem usar APIs e webhooks para integrações avançadas.",
  },
  {
    question: "Como funciona a orquestração entre agentes?",
    answer:
      "O Orquestrador Inteligente coordena a comunicação entre múltiplos agentes. Quando uma tarefa é iniciada, os agentes especializados colaboram automaticamente, compartilham contexto e executam fluxos completos de ponta a ponta.",
  },
  {
    question: "A plataforma é compatível com LGPD?",
    answer:
      "Sim. Oferecemos governança completa com controle de acesso, auditoria, logs detalhados, versionamento e ferramentas específicas para compliance com a LGPD e regulamentações setoriais.",
  },
  {
    question: "Quais integrações estão disponíveis?",
    answer:
      "Conectamos com centenas de sistemas: ERPs (SAP, Oracle, Totvs), CRMs (Salesforce, HubSpot), ferramentas de comunicação (Slack, Teams, WhatsApp), modelos de IA (OpenAI, Anthropic, Gemini) e bancos de dados.",
  },
  {
    question: "Como solicitar uma demonstração?",
    answer:
      "Preencha o formulário na seção 'Solicitar Demonstração' com seu nome, empresa e WhatsApp. Você será direcionado ao nosso WhatsApp para agendar uma apresentação personalizada da plataforma.",
  },
];
