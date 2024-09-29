import type { Metadata } from "next";
// import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import "./globals.css";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


export const metadata: Metadata = {
  title: "St. Thomas School",
  description: "Illuminating Futures since 1986",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
