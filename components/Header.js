import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-auto max-w-6xl px-4 pt-6">
      <div className="flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 rounded-xl overflow-hidden border border-[rgba(81,254,97,.25)] bg-black/30">
            <Image src="/Fotos/folha.png" alt="Crescer" fill className="object-contain" priority />
          </div>
          <div className="leading-tight">
            <div className="font-semibold tracking-wide text-white">CRESCER</div>
            <div className="text-xs text-white/70">Assessoria de Marketing</div>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <div className="relative group">
            <button className="rounded-xl px-4 py-2 text-sm bg-black/40 text-white border border-[rgba(81,254,97,.25)] hover:bg-black/60 transition">
              Segmentos ▾
            </button>

            <div className="absolute right-0 top-full mt-3 w-56 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition">
              <div className="rounded-2xl border border-[rgba(81,254,97,.25)] bg-black/80 backdrop-blur p-2">
                <Link href="/segmentos/clinicas" className="block rounded-xl px-3 py-2 hover:bg-white/5 transition text-sm">
                  Clínicas
                </Link>
                <Link href="/segmentos/imobiliarias" className="block rounded-xl px-3 py-2 hover:bg-white/5 transition text-sm">
                  Imobiliárias
                </Link>
                <Link href="/segmentos/varejo" className="block rounded-xl px-3 py-2 hover:bg-white/5 transition text-sm">
                  Varejo
                </Link>
              </div>
            </div>
          </div>

          <a
            href="#contato"
            className="rounded-xl px-4 py-2 text-sm text-white border border-[rgba(81,254,97,.25)] bg-black/30 hover:bg-black/60 transition"
          >
            Falar com a Crescer
          </a>
        </div>
      </div>
    </header>
  );
}