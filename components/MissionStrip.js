import Carousel from "@/components/Carousel";

const slides = [
  { src: "/placeholder/result-01.svg", alt: "Resultado 1", label: "Mais velocidade no atendimento" },
  { src: "/placeholder/result-02.svg", alt: "Resultado 2", label: "Organização de funil e processos" },
  { src: "/placeholder/result-03.svg", alt: "Resultado 3", label: "Aumento de conversão com IA" },
  { src: "/placeholder/result-04.svg", alt: "Resultado 4", label: "Dashboards e BI em tempo real" },
  { src: "/placeholder/result-05.svg", alt: "Resultado 5", label: "Retenção e nutrição automatizadas" },
  { src: "/placeholder/result-06.svg", alt: "Resultado 6", label: "Operação multicanal centralizada" },
];

export default function MissionStrip() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-8">
      <div className="grid gap-6 md:grid-cols-2 items-stretch">
        <div className="neon-border glow rounded-2xl bg-black/30 p-6">
          <div className="text-xs tracking-[0.35em] uppercase text-white/60">
            Missão
          </div>
          <h2 className="mt-3 text-2xl font-semibold leading-snug">
            Estruturar operações comerciais com{" "}
            <span className="text-[var(--c6)]">CRM + IA + Performance</span>
          </h2>
          <p className="mt-3 text-white/80 leading-relaxed">
            A Crescer integra tecnologia, estratégia e execução para transformar
            atendimento em vendas: resposta rápida, qualificação, processos claros,
            dados para decisão e previsibilidade de receita.
          </p>

          <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/70">
            <span className="neon-border rounded-full px-3 py-1 bg-black/30">CRM</span>
            <span className="neon-border rounded-full px-3 py-1 bg-black/30">SDR IA</span>
            <span className="neon-border rounded-full px-3 py-1 bg-black/30">BI</span>
            <span className="neon-border rounded-full px-3 py-1 bg-black/30">Multicanal</span>
            <span className="neon-border rounded-full px-3 py-1 bg-black/30">Automação</span>
          </div>
        </div>

        <div>
          <Carousel slides={slides} intervalMs={2000} />
        </div>
      </div>
    </section>
  );
}