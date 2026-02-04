"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    const onDoc = (e) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-[var(--c2)]/20 border border-[var(--c6)]/25 flex items-center justify-center overflow-hidden">
            <img
              src="/Fotos/folha.png"
              alt="Crescer"
              className="h-7 w-7 object-contain"
            />
          </div>
          <div className="leading-tight">
            <div className="font-semibold tracking-wide">CRESCER</div>
            <div className="text-xs text-white/60">Assessoria de Marketing</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative" ref={wrapRef}>
            <button
              className="btn btn-ghost"
              onClick={() => setOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={open}
            >
              Segmentos <span className="ml-1">▼</span>
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-48 card p-2">
                <button
                  className="w-full text-left px-3 py-2 rounded-xl hover:bg-white/10"
                  onClick={() => router.push("/segmentos/clinicas")}
                >
                  Clínicas
                </button>
                <button
                  className="w-full text-left px-3 py-2 rounded-xl hover:bg-white/10"
                  onClick={() => router.push("/segmentos/imobiliarias")}
                >
                  Imobiliárias
                </button>
                <button
                  className="w-full text-left px-3 py-2 rounded-xl hover:bg-white/10"
                  onClick={() => router.push("/segmentos/varejo")}
                >
                  Varejo
                </button>
              </div>
            )}
          </div>

          <a
            className="btn btn-ghost border-[var(--c6)]/30"
            href="https://wa.me/5562999999999"
            target="_blank"
            rel="noreferrer"
          >
            Falar com a Crescer
          </a>
        </div>
      </div>
    </header>
  );
}