import React from "react";
import Link from "next/link";
import Button from "@/components/Button/Button";
import TypingEffect from "@/utils/Typing";
import Image from "next/image";
import { BiSolidChevronRightCircle } from "react-icons/bi";

const MainPage = () => {
  return (
    <div className="flex w-full flex-col items-center bg-primary-20 px-[300px] py-[200px]">
      <div className="flex w-full gap-[30px]">
        <div className="flex w-full flex-col gap-[30px]">
          <div className="flex flex-col">
            <p className="text-[40px] font-semibold text-primary-60">
              {`Hi! I'm Hyunkyung Lee`}
            </p>
            <div className="h-full text-[20px] font-semibold text-primary-70">
              <TypingEffect text={"Front-end Developer"} speed={100} />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[18px] text-primary-70">
              blah blah dslfkjsldkfjlskdjfsdflkjsdflkjdsflk
            </p>
            <p className="text-[18px] text-primary-70">
              blah blah dslfkjsldkfjlskdjfsdflkjsdflkjdsflk
            </p>
            <p className="text-[18px] text-primary-70">
              blah blah dslfkjsldkfjls
            </p>
          </div>
          <div className="w-[150px]">
            <Link
              href={"https://www.notion.so/6c041537fdfe47938fc17b46845979ba"}
            >
              <Button className="flex gap-[5px] rounded-lg">
                <span className="text-[15px]">Contact me</span>
                <BiSolidChevronRightCircle size={20} />
              </Button>
            </Link>
          </div>
        </div>
        <div className="">
          <Image
            className="figure"
            src="/profile.jpeg"
            alt="프로필이미지"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="relative bottom-[-120px] flex w-full justify-center">
        <span className="loader"></span>
      </div>
    </div>
  );
};

export default MainPage;
