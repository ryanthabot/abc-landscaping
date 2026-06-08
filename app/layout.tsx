import type { Metadata } from "next";
import { Nunito, Quicksand, Caveat } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const nunito = Nunito({
  weight: ['400', '600', '700', '800'],
  style: ['normal'],
  subsets: ["latin"],
  variable: "--font-heading",
});

const quicksand = Quicksand({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ["latin"],
  variable: "--font-body",
});

const caveat = Caveat({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ["latin"],
  variable: "--font-accent",
});

export const metadata: Metadata = {
  title: "ABC Landscaping — Transforming Outdoor Spaces",
  description:
    "Professional interlocking, retaining walls, and excavation services across Bowmanville, Durham Region, and Toronto. Free estimates. Call 343-580-0908.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${nunito.variable} ${quicksand.variable} ${caveat.variable} antialiased font-body`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
