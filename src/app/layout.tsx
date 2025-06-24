import type { Metadata } from "next";
import {
  haettenschweiler,
  helveticaNeueBdCn,
  helveticaNeueThCn,
} from "./fonts";
import "./globals.css";

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
    <html lang="fr">
      <body
        className={`${haettenschweiler.variable} ${helveticaNeueBdCn.variable} ${helveticaNeueThCn.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
