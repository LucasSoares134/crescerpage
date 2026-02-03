export default function Footer() {
  // TROQUE pelo seu número real (formato: 55DDDNUMERO)
  const phone = "55XXXXXXXXXXX";
  const text = encodeURIComponent("Olá! Quero estruturar meu comercial com a Crescer.");
  const waLink = `https://wa.me/${phone}?text=${text}`;
  const igLink = "https://instagram.com/SEU_INSTAGRAM";

  return (
    <footer className="mt-8 bg-black border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
          <div>
            <div className="font-semibold tracking-wide">CRESCER</div>
            <div className="text-sm text-white/70">Assessoria de Marketing</div>
            <div className="mt-3 text-xs text-white/50">
              CRM • IA • Performance • Automação • BI
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="neon-border glow rounded-2xl px-5 py-3 text-sm hover:bg-white/5 transition flex items-center gap-2"
            >
              <span>WhatsApp</span> <span className="text-[var(--c6)]">↗</span>
            </a>

            <a
              href={igLink}
              target="_blank"
              rel="noreferrer"
              className="neon-border glow rounded-2xl px-5 py-3 text-sm hover:bg-white/5 transition flex items-center gap-2"
            >
              <span>Instagram</span> <span className="text-[var(--c6)]">↗</span>
            </a>
          </div>
        </div>

        <div className="mt-10 text-xs text-white/40">
          © {new Date().getFullYear()} Crescer. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}