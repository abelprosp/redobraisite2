import Link from "next/link";
import { ArrowUpRight, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { FOOTER_LINKS } from "@/lib/constants";

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/company/redobrai-corp",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://www.instagram.com/redobrai/",
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: "https://wa.me/5551995501677",
    label: "WhatsApp",
    icon: MessageCircle,
  },
];

export function Footer() {
  return (
    <footer id="empresa" className="bg-[#f7f8f5] text-[#123d34]">
      <div className="mx-auto max-w-[90rem] px-6 pb-8 pt-20 lg:px-8 lg:pt-28">
        <div className="grid gap-16 border-b border-[#123d34]/15 pb-20 lg:grid-cols-[1.15fr_1fr] lg:gap-24">
          <div>
            <p className="max-w-md text-xl leading-snug tracking-tight text-[#123d34]/75 sm:text-2xl">
              Tecnologia brasileira para transformar operações, negócios e ideias.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`${label} da Redobra AI (abre em nova aba)`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-11 items-center justify-center rounded-full border border-[#123d34]/20 text-[#123d34] transition-colors hover:border-[#123d34] hover:bg-[#123d34] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
                >
                  <Icon className="size-[1.1rem]" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav
            aria-label="Navegação do rodapé"
            className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3"
          >
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title}>
                <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#123d34]">
                  {title}
                </h2>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-[#123d34]/65 transition-colors hover:text-[#123d34] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="grid items-end gap-10 border-b border-[#123d34]/15 py-16 lg:grid-cols-[1fr_auto]">
          <Link
            href="/"
            aria-label="Redobra AI — início"
            className="max-w-max text-[clamp(4rem,12vw,10.5rem)] font-medium leading-[0.74] tracking-[-0.075em] text-[#123d34] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-brand-600"
          >
            Redobra<span className="text-brand-600"> AI</span>
          </Link>

          <div className="grid gap-7 text-sm sm:grid-cols-2 lg:min-w-[27rem]">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#123d34]/45">
                Localização
              </p>
              <p className="leading-relaxed text-[#123d34]/75">
                Brasil
                <br />
                Atendimento nacional
              </p>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#123d34]/45">
                Contato
              </p>
              <a
                href="https://wa.me/5551995501677"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-[#123d34]/75 transition-colors hover:text-[#123d34] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
              >
                +55 51 99550-1677
                <ArrowUpRight
                  className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-7 text-xs text-[#123d34]/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Redobrai Corp. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <Link className="transition-colors hover:text-[#123d34]" href="#">
              Política de Privacidade
            </Link>
            <Link className="transition-colors hover:text-[#123d34]" href="#">
              LGPD
            </Link>
            <span>Feito no Brasil</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
