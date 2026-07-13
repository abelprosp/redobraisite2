import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { FOOTER_LINKS } from "@/lib/constants";

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/company/redobrai-corp",
    label: "LinkedIn",
    icon: "linkedin",
  },
  {
    href: "https://www.instagram.com/redobrai/",
    label: "Instagram",
    icon: "instagram",
  },
  {
    href: "https://wa.me/5551995501677",
    label: "WhatsApp",
    icon: "whatsapp",
  },
] as const;

function SocialIcon({ name }: { name: (typeof SOCIAL_LINKS)[number]["icon"] }) {
  if (name === "linkedin") {
    return (
      <svg
        aria-hidden="true"
        className="size-[1.05rem]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg
        aria-hidden="true"
        className="size-[1.1rem]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
      </svg>
    );
  }

  return <MessageCircle aria-hidden="true" className="size-[1.1rem]" />;
}

export function Footer() {
  return (
    <footer id="empresa" className="bg-[#f7f8f5] text-[#123d34]">
      <div className="mx-auto max-w-[90rem] px-4 pb-7 pt-14 sm:px-6 sm:pt-20 lg:px-8 lg:pt-28">
        <div className="grid gap-12 border-b border-[#123d34]/15 pb-14 sm:gap-16 sm:pb-20 lg:grid-cols-[1.15fr_1fr] lg:gap-24">
          <div>
            <p className="max-w-md text-xl leading-snug tracking-tight text-[#123d34]/75 sm:text-2xl">
              Tecnologia brasileira para transformar operações, negócios e ideias.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {SOCIAL_LINKS.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`${label} da Redobra AI (abre em nova aba)`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-11 items-center justify-center rounded-full border border-[#123d34]/20 text-[#123d34] transition-colors hover:border-[#123d34] hover:bg-[#123d34] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
                >
                  <SocialIcon name={icon} />
                </a>
              ))}
            </div>
          </div>

          <nav
            aria-label="Navegação do rodapé"
            className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-12"
          >
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title}>
                <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#123d34]">
                  {title}
                </h2>
                <ul className="space-y-1">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="inline-flex min-h-10 items-center py-1 text-sm leading-snug text-[#123d34]/65 transition-colors hover:text-[#123d34] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
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

        <div className="grid items-end gap-9 border-b border-[#123d34]/15 py-12 sm:py-16 lg:grid-cols-[1fr_auto]">
          <Link
            href="/"
            aria-label="Redobra AI — início"
            className="max-w-full text-[clamp(3.15rem,12vw,10.5rem)] font-medium leading-[0.82] tracking-[-0.075em] text-[#123d34] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-brand-600 sm:max-w-max sm:leading-[0.74]"
          >
            Redobra<span className="text-brand-600"> AI</span>
          </Link>

          <div className="grid gap-7 text-sm min-[380px]:grid-cols-2 lg:min-w-[27rem]">
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
                className="group inline-flex min-h-11 items-center gap-1.5 text-[#123d34]/75 transition-colors hover:text-[#123d34] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
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
