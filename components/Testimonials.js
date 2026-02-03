import Image from "next/image";

const items = [
  {
    img: "/placeholder/test-01.svg",
    name: "Cliente 01",
    text: "Organizamos o funil, reduzimos tempo de resposta e aumentamos a previsibilidade do comercial.",
  },
  {
    img: "/placeholder/test-02.svg",
    name: "Cliente 02",
    text: "A operação ficou muito mais rápida. Agora o lead é atendido e qualificado sem gargalo.",
  },
  {
    img: "/placeholder/test-03.svg",
    name: "Cliente 03",
    text: "Integração com CRM + automações trouxe clareza: sabemos o que medir e onde melhorar.",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="text-xs tracking-[0.35em] uppercase text-white/60">
            Feedbacks
          </div>
          <h3 className="mt-2 text-2xl font-semibold">O que nossos clientes dizem</h3>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.name} className="neon-border glow rounded-2xl bg-black/35 overflow-hidden">
            <div className="relative h-40">
              <Image src={it.img} alt={it.name} fill className="object-cover" />
            </div>
            <div className="p-5">
              <div className="font-semibold">{it.name}</div>
              <p className="mt-2 text-sm text-white/80 leading-relaxed">{it.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}