import "@/styles/globals.css";
import Navbar from "@/components/Navbar/Navbar";

import { Nanum_Gothic } from "next/font/google";
export const gothic = Nanum_Gothic({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="no-scrollbar box-border h-full w-full">
      <body
        className={`${gothic.className} no-scrollbar bg-primary-20 relative m-auto box-border flex h-full flex-col items-center`}
      >
        <div className="fixed top-0 z-50 w-full">
          <Navbar />
        </div>
        <main className="relative top-[8%] w-full">{children}</main>
      </body>
    </html>
  );
}
