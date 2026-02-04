"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function PhotoCarousel({
  folder = "/Fotos",
  images = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"],
  intervalMs = 2000,
  titlePrefix = "Foto",
  aspect = "aspect-[9/16]",
  fit = "object-contain",
}) {
  const list = useMemo(() => images.map((f) => `${folder}/${f}`), [folder, images]);
  const [i, setI] = useState(0);

  const next = () => setI((v) => (v + 1) % list.length);
  const prev = () => setI((v) => (v - 1 + list.length) % list.length);

  useEffect(() => {
    const t = setInterval(next, intervalMs);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intervalMs, list.length]);

  return (
    <div className="card p-3">
      <div className="relative">
        <div className={`relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 ${aspect}`}>
          <Image
            src={list[i]}
            alt={`${titlePrefix} ${i + 1}`}
            fill
            className={`${fit}`}
            sizes="(max-width: 768px) 100vw, 520px"
            priority={i === 0}
          />

          {/* Label */}
          <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs text-white/80">
            {titlePrefix} {i + 1}
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/60 p-2 text-white/80 hover:bg-black/80"
            aria-label="Anterior"
          >
            ←
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/60 p-2 text-white/80 hover:bg-black/80"
            aria-label="Próximo"
          >
            →
          </button>
        </div>

        {/* Dots */}
        <div className="mt-3 flex items-center justify-center gap-2">
          {list.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-2 w-2 rounded-full transition ${
                idx === i ? "bg-[var(--c6)]" : "bg-white/20 hover:bg-white/35"
              }`}
              aria-label={`Ir para ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}