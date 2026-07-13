"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Check,
  CheckCheck,
  Clock3,
  HardHat,
  MessageCircle,
  MoreVertical,
  ScanLine,
  Search,
  ShieldCheck,
  UserRound,
} from "lucide-react";

function RecruitingAgentMockup({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 30, rotate: -8 }}
      animate={{ opacity: 1, y: 0, rotate: -4 }}
      transition={{ duration: 0.75, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="absolute bottom-[-2rem] left-0 z-20 w-[13.5rem] origin-bottom-left overflow-hidden rounded-[1.75rem] border-[5px] border-white bg-[#f5f7f5] shadow-[0_30px_70px_-25px_rgba(5,45,38,0.5)] min-[380px]:left-2 min-[380px]:w-[15rem] sm:left-[8%] sm:w-[18rem] lg:left-[2%] lg:w-[19rem] xl:left-[8%]"
    >
      <div className="bg-[#075e54] px-4 pb-3 pt-4 text-white">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-full bg-brand-100 text-brand-700">
            <Bot className="size-4" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-semibold">Lia · Agente Redobra</p>
            <p className="mt-0.5 text-[9px] text-white/70">online · responde em segundos</p>
          </div>
          <MoreVertical className="size-4 text-white/75" aria-hidden="true" />
        </div>
      </div>

      <div className="space-y-2.5 bg-[#efeae2] p-3 text-[10px] leading-[1.45]">
        <div className="max-w-[88%] rounded-xl rounded-tl-sm bg-white p-2.5 text-gray-700 shadow-sm">
          Olá, Ana! Sou a Lia, assistente de recrutamento. Vi seu perfil para a vaga de
          Analista de Dados. Podemos conversar?
          <p className="mt-1 flex items-center justify-end gap-1 text-[8px] text-gray-400">
            10:24 <CheckCheck className="size-2.5 text-[#34b7f1]" />
          </p>
        </div>
        <div className="ml-auto max-w-[78%] rounded-xl rounded-tr-sm bg-[#d9fdd3] p-2.5 text-gray-700 shadow-sm">
          Oi, Lia! Tenho interesse, sim. 😊
          <p className="mt-1 text-right text-[8px] text-gray-400">10:25</p>
        </div>
        <div className="max-w-[90%] rounded-xl rounded-tl-sm bg-white p-2.5 text-gray-700 shadow-sm">
          Ótimo! Sua experiência com Python combina com o desafio. Posso agendar uma conversa
          amanhã às 14h?
          <p className="mt-1 flex items-center justify-end gap-1 text-[8px] text-gray-400">
            10:25 <CheckCheck className="size-2.5 text-[#34b7f1]" />
          </p>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-white p-3">
        <p className="text-[8px] font-semibold uppercase tracking-[0.13em] text-gray-400">
          Jornada do candidato
        </p>
        <div className="mt-2 grid grid-cols-3 gap-1.5">
          <div className="rounded-lg bg-brand-50 p-2 text-brand-700">
            <Check className="mb-1 size-3" aria-hidden="true" />
            <p className="text-[8px] font-semibold">Triagem</p>
          </div>
          <div className="rounded-lg bg-brand-100 p-2 text-brand-700">
            <Clock3 className="mb-1 size-3" aria-hidden="true" />
            <p className="text-[8px] font-semibold">Entrevista</p>
          </div>
          <div className="rounded-lg bg-gray-100 p-2 text-gray-500">
            <UserRound className="mb-1 size-3" aria-hidden="true" />
            <p className="text-[8px] font-semibold">Proposta</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 border-t border-gray-200 bg-white px-3 py-2.5">
        <span className="flex size-7 items-center justify-center rounded-full bg-gray-100 text-gray-400">
          <MessageCircle className="size-3" aria-hidden="true" />
        </span>
        <span className="flex-1 rounded-full bg-gray-100 px-3 py-2 text-[9px] text-gray-400">
          Digite uma mensagem
        </span>
      </div>
    </motion.div>
  );
}

