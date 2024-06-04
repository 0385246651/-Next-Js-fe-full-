import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <div className="ml-6 mt-6">
                <h1>Auth layout</h1>
                <div>
                    <Link href={"/"}>Home</Link>
                </div>
                {children}
            </div>
        </main>
    );
}
