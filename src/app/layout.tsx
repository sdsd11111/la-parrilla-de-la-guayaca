import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FontAwesomeProvider } from "./providers";
import GoogleTranslateWrapper from "@/components/GoogleTranslateWrapper";

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
    default: "La Parrilla de la Guayaca",
    template: "%s - La Parrilla de la Guayaca Loja"
  },
  description: "La mejor parrilla de Loja. Disfruta de nuestros deliciosos asados, menestras, alitas y comida típica en un ambiente acogedor.",
  keywords: ["Parrilla", "Loja", "Restaurante", "Asados", "Alitas", "Menestra", "Comida Típica", "Ecuador"],
  authors: [{ name: "La Parrilla de la Guayaca" }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 flex flex-col min-h-screen`}>
        <FontAwesomeProvider>
          <div className="flex flex-col flex-1">
            {children}
            <GoogleTranslateWrapper />
          </div>
        </FontAwesomeProvider>
      </body>
    </html>
  );
}
