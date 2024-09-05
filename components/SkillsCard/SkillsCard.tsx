import React from "react";
import Image from "next/image";

const SkillsCard = () => {
  return (
    <div className="flex w-full flex-col gap-[5px]">
      <div>
        <p className="text-[25px] font-extrabold text-primary-30">SKIILS</p>
      </div>
      <div className="flex flex-col gap-[6px]">
        <p className="text-[18px] font-semibold text-primary-60">HTML</p>
        <div className="flex w-full flex-col items-start justify-start">
          <div className="h-[5px] w-full bg-primary-40"></div>
          <div className="absolute h-[5px] w-[12%] bg-primary-30"></div>
        </div>
        <p className="text-[18px] font-semibold text-primary-60">CSS</p>
        <div className="flex w-full flex-col items-start justify-start">
          <div className="h-[5px] w-full bg-primary-40"></div>
          <div className="absolute h-[5px] w-[12%] bg-primary-30"></div>
        </div>
        <p className="text-[18px] font-semibold text-primary-60">Javascript</p>
        <div className="flex w-full flex-col items-start justify-start">
          <div className="h-[5px] w-full bg-primary-40"></div>
          <div className="absolute h-[5px] w-[10%] bg-primary-30"></div>
        </div>
        <p className="text-[18px] font-semibold text-primary-60">Typescript</p>
        <div className="flex w-full flex-col items-start justify-start">
          <div className="h-[5px] w-full bg-primary-40"></div>
          <div className="absolute h-[5px] w-[6%] bg-primary-30"></div>
        </div>
        <p className="text-[18px] font-semibold text-primary-60">React</p>
        <div className="flex w-full flex-col items-start justify-start">
          <div className="h-[5px] w-full bg-primary-40"></div>
          <div className="absolute h-[5px] w-[9%] bg-primary-30"></div>
        </div>
        <p className="text-[18px] font-semibold text-primary-60">Next.js</p>
        <div className="flex w-full flex-col items-start justify-start">
          <div className="h-[5px] w-full bg-primary-40"></div>
          <div className="absolute h-[5px] w-[6%] bg-primary-30"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
