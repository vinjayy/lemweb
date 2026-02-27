import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lumajang Electrical Metalindo | Electrical Contractor Terpercaya",
  description: "Kontraktor listrik profesional di Indonesia yang melayani instalasi gedung, data center, panel surya, CCTV, dan sistem keamanan dengan standar K3 tinggi.",
  keywords: ["electrical contractor", "instalasi listrik gedung", "Lumajang Electrical Metalindo", "kontraktor listrik indonesia", "panel surya", "cctv"],
  authors: [{ name: "Lumajang Electrical Metalindo" }],
  icons: {
    icon: "/logo.png", // Favicon diarahkan ke logo.png
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Lumajang Electrical Metalindo",
    description: "Solusi kelistrikan gedung dan industri terpercaya di Indonesia.",
    url: "https://www.lumajangelectricalmetalindo.com", // Ganti dengan domain aslimu nanti
    siteName: "Lumajang Electrical Metalindo",
    images: [
      {
        url: "/image1.png", // Image yang muncul saat link dibagikan
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        {/* Favicon fallback untuk browser lama */}
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}