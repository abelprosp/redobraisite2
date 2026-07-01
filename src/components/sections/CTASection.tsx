"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { DemoRequestForm } from "@/components/ui/DemoRequestForm";

export function CTASection() {
  return (
    <section id="contato" className="section-padding bg-gray-100 border-t border-gray-200">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-900 leading-snug tracking-tight"
        >
          Construa sua força de trabalho baseada em Inteligência Artificial
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
        >
          Agende uma demonstração personalizada e descubra como a Redobrai pode transformar
          a operação da sua empresa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-10"
        >
          <DemoRequestForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8"
        >
          <a href="#plataforma" className="link-arrow text-sm">
            Conheça a Plataforma
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
