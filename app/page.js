"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import PowerBIEmbed from "../components/PowerBIEmbed";
import VideoWindow from "../components/VideoWindow";

function LogosMarquee() {
  const logos = ["Kommo", "Meta Ads", "Google Ads", "WhatsApp API", "Power BI", "n8n", "CRM", "SDR IA", "Automação", "Performance"];
  return (
    <div className="rounded-2xl border border-[rgba(81,254,97,.25)] bg-black/30 overflow-hidden">
      <div
        className="flex gap-4 py-4 px-4 whitespace-nowrap"
        style={{ animation: "marquee 18s linear infinite" }}
      >
        {[...logos, ...logos].map((t, i) => (
          <span key={i} className="inline-flex items-center rounded-full px-4 py-2 text-sm border border-[rgba(81,254,97,.18)] bg-black/40 text-white/80">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    segmento: "",
    faturamento: "",
  });

  function onChange(e) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    alert("Form enviado (por enquanto). Depois eu ligo isso no WhatsApp/API.");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <input className="rounded-xl bg-black/40 border border-[rgba(81,254,97,.20)] px-4 py-3 outline-none focus:border-[rgba(81,254,97,.45)]" placeholder="Nome" name="nome" value={form.nome} onChange={onChange} required />
        <input className="rounded-xl bg-black/40 border border-[rgba(81,254,97,.20)] px-4 py-3 outline-none focus:border-[rgba(81,254,97,.45)]" placeholder="Nome da empresa" name="empresa" value={form.empresa} onChange={onChange} required />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <input className="rounded-xl bg-black/40 border border-[rgba(81,254,97,.20)] px-4 py-3 outline-none focus:border-[rgba(81,254,97,.45)]" placeholder="Email" name="email" value={form.email} onChange={onChange} type="email" required />
        <input className="rounded-xl bg-black/40 border border-[rgba(81,254,97,.20)] px-4 py-3 outline-none focus:border-[rgba(81,254,97,.45)]" placeholder="Telefone" name="telefone" value={form.telefone} onChange={onChange} required />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <select className="rounded-xl bg-black/40 border border-[rgba(81,254,97,.20)] px-4 py-3 outline-none focus:border-[rgba(81,254,97,.45)]" name="segmento" value={form.segmento} onChange={onChange} required>
          <option value="">Segmento</option>
          <option value="Clínicas">Clínicas</option>
          <option value="Imobiliárias">Imobiliárias</option>
          <option value="Varejo">Varejo</option>
        </select>

        <select className="rounded-xl bg-black/40 border border-[rgba(81,254,97,.20)] px-4 py-3 outline-none focus:border-[rgba(81,254,97,.45)]" name="faturamento" value={form.faturamento} onChange={onChange} required>
          <option value="">Faturamento mensal</option>
          <option value="Até 20 mil">Até 20 mil</option>
          <option value="20 a 50 mil">20 a 50 mil</option>
          <option value="50 a 100 mil">50 a 100 mil</option>
          <option value="100 a 300 mil">100 a 300 mil</option>
          <option value="Acima de 300 mil">Acima de 300 mil</option>
        </select>
      </div>

      <button className="rounded-2xl px-5 py-3 font-medium bg-[#1EBF35] text-black hover:opacity-90 transition">
        Enviar
      </button>
    </form>
  );
}

export default function Home() {
  const slides = useMemo(
    () => [
      { src: "/Fotos/1.png", alt: "Resultado 1", label: "Resultado 1" },
      { src: "/Fotos/2.png", alt: "Resultado 2", label: "Resultado 2" },
      { src: "/Fotos/3.png", alt: "Resultado 3", label: "Resultado 3" },
      { src: "/Fotos/4.png", alt: "Resultado 4", label: "Resultado 4" },
      { src: "/Fotos/5.png", alt: "Resultado 5", label: "Resultado 5" },
      { src: "/Fotos/6.png", alt: "Resultado 6", label: "Resultado 6" },
    ],
    []
  );

  return (
    <main className="min-h-screen">
      <div className="grid-bg" />

      {/* Folha flutuando */}
      <div className="pointer-events-none fixed -z-10 left-[-60px] top-[-60px] opacity-40">
        <Image src="/Fotos/folha.png" alt="" width={220} height={220} className="leaf-fx" priority />
      </div>

      <Header />

      {/* Missão + Carrossel (carrossel retrato) */}
      <section className="mx-auto max-w-6xl px-4 pt-10">
        <div className="grid gap-6 md:grid-cols-2 items-start">
          <div className="rounded-2xl border border-[rgba(81,254,97,.25)] bg-black/30 p-6">
            <div className="text-xs tracking-[0.35em] uppercase text-white/60">Missão</div>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold leading-snug">
              Estruturar operações comerciais com <span className="text-[#51FE61]">CRM + IA + Performance</span>
            </h2>
            <p className="mt-3 text-white/80 leading-relaxed">
              A Crescer integra tecnologia, estratégia e execução para transformar atendimento em vendas:
              resposta rápida, qualificação, processos claros, dados para decisão e previsibilidade de receita.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["CRM", "SDR IA", "BI", "Multicanal", "Automação"].map((x) => (
                <span key={x} className="text-xs px-3 py-1 rounded-full border border-[rgba(81,254,97,.25)] bg-black/40 text-white/80">
                  {x}
                </span>
              ))}
            </div>
          </div>

          <div className="max-w-[520px] md:ml-auto">
            <Carousel slides={slides} intervalMs={2000} />
          </div>
        </div>
      </section>

      {/* Hero + BI (BI em janela) */}
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-12">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs border border-[rgba(81,254,97,.25)] bg-black/30">
              <span className="h-2 w-2 rounded-full bg-[#51FE61]" />
              Operação comercial em alta performance
            </div>

            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              Conheça nossa mais nova <span className="text-[#51FE61]">coleta de dados</span> com <span className="text-[#51FE61]">BI</span>
            </h1>

            <p className="mt-4 text-white/80 leading-relaxed">
              CRM + IA + Performance em uma única operação, com processos claros, velocidade no atendimento e previsibilidade.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#contato" className="rounded-2xl px-5 py-3 font-medium bg-[#1EBF35] text-black hover:opacity-90 transition">
                Quero estruturar meu comercial
              </a>

              <a href="/segmentos/clinicas" className="rounded-2xl px-5 py-3 font-medium border border-[rgba(81,254,97,.25)] bg-black/30 hover:bg-black/60 transition">
                Ver segmentos
              </a>
            </div>
          </div>

          <PowerBIEmbed />
        </div>
      </section>

      {/* Vídeo demo em janela (paisagem, controlado) */}
      <section className="mx-auto max-w-6xl px-4 pb-10">
        <VideoWindow title="Vídeo de demonstração" instagramUrl="https://www.instagram.com/reel/DS49B1cjRqt/" />
      </section>

      {/* Missão com imagem */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div className="rounded-2xl overflow-hidden border border-[rgba(81,254,97,.25)] bg-black/20">
            <div className="relative w-full aspect-video">
              <Image src="/Fotos/missao.png" alt="Missão Crescer" fill className="object-cover" />
            </div>
          </div>

          <div className="rounded-2xl border border-[rgba(81,254,97,.25)] bg-black/30 p-6">
            <h3 className="text-2xl font-semibold">Missão da Crescer</h3>
            <p className="mt-3 text-white/80 leading-relaxed">
              Estruturamos o comercial de ponta a ponta: atendimento rápido, qualificação automatizada, follow-up e BI para decisão.
            </p>
            <ul className="mt-4 text-white/80 text-sm list-disc pl-5 space-y-2">
              <li>Integração CRM + canais</li>
              <li>SDR IA para velocidade e consistência</li>
              <li>BI para conversão e gargalos</li>
              <li>Automação para escala</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SDR Helena (vídeo em janela paisagem) */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="grid gap-6 md:grid-cols-2 items-start">
          <div className="rounded-2xl border border-[rgba(81,254,97,.25)] bg-black/30 p-6">
            <h3 className="text-2xl font-semibold">SDR Helena</h3>
            <p className="mt-3 text-white/80 leading-relaxed">
              Nossa SDR criou vida. Já adquiriu a sua? Atendimento imediato, qualificação e direcionamento.
            </p>

            <div className="mt-5 rounded-2xl overflow-hidden border border-[rgba(81,254,97,.25)] bg-black/20">
              <div className="relative w-full aspect-[4/5]">
                <Image src="/Fotos/helena.png" alt="Helena" fill className="object-cover" />
              </div>
            </div>
          </div>

          <VideoWindow title="SDR Helena (Instagram)" instagramUrl="https://www.instagram.com/reel/DTi7BCZkjGi/" />
        </div>
      </section>

      {/* Feedback + Logos */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h3 className="text-2xl font-semibold">Clientes</h3>
        <p className="mt-2 text-white/70">Troque por logos reais depois.</p>
        <div className="mt-5">
          <LogosMarquee />
        </div>
      </section>

      {/* Form */}
      <section id="contato" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-2xl border border-[rgba(81,254,97,.25)] bg-black/30 p-6">
          <h3 className="text-2xl font-semibold">Vamos conversar</h3>
          <p className="mt-2 text-white/70 text-sm">
            Preencha e a gente monta um diagnóstico rápido do seu cenário.
          </p>

          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}