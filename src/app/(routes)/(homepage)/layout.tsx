import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "@/components/Header";


export const metadata: Metadata = {
  title: "Meindesk",
  description: "meindesk-app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
