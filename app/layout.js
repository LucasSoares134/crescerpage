import "./globals.css";

export const metadata = {
  title: "Crescer — Assessoria de Marketing",
  description: "CRM + IA + Performance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-[#050805] text-white">{children}</body>
    </html>
  );
}