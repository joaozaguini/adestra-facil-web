import "./globals.css";

export const metadata = {
  title: "Adestra Fácil - Método Prático de Adestramento Canino",
  description: "Ensine seu cão a fazer xixi e cocô no lugar certo em até 14 dias com reforço positivo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
