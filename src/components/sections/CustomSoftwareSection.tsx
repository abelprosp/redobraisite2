"use client";

import {
  Activity, Layers, Plug, RefreshCw, Users,
  ScanEye, Cctv, FileSearch, Plane,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CUSTOM_SERVICES, COMPUTER_VISION } from "@/lib/constants";

const serviceIcons: Record<string, LucideIcon> = {
  Layers, Plug, RefreshCw, Users,
};

const cvIcons: Record<string, LucideIcon> = {
  ScanEye, Cctv, FileSearch, Plane,
};

function VisionMockup() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative isolate">
      <div className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_70%_30%,rgba(8,189,186,0.18),transparent_45%),radial-gradient(circle_at_20%_80%,rgba(36,161,72,0.14),transparent_40%)] blur-2xl" />

      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-gray-900 shadow-[0_30px_80px_-30px_rgba(22,22,22,0.55)]"
      >
        <div className="flex items-center justify-between border-b border-white/10 bg-gray-800/90 px-3 py-3 sm:px-5 sm:py-3.5">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="size-2 rounded-full bg-white/20" />
              <span className="size-2 rounded-full bg-white/20" />
              <span className="size-2 rounded-full bg-white/20" />
            </div>
            <span className="hidden text-[10px] text-gray-400 font-mono sm:inline">
              vision.redobrai.ai / live-analysis
            </span>
          </div>
          <span className="flex items-center gap-1.5 text-[8px] font-medium text-brand-300 min-[380px]:text-[9px] sm:gap-2 sm:text-[10px]">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-brand-400 opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-brand-400" />
            </span>
            PROCESSANDO AO VIVO
          </span>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden bg-[#0b0f0d] sm:aspect-[3/2]">
          <Image
            src="/visao-computacional-costura.png"
            alt="Operadora trabalhando em uma máquina de costura industrial"
            fill
            sizes="(min-width: 1024px) 52vw, (min-width: 640px) 80vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/20" />
          <div className="absolute inset-0 opacity-40 bg-[linear-gradient(rgba(66,190,101,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(66,190,101,0.15)_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(11,15,13,0.58)_100%)]" />

          <motion.div
            aria-hidden="true"
            animate={reduceMotion ? undefined : { top: ["8%", "88%", "8%"] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 right-0 top-[8%] z-30 h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent shadow-[0_0_18px_3px_rgba(66,190,101,0.55)]"
          />

          <motion.div
            animate={reduceMotion ? undefined : { x: [0, 2, 0], y: [0, -2, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[24%] top-[25%] z-20 h-[60%] w-[27%]"
          >
            <div className="absolute inset-0 border border-brand-300/80 bg-brand-400/[0.06]">
              <span className="absolute -left-px -top-px size-3 border-l-2 border-t-2 border-brand-300" />
              <span className="absolute -right-px -top-px size-3 border-r-2 border-t-2 border-brand-300" />
              <span className="absolute -bottom-px -left-px size-3 border-b-2 border-l-2 border-brand-300" />
              <span className="absolute -bottom-px -right-px size-3 border-b-2 border-r-2 border-brand-300" />
            </div>
            <span className="absolute -top-6 left-0 flex items-center gap-1.5 whitespace-nowrap rounded-sm bg-gray-900/75 px-1.5 py-1 font-mono text-[7px] text-brand-300 backdrop-blur-sm sm:text-[8px]">
              <span className="size-1 rounded-full bg-brand-300" /> OPERADOR ATIVO · 99,1%
            </span>
          </motion.div>

          <motion.div
            animate={reduceMotion ? undefined : { x: [0, -2, 0], y: [0, 2, 0] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            className="absolute bottom-[8%] left-[39%] z-20 h-[35%] w-[32%] border border-teal-400/90 bg-teal-400/[0.06]"
          >
            <span className="absolute -left-px -top-6 flex items-center gap-1.5 whitespace-nowrap rounded-sm bg-gray-900/75 px-1.5 py-1 font-mono text-[7px] text-teal-400 backdrop-blur-sm sm:text-[8px]">
              <span className="size-1 rounded-full bg-teal-400" /> MÁQUINA OPERANDO · 98,7%
            </span>
          </motion.div>

          <div className="absolute left-3 top-3 z-40 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/45 px-2 py-1 font-mono text-[7px] text-gray-300 backdrop-blur-sm sm:left-4 sm:top-4 sm:gap-2 sm:px-2.5 sm:text-[8px]">
            <Activity className="size-3 text-brand-400" />
            CAM 04 · LINHA DE COSTURA
          </div>

          <div className="absolute bottom-3 left-3 right-3 z-40 flex items-end justify-between gap-2 sm:bottom-4 sm:left-4 sm:right-4 sm:gap-3">
            <div className="flex gap-1.5">
              {["FRAME 1247", "3 OBJETOS", "12 MS"].map((item) => (
                <span key={item} className="rounded-md border border-white/10 bg-black/45 px-1.5 py-1 font-mono text-[7px] text-gray-400 backdrop-blur-md sm:px-2 sm:py-1.5 sm:text-[8px]">
                  {item}
                </span>
              ))}
            </div>
            <div className="hidden text-right sm:block">
              <p className="font-mono text-[8px] text-gray-500">CONFIANÇA MÉDIA</p>
              <p className="mt-0.5 font-mono text-xs text-brand-300">98.9%</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 bg-gray-800/75">
          {[
            ["Precisão", "99,4%"],
            ["Latência", "12 ms"],
            ["Disponibilidade", "24/7"],
          ].map(([label, value]) => (
            <div key={label} className="min-w-0 px-2 py-3 sm:px-4">
              <p className="break-words text-[7px] uppercase tracking-[0.08em] text-gray-500 sm:text-[8px] sm:tracking-[0.14em]">{label}</p>
              <p className="mt-1 text-xs font-medium text-gray-200 sm:text-sm">{value}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function CustomSoftwareSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="custom" className="bg-gray-50">
      <SectionHeader
        badge="Custom"
        title="Software customizado para o seu negócio"
        subtitle="Desenvolvemos soluções sob medida — da concepção à produção — alinhadas aos processos e objetivos da sua empresa."
        align="center"
      />

      <div className="mb-12 grid gap-4 sm:mb-20 sm:grid-cols-2 lg:grid-cols-4">
        {CUSTOM_SERVICES.map((s, i) => {
          const Icon = serviceIcons[s.icon];
          return (
            <ScrollReveal key={s.title} delay={i * 0.06}>
              <div className="ibm-card rounded-sm p-6 bg-white h-full">
                <Icon className="w-5 h-5 text-brand-600 mb-3" strokeWidth={1.5} />
                <h3 className="text-sm font-medium text-gray-900 mb-2">{s.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{s.description}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      <div
        id="visao-computacional"
        className="relative scroll-mt-24 overflow-hidden rounded-[1.5rem] border border-gray-200/80 bg-white px-4 py-8 shadow-[0_24px_80px_-50px_rgba(22,22,22,0.3)] sm:scroll-mt-28 sm:rounded-[2rem] sm:px-10 sm:py-14 lg:px-14"
      >
        <div className="pointer-events-none absolute -right-28 -top-28 size-80 rounded-full bg-teal-100/45 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-36 -left-24 size-80 rounded-full bg-brand-100/50 blur-3xl" />

        <div className="relative grid items-center gap-10 sm:gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <ScrollReveal>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-600/15 bg-brand-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-700">
              <span className="size-1.5 rounded-full bg-brand-500" />
              Visão Computacional
            </span>
            <h3 className="mb-4 max-w-xl text-[1.75rem] font-normal leading-[1.14] tracking-[-0.035em] text-gray-900 sm:text-3xl md:text-4xl lg:text-[2.7rem]">
              Transforme imagens em{" "}
              <span className="gradient-text">decisões inteligentes</span>
            </h3>
            <p className="mb-6 max-w-xl text-sm leading-6 text-gray-600 sm:mb-8 sm:leading-7 md:text-base">
              Modelos de IA analisam imagens e vídeos em tempo real para identificar
              padrões, antecipar falhas e automatizar decisões com precisão.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {COMPUTER_VISION.map((cv) => {
                const Icon = cvIcons[cv.icon];
                return (
                  <motion.div
                    key={cv.title}
                    whileHover={reduceMotion ? undefined : { y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="group flex gap-3 rounded-xl border border-gray-200/80 bg-gray-50/60 p-3.5 transition-colors hover:border-brand-600/20 hover:bg-brand-50/60"
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-brand-600/10 bg-white text-brand-600 shadow-sm">
                      <Icon className="size-4" strokeWidth={1.6} />
                    </span>
                    <div>
                      <div className="text-xs font-semibold text-gray-900">{cv.title}</div>
                      <div className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-gray-600">
                        {cv.description}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} direction="right">
            <VisionMockup />
          </ScrollReveal>
        </div>
      </div>
    </Section>
  );
}
