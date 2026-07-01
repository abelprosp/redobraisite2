"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

const WHATSAPP_NUMBER = "5551995501677";

function buildWhatsAppUrl(name: string, company: string, phone: string) {
  const message = `Olá! Gostaria de solicitar uma demonstração da Redobrai.

*Nome:* ${name}
*Empresa:* ${company}
*WhatsApp:* ${phone}

_Mensagem enviada pelo site Redobrai Corp._`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function DemoRequestForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    const trimmedName = name.trim();
    const trimmedCompany = company.trim();
    const trimmedPhone = phone.trim();

    if (!trimmedName || !trimmedCompany || !trimmedPhone) {
      setError("Preencha todos os campos para continuar.");
      return;
    }

    const digits = trimmedPhone.replace(/\D/g, "");
    if (digits.length < 10) {
      setError("Informe um WhatsApp válido com DDD.");
      return;
    }

    window.open(buildWhatsAppUrl(trimmedName, trimmedCompany, trimmedPhone), "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="ibm-card rounded-sm p-6 md:p-8 bg-white text-left max-w-lg mx-auto"
    >
      <h3 className="text-lg font-medium text-gray-900 mb-1">Solicitar Demonstração</h3>
      <p className="text-sm text-gray-600 mb-6">
        Preencha os dados abaixo e você será direcionado ao WhatsApp para falar com nossa equipe.
      </p>

      <div className="space-y-4">
        <div>
          <label htmlFor="demo-name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Nome
          </label>
          <input
            id="demo-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome completo"
            className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-sm bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-600/30 focus:border-brand-600"
            autoComplete="name"
          />
        </div>

        <div>
          <label htmlFor="demo-company" className="block text-sm font-medium text-gray-700 mb-1.5">
            Nome da empresa
          </label>
          <input
            id="demo-company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Empresa Ltda."
            className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-sm bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-600/30 focus:border-brand-600"
            autoComplete="organization"
          />
        </div>

        <div>
          <label htmlFor="demo-phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            WhatsApp
          </label>
          <input
            id="demo-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(51) 99999-9999"
            className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-sm bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-600/30 focus:border-brand-600"
            autoComplete="tel"
          />
        </div>
      </div>

      {error && (
        <p className="mt-4 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-brand-600 text-white hover:bg-brand-700 px-6 py-3 text-sm font-medium rounded-sm transition-colors"
      >
        Enviar pelo WhatsApp
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
}
