import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "@/components/Header";
import { Manrope } from "next/font/google";


export const metadata: Metadata = {
  title: "Meindesk",
  description: "meindesk-app",
};
const manrope = Manrope({ subsets: ["latin", "greek"], weight: ["200", "300", "400", "500", "600", "700", "800"], display: "swap" });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={manrope.className}>
      <Header />
      {children}
    </main>
  );
}
