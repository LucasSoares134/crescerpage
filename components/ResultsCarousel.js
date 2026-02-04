"use client";

import { useEffect, useMemo, useState } from "react";

export default function ResultsCarousel() {
  const slides = useMemo(
    () => ["/Fotos/1.png", "/Fotos/2.png", "/Fotos/3.png", "/Fotos/4.png", "/Fotos/5.png", "/Fotos/6.png"],
    []
  );

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((v) => (v + 1) % slides.length);
    }, 2000);
    return () => clearInterval(t);
  }, [slides.length]);

  const prev = () => setIdx((v) => (v - 1 + slides.length) % slides.length);
  const next = () => setIdx((v) => (v + 1) % slides.length);

  return (
    <div className="card p-3">
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm text-white/80">Resultados</div>
        <div className="text-xs text-white/50">auto 2s • clique muda na hora</div>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-[var(--c6)]/20 bg-black/40">
        {/* retrato */}
        <div className="aspect-[4/5] w-full">
          <img
            src={slides[idx]}
            alt={`Resultado ${idx + 1}`}
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>

        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 btn btn-ghost px-3"
          aria-label="Anterior"
        >
          ←
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 btn btn-ghost px-3"
          aria-label="Próximo"
        >
          →
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-2 w-2 rounded-full ${i === idx ? "bg-[var(--c6)]" : "bg-white/25"}`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}