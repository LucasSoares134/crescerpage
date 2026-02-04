"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import PowerBIEmbed from "@/components/PowerBIEmbed";

function InstagramEmbed({ permalink }) {
  // embed simples por iframe (mais estável que script)
  const embedUrl = useMemo(() => {
    // aceita link do reel e monta /embed
    const clean = permalink.split("?")[0].replace(/\/$/, "");
    return `${clean}/embed`;
  }, [permalink]);

  return (
    <div className="w-full">
      <div className="rounded-2xl overflow-hidden border border-[rgba(81,254,97,.25)] bg-black/20">
        <div className="relative w-full pb-[125%]">
          <iframe
            src={embedUrl}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            scrolling="no"
            allow="encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <div className="mt-2 text-xs text-white/60">
        Se não carregar,{" "}
        <a
          className="underline text-[#51FE61]"
          href={permalink}
          target="_blank"
          rel="noreferrer"
        >
          abrir no Instagram
        </a>
        .
      </div>
    </div>
  );
}

function LogosMarquee() {
  const logos = [
    "Kommo",
    "Meta Ads",
    "Google Ads",
    "WhatsApp API",
    "Power BI",
    "n8n",
    "CRM",
    "SDR IA",
    "Automação",
    "Performance",
  ];

  return (
    <div className="rounded-2xl border border-[rgba(81,254,97,.25)] bg-black/30 overflow-hidden">
      <div className="flex gap-4 py-4 px-4 whitespace-nowrap animate-[marquee_18s_linear_infinite]">
        {[...logos, ...logos].map((t, i) => (
          <span
            key={i}
            className="inline-flex items-center rounded-full px-4 py-2 text-sm border border-[rgba(81,254,97,.18)] bg-black/40 text-white/80"
          >
            {t}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
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

    // Ajuste para o seu número (formato: 55DDDNUMERO)
    const WHATSAPP_NUMBER = "SEU_NUMERO_AQUI";

    const msg = `Olá! Quero falar com a Crescer.%0A
Nome: ${form.nome}%0A
Empresa: ${form.empresa}%0A
Email: ${form.email}%0A
Telefone: ${form.telefone}%0A
Segmento: ${form.segmento}%0A
Faturamento mensal: ${form.faturamento}`;

    if (WHATSAPP_NUMBER.includes("SEU_NUMERO_AQUI")) {
      alert(
        "Formulário OK! Agora coloque seu número no código (WHATSAPP_NUMBER) para enviar direto no WhatsApp."
      );
      return;
    }

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          className="rounded-xl bg-black/40 border border-[rgba(81,254,97,.20)] px-4 py-3 outline-none focus:border-[rgba(81,254,97,.45)]"
          placeholder="Nome"
          name="nome"
          value={form.nome}
          onChange={onChange}
          required
        />
        <input
          className="rounded-xl bg-black/40 border border-[rgba(81,254,97,.20)] px-4 py-3 outline-none focus:border-[rgba(81,254,97,.45)]"
          placeholder="Nome da empresa"
          name="empresa"
          value={form.empresa}
          onChange={onChange}
          required
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <input
          className="rounded-xl bg-black/40 border border-[rgba(81,254,97,.20)] px-4 py-3 outline-none focus:border-[rgba(81,254,97,.45)]"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={onChange}
          type="email"
          required
        />
        <input
          className="rounded-xl bg-black/40 border border-[rgba(81,254,97,.20)] px-4 py-3 outline-none focus:border-[rgba(81,254,97,.45)]"
          placeholder="Telefone"
          name="telefone"
          value={form.telefone}
          onChange={onChange}
          required
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <select
          className="rounded-xl bg-black/40 border border-[rgba(81,254,97,.20)] px-4 py-3 outline-none focus:border-[rgba(81,254,97,.45)]"
          name="segmento"
          value={form.segmento}
          onChange={onChange}
          required
        >
          <option value="">Segmento</option>
          <option value="Clínicas">Clínicas</option>
          <option value="Imobiliárias">Imobiliárias</option>
          <option value="Varejo">Varejo</option>
        </select>

        <select
          className="rounded-xl bg-black/40 border border-[rgba(81,254,97,.20)] px-4 py-3 outline-none focus:border-[rgba(81,254,97,.45)]"
          name="faturamento"
          value={form.faturamento}
          onChange={onChange}
          required
        >
          <option value="">Faturamento mensal</option>
          <option value="Até 20 mil">Até 20 mil</option>
          <option value="20 a 50 mil">20 a 50 mil</option>
          <option value="50 a 100 mil">50 a 100 mil</option>
          <option value="100 a 300 mil">100 a 300 mil</option>
          <option value="Acima de 300 mil">Acima de 300 mil</option>
        </select>
      </div>

      <button className="rounded-2xl px-5 py-3 font-medium bg-[#1EBF35] text-black hover:opacity-90 transition">
        Enviar e falar com a Crescer
      </button>
    </form>
  );
}

export default function Home() {
  const slides = [
    { src: "/Fotos/1.png", alt: "Resultado 1", label: "Resultado 1" },
    { src: "/Fotos/2.png", alt: "Resultado 2", label: "Resultado 2" },
    { src: "/Fotos/3.png", alt: "Resultado 3", label: "Resultado 3" },
    { src: "/Fotos/4.png", alt: "Resultado 4", label: "Resultado 4" },
    { src: "/Fotos/5.png", alt: "Resultado 5", label: "Resultado 5" },
    { src: "/Fotos/6.png", alt: "Resultado 6", label: "Resultado 6" },
  ];

  // Som tech (opcional) — precisa existir /public/sounds/tech.mp3
  useEffect(() => {
    try {
      const a = new Audio("/sounds/tech.mp3");
      a.volume = 0.25;
      a.play().catch(() => {
        const on = () => a.play().catch(() => {});
        window.addEventListener("pointerdown", on, { once: true });
      });
    } catch {}
  }, []);

  return (
    <main className="min-h-screen text-white">
      {/* FUNDO GRID */}
      <div className="grid-bg" />

      {/* FOLHA FLUTUANDO */}
      <div className="pointer-events-none fixed -z-10 left-[-60px] top-[-60px] opacity-40">
        <Image
          src="/Fotos/folha.png"
          alt=""
          width={220}
          height={220}
          className="leaf-fx"
          priority
        />
      </div>

      <Header />

      {/* BLOCO 1: Missão + Carrossel */}
      <section className="mx-auto max-w-6xl px-4 pt-8">
        <div className="grid gap-6 md:grid-cols-2 items-stretch">
          <div className="rounded-2xl border border-[rgba(81,254,97,.25)] bg-black/30 p-6">
            <div className="text-xs tracking-[0.35em] uppercase text-white/60">
              Missão
            </div>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold leading-snug">
              Estruturar operações comerciais com{" "}
              <span className="text-[#51FE61]">CRM + IA + Performance</span>
            </h2>

            <p className="mt-3 text-white/80 leading-relaxed">
              A Crescer integra tecnologia, estratégia e execução para transformar
              atendimento em vendas: resposta rápida, qualificação, processos claros,
              dados para decisão e previsibilidade de receita.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["CRM", "SDR IA", "BI", "Multicanal", "Automação"].map((x) => (
                <span
                  key={x}
                  className="text-xs px-3 py-1 rounded-full border border-[rgba(81,254,97,.25)] bg-black/40 text-white/80"
                >
                  {x}
                </span>
              ))}
            </div>
          </div>

          <Carousel slides={slides} intervalMs={2000} />
        </div>
      </section>

      {/* BLOCO 2: Hero + BI */}
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-12">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs border border-[rgba(81,254,97,.25)] bg-black/30">
              <span className="h-2 w-2 rounded-full bg-[#51FE61]" />
              Operação comercial em alta performance
            </div>

            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              Conheça nossa mais nova{" "}
              <span className="text-[#51FE61]">coleta de dados</span> com{" "}
              <span className="text-[#51FE61]">BI</span>
            </h1>

            <p className="mt-4 text-white/80 leading-relaxed">
              CRM + IA + Performance em uma única operação, com processos claros,
              velocidade no atendimento e previsibilidade.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#contato"
                className="rounded-2xl px-5 py-3 font-medium bg-[#1EBF35] text-black hover:opacity-90 transition"
              >
                Quero estruturar meu comercial
              </a>

              <a
                href="/segmentos/clinicas"
                className="rounded-2xl px-5 py-3 font-medium border border-[rgba(81,254,97,.25)] bg-black/30 hover:bg-black/60 transition"
              >
                Ver segmentos
              </a>
            </div>
          </div>

          <PowerBIEmbed />
        </div>
      </section>

      {/* VÍDEO CENTRAL (DEMO) */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-2xl border border-[rgba(81,254,97,.25)] bg-[#04270A]/25 p-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h3 className="text-2xl font-semibold">Vídeo central com visual tech</h3>
            <span className="text-xs text-white/70">
              Demonstração (Instagram embed)
            </span>
          </div>

          <div className="mt-5 grid gap-6 md:grid-cols-2 items-center">
            <div className="text-white/80 leading-relaxed">
              Um preview rápido do que entregamos: CRM integrado, IA respondendo,
              automações e dados em tempo real. Tudo com estética tech e foco em conversão.
              <div className="mt-4 flex gap-2 flex-wrap">
                <span className="text-xs px-3 py-1 rounded-full border border-[rgba(81,254,97,.25)] bg-black/30">
                  24/7
                </span>
                <span className="text-xs px-3 py-1 rounded-full border border-[rgba(81,254,97,.25)] bg-black/30">
                  Processos
                </span>
                <span className="text-xs px-3 py-1 rounded-full border border-[rgba(81,254,97,.25)] bg-black/30">
                  Dados
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-2xl blur-2xl bg-[rgba(81,254,97,.10)]" />
              <div className="relative rounded-2xl overflow-hidden border border-[rgba(81,254,97,.25)] bg-black/30">
                <div className="absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-xs bg-black/60 border border-[rgba(81,254,97,.25)]">
                  ▶ Play
                </div>
                <InstagramEmbed permalink="https://www.instagram.com/reel/DS49B1cjRqt/" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSÃO COM IMAGEM */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div className="rounded-2xl overflow-hidden border border-[rgba(81,254,97,.25)] bg-black/20">
            <div className="relative w-full h-[260px] md:h-[320px]">
              <Image
                src="/Fotos/missao.png"
                alt="Missão Crescer"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-[rgba(81,254,97,.25)] bg-black/30 p-6">
            <h3 className="text-2xl font-semibold">
              Missão da Crescer: tecnologia que vira venda
            </h3>
            <p className="mt-3 text-white/80 leading-relaxed">
              Nosso trabalho é estruturar o comercial de ponta a ponta:
              atendimento rápido, qualificação automatizada, cadência de follow-up,
              dashboards para decisão e processos que tornam previsível o crescimento.
            </p>
            <ul className="mt-4 text-white/80 text-sm list-disc pl-5 space-y-2">
              <li>Integração CRM + canais (WhatsApp / Instagram / Web)</li>
              <li>SDR IA para ganhar velocidade e consistência</li>
              <li>BI para acompanhar conversão e gargalos em tempo real</li>
              <li>Automação para reduzir custo e aumentar a taxa de resposta</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SDR HELENA */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div className="rounded-2xl border border-[rgba(81,254,97,.25)] bg-black/30 p-6">
            <h3 className="text-2xl font-semibold">SDR Helena</h3>
            <p className="mt-3 text-white/80 leading-relaxed">
              Nossa SDR criou vida. Já adquiriu a sua?
              Atendimento imediato, qualificação e direcionamento para o consultor certo.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Resposta rápida", "Qualificação", "Handoff", "Organização no CRM"].map(
                (x) => (
                  <span
                    key={x}
                    className="text-xs px-3 py-1 rounded-full border border-[rgba(81,254,97,.25)] bg-black/40 text-white/80"
                  >
                    {x}
                  </span>
                )
              )}
            </div>

            <div className="mt-5 rounded-2xl overflow-hidden border border-[rgba(81,254,97,.25)] bg-black/20">
              <div className="relative w-full h-[220px]">
                <Image
                  src="/Fotos/helena.png"
                  alt="Helena"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <InstagramEmbed permalink="https://www.instagram.com/reel/DTi7BCZkjGi/" />
        </div>
      </section>

      {/* FEEDBACKS */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h3 className="text-2xl font-semibold">O que os clientes dizem</h3>
        <p className="mt-2 text-white/70">
          Resultados e processo bem amarrado fazem a diferença.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            {
              img: "/Fotos/2.png",
              txt: "Atendimento ficou muito mais rápido e organizado. A equipe parou de perder lead.",
              nome: "Cliente 1",
            },
            {
              img: "/Fotos/3.png",
              txt: "A IA qualificou melhor e o comercial focou no que realmente fecha.",
              nome: "Cliente 2",
            },
            {
              img: "/Fotos/4.png",
              txt: "Dashboard trouxe clareza. Agora sabemos onde ajustar e onde investir.",
              nome: "Cliente 3",
            },
          ].map((t) => (
            <div
              key={t.nome}
              className="rounded-2xl border border-[rgba(81,254,97,.25)] bg-black/30 overflow-hidden"
            >
              <div className="relative w-full h-[140px]">
                <Image src={t.img} alt={t.nome} fill className="object-cover" />
              </div>
              <div className="p-5">
                <p className="text-white/80 text-sm leading-relaxed">“{t.txt}”</p>
                <div className="mt-3 text-sm font-medium text-white">{t.nome}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LOGOS PASSANDO */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h3 className="text-2xl font-semibold">Clientes e tecnologias</h3>
        <p className="mt-2 text-white/70">
          Marcas/stack aqui — você pode trocar pelos logos reais depois.
        </p>
        <div className="mt-5">
          <LogosMarquee />
        </div>
      </section>

      {/* FORMULÁRIO */}
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

      {/* FOOTER */}
      <footer className="border-t border-[rgba(81,254,97,.15)] bg-black/60">
        <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-xl overflow-hidden border border-[rgba(81,254,97,.25)] bg-black/30">
              <Image src="/Fotos/folha.png" alt="Crescer" fill className="object-contain" />
            </div>
            <div>
              <div className="font-semibold">CRESCER</div>
              <div className="text-xs text-white/70">
                CRM • IA • Performance • Automação
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            {/* Troque os links pelos seus */}
            <a
              className="rounded-xl px-4 py-2 text-sm border border-[rgba(81,254,97,.25)] bg-black/30 hover:bg-black/60 transition"
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a
              className="rounded-xl px-4 py-2 text-sm border border-[rgba(81,254,97,.25)] bg-black/30 hover:bg-black/60 transition"
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}