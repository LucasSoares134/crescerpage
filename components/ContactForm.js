"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState({ type: "idle", msg: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", msg: "Enviando..." });

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Falha ao enviar");
      setStatus({ type: "ok", msg: "Recebido! Em breve entraremos em contato." });
      e.currentTarget.reset();
    } catch {
      setStatus({ type: "err", msg: "Não foi possível enviar. Tente novamente." });
    }
  };

  return (
    <section id="contato" className="mx-auto max-w-6xl px-4 py-14">
      <div className="neon-border glow rounded-2xl bg-black/30 p-6">
        <h3 className="text-2xl font-semibold">Vamos conversar</h3>
        <p className="mt-2 text-white/80">
          Preencha e nossa equipe retorna com uma análise rápida.
        </p>

        <form onSubmit={onSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
          <Field label="Nome" name="nome" placeholder="Seu nome" required />
          <Field label="Nome da empresa" name="empresa" placeholder="Empresa" required />
          <Field label="E-mail" name="email" type="email" placeholder="email@empresa.com" required />
          <Field label="Telefone" name="telefone" placeholder="(00) 00000-0000" required />
          <Field label="Segmento" name="segmento" placeholder="Clínicas, Imobiliárias, Varejo..." required />
          <Field label="Faturamento mensal" name="faturamento" placeholder="Ex: 50k, 200k..." />

          <div className="md:col-span-2 flex flex-wrap items-center gap-3 mt-2">
            <button
              type="submit"
              disabled={status.type === "loading"}
              className="rounded-2xl px-6 py-3 font-medium bg-[var(--c3)] text-black hover:opacity-90 transition disabled:opacity-60"
            >
              Enviar
            </button>

            <span
              className={`text-sm ${
                status.type === "ok"
                  ? "text-[var(--c6)]"
                  : status.type === "err"
                  ? "text-red-400"
                  : "text-white/60"
              }`}
            >
              {status.msg}
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, required = false }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm text-white/70">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl bg-black/40 neon-border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--c6)]/30"
      />
    </label>
  );
}