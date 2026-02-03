import Header from "@/components/Header";
import TechSoundGate from "@/components/TechSoundGate";
import FloatingLeafWave from "@/components/FloatingLeafWave";
import MissionStrip from "@/components/MissionStrip";
import SegmentMenu from "@/components/SegmentMenu";
import VideoCard from "@/components/VideoCard";
import Testimonials from "@/components/Testimonials";
import LogosMarquee from "@/components/LogosMarquee";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 tech-grid opacity-60 pointer-events-none" />
      <TechSoundGate />
      <FloatingLeafWave />
      <Header />

      {/* missão + carrossel */}
      <MissionStrip />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-10">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs neon-border bg-black/30">
              <span className="h-2 w-2 rounded-full bg-[var(--c6)] animate-pulse" />
              Operação comercial em alta performance
            </div>

            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              Conheça nossa mais nova{" "}
              <span className="text-[var(--c6)]">coleta de dados</span> com{" "}
              <span className="inline-flex items-center gap-2">
                <img src="/placeholder/bi.svg" alt="BI" className="h-6 w-6" />
                <span className="text-[var(--c6)]">BI</span>
              </span>
            </h1>

            <p className="mt-4 text-white/80 leading-relaxed">
              CRM + IA + Performance em uma única operação, com processos claros,
              velocidade no atendimento e previsibilidade.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#contato"
                className="rounded-2xl px-5 py-3 font-medium bg-[var(--c3)] text-black hover:opacity-90 transition"
              >
                Quero estruturar meu comercial
              </a>
              <a
                href="#segmentos"
                className="rounded-2xl px-5 py-3 font-medium neon-border glow hover:bg-white/5 transition"
              >
                Ver segmentos
              </a>
            </div>

            <div id="segmentos" className="mt-10">
              <div className="text-sm text-white/70 mb-2">Nossos Segmentos</div>
              <SegmentMenu />
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden neon-border glow bg-black/20 h-[360px] md:h-[420px] flex items-center justify-center text-white/60">
            (Área do BI / imagem)
          </div>
        </div>
      </section>

      {/* Vídeo principal (adicione src quando tiver) */}
      <VideoCard
        subtitle="Demonstração"
        title="Vídeo central com visual tech"
        src="" 
        poster=""
        autoPlayOnView
      />

      {/* Missão + imagem */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 items-center neon-border glow rounded-2xl bg-black/30 p-6">
          <div className="rounded-2xl neon-border bg-black/35 h-[260px] flex items-center justify-center text-white/60">
            (Imagem missão aqui)
          </div>

          <div>
            <div className="text-xs tracking-[0.35em] uppercase text-white/60">
              Sobre a Crescer
            </div>
            <h3 className="mt-2 text-2xl font-semibold">
              Estratégia, tecnologia e execução
            </h3>
            <p className="mt-3 text-white/80 leading-relaxed">
              Criamos operações que vendem: atendimento rápido, processo claro, automações
              inteligentes e visão em dados. O objetivo é tirar o “achismo” e colocar controle,
              previsibilidade e crescimento no comercial.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>• Resposta imediata + qualificação</li>
              <li>• CRM organizado por funil e regras</li>
              <li>• IA para atendimento e triagem</li>
              <li>• BI e relatórios para decisão</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SDR Helena + vídeo */}
      <VideoCard
        subtitle="SDR IA"
        title="Nossa SDR criou vida — já adquiriu a sua?"
        src=""
        poster=""
        autoPlayOnView
      />

      <Testimonials />
      <LogosMarquee />
      <ContactForm />
      <Footer />
    </main>
  );
}