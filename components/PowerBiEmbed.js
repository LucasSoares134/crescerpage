export default function PowerBiEmbed() {
  return (
    <div className="card p-3">
      <div className="text-sm text-white/80 mb-2">Dashboard BI</div>
      <div className="overflow-hidden rounded-3xl border border-[var(--c6)]/20 bg-black/40">
        <div className="aspect-video w-full">
          <iframe
            title="Saborethos"
            className="h-full w-full"
            src="https://app.powerbi.com/view?r=eyJrIjoiN2I3ZWEyZmItZDE5Zi00NzJlLWI3NjYtMDZhYWIyNWQzYjQ3IiwidCI6IjFjNWViZGE3LTcyMWMtNDkwNi1hOGJjLWE0YTdkNGYxMjY4NSJ9&pageName=bb90157f05c7d0a15cd0"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
      <div className="mt-2 text-xs text-white/50">
        *Se demorar pra carregar, é normal (conteúdo externo).
      </div>
    </div>
  );
}