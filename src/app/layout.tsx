import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "qbit.zone | Quantum Computing Algorithms & Research",
  description:
    "Explore the cutting edge of quantum computing. qbit.zone is your gateway to state-of-the-art quantum algorithms, post-quantum cryptography, and the future of computation.",
  keywords: [
    "quantum computing",
    "quantum algorithms",
    "post-quantum cryptography",
    "quantum security",
    "quantum research",
    "Qubit",
    "quantum processors",
  ],
  authors: [{ name: "qbit.zone" }],
  openGraph: {
    title: "qbit.zone | Quantum Computing Algorithms & Research",
    description:
      "Your gateway to state-of-the-art quantum computing algorithms and research. Explore the future of computation.",
    url: "https://qbit.zone",
    siteName: "qbit.zone",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "qbit.zone | Quantum Computing",
    description: "State-of-the-art quantum computing algorithms and research.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
