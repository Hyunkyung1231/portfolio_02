import React from "react";
import Button from "@/components/Button/Button";
import TypingEffect from "@/utils/Typing";
import Image from "next/image";
import { BiSolidChevronRightCircle } from "react-icons/bi";

const MainPage = ({ element1, element }: any) => {
  return (
    <div
      ref={element1}
      className="flex w-full flex-col items-center bg-primary-20 px-[300px] py-[200px]"
    >
      <div className="flex w-full gap-[30px]">
        <div className="flex w-full flex-col gap-[30px]">
          <div className="flex flex-col">
            <p className="text-[40px] font-semibold text-primary-60">
              {`Hi! I'm Hyunkyung Lee`}
            </p>
            <div className="h-full text-[20px] font-semibold text-primary-70">
              <TypingEffect text="Front-end Developer" speed={100} />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[18px] text-primary-70">안녕하세요.</p>
            <p className="text-[18px] text-primary-70">
              두려워하지 않고 새로운 기술을 학습하며
            </p>
            <p className="text-[18px] text-primary-70">
              포기하지 않고 근성으로 노력하는 개발자입니다.
            </p>
          </div>
          <div className="w-[150px]" onClick={element[1].onMoveToElement}>
            <Button className="flex gap-[5px] rounded-lg">
              <span className="text-[15px]">Contact me</span>
              <BiSolidChevronRightCircle size={20} />
            </Button>
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
      <div
        className="relative bottom-[-120px] flex w-full cursor-pointer justify-center"
        onClick={element[0].onMoveToElement}
      >
        <span className="loader"></span>
      </div>
    </div>
  );
};

export default MainPage;
