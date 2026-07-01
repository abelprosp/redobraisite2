"use client";

import { motion } from "framer-motion";
import {
  Blocks, Network, GitBranch, Activity, BookOpen, Shield, BarChart3, Lock,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PLATFORM_MODULES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Blocks, Network, GitBranch, Activity, BookOpen, Shield, BarChart3, Lock,
};

export function PlatformSection() {
  return (
    <Section id="plataforma">
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      <SectionHeader
        badge="Plataforma"
        title="Conheça a Plataforma Redobrai"
        subtitle="Um ecossistema completo para criar, orquestrar e gerenciar sua força de trabalho baseada em Inteligência Artificial."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {PLATFORM_MODULES.map((mod, i) => {
          const Icon = iconMap[mod.icon];
          return (
            <ScrollReveal key={mod.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative glass rounded-2xl p-6 h-full hover:bg-white/[0.06] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-electric-500/5 rounded-full blur-2xl group-hover:bg-electric-500/10 transition-colors" />

                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-electric-400" />
                  </div>
                  <h3 className="text-white font-medium mb-2">{mod.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{mod.description}</p>
                </div>

                <div className="mt-5 h-20 rounded-lg bg-white/[0.02] border border-white/5 overflow-hidden relative">
                  <div className="absolute inset-0 shimmer" />
                  <div className="p-3 space-y-1.5">
                    <div className="h-1.5 w-3/4 rounded-full bg-white/10" />
                    <div className="h-1.5 w-1/2 rounded-full bg-white/5" />
                    <div className="flex gap-1 mt-2">
                      <div className="h-8 flex-1 rounded bg-electric-500/10" />
                      <div className="h-8 flex-1 rounded bg-cyan-400/10" />
                      <div className="h-8 flex-1 rounded bg-white/5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
}
