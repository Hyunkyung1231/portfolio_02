import React from "react";
import Link from "next/link";
import Button from "@/components/Button/Button";
import TypingEffect from "@/utils/Typing";
import Image from "next/image";

const MainPage = () => {
  return (
    <div className="flex w-full items-center px-[140px] py-[110px]">
      <div className="flex w-full flex-col gap-[20px]">
        <div className="flex flex-col leading-[75px]">
          <p className="text-[60px] font-extrabold">안녕하세요. 저는</p>
          <div className="h-[70px]">
            <TypingEffect text={"프론트엔드"} speed={100} />
          </div>
          <p className="text-[60px] font-extrabold">개발자입니다.</p>
        </div>
        <div className="flex flex-col">
          <p className="text-[20px] font-light">
            새로운 기술을 학습하고 적용하는 것을 즐기는 개발자 이현경입니다.
          </p>
        </div>
        <div className="w-[150px]">
          <Link href={"https://www.notion.so/6c041537fdfe47938fc17b46845979ba"}>
            <Button className="bg-primary-10 flex rounded-xl shadow-card">
              <span className="text-[13px]">
                이력서 보러가기<span className="font-extrabold">↗</span>
              </span>
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative">
        <Image
          src="/배경이미지.png"
          alt="프로필이미지"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default MainPage;
