import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href = "#contato",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex min-h-11 items-center justify-center text-center font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600 motion-reduce:transition-none";

  const variants = {
    primary:
      "bg-brand-600 text-white hover:bg-brand-700 rounded-sm",
    secondary:
      "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 rounded-sm",
    ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-sm",
    link: "text-brand-600 hover:text-brand-700 p-0",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-[15px] sm:text-base",
  };

  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${variant === "link" ? "" : sizes[size]} ${className}`}
    >
      {children}
    </a>
  );
}
