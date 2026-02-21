import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Nimble Gravity AJ",
  description: "Technical test of Nimble Gravity for Aramis Jaime",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
