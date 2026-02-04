export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-3 items-center">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-[var(--c2)]/20 border border-[var(--c6)]/25 flex items-center justify-center overflow-hidden">
            <img src="/Fotos/folha.png" alt="Crescer" className="h-7 w-7 object-contain" />
          </div>
          <div>
            <div className="font-semibold">Crescer</div>
            <div className="text-xs text-white/60">CRM • IA • Performance</div>
          </div>
        </div>

        <div className="text-sm text-white/60">
          © {new Date().getFullYear()} Crescer Assessoria de Marketing.
        </div>

        <div className="flex gap-3 md:justify-end">
          <a
            className="btn btn-ghost"
            href="https://wa.me/5562999999999"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a
            className="btn btn-ghost"
            href="https://instagram.com/crescermarketing.k"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}