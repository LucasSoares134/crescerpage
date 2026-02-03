"use client";

import { useEffect, useRef, useState } from "react";

function playTechChime() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  const ctx = new AudioCtx();

  const now = ctx.currentTime;

  const master = ctx.createGain();
  master.gain.setValueAtTime(0.0001, now);
  master.gain.exponentialRampToValueAtTime(0.25, now + 0.02);
  master.gain.exponentialRampToValueAtTime(0.0001, now + 0.55);
  master.connect(ctx.destination);

  // 3 tons curtos + um “tail” harmônico
  const tones = [880, 1175, 1568]; // A5, D6-ish, G6-ish
  tones.forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now + i * 0.06);

    gain.gain.setValueAtTime(0.0001, now + i * 0.06);
    gain.gain.exponentialRampToValueAtTime(0.22, now + i * 0.06 + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.06 + 0.14);

    osc.connect(gain);
    gain.connect(master);

    osc.start(now + i * 0.06);
    osc.stop(now + i * 0.06 + 0.16);
  });

  // tail
  const tail = ctx.createOscillator();
  tail.type = "triangle";
  tail.frequency.setValueAtTime(220, now);
  const tailGain = ctx.createGain();
  tailGain.gain.setValueAtTime(0.0001, now);
  tailGain.gain.exponentialRampToValueAtTime(0.12, now + 0.02);
  tailGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.55);
  tail.connect(tailGain);
  tailGain.connect(master);
  tail.start(now);
  tail.stop(now + 0.6);

  setTimeout(() => ctx.close(), 900);
}

export default function TechSoundGate() {
  const [needsClick, setNeedsClick] = useState(false);
  const playedRef = useRef(false);

  useEffect(() => {
    // tenta tocar automaticamente (pode ser bloqueado)
    try {
      playTechChime();
      playedRef.current = true;
    } catch {
      setNeedsClick(true);
    }

    const onFirstInteraction = () => {
      if (playedRef.current) return;
      try {
        playTechChime();
        playedRef.current = true;
        setNeedsClick(false);
      } catch {
        setNeedsClick(true);
      }
      window.removeEventListener("pointerdown", onFirstInteraction);
      window.removeEventListener("keydown", onFirstInteraction);
    };

    window.addEventListener("pointerdown", onFirstInteraction);
    window.addEventListener("keydown", onFirstInteraction);

    return () => {
      window.removeEventListener("pointerdown", onFirstInteraction);
      window.removeEventListener("keydown", onFirstInteraction);
    };
  }, []);

  if (!needsClick) return null;

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-black/70 backdrop-blur-sm">
      <div className="neon-border glow rounded-2xl bg-black/60 p-6 max-w-md w-[92%]">
        <div className="text-lg font-semibold">Ativar som</div>
        <p className="mt-2 text-white/80 text-sm leading-relaxed">
          Seu navegador bloqueou o áudio automático. Clique no botão abaixo para
          ativar o som tecnológico na abertura.
        </p>
        <button
          onClick={() => {
            playTechChime();
            playedRef.current = true;
            setNeedsClick(false);
          }}
          className="mt-4 w-full rounded-2xl bg-[var(--c3)] text-black font-medium px-4 py-3 hover:opacity-90 transition"
        >
          Ativar som
        </button>
        <p className="mt-3 text-xs text-white/50">
          (Depois que você clicar uma vez, não aparece mais.)
        </p>
      </div>
    </div>
  );
}