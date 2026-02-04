export default function PowerBIEmbed() {
  return (
    <div className="rounded-2xl overflow-hidden border border-[rgba(81,254,97,.25)] bg-black/20">
      <div className="relative w-full pb-[62.25%]">
        <iframe
          title="Saborethos"
          src="https://app.powerbi.com/view?r=eyJrIjoiN2I3ZWEyZmItZDE5Zi00NzJlLWI3NjYtMDZhYWIyNWQzYjQ3IiwidCI6IjFjNWViZGE3LTcyMWMtNDkwNi1hOGJjLWE0YTdkNGYxMjY4NSJ9&pageName=bb90157f05c7d0a15cd0"
          className="absolute inset-0 h-full w-full"
          frameBorder="0"
          allowFullScreen={true}
          loading="lazy"
        />
      </div>
    </div>
  );
}