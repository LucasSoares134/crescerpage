"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const items = [
  { label: "Clínicas", href: "/segmentos/clinicas" },
  { label: "Imobiliárias", href: "/segmentos/imobiliarias" },
  { label: "Varejo", href: "/segmentos/varejo" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    const onDown = (e) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target)) setOpen(false);
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl px-4 py-3 shadow-[0_0_0_1px_rgba(81,254,97,.10)]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <Image
                src="/Fotos/folha.png"
                alt="Crescer"
                fill
                className="object-contain p-1"
                priority
              />
            </div>

            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide text-white">
                CRESCER
              </div>
              <div className="text-[11px] text-white/60">
                Assessoria de Marketing
              </div>
            </div>
          </Link>

          {/* Right */}
          <div className="flex items-center gap-2" ref={wrapRef}>
            {/* Segmentos dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpen((v) => !v)}
                className="btn btn-ghost"
                aria-expanded={open ? "true" : "false"}
              >
                Segmentos <span className="ml-1 text-white/60">▾</span>
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-52 overflow-hidden rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl shadow-lg">
                  <div className="px-3 py-2 text-[11px] uppercase tracking-wider text-white/50">
                    Navegar
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="p-2">
                    {items.map((it) => (
                      <Link
                        key={it.href}
                        href={it.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-xl px-3 py-2 text-sm text-white/85 hover:bg-white/5 hover:text-white"
                      >
                        {it.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTA */}
            <a
              className="btn btn-primary"
              href="https://wa.me/5562999999999"
              target="_blank"
              rel="noreferrer"
            >
              Falar com a Crescer
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}