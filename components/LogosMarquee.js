import Image from "next/image";

const logos = [
  "/placeholder/logo-01.svg",
  "/placeholder/logo-02.svg",
  "/placeholder/logo-03.svg",
  "/placeholder/logo-04.svg",
  "/placeholder/logo-05.svg",
  "/placeholder/logo-06.svg",
  "/placeholder/logo-07.svg",
  "/placeholder/logo-08.svg",
];

export default function LogosMarquee() {
  const row = [...logos, ...logos];

  return (
    <section className="mx-auto max-w-6xl px-4 pb-10">
      <div className="neon-border glow rounded-2xl bg-black/25 overflow-hidden">
        <div className="px-5 pt-4 text-sm text-white/70">Clientes</div>

        <div className="relative">
          <div
            className="flex gap-6 py-6 w-[200%]"
            style={{ animation: "marquee 18s linear infinite" }}
          >
            {row.map((src, i) => (
              <div key={i} className="relative h-12 w-40 opacity-80 hover:opacity-100 transition">
                <Image src={src} alt={`Logo ${i + 1}`} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}