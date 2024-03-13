import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";


export const metadata: Metadata = {
  title: "Joisney+",
  description: "For educational purposes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#bea060] dark:bg-[#0d0735]">
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {/* <Header /> */}
          {children}
          </ThemeProvider></body>
    </html>
  );
}
