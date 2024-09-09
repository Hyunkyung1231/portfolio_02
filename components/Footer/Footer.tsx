import React from "react";
import Link from "next/link";
import SideBar from "../SideBar/Sidebar";

const Footer = () => {
  return (
    <div className="flex h-[280px] w-full flex-col items-center justify-between gap-[30px] bg-primary-50 px-[120px] py-[40px]">
      <div className="flex h-[100px] w-full items-center bg-primary-50">
        <div className="flex w-full flex-row items-center justify-between">
          <div className="flex flex-col">
            <div className="text-[30px] font-extrabold text-primary-10">
              이~~현경
            </div>
            <div className="text-[18px] text-primary-10">
              Front-end Developer
            </div>
          </div>
          <div className="flex h-full justify-around gap-[20px] py-[80px]">
            <SideBar />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-[30px]">
        <div className="h-[0.3px] w-full bg-primary-10"></div>

        <p className="flex gap-[5px] font-light text-primary-10">
          All rights reserved. © 2024 |
          <span className="font-bold text-primary-10"> 이현경</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
