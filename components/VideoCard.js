"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "@/components/hooks/useInView";

export default function VideoCard({
  title,
  subtitle,
  src = "",
  poster = "",
  autoPlayOnView = true,
}) {
  const videoRef = useRef(null);
  const { ref, inView } = useInView({ threshold: 0.45 });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onCanPlay = () => setReady(true);
    v.addEventListener("canplay", onCanPlay);
    return () => v.removeEventListener("canplay", onCanPlay);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !src || !autoPlayOnView) return;

    if (inView) {
      v.muted = true;
      v.playsInline = true;
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [inView, src, autoPlayOnView]);

  const toggle = () => {
    const v = videoRef.current;
    if (!v || !src) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-4 py-12">
      <div className="neon-border glow rounded-2xl bg-[var(--c1)]/25 p-6">
        <div className="text-sm text-white/60">{subtitle}</div>
        <h3 className="mt-2 text-2xl font-semibold">{title}</h3>

        <div className="mt-5 relative overflow-hidden rounded-2xl neon-border bg-black/40">
          {!src ? (
            <div className="h-[320px] md:h-[420px] grid place-items-center text-white/60 text-sm">
              Adicione um vídeo em <span className="text-[var(--c6)]">/public/videos</span> e informe o <b>src</b>.
            </div>
          ) : (
            <>
              <video
                ref={videoRef}
                src={src}
                poster={poster}
                className="w-full h-[320px] md:h-[420px] object-cover"
                playsInline
                muted
                loop
              />
              <button
                onClick={toggle}
                className="absolute inset-0 grid place-items-center"
                aria-label="Play/Pause"
              >
                <span className="h-16 w-16 rounded-full bg-black/60 neon-border grid place-items-center hover:bg-black/75 transition">
                  ▶
                </span>
              </button>
              {!ready && (
                <div className="absolute bottom-3 left-3 text-xs text-white/60">
                  carregando…
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}