"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function Carousel({ slides, intervalMs = 2000 }) {
  const [idx, setIdx] = useState(0);
  const [tick, setTick] = useState(0);

  const total = slides.length;

  const next = () => {
    setIdx((v) => (v + 1) % total);
    setTick((t) => t + 1);
  };

  const prev = () => {
    setIdx((v) => (v - 1 + total) % total);
    setTick((t) => t + 1);
  };

  const go = (i) => {
    setIdx(i);
    setTick((t) => t + 1);
  };

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((v) => (v + 1) % total);
    }, intervalMs);
    return () => clearInterval(t);
  }, [intervalMs, total, tick]);

  const current = useMemo(() => slides[idx], [slides, idx]);

  return (
    <div className="neon-border glow rounded-2xl bg-black/35 overflow-hidden">
      <div className="relative h-[200px] md:h-[220px]">
        <Image
          src={current.src}
          alt={current.alt}
          fill
          priority
          className="object-cover"
          onClick={next}
        />

        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-xl bg-black/60 neon-border px-3 py-2 text-sm hover:bg-black/80 transition"
          aria-label="Anterior"
        >
          ←
        </button>

        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl bg-black/60 neon-border px-3 py-2 text-sm hover:bg-black/80 transition"
          aria-label="Próximo"
        >
          →
        </button>

        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`h-2 w-2 rounded-full transition ${
                i === idx ? "bg-[var(--c6)]" : "bg-white/30"
              }`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="px-4 py-3 text-sm text-white/80">
        <span className="text-white/60">Resultados:</span>{" "}
        <span className="font-medium">{current.label}</span>
      </div>
    </div>
  );
}