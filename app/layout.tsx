import "@/styles/globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko" className="no-scrollbar box-border h-full w-full">
      <body className="no-scrollbar relative m-auto box-border flex h-full flex-col items-center bg-primary-20">
        <div className="fixed top-0 z-50 w-full">
          <Navbar />
        </div>
        <main className="relative top-[8%] w-full">{children}</main>
      </body>
    </html>
  );
}
