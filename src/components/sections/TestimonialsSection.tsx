"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <Section>
      <SectionHeader
        badge="Clientes"
        title="Empresas que confiam na Redobrai"
        subtitle="Organizações de diversos setores já transformaram suas operações com agentes de IA."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((testimonial, i) => (
          <ScrollReveal key={testimonial.author} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-8 h-full flex flex-col hover:bg-white/[0.06] transition-all"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-electric-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-gray-300 text-sm leading-relaxed flex-1 mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric-500 to-cyan-400 flex items-center justify-center text-white text-xs font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white text-sm font-medium">{testimonial.author}</div>
                  <div className="text-gray-500 text-xs">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
