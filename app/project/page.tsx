"use client";
import ProjectModal from "@/components/ProjectModal/ProjectModal";
import ProjectModal2 from "@/components/ProjectModal/ProjectModal2";
import Image from "next/image";
import React from "react";
import { useState } from "react";

const Project = () => {
  const [isOpenProject1, setIsOpenProject1] = useState(false);
  const [isOpenProject2, setIsOpenProject2] = useState(false);

  return (
    <div className="flex h-full w-full flex-col items-center gap-[30px] px-[140px] py-[110px]">
      <div className="flex w-full justify-around">
        <div
          className="h-[420px] w-[400px] overflow-hidden rounded-2xl border-2 border-black bg-primary-10 shadow-card"
          onClick={() => {
            setIsOpenProject1(!isOpenProject1);
          }}
        >
          <div className="relative z-10 h-[230px] w-[400px] overflow-hidden">
            <Image
              src="/매치포인트.png"
              layout="fill"
              objectFit="cover"
              alt="프로젝트 이미지"
            />
          </div>
          <div className="flex h-[190px] flex-col justify-center gap-[2px] pl-[20px]">
            <p className="text-[20px] font-semibold">매치포인트</p>
            <div className="flex items-center gap-[10px]">
              <div className="h-2 w-2 rounded-full bg-black"></div>
              <p className="text-[15px] font-normal">프론트엔드</p>
            </div>
            <p className="text-[15px] font-normal text-slate-600">
              2024.05.24 - 2024.06.21
            </p>
          </div>
          <div className="z-50 h-full">
            {isOpenProject1 && <ProjectModal setIsOpen={setIsOpenProject1} />}
          </div>
        </div>
        <div
          className="h-[420px] w-[400px] overflow-hidden rounded-2xl border-2 border-black bg-primary-10 shadow-card"
          onClick={() => {
            setIsOpenProject2(!isOpenProject2);
          }}
        >
          <div className="relative z-10 h-[230px] w-[400px] overflow-hidden">
            <Image
              src="/북스포일러.png"
              layout="fill"
              objectFit="cover"
              alt="프로젝트 이미지"
            />
          </div>
          <div className="flex h-[190px] flex-col justify-center gap-[2px] pl-[20px]">
            <p className="text-[20px] font-semibold">북스포일러</p>
            <div className="flex items-center gap-[10px]">
              <div className="h-2 w-2 rounded-full bg-black"></div>
              <p className="text-[15px] font-normal">프론트엔드</p>
            </div>
            <p className="text-[15px] font-normal text-slate-600">
              2024.04.24 - 2024.05.23
            </p>
          </div>
          <div className="z-50 h-full">
            {isOpenProject2 && <ProjectModal2 setIsOpen={setIsOpenProject2} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
