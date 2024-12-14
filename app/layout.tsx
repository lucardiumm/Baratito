import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Baratito - la lupa de precios",
  description: "Busca los mejores precios del producto que necesites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
