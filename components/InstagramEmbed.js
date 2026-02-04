"use client";

export default function InstagramEmbed({ url }) {
  // Converte para embed estável
  // Ex: https://www.instagram.com/reel/XXXX/ -> https://www.instagram.com/reel/XXXX/embed
  const embedUrl = url.endsWith("/")
    ? `${url}embed`
    : `${url}/embed`;

  return (
    <div className="card p-3">
      <div className="overflow-hidden rounded-3xl border border-[var(--c6)]/20 bg-black/40">
        <div className="aspect-[4/5] w-full">
          <iframe
            src={embedUrl}
            className="h-full w-full"
            frameBorder="0"
            scrolling="no"
            allow="encrypted-media; clipboard-write"
          />
        </div>
      </div>

      <div className="mt-3 text-xs text-white/60">
        Se não carregar,{" "}
        <a
          className="underline text-[var(--c6)]"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          abrir no Instagram
        </a>
        .
      </div>
    </div>
  );
}