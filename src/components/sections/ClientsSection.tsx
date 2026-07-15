import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { TRUSTED_CLIENTS } from "@/lib/constants";

function ClientLogoCard({
  client,
}: {
  client: (typeof TRUSTED_CLIENTS)[number];
}) {
  const isDark = client.variant === "dark";

  return (
    <div
      className={`flex h-[4.25rem] w-[9.25rem] shrink-0 items-center justify-center overflow-hidden rounded-xl border px-3 shadow-[0_8px_24px_rgba(14,96,39,0.06)] transition-colors duration-300 min-[380px]:h-[4.75rem] min-[380px]:w-[10.5rem] sm:h-[5.25rem] sm:w-[12.5rem] sm:rounded-2xl sm:px-4 ${
        isDark
          ? "border-white/10 bg-[#0a1210]"
          : "border-brand-100/80 bg-white"
      }`}
    >
      {client.type === "logo" ? (
        <Image
          src={client.logo}
          alt={client.alt}
          width={200}
          height={80}
          sizes="(max-width: 430px) 148px, 200px"
          className="h-auto max-h-[3rem] w-auto max-w-full object-contain min-[380px]:max-h-[3.25rem] sm:max-h-[3.75rem]"
        />
      ) : (
        <div
          className="flex flex-col items-center justify-center text-center"
          aria-label={client.alt}
        >
          <span className="bg-gradient-to-r from-brand-700 via-brand-600 to-teal-400 bg-clip-text text-base font-semibold tracking-[-0.03em] text-transparent min-[380px]:text-lg sm:text-xl">
            Roma
          </span>
          <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.18em] text-brand-600/85 min-[380px]:text-[10px] sm:text-[11px]">
            Consultoria
          </span>
        </div>
      )}
    </div>
  );
}

function ClientsMarquee() {
  return (
    <div
      className="clients-marquee relative mt-8 sm:mt-10"
      aria-label="Logos de clientes que confiam na Redobra AI"
      role="region"
    >
      <div className="clients-row">
        <div className="clients-track">
          {[false, true].map((duplicate) => (
            <div
              key={duplicate ? "duplicate" : "original"}
              className="clients-group"
              aria-hidden={duplicate || undefined}
            >
              {TRUSTED_CLIENTS.map((client) => (
                <ClientLogoCard key={`${client.name}-${duplicate ? "dup" : "orig"}`} client={client} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ClientsSection() {
  return (
    <Section id="clientes" className="gradient-bg-soft overflow-hidden">
      <SectionHeader
        badge="Confiança comprovada"
        title="Clientes que confiam na Redobra AI"
        subtitle="Empresas de diferentes segmentos já aceleram operações, atendimento e decisões com nossas soluções de IA."
      />
      <ClientsMarquee />
    </Section>
  );
}
