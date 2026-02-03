export default function Header() {
  return (
    <header className="mx-auto max-w-6xl px-4 pt-6">
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-[var(--c2)] neon-border glow" />
          <div className="leading-tight">
            <div className="font-semibold tracking-wide">CRESCER</div>
            <div className="text-xs text-white/70">Assessoria de Marketing</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-2 text-sm">
          <a className="px-3 py-2 rounded-xl hover:bg-white/5 transition" href="/">
            Início
          </a>
          <a
            className="px-3 py-2 rounded-xl hover:bg-white/5 transition"
            href="/segmentos/clinicas"
          >
            Clínicas
          </a>
          <a
            className="px-3 py-2 rounded-xl hover:bg-white/5 transition"
            href="/segmentos/imobiliarias"
          >
            Imobiliárias
          </a>
          <a
            className="px-3 py-2 rounded-xl hover:bg-white/5 transition"
            href="/segmentos/varejo"
          >
            Varejo
          </a>
        </nav>

        <a
          href="#contato"
          className="neon-border glow rounded-xl px-4 py-2 text-sm hover:bg-white/5 transition"
        >
          Falar com a Crescer
        </a>
      </div>
    </header>
  );
}