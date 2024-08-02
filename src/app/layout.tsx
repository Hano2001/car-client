import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "¡Los mejores carros!",
  description: "Created by Oriana, Lukas and Harald",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex flex-row items-center gap-2 p-2">
          <Image src={"/vehicle.png"} width={48} height={48} alt="Logo" />
          <h1>¡Los mejores carros!</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
