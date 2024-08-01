import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kallset.no",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header className="mt-8 mb-8">
      <ul className="flex justify-center flex-row gap-2 font-semibold underline">
      <li>
        <Link className="p-2 hover:bg-customGreen" href="/">Hjem</Link>
      </li>
      <li>
        <Link className="p-2 hover:bg-customGreen" href="/NumberStepper">Number Stepper</Link>
      </li>
      <li>
        <Link className="p-2 hover:bg-customGreen" href="/Fullstack">Fullstack</Link>
      </li>
    </ul>
      </header>
      <main className="">
       {children}
      </main>
      </body>
    </html>
  );
}
