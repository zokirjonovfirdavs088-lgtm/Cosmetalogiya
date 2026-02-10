import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cosmetalogiya - Kosmetologiya Xizmatlari",
  description: "Professional kosmetologiya xizmatlari. Onlayn qabulga yoziling!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
