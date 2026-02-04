export default function ReelEmbed({
  url,
  title = "Instagram Reel",
  aspect = "aspect-video",
}) {
  // aceita url completa e transforma em /embed/
  const clean = (url || "").split("?")[0].replace(/\/$/, "");
  const embedUrl = clean.endsWith("/embed")
    ? clean
    : `${clean}/embed/`;

  return (
    <div className="card p-3">
      <div className={`relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 ${aspect}`}>
        <iframe
          src={embedUrl}
          title={title}
          className="absolute inset-0 h-full w-full"
          frameBorder="0"
          scrolling="no"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      <div className="mt-3 text-xs text-white/60">
        Se não carregar,{" "}
        <a className="underline text-[var(--c6)]" href={clean} target="_blank" rel="noreferrer">
          abrir no Instagram
        </a>
        .
      </div>
    </div>
  );
}