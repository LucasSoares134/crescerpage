export default function VideoWindow({ title = "Vídeo", instagramUrl }) {
  const clean = (instagramUrl || "").split("?")[0].replace(/\/$/, "");
  const embedUrl = clean ? `${clean}/embed` : "";

  return (
    <div className="rounded-2xl border border-[rgba(81,254,97,.25)] bg-black/30 p-4">
      <div className="flex items-center justify-between gap-4 mb-3">
        <div className="text-sm text-white/80">{title}</div>
        {instagramUrl ? (
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-[#51FE61] underline"
          >
            abrir no Instagram
          </a>
        ) : null}
      </div>

      {/* Janela paisagem controlada */}
      <div className="w-full max-w-[720px] mx-auto">
        <div className="w-full aspect-video rounded-2xl overflow-hidden border border-[rgba(81,254,97,.20)] bg-black/40">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              className="h-full w-full"
              frameBorder="0"
              scrolling="no"
              allow="encrypted-media; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <div className="h-full w-full grid place-items-center text-white/60 text-sm">
              Vídeo não configurado
            </div>
          )}
        </div>
      </div>
    </div>
  );
}