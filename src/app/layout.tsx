import type {Metadata} from "next";

import {DM_Sans} from "next/font/google";

import "./globals.css";
import {cn} from "@/lib/utils";

export const metadata: Metadata = {
  title: "simple-coffee",
  description: "Simple coffee",
  keywords: ["coffee", "capuchino", "taza", "cafe", "simple"],
};

const DmSans = DM_Sans({subsets: ["latin"], display: "auto", weight: ["300", "400", "500", "700"]});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={
          "dark m-auto flex min-h-screen flex-col bg-fondo font-sans antialiased " +
          DmSans.className
        }
      >
        <header className="h-auto w-full text-xl font-bold">
          <img
            alt="Background coffee bar"
            className="h-auto object-contain"
            loading="lazy"
            src="/bg-cafe.jpg"
          />
        </header>
        <main className="py-8">{children}</main>
        <footer className="text-center leading-[4rem] opacity-70">
          © {new Date().getFullYear()} simple-coffee
        </footer>
      </body>
    </html>
  );
}
