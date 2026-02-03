import "./globals.css";

export const metadata = {
  title: "Crescer — Assessoria de Marketing",
  description:
    "CRM + IA + Performance em uma operação única. Mais velocidade, previsibilidade e conversão.",
  openGraph: {
    title: "Crescer — Assessoria de Marketing",
    description:
      "CRM + IA + Performance em uma operação única. Mais velocidade, previsibilidade e conversão.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}