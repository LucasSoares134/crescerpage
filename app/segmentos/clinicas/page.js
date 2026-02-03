import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ClinicasPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="neon-border glow rounded-2xl bg-black/30 p-6">
          <h1 className="text-3xl font-semibold">Crescer para Clínicas</h1>
          <p className="mt-3 text-white/80">
            Agendamentos, atendimento rápido, qualificação e processo comercial sem ruído.
          </p>

          <ul className="mt-5 space-y-2 text-sm text-white/75">
            <li>• IA para triagem e confirmação</li>
            <li>• Funil de consultas e retorno</li>
            <li>• Automação de follow-up e pós-consulta</li>
            <li>• Relatórios e BI de conversão</li>
          </ul>

          <a
            href="/#contato"
            className="mt-6 inline-block rounded-2xl bg-[var(--c3)] text-black font-medium px-5 py-3 hover:opacity-90 transition"
          >
            Quero aplicar na minha clínica
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}