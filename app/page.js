"use client";

import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import ResultsCarousel from "../components/ResultsCarousel";
import PowerBiEmbed from "../components/PowerBiEmbed";
import InstagramEmbed from "../components/InstagramEmbed";
import Footer from "../components/Footer";

export default function Page() {
  const [soundArmed, setSoundArmed] = useState(false);
  const demoRef = useRef(null);

  useEffect(() => {
    const play = async () => {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioCtx();
        const o = ctx.createOscillator();
        const g = ctx.createGain();

        o.type = "sine";
        o.frequency.value = 740;
        g.gain.value = 0.0001;

        o.connect(g);
        g.connect(ctx.destination);

        o.start();

        g.gain.setValueAtTime(0.0001, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.14);

        o.stop(ctx.currentTime + 0.16);

        setSoundArmed(true);
      } catch {
        // se o navegador bloquear autoplay, tudo bem
      }
    };

    play();

    const onFirst = () => play();
    window.addEventListener("pointerdown", onFirst, { once: true });

    return () => window.removeEventListener("pointerdown", onFirst);
  }, []);

  const scrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="bgTech min-h-screen">
      {/* onda (folha + texto) */}
      <img src="/Fotos/folha.png" alt="" className="leafWave h-16 w-16" />
      <div className="textWave text-xs">
        <span className="textWaveText">C R E S C E R</span>
      </div>

      <Header />

      <div className="mx-auto max-w-6xl px-4 pt-10 pb-12">
        {/* Missão + Carousel */}
        <section className="grid gap-6 lg:grid-cols-2">
          <div className="card p-6">
            <div className="text-xs tracking-[0.3em] text-white/50">MISSÃO</div>
            <h1 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight">
              Estruturar operações comerciais com{" "}
              <span className="text-[var(--c6)]">CRM + IA + Performance</span>
            </h1>
            <p className="mt-4 text-white/75 leading-relaxed">
              A Crescer integra tecnologia, estratégia e execução para transformar
              atendimento em vendas: resposta rápida, qualificação, processos claros,
              dados para decisão e previsibilidade de receita.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["CRM", "SDR IA", "BI", "Multicanal", "Automação"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <ResultsCarousel />
        </section>

        {/* Hero + BI */}
        <section className="mt-10 grid gap-6 lg:grid-cols-2 items-start">
          <div className="card p-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--c6)]/25 bg-[var(--c2)]/15 text-xs text-white/80">
              <span className="h-2 w-2 rounded-full bg-[var(--c6)]"></span>
              Operação comercial em alta performance
            </div>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              Conheça nossa mais nova{" "}
              <span className="text-[var(--c6)]">coleta de dados</span> com{" "}
              <span className="text-[var(--c6)]">BI</span>
            </h2>

            <p className="mt-4 text-white/75 leading-relaxed">
              CRM + IA + Performance em uma única operação, com processos claros,
              velocidade no atendimento e previsibilidade.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="btn btn-primary" onClick={scrollToDemo}>
                Quero estruturar meu comercial
              </button>
              <a className="btn btn-ghost" href="/segmentos/clinicas">
                Ver segmentos
              </a>
            </div>
          </div>

          <PowerBiEmbed />
        </section>

        {/* Vídeo de demonstração */}
        <section ref={demoRef} className="mt-12 card p-6">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold">Vídeo de demonstração</h3>
            <a
              className="text-sm text-[var(--c6)] underline"
              href="https://www.instagram.com/reel/DS49B1cjRqt/"
              target="_blank"
              rel="noreferrer"
            >
              abrir no Instagram
            </a>
          </div>

          <div className="mt-4 overflow-hidden rounded-3xl border border-[var(--c6)]/20 bg-black/40">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src="https://www.instagram.com/reel/DS49B1cjRqt/embed"
                frameBorder="0"
                allow="encrypted-media; clipboard-write"
              />
            </div>
          </div>
        </section>

        {/* Missão + imagem */}
        <section className="mt-12 grid gap-6 lg:grid-cols-2 items-center">
          <div className="card p-6">
            <div className="text-xs tracking-[0.3em] text-white/50">SOBRE</div>
            <h3 className="mt-3 text-2xl md:text-3xl font-semibold">
              Estratégia, tecnologia e execução no mesmo playbook
            </h3>
            <p className="mt-4 text-white/75 leading-relaxed">
              A Crescer nasce para organizar o comercial com método e dados.
              Implementamos CRM, criamos automações, integramos WhatsApp API oficial e
              colocamos IA para atender e qualificar em segundos — enquanto você
              acompanha tudo em dashboards e metas claras.
            </p>
          </div>

          <div className="card p-3">
            <div className="overflow-hidden rounded-3xl border border-[var(--c6)]/20 bg-black/40">
              <div className="aspect-[4/5] w-full">
                <img
                  src="/Fotos/missao.png"
                  alt="Missão"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SDR Helena */}
        <section className="mt-12 grid gap-6 lg:grid-cols-2 items-start">
          <div className="card p-6">
            <h3 className="text-2xl font-semibold">SDR Helena</h3>
            <p className="mt-2 text-white/75">
              Nossa SDR criou vida. Já adquiriu a sua? Atendimento imediato,
              qualificação e direcionamento.
            </p>

            <div className="mt-4 overflow-hidden rounded-3xl border border-[var(--c6)]/20 bg-black/40">
              <div className="aspect-[4/5] w-full">
                <img
                  src="/Fotos/helena.png"
                  alt="Helena SDR"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <InstagramEmbed url="https://www.instagram.com/reel/DTi7BCZkjGi/" />
        </section>

        {/* Form (placeholder) */}
        <section className="mt-12 card p-6">
          <h3 className="text-2xl font-semibold">Vamos conversar</h3>
          <p className="mt-2 text-white/70">Preencha e a Crescer entra em contato.</p>

          <form
            className="mt-6 grid gap-4 md:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Formulário enviado (placeholder). Depois integramos com Kommo/n8n.");
            }}
          >
            <input className="card px-4 py-3 bg-black/30" placeholder="Nome" required />
            <input className="card px-4 py-3 bg-black/30" placeholder="Nome da empresa" required />
            <input className="card px-4 py-3 bg-black/30" placeholder="E-mail" type="email" required />
            <input className="card px-4 py-3 bg-black/30" placeholder="Telefone" required />
            <select className="card px-4 py-3 bg-black/30" required defaultValue="">
              <option value="" disabled>Segmento</option>
              <option>Clínicas</option>
              <option>Imobiliárias</option>
              <option>Varejo</option>
            </select>
            <input className="card px-4 py-3 bg-black/30" placeholder="Faturamento mensal" />

            <div className="md:col-span-2 flex gap-3 flex-wrap">
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
              <a
                className="btn btn-ghost"
                href="https://wa.me/5562999999999"
                target="_blank"
                rel="noreferrer"
              >
                Chamar no WhatsApp
              </a>
              {!soundArmed && (
                <span className="text-xs text-white/50 self-center">
                  (se o som não tocou, clique na página para ativar)
                </span>
              )}
            </div>
          </form>
        </section>
      </div>

      <Footer />
    </main>
  );
}