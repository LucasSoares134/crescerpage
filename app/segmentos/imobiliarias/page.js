import Header from "@/components/Header";
import FloatingLeafWave from "@/components/FloatingLeafWave";

export default function Imobiliarias() {
  return (
    <main className="bgTech min-h-screen">
      <FloatingLeafWave />
      <Header />
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-28 pb-16">
        <div className="card p-8">
          <h1 className="text-3xl font-semibold">Imobiliárias</h1>
          <p className="mt-3 text-white/75">
            Página em construção. Aqui entra a oferta específica de imóveis, funis e automações.
          </p>
        </div>
      </div>
    </main>
  );
}