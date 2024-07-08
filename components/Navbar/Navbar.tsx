import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex h-[70px] w-full items-center justify-end bg-primary-20 pt-[20px]">
      <div className="flex w-full justify-end text-[20px] font-extrabold">
        <div className="flex h-[50px] w-[400px] items-center justify-center border-b-2 border-black"></div>

        <div className="flex h-[50px] w-[180px] items-center justify-center rounded-t-xl border-2 border-black bg-primary-40">
          <Link href="/">Home</Link>
        </div>
        <div className="flex h-[50px] w-[180px] items-center justify-center rounded-t-xl border-2 border-black bg-primary-50">
          <Link href="/project">Projects</Link>
        </div>

        <div className="flex h-[4\\50px] w-[180px] items-center justify-center rounded-t-xl border-2 border-black bg-primary-60">
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
