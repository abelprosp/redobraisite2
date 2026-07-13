"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="bg-white">
      <SectionHeader title="Perguntas Frequentes" align="center" />

      <div className="max-w-3xl mx-auto space-y-2">
        {FAQ_ITEMS.map((item, i) => (
          <ScrollReveal key={item.question} delay={i * 0.04}>
            <div className="border border-gray-200 rounded-sm overflow-hidden bg-white">
              <button
                type="button"
                className="flex min-h-14 w-full items-center justify-between p-4 text-left transition-colors hover:bg-gray-50 sm:p-5"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="text-gray-900 font-medium text-sm pr-4">{item.question}</span>
                <span className="shrink-0 w-7 h-7 rounded-sm border border-gray-200 flex items-center justify-center">
                  {openIndex === i ? (
                    <Minus className="w-3.5 h-3.5 text-brand-600" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 text-gray-500" />
                  )}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-label={item.question}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
