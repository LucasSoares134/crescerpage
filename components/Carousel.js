"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Carousel({ slides = [], intervalMs = 2000 }) {
  const [idx, setIdx] = useState(0);
  const hovering = useRef(false);
  const total = slides.length;
  const canRun = total > 1;

  const next = () => setIdx((p) => (p + 1) % total);
  const prev = () => setIdx((p) => (p - 1 + total) % total);

  useEffect(() => {
    if (!canRun) return;
    const t = setInterval(() => {
      if (!hovering.current) next();
    }, intervalMs);
    return () => clearInterval(t);
  }, [intervalMs, total, canRun]);

  const current = slides[idx];

  return (
    <div
      className="relative rounded-2xl overflow-hidden border border-[rgba(81,254,97,.25)] bg-black/30"
      onMouseEnter={() => (hovering.current = true)}
      onMouseLeave={() => (hovering.current = false)}
    >
      <div className="relative w-full h-[260px] md:h-[320px]">
        <Image
          src={current?.src || "/Fotos/1.png"}
          alt={current?.alt || "Slide"}
          fill
          className="object-cover"
          priority
        />
      </div>

      {!!current?.label && (
        <div className="absolute left-4 top-4 text-xs text-white/80 border border-[rgba(81,254,97,.25)] bg-black/60 backdrop-blur rounded-full px-3 py-1">
          {current.label}
        </div>
      )}

      {canRun && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 border border-[rgba(81,254,97,.25)] bg-black/50 hover:bg-black/70 transition rounded-full w-10 h-10 grid place-items-center text-white"
            aria-label="Anterior"
          >
            ←
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 border border-[rgba(81,254,97,.25)] bg-black/50 hover:bg-black/70 transition rounded-full w-10 h-10 grid place-items-center text-white"
            aria-label="Próximo"
          >
            →
          </button>
        </>
      )}

      {canRun && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === idx ? "bg-[#51FE61]" : "bg-white/25"
              }`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}