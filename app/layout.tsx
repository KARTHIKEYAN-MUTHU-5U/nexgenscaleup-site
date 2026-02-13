import type { Metadata } from "next";
import { orbitron, inter, jetbrainsMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexGenScaleUp - Quantum Interface Portfolio",
  description: "Venture builder creating next-generation digital platforms with cutting-edge 3D interfaces.",
  keywords: ["portfolio", "3D", "WebGL", "React Three Fiber", "digital innovation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
