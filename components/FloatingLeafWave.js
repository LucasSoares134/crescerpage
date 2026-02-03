export default function FloatingLeafWave() {
  return (
    <>
      {/* folha */}
      <div
        className="absolute -top-24 left-0 w-[620px] h-[320px] opacity-25 blur-[2px] pointer-events-none"
        style={{ animation: "waveX 2.8s ease-in-out infinite" }}
      >
        <div
          className="w-full h-full rounded-[999px]"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(81,254,97,.60), rgba(30,191,53,.18), transparent 72%)",
            transform: "rotate(-12deg)",
          }}
        />
      </div>

      {/* texto wave */}
      <div
        className="absolute top-6 left-10 text-white/25 text-xs tracking-[0.55em] uppercase pointer-events-none select-none"
        style={{ animation: "waveX 2.8s ease-in-out infinite" }}
      >
        C R E S C E R
      </div>
    </>
  );
}