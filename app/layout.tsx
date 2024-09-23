import "@/styles/globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { ReactNode } from "react";
import { pretend } from "./fonts";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="ko"
      className={`${pretend.variable} no-scrollbar box-border h-full w-full bg-primary-20`}
    >
      <body className="no-scrollbar relative m-auto box-border flex h-full max-w-[1680px] flex-col items-center bg-primary-20">
        <main className="relative h-full w-full bg-primary-20">{children}</main>
      </body>
    </html>
  );
}
