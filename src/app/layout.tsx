import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Talita.dev | Front-end Developer",
  description: "Portfólio de Talita Moulin, Desenvolvedora Front-end especializada em React, TypeScript e Tailwind.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} bg-orange-50`}>
      <body className="min-h-screen bg-orange-50 font-sans text-gray-800 selection:bg-orange-200">
        {children}
      </body>
    </html>
  );
}
