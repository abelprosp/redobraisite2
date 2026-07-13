"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 py-3 shadow-sm"
          : "bg-white py-4"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo height={34} priority />

        <div className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors">
                  {link.label}
                  <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                </button>
                <AnimatePresence>
                  {openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-0 w-56 bg-white border border-gray-200 rounded-sm shadow-lg p-1"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-3 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-sm transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href!}
                className="px-3 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button href="/#contato" size="sm">
            Solicitar Demonstração
          </Button>
        </div>

        <button
          type="button"
          className="flex min-h-11 min-w-11 items-center justify-center rounded-full text-gray-700 transition-colors hover:bg-gray-100 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            className="max-h-[calc(100dvh-4.25rem)] overflow-y-auto border-t border-gray-200 bg-white shadow-xl lg:hidden"
          >
            <div className="space-y-1 px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-3 sm:px-6">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div key={link.label} className="border-b border-gray-100 py-2 last:border-0">
                    <p className="px-3 pb-1.5 pt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400">
                      {link.label}
                    </p>
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="flex min-h-11 items-center rounded-lg px-3 py-2.5 text-[15px] text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href!}
                    className="flex min-h-11 items-center rounded-lg px-3 py-2.5 text-[15px] text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-4">
                <Button href="/#contato" size="lg" className="min-h-12 w-full justify-center">
                  Solicitar Demonstração
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
