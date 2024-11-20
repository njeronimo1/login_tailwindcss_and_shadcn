import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const mainFont = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Login com Tailwindcss e Shadcn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <body className={`${mainFont.className} antialiased`}>{children}</body>
    </html>
  );
}
