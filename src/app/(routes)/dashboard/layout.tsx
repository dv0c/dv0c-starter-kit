import type { Metadata } from "next";
import '@/app/globals.css';


export const metadata: Metadata = {
    title: "Dashboard | Psycology Platform",
    description: "Psycology Platform app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>{children}</main>
    );
}
