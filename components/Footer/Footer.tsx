import React from "react";
import Button from "@/components/Button/Button";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-full w-full bg-primary-80 py-[80px]">
      <div className="flex flex-col items-center gap-[20px]">
        <p className="text-[30px] font-extrabold">
          궁금하신 사항이 있으면 연락 부탁드립니다.
        </p>
        <Link href="/contact">
          <div className="w-[130px]">
            <Button className="flex rounded-full bg-black text-white">
              <span className="text-[13px] font-bold">연락하기</span>
            </Button>
          </div>
        </Link>
        <div className="absolute bottom-2">
          <p className="flex gap-[5px] text-gray-800">
            © 2024. <span className="font-extrabold text-black">이현경</span>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
