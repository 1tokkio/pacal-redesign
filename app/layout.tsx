import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import LayoutShell from "@/components/layout/LayoutShell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Constructora Pacal – Construyendo Calidad de Vida",
    template: "%s | Constructora Pacal",
  },
  description:
    "Más de 45 años construyendo calidad de vida de Arica a Puerto Montt. Departamentos y condominios con subsidio DS19.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
