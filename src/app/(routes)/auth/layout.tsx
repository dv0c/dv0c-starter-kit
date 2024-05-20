import type { Metadata } from "next";
import '@/app/globals.css';


export const metadata: Metadata = {
    title: "Psycology Platform - Login",
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
