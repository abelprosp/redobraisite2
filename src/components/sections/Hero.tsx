"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Factory,
  ScanLine,
  Sparkles,
  Star,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

function OperationsCard() {
  return (
    <div className="flex h-full min-h-52 flex-col rounded-[1.75rem] border border-gray-200/70 bg-white p-5 shadow-[0_22px_70px_-42px_rgba(22,22,22,0.35)] sm:min-h-56">
      <div className="flex items-center justify-between">
        <span className="flex size-9 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
          <Workflow className="size-4" strokeWidth={1.7} />
        </span>
        <span className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-brand-700">
          <span className="size-1.5 rounded-full bg-brand-500" />
          Em operação
        </span>
      </div>
      <div className="mt-auto pt-7">
        <p className="text-[10px] font-medium uppercase tracking-[0.13em] text-gray-500">
          Ecossistema integrado
        </p>
        <p className="mt-1 text-3xl font-semibold tracking-[-0.05em] text-gray-900">5 frentes</p>
        <div className="mt-5 space-y-2.5">
          {[
            ["Software & automação", "86%"],
            ["Agentes de IA", "72%"],
            ["Visão computacional", "94%"],
          ].map(([label, width]) => (
            <div key={label}>
              <div className="mb-1 flex items-center justify-between text-[9px] text-gray-500">
                <span>{label}</span>
                <span className="font-mono text-brand-700">{width}</span>
              </div>
              <div className="h-1 overflow-hidden rounded-full bg-gray-100">
                <div className="h-full rounded-full bg-gradient-to-r from-brand-500 to-teal-400" style={{ width }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function IndustrialVisual() {
  return (
    <div className="relative min-h-64 overflow-hidden rounded-[1.75rem] sm:min-h-72 lg:min-h-80">
      <Image
        src="/hero-industrial.svg"
        alt="Infraestrutura industrial conectada a sistemas de inteligência artificial"
        fill
        preload
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 22vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#092f2a]/80 via-transparent to-transparent" />
      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 text-white">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-brand-100">
            IA no mundo real
          </p>
          <p className="mt-1 max-w-40 text-sm font-medium leading-snug">
            Tecnologia que enxerga, decide e transforma.
          </p>
        </div>
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/35 bg-white/10 backdrop-blur-md">
          <ScanLine className="size-4" />
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();
  const reveal = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
  });

  return (
    <section className="relative isolate overflow-hidden bg-[#f7f9f7] pb-12 pt-32 sm:pb-16 sm:pt-36 lg:min-h-[900px] lg:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20 -z-10 h-[34rem] w-[64rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(222,251,230,0.85)_0%,rgba(217,251,251,0.35)_42%,transparent_72%)] blur-3xl"
      />

      <motion.div
        {...reveal(0.3)}
        aria-hidden="true"
        className="absolute left-[7%] top-48 hidden size-10 items-center justify-center rounded-full border border-gray-900/15 bg-white/70 text-gray-800 shadow-sm backdrop-blur md:flex"
      >
        <ArrowUpRight className="size-4" />
      </motion.div>
      <motion.div
        {...reveal(0.38)}
        aria-hidden="true"
        className="absolute right-[8%] top-52 hidden size-10 items-center justify-center rounded-full bg-brand-100 text-brand-700 md:flex"
      >
        <BarChart3 className="size-4" />
      </motion.div>
      <motion.div
        {...reveal(0.46)}
        aria-hidden="true"
        className="absolute left-[13%] top-[20rem] hidden size-8 items-center justify-center rounded-full bg-[#123c38] text-brand-100 lg:flex"
      >
        <Sparkles className="size-3.5" />
      </motion.div>

      <div className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div {...reveal(0)} className="mb-5 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-600/15 bg-white/70 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700 shadow-sm backdrop-blur">
              <span className="size-1.5 rounded-full bg-brand-500" />
              Tecnologia brasileira com propósito
            </span>
          </motion.div>

          <motion.h1
            {...reveal(0.06)}
            className="text-[2.7rem] font-semibold leading-[0.98] tracking-[-0.055em] text-gray-900 sm:text-6xl md:text-7xl lg:text-[5.4rem]"
          >
            O futuro das empresas
            <br />
            é movido por{" "}
            <span className="bg-gradient-to-r from-brand-700 via-brand-600 to-teal-400 bg-clip-text text-transparent">
              inteligência.
            </span>
          </motion.h1>

          <motion.p
            {...reveal(0.12)}
            className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base"
          >
            Software sob medida, visão computacional e agentes de IA para transformar
            desafios reais em operações mais inteligentes, humanas e eficientes.
          </motion.p>

          <motion.div
            {...reveal(0.18)}
            className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
          >
            <Button href="/#contato" size="lg" className="rounded-full px-7 shadow-[0_12px_30px_-14px_rgba(25,128,56,0.8)]">
              Falar com um especialista
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button href="#custom" variant="secondary" size="lg" className="rounded-full border-gray-200 px-7">
              Explorar soluções
            </Button>
          </motion.div>

          <motion.div
            {...reveal(0.24)}
            className="mt-7 flex items-center justify-center gap-2.5 text-left"
          >
            <div className="flex gap-0.5 text-[#e8b923]" aria-label="Excelência em cada entrega">
              {[0, 1, 2, 3, 4].map((star) => (
                <Star key={star} className="size-3.5 fill-current" />
              ))}
            </div>
            <span className="h-4 w-px bg-gray-300" />
            <p className="text-[10px] leading-4 text-gray-500">
              Excelência em cada entrega
              <br />
              <span className="font-medium text-gray-800">do desafio ao impacto</span>
            </p>
          </motion.div>
        </div>

        <motion.div
          {...reveal(0.32)}
          className="mx-auto mt-12 grid max-w-6xl grid-cols-2 items-end gap-3 sm:mt-16 sm:gap-4 lg:grid-cols-[1.18fr_.8fr_1.18fr_.8fr_1.18fr]"
        >
          <div className="col-span-2 sm:col-span-1">
            <IndustrialVisual />
          </div>

          <div className="min-h-52 rounded-[1.75rem] bg-[#123c38] p-5 text-white sm:min-h-56">
            <Factory className="size-5 text-brand-300" strokeWidth={1.6} />
            <div className="mt-12 sm:mt-16">
              <p className="text-3xl font-semibold tracking-[-0.05em]">100%</p>
              <p className="mt-2 text-xs leading-5 text-white/70">
                Tecnologia alinhada ao seu contexto e aos seus objetivos.
              </p>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 lg:pb-0">
            <OperationsCard />
          </div>

          <div className="min-h-52 rounded-[1.75rem] bg-brand-100 p-5 text-gray-900 sm:min-h-56">
            <Bot className="size-5 text-brand-700" strokeWidth={1.6} />
            <div className="mt-12 sm:mt-16">
              <p className="text-3xl font-semibold tracking-[-0.05em]">24/7</p>
              <p className="mt-2 text-xs leading-5 text-gray-700">
                Agentes inteligentes apoiando fluxos críticos da operação.
              </p>
            </div>
          </div>

          <div className="col-span-2 flex min-h-64 flex-col rounded-[1.75rem] bg-[#0d3330] p-6 text-white sm:col-span-1 sm:min-h-72 lg:min-h-80">
            <span className="flex size-10 items-center justify-center rounded-full border border-white/20">
              <Sparkles className="size-4 text-brand-300" />
            </span>
            <div className="mt-auto">
              <p className="max-w-48 text-xl font-medium leading-tight tracking-[-0.025em]">
                Redobre a capacidade do seu negócio.
              </p>
              <Link
                href="/#contato"
                className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-brand-300 transition-colors hover:text-white"
              >
                Comece agora
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
