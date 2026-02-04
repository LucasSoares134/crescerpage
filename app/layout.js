import "./globals.css";

export const metadata = {
  title: "Crescer | Assessoria de Marketing",
  description:
    "Estruturar operações comerciais com CRM + IA + Performance. Crescer integra tecnologia, estratégia e execução.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-[var(--c5)] text-white antialiased">
        {children}
      </body>
    </html>
  );
}