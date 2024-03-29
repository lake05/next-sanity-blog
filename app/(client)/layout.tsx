import type { Metadata } from "next";
import { Fira_Code, Lilita_One, VT323 } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./_components/navbar";
import { cn } from "@/lib/utils";

import "./globals.css";

const FiraCode = Fira_Code({ subsets: ["latin"] });

const FontLilita = Lilita_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lilita",
});

const FontVT323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-VT323",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function ClientRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body
        className={cn(
          FiraCode.className,
          FontLilita.variable,
          FontVT323.variable,
          "h-full bg-amber-50 text-indigo-950 dark:bg-slate-950 dark:text-slate-50 dark:selection:bg-purple-500"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <main className="mx-auto max-w-5xl px-6">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