function VisionSecurityMockup({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 38, rotate: 8 }}
      animate={{ opacity: 1, y: 0, rotate: 4 }}
      transition={{ duration: 0.8, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="absolute bottom-[-1.5rem] right-[-1rem] z-10 w-[13.5rem] origin-bottom-right overflow-hidden rounded-[1.75rem] border-[5px] border-[#15211e] bg-[#101714] text-white shadow-[0_30px_70px_-25px_rgba(5,30,26,0.7)] min-[380px]:right-0 min-[380px]:w-[15rem] sm:right-[7%] sm:w-[18rem] lg:right-[1%] lg:w-[19rem] xl:right-[6%]"
    >
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-4">
        <span className="flex size-9 items-center justify-center rounded-xl bg-brand-400/15 text-brand-300">
          <ShieldCheck className="size-4" aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-semibold">Central Vision · Obra 04</p>
          <p className="mt-0.5 flex items-center gap-1.5 text-[9px] text-brand-300">
            <span className="size-1.5 rounded-full bg-brand-400" />
            Monitoramento ativo
          </p>
        </div>
        <Search className="size-4 text-white/50" aria-hidden="true" />
      </div>

      <div className="relative h-[17rem] overflow-hidden bg-gray-900 sm:h-[20rem]">
        <Image
          src="/hero-construction-vision.jpg"
          alt="Canteiro de obras monitorado por um sistema de visão computacional"
          fill
          preload
          quality={84}
          sizes="(max-width: 640px) 55vw, 300px"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        <div aria-hidden="true" className="absolute left-[32%] top-[48%] h-[16%] w-[17%] border border-brand-300">
          <span className="absolute -top-4 left-0 whitespace-nowrap bg-brand-400 px-1.5 py-0.5 font-mono text-[6px] text-gray-900">
            TRABALHADOR 98%
          </span>
        </div>
        <div aria-hidden="true" className="absolute left-[48%] top-[39%] h-[18%] w-[15%] border border-teal-400">
          <span className="absolute -top-4 right-0 whitespace-nowrap bg-teal-400 px-1.5 py-0.5 font-mono text-[6px] text-gray-900">
            EPI OK
          </span>
        </div>
        <div aria-hidden="true" className="absolute bottom-[9%] left-[22%] h-[34%] w-[67%] border border-brand-300/70">
          <span className="absolute bottom-1 right-1 bg-black/70 px-1.5 py-0.5 font-mono text-[6px] text-brand-300">
            ÁREA SEGURA
          </span>
        </div>

        <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-black/55 px-2.5 py-1.5 font-mono text-[7px] text-white/75 backdrop-blur">
          <ScanLine className="size-3 text-brand-300" aria-hidden="true" />
          CAM 07 · AO VIVO
        </div>
      </div>

      <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 bg-[#101714]">
        {[
          ["Pessoas", "04"],
          ["Alertas", "00"],
          ["EPI", "OK"],
        ].map(([label, value]) => (
          <div key={label} className="p-3">
            <p className="text-[7px] uppercase tracking-wider text-white/40">{label}</p>
            <p className="mt-1 text-xs font-semibold text-brand-300">{value}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion() === true;

  return (
    <section className="overflow-hidden bg-white px-3 pb-12 pt-24 min-[380px]:px-4 sm:px-6 sm:pb-16 sm:pt-28 lg:px-8">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative mx-auto grid min-h-[46rem] max-w-[94rem] overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-brand-300 via-[#b9efc7] to-teal-100 lg:min-h-[42rem] lg:grid-cols-[0.82fr_1.18fr] lg:rounded-[2.5rem]"
      >
        <div
          aria-hidden="true"
          className="absolute -left-24 -top-36 size-96 rounded-full bg-white/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute right-[12%] top-[8%] size-64 rounded-full bg-teal-400/15 blur-3xl"
        />

        <div className="relative z-30 flex flex-col px-6 pb-8 pt-9 min-[380px]:px-7 sm:px-10 sm:pb-10 sm:pt-12 lg:min-h-[42rem] lg:px-12 lg:py-14 xl:px-16">
          <span className="inline-flex min-h-8 w-fit items-center gap-2 rounded-full border border-brand-700/15 bg-white/45 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-brand-700 backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-brand-600" />
            Redobra AI · Inteligência aplicada
          </span>

          <h1 className="mt-6 max-w-[9ch] text-[2.75rem] font-semibold leading-[0.92] tracking-[-0.06em] text-gray-900 min-[380px]:text-[3.15rem] sm:text-6xl lg:mt-9 lg:text-[4.6rem]">
            Redobre o potencial do seu negócio.
          </h1>

          <p className="mt-5 max-w-md text-[15px] leading-6 text-gray-700 sm:text-base sm:leading-7 lg:mt-7">
            Agentes inteligentes e visão computacional para automatizar decisões, proteger
            operações e conectar pessoas.
          </p>

          <Link
            href="/#contato"
            className="mt-7 inline-flex min-h-12 w-fit items-center gap-3 rounded-xl bg-[#102f29] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_30px_-18px_rgba(6,47,39,0.8)] transition-transform hover:-translate-y-0.5 focus-visible:outline-[#102f29] motion-reduce:transition-none lg:mt-8"
          >
            Transforme sua operação
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>

          <p className="mt-auto hidden pt-10 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700/75 lg:block">
            Software · Agentes de IA · Visão computacional
          </p>
        </div>

        <div className="relative min-h-[29rem] sm:min-h-[34rem] lg:min-h-[42rem]">
          <RecruitingAgentMockup reduceMotion={reduceMotion} />
          <VisionSecurityMockup reduceMotion={reduceMotion} />

          <div
            aria-hidden="true"
            className="absolute bottom-14 left-1/2 hidden h-28 w-44 -translate-x-1/2 rounded-[50%] border-b-2 border-r-2 border-brand-700/35 lg:block"
          />
          <div className="absolute bottom-5 left-1/2 z-30 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-brand-700/15 bg-white/55 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-brand-700 backdrop-blur-sm sm:flex">
            <HardHat className="size-3.5" aria-hidden="true" />
            Tecnologia que atua no mundo real
          </div>
        </div>
      </motion.div>
    </section>
  );
}
