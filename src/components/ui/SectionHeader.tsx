"use client";

import { ReactNode } from "react";
import { ScrollReveal } from "./ScrollReveal";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  return (
    <ScrollReveal
      className={`mb-9 max-w-3xl sm:mb-12 ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {badge && (
        <span className="inline-block mb-4 px-3 py-1 rounded-sm text-xs font-medium tracking-wider uppercase bg-brand-100 text-brand-700">
          {badge}
        </span>
      )}
      <h2
        className={`text-[1.75rem] sm:text-3xl lg:text-4xl font-normal tracking-[-0.025em] leading-[1.16] ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-[15px] leading-6 sm:text-base md:text-lg md:leading-relaxed ${
            light ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}

export function Section({
  children,
  id,
  className = "",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`section-padding relative ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
