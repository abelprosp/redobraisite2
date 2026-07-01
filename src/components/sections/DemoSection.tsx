"use client";

import { Play } from "lucide-react";
import { Section } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function DemoSection() {
  return (
    <Section className="bg-white">
      <ScrollReveal>
        <h2 className="text-2xl md:text-3xl font-normal text-gray-900 text-center mb-10 tracking-tight">
          Veja o plano de controle da Redobrai em ação
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="relative max-w-5xl mx-auto rounded-lg overflow-hidden border border-gray-200 shadow-lg group cursor-pointer">
          <div className="aspect-video bg-gradient-to-br from-gray-100 via-brand-50 to-teal-100 flex items-center justify-center relative">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-8 left-8 w-48 h-32 bg-white rounded-sm border border-gray-200 shadow-sm" />
              <div className="absolute top-16 right-12 w-56 h-40 bg-white rounded-sm border border-gray-200 shadow-sm" />
              <div className="absolute bottom-10 left-1/4 w-64 h-24 bg-white rounded-sm border border-gray-200 shadow-sm" />
            </div>
            <div className="relative z-10 w-16 h-16 rounded-full bg-brand-600 flex items-center justify-center shadow-lg group-hover:bg-brand-700 transition-colors group-hover:scale-105 transform duration-200">
              <Play className="w-6 h-6 text-white ml-1" fill="white" />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
