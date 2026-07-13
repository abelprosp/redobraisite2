"use client";

import { motion } from "framer-motion";
import { Blocks, Network } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Section } from "@/components/ui/SectionHeader";

function CubesIllustration() {
  return (
    <div className="relative flex h-64 w-full items-center justify-center sm:h-80">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-teal-100 rounded-2xl" />
      {[
        { x: -60, y: -40, size: 72, color: "#198038", rotate: 12, delay: 0 },
        { x: 40, y: -60, size: 56, color: "#24a148", rotate: -8, delay: 0.1 },
        { x: -20, y: 20, size: 64, color: "#08bdba", rotate: 20, delay: 0.2 },
        { x: 70, y: 30, size: 48, color: "#42be65", rotate: -15, delay: 0.15 },
        { x: -80, y: 50, size: 44, color: "#6fdc8c", rotate: 5, delay: 0.25 },
        { x: 20, y: 70, size: 52, color: "#198038", rotate: -10, delay: 0.3 },
      ].map((cube, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: cube.delay, type: "spring" }}
          className="absolute rounded-lg shadow-xl"
          style={{
            width: cube.size,
            height: cube.size,
            background: `linear-gradient(135deg, ${cube.color}, ${cube.color}cc)`,
            transform: `translate(${cube.x}px, ${cube.y}px) rotate(${cube.rotate}deg)`,
          }}
        >
          {i === 0 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Blocks className="w-6 h-6 text-white/80" />
            </div>
          )}
          {i === 2 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Network className="w-5 h-5 text-white/80" />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export function ValuePropSection() {
  return (
    <Section className="bg-white">
      <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-20">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-900 leading-snug tracking-tight">
            Maximize o ROI da sua força de trabalho com agentes de IA especializados
          </h2>
          <p className="mt-5 text-gray-600 leading-relaxed">
            A Redobrai permite que empresas criem funcionários de IA para cada departamento —
            agentes que trabalham juntos, executam tarefas, tomam decisões e automatizam
            processos completos de ponta a ponta.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Orquestre múltiplos agentes em fluxos inteligentes",
              "Conecte ERPs, CRMs e ferramentas de comunicação",
              "Monitore performance e ROI em tempo real",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.15} direction="right">
          <CubesIllustration />
        </ScrollReveal>
      </div>

      <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-6 md:grid-cols-2">
        {[
          {
            icon: Blocks,
            title: "Builder visual sem código",
            desc: "Crie agentes especializados com drag and drop, defina personalidade, conecte APIs e publique em minutos.",
          },
          {
            icon: Network,
            title: "Orquestração entre agentes",
            desc: "Agentes colaboram automaticamente — do comercial ao financeiro, jurídico e CRM — em fluxos completos.",
          },
        ].map((card, i) => (
          <ScrollReveal key={card.title} delay={i * 0.1}>
            <div className="ibm-card h-full rounded-sm p-5 transition-shadow sm:p-8">
              <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center mb-5">
                <card.icon className="w-5 h-5 text-brand-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
