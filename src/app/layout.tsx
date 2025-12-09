import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "PT ALIA GUNA NUSANTARA - Jasa Kebersihan Profesional",
  description: "Perusahaan jasa kebersihan profesional yang berkomitmen menghadirkan solusi cleaning service yang tepercaya, responsif, dan berstandar tinggi untuk berbagai jenis bangunan.",
  keywords: ["jasa kebersihan", "cleaning service", "general cleaning", "professional cleaning", "PT ALIA GUNA NUSANTARA", "bandung", "jawa barat"],
  authors: [{ name: "PT ALIA GUNA NUSANTARA" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "PT ALIA GUNA NUSANTARA - Jasa Kebersihan Profesional",
    description: "Solusi cleaning service tepercaya, responsif, dan berstandar tinggi untuk mendukung operasional dan kenyamanan lingkungan kerja maupun hunian Anda.",
    url: "https://aliagunanusantara.com",
    siteName: "PT ALIA GUNA NUSANTARA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT ALIA GUNA NUSANTARA - Jasa Kebersihan Profesional",
    description: "Solusi cleaning service tepercaya, responsif, dan berstandar tinggi untuk berbagai jenis bangunan.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
