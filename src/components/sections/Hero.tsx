"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, Bot, GitBranch, Plug, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

function DashboardMockup() {
  const agents = [
    { name: "Comercial", status: "Executando", color: "#198038" },
    { name: "Financeiro", status: "Analisando", color: "#08bdba" },
    { name: "Jurídico", status: "Revisando", color: "#24a148" },
    { name: "CRM", status: "Sincronizando", color: "#42be65" },
  ];

  const metrics = [
    { label: "Tarefas", value: "1.247", icon: Activity },
    { label: "Agentes", value: "24", icon: Bot },
    { label: "Fluxos", value: "89", icon: GitBranch },
    { label: "Integrações", value: "156", icon: Plug },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative animate-float"
    >
      <div className="absolute -inset-8 bg-gradient-to-br from-brand-100/80 to-teal-100/60 rounded-3xl blur-2xl" />

      <div className="relative glass-ui rounded-lg overflow-hidden glow-green">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 bg-gray-50">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          </div>
          <span className="text-[10px] text-gray-400 font-mono ml-2">
            redobrai.platform/dashboard
          </span>
        </div>

        <div className="p-5 space-y-4 bg-white">
          <div className="grid grid-cols-4 gap-2">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="border border-gray-200 rounded-sm p-2.5 bg-gray-50"
              >
                <m.icon className="w-3 h-3 text-brand-600 mb-1" />
                <div className="text-sm font-semibold text-gray-900">{m.value}</div>
                <div className="text-[9px] text-gray-500">{m.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="border border-gray-200 rounded-sm p-3">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">
                Agentes Ativos
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
                <span className="text-[9px] text-brand-600">Online</span>
              </span>
            </div>
            <div className="space-y-2">
              {agents.map((agent, i) => (
                <motion.div
                  key={agent.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="flex items-center gap-2.5 p-2 rounded-sm bg-gray-50 border border-gray-100"
                >
                  <div
                    className="w-6 h-6 rounded-sm flex items-center justify-center text-[9px] font-bold text-white"
                    style={{ background: agent.color }}
                  >
                    {agent.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] text-gray-900 font-medium">{agent.name}</div>
                    <div className="text-[9px] text-gray-500">{agent.status}</div>
                  </div>
                  <div className="w-12 h-1 rounded-full bg-gray-200 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: agent.color }}
                      initial={{ width: "0%" }}
                      animate={{ width: `${60 + i * 10}%` }}
                      transition={{ delay: 0.9 + i * 0.15, duration: 0.8 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="border border-gray-200 rounded-sm p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">
                Performance
              </span>
              <BarChart3 className="w-3 h-3 text-brand-600" />
            </div>
            <div className="flex items-end gap-1 h-16">
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-brand-400 to-brand-600"
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 1 + i * 0.04, duration: 0.4 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 gradient-bg-hero">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <Logo height={44} priority />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-light tracking-tight leading-[1.12] text-gray-900"
            >
              O futuro da sua empresa não será feito por softwares.{" "}
              <span className="font-normal text-brand-600">
                Será feito por Agentes de IA.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl"
            >
              Crie, conecte, orquestre e monitore funcionários de Inteligência Artificial
              capazes de executar processos completos, colaborar entre si e transformar a
              produtividade da sua empresa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button href="#contato" size="lg">
                Solicitar Demonstração
              </Button>
              <a href="#plataforma" className="link-arrow text-sm">
                Conheça a Plataforma
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          <div className="hidden lg:block">
            <DashboardMockup />
          </div>

          <div className="lg:hidden col-span-full">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
