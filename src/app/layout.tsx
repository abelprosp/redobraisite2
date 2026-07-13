import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { MotionProvider } from "@/components/effects/MotionProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Redobrai Corp — Software, IA e Tecnologia com Propósito",
  description:
    "Software customizado, visão computacional, agentes de IA, Redobrai Foundation e Redobrai Partner. Tecnologia brasileira que transforma empresas e impacta vidas.",
  keywords: [
    "agentes de IA",
    "inteligência artificial empresarial",
    "orquestração de IA",
    "automação empresarial",
    "Redobrai",
  ],
  icons: {
    icon: "/logo-redobrai.png",
    apple: "/logo-redobrai.png",
  },
  openGraph: {
    title: "Redobrai Corp — O Sistema Operacional para Empresas movidas por IA",
    description:
      "A principal plataforma brasileira para criação, orquestração e gerenciamento de Agentes de Inteligência Artificial.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/logo-redobrai.png", alt: "Redobrai Corp" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white font-sans antialiased text-gray-900">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
