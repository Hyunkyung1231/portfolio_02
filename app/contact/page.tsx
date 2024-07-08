import Image from "next/image";
import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import CopyButton from "@/components/CopyButton/CopyButton";

const page = () => {
  return (
    <div className="flex h-full w-full flex-col items-center gap-[30px] px-[140px] py-[110px]">
      <h1 className="text-[50px] font-bold">Contact</h1>
      <div className="flex h-full w-full items-center justify-center gap-[100px]">
        <div className="flex h-full flex-col items-center gap-[15px]">
          <div className="h-[150px] w-[150px] overflow-hidden rounded-[23%]">
            <Image
              src="/icon/Github-Dark.png"
              alt="TypeScript"
              width={150}
              height={150}
            />
          </div>
          <div className="flex flex-col gap-[1px]">
            <p className="text-[30px] font-bold">USERNAME</p>
            <Link href={"https://github.com/Hyunkyung1231"}>
              <div className="flex w-full items-center justify-center gap-[4px]">
                <span className="text-[17px]">Hyunkyung1231</span>
                <MdArrowOutward size={20} />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex h-full flex-col items-center gap-[15px]">
          <div className="h-[150px] w-[150px] overflow-hidden rounded-[23%]">
            <Image
              src="/icon/NAVER.png"
              alt="TypeScript"
              width={150}
              height={150}
            />
          </div>
          <div className="flex flex-col gap-[1px]">
            <p className="text-center text-[30px] font-bold">NAVER</p>
            <div className="flex w-full items-center justify-center gap-[7px]">
              <span className="text-center text-[17px]">
                gusrud4337@naver.com
              </span>
              <CopyButton text="gusrud4337@naver.com" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
