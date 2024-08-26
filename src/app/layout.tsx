import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coffee For everyone",
  description: "Here your fans can suport you free of cost",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/images.jpg" type="image/x-icon" />
      <body className={inter.className}>
        <div>
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
