import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex h-[80px] w-full items-center bg-primary-20 px-[120px] py-[20px]">
      <div className="flex w-full flex-row items-center justify-between">
        <div className="">이~~현경</div>
        <div className="flex gap-5">
          <div>
            <p className="text-primary-70">Home</p>
          </div>
          <div>
            <p className="text-primary-70">About</p>
          </div>
          <div>
            <p className="text-primary-70">Project</p>
          </div>
          <div>
            <p className="text-primary-70">Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
