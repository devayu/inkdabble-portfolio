import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Astha Maurya",
  description: "Portfolio of Astha Maurya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header></Header>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
