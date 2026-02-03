export default function SegmentHoverMenu() {
  return (
    <div className="flex items-start gap-4">
      <div className="relative group">
        <button
          className="neon-border glow rounded-2xl px-5 py-3 text-sm bg-black/30 hover:bg-white/5 transition"
          style={{ animation: "blinkSoft 1.4s ease-in-out infinite" }}
        >
          Segmentar atendimento →
        </button>

        <div className="absolute left-0 mt-2 w-60 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition">
          <div className="rounded-2xl neon-border glow bg-black/60 backdrop-blur p-3">
            <a
              href="/segmentos/clinicas"
              className="block rounded-xl px-3 py-2 hover:bg-white/5 transition text-sm"
            >
              Clínicas
            </a>
            <a
              href="/segmentos/imobiliarias"
              className="block rounded-xl px-3 py-2 hover:bg-white/5 transition text-sm"
            >
              Imobiliárias
            </a>
            <a
              href="/segmentos/varejo"
              className="block rounded-xl px-3 py-2 hover:bg-white/5 transition text-sm"
            >
              Varejo
            </a>
          </div>
        </div>
      </div>

      <div className="text-sm text-white/70 leading-relaxed max-w-sm">
        Passe o mouse e escolha um segmento.
      </div>
    </div>
  );
}