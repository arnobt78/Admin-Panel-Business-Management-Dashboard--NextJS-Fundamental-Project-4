import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "Admin Panel - React Dashboard",
  description:
    "A modern, fully-featured admin dashboard built with React, Material-UI, and Nivo charts. Learning project for React fundamentals.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full w-full font-sans" suppressHydrationWarning>
      <body className="h-full w-full font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
