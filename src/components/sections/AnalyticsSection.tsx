"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ANALYTICS_METRICS } from "@/lib/constants";

export function AnalyticsSection() {
  return (
    <Section id="analytics" className="bg-white">
      <SectionHeader
        title="Analytics"
        subtitle="Dashboards em tempo real para medir impacto, produtividade e ROI."
        align="center"
      />

      <ScrollReveal>
        <div className="ibm-card rounded-sm p-6 lg:p-8 bg-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {ANALYTICS_METRICS.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="border border-gray-200 rounded-sm p-4 bg-gray-50"
              >
                <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-2">
                  {metric.label}
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-2xl font-light text-gray-900">{metric.value}</span>
                  <span className="flex items-center gap-0.5 text-brand-600 text-xs">
                    <TrendingUp className="w-3 h-3" />
                    {metric.change}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 border border-gray-200 rounded-sm p-5 bg-white">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-4">
                Tarefas executadas — Últimos 30 dias
              </div>
              <div className="flex items-end gap-1 h-36">
                {[42, 55, 38, 72, 48, 65, 58, 80, 45, 68, 52, 75, 60, 85, 50, 70, 55, 78, 62, 88, 48, 72, 58, 82, 65, 90, 55, 75, 68, 92].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-sm bg-brand-600"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.02, duration: 0.3 }}
                  />
                ))}
              </div>
            </div>
            <div className="border border-gray-200 rounded-sm p-5 bg-white">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-4">
                Por departamento
              </div>
              <div className="space-y-3">
                {[
                  { name: "Vendas", pct: 28 },
                  { name: "Financeiro", pct: 22 },
                  { name: "Atendimento", pct: 18 },
                  { name: "Operações", pct: 15 },
                  { name: "Outros", pct: 17 },
                ].map((dept) => (
                  <div key={dept.name}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">{dept.name}</span>
                      <span className="text-gray-900">{dept.pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-gray-200 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-brand-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${dept.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
