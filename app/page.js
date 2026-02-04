import "./globals.css";

export const metadata = {
  title: "Crescer — Assessoria de Marketing",
  description: "CRM + IA + Performance para operações comerciais em alta performance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}