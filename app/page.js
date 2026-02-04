import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import PowerBIEmbed from "@/components/PowerBIEmbed";

export default function Home() {
  const slides = [
    { src: "/Fotos/1.png", alt: "Resultado 1", label: "Resultado 1" },
    { src: "/Fotos/2.png", alt: "Resultado 2", label: "Resultado 2" },
    { src: "/Fotos/3.png", alt: "Resultado 3", label: "Resultado 3" },
    { src: "/Fotos/4.png", alt: "Resultado 4", label: "Resultado 4" },
    { src: "/Fotos/5.png", alt: "Resultado 5", label: "Resultado 5" },
    { src: "/Fotos/6.png", alt: "Resultado 6", label: "Resultado 6" },
  ];

  return (
    <main className="min-h-screen bg-[#050805] text-white">
      {/* Header topo */}
      <Header />

      {/* BLOCO 1: Missão + Carrossel */}
      <section className="mx-auto max-w-6xl px-4 pt-8">
        <div className="grid gap-6 md:grid-cols-2 items-stretch">
          {/* MISSÃO */}
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

          {/* CARROSSEL */}
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

          {/* BI */}
          <PowerBIEmbed />
        </div>
      </section>

      {/* contato placeholder */}
      <section id="contato" className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-2xl border border-[rgba(81,254,97,.25)] bg-black/30 p-6">
          <h3 className="text-2xl font-semibold">Vamos conversar</h3>
          <p className="mt-2 text-white/70 text-sm">
            (Depois a gente encaixa o formulário completo aqui.)
          </p>
        </div>
      </section>
    </main>
  );
}