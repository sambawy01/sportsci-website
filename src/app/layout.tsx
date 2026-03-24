import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SportSci.ai — AI Performance Analysis & Squad Management",
  description:
    "Camera. Wearables. AI Platform. The first fully integrated sports science system. Built for football academies.",
  keywords: [
    "sports science",
    "AI",
    "football",
    "academy",
    "performance analysis",
    "squad management",
    "wearables",
    "coaching",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
