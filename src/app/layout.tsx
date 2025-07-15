import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '@visa/nova-styles/styles.css';
import '@visa/nova-styles/themes/visa-light/index.css';
import "./globals.css";
import Header from "@/components/Header";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Component Suggestion Tool | Lynsie Aragon",
  description: "Coding challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
