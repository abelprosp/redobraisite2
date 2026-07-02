"use client";

import {
  Layers, Plug, RefreshCw, Users,
  ScanEye, Cctv, FileSearch, Plane,
  type LucideIcon,
} from "lucide-react";
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
  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-br from-brand-50 to-teal-100 rounded-2xl" />
      <div className="relative glass-ui rounded-lg overflow-hidden border border-gray-200">
        <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
          <span className="text-xs text-gray-500 font-mono">vision.redobrai/analyze</span>
          <span className="text-[10px] text-brand-600 font-medium">● Processando</span>
        </div>
        <div className="p-4 bg-gray-900 aspect-video relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(25,128,56,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(25,128,56,0.3)_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute top-1/4 left-1/4 w-32 h-24 border-2 border-brand-400 rounded-sm">
            <span className="absolute -top-5 left-0 text-[9px] text-brand-400 font-mono">defeito 98.2%</span>
          </div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-20 border-2 border-teal-400 rounded-sm">
            <span className="absolute -top-5 left-0 text-[9px] text-teal-400 font-mono">ok 99.7%</span>
          </div>
          <div className="absolute bottom-3 left-3 right-3 flex gap-2">
            {["Frame 1247", "3 objetos", "12ms"].map((t) => (
              <span key={t} className="text-[9px] text-gray-500 bg-black/50 px-2 py-1 rounded-sm font-mono">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CustomSoftwareSection() {
  return (
    <Section id="custom" className="bg-gray-50">
      <SectionHeader
        badge="Custom"
        title="Software customizado para o seu negócio"
        subtitle="Desenvolvemos soluções sob medida — da concepção à produção — alinhadas aos processos e objetivos da sua empresa."
        align="center"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
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

      <div id="visao-computacional" className="scroll-mt-28 pt-8 border-t border-gray-200">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <span className="inline-block mb-4 px-3 py-1 rounded-sm text-xs font-medium tracking-wider uppercase bg-brand-100 text-brand-700">
              Visão Computacional
            </span>
            <h3 className="text-2xl md:text-3xl font-normal text-gray-900 tracking-tight leading-snug mb-4">
              IA que enxerga, interpreta e decide a partir de imagens e vídeos
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              Aplicamos deep learning e visão computacional em indústria, segurança,
              agricultura e operações — transformando câmeras e sensores em inteligência
              acionável para o seu negócio.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {COMPUTER_VISION.map((cv) => {
                const Icon = cvIcons[cv.icon];
                return (
                  <div key={cv.title} className="flex gap-3">
                    <Icon className="w-4 h-4 text-brand-600 mt-0.5 shrink-0" strokeWidth={1.5} />
                    <div>
                      <div className="text-sm font-medium text-gray-900">{cv.title}</div>
                      <div className="text-xs text-gray-600 mt-0.5 leading-relaxed">{cv.description}</div>
                    </div>
                  </div>
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
