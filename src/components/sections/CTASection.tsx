import { ArrowUpRight } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5551995501677?text=Ol%C3%A1%21%20Gostaria%20de%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o%20com%20a%20Redobra%20AI.";

export function CTASection() {
  return (
    <section id="contato" className="scroll-mt-20 bg-[#f7f8f5] px-3 py-3 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <div className="relative mx-auto grid max-w-[90rem] overflow-hidden rounded-[1.5rem] bg-[#123d34] text-white shadow-[0_32px_90px_-45px_rgba(9,42,34,0.8)] sm:min-h-[34rem] sm:rounded-[2rem] lg:min-h-[38rem] lg:grid-cols-[1.12fr_0.88fr]">
        <div className="relative z-10 flex flex-col justify-center px-5 py-12 min-[380px]:px-7 sm:px-12 sm:py-16 lg:px-16 xl:px-20">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200 sm:mb-6 sm:text-xs sm:tracking-[0.22em]">
            Vamos construir o próximo passo
          </p>
          <h2 className="max-w-3xl text-[2.15rem] font-medium leading-[1.02] tracking-[-0.045em] min-[380px]:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
            Transforme complexidade em{" "}
            <span className="font-serif font-normal italic text-emerald-200">resultado.</span>
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-6 text-white/70 sm:mt-7 sm:text-lg sm:leading-relaxed">
            Software sob medida, visão computacional e agentes de IA desenhados para a
            realidade da sua operação.
          </p>
          <div className="mt-8 sm:mt-9">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-[#123d34] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-200 min-[480px]:w-auto min-[480px]:px-6 motion-reduce:transform-none"
              aria-label="Falar com a equipe da Redobra AI pelo WhatsApp (abre em nova aba)"
            >
              Falar com um especialista
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
              />
            </a>
          </div>
        </div>

        <div className="relative min-h-56 overflow-hidden sm:min-h-72 lg:min-h-full" aria-hidden="true">
          <div className="absolute -right-24 -top-24 size-80 rounded-full border-[3.5rem] border-emerald-200/15 sm:size-[28rem]" />
          <div className="absolute bottom-[-18%] right-[-8%] h-[72%] w-[82%] rounded-tl-[10rem] bg-[#e7eee8] shadow-[-24px_-24px_80px_rgba(0,0,0,0.12)]">
            <div className="absolute inset-8 overflow-hidden rounded-tl-[7rem] bg-[linear-gradient(145deg,#d8e9dd_0%,#f7faf7_48%,#b9d8c6_100%)]">
              <div className="absolute left-[20%] top-[18%] h-[62%] w-[55%] rotate-[-12deg] rounded-[2rem] border border-[#123d34]/10 bg-white/70 shadow-[0_30px_70px_rgba(18,61,52,0.18)] backdrop-blur-sm">
                <div className="absolute left-6 top-7 h-2 w-20 rounded-full bg-[#123d34]/15" />
                <div className="absolute left-6 top-14 h-2 w-32 rounded-full bg-[#123d34]/10" />
                <div className="absolute bottom-7 left-6 right-6 flex items-end gap-2">
                  {[38, 58, 44, 76, 64].map((height, index) => (
                    <span
                      key={height}
                      className="flex-1 rounded-t-full bg-[#198038]"
                      style={{ height: `${height + index * 2}px`, opacity: 0.45 + index * 0.1 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <svg
            viewBox="0 0 120 120"
            className="absolute right-[10%] top-[8%] size-24 text-white sm:size-32"
          >
            <path
              fill="currentColor"
              d="M60 0c0 33.1-26.9 60-60 60 33.1 0 60 26.9 60 60 0-33.1 26.9-60 60-60C86.9 60 60 33.1 60 0Z"
            />
          </svg>
          <svg
            viewBox="0 0 120 120"
            className="absolute right-[36%] top-[4%] size-12 text-emerald-200 sm:size-16"
          >
            <path
              fill="currentColor"
              d="M60 0c0 33.1-26.9 60-60 60 33.1 0 60 26.9 60 60 0-33.1 26.9-60 60-60C86.9 60 60 33.1 60 0Z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
