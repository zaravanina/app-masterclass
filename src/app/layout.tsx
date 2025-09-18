import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/layout/Header/Header";
import { getContentByType } from "@/lib/api";
import SettingsData from "@/models/settings.interface";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heyday Masterclass 2025",
  description:
    "A demo site for the Heyday Masterclass, treat it as your playground",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = (await getContentByType("siteSettings", {
    take: 1,
  })) as SettingsData[];
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header {...settings} />
        {children}
      </body>
    </html>
  );
}
