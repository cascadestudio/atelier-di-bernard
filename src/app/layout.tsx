import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  haettenschweiler,
  helveticaNeueBdCn,
  helveticaNeueThCn,
} from "./fonts";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atelier di Bernard",
  description: "Atelier di Bernard - Atelier partagé",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${haettenschweiler.variable} ${helveticaNeueBdCn.variable} ${helveticaNeueThCn.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
