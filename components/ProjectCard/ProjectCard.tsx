import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const ProjectCard = () => {
  return (
    <div className="flex w-full justify-around">
      <div className="info_box_card">
        <div className="h-[420px] w-[400px] overflow-hidden rounded-2xl border-2 border-black bg-primary-10 shadow-card">
          <div className="relative h-[230px] w-[400px] overflow-hidden">
            <Image src="/매치포인트.png" fill={true} alt="프로젝트 이미지" />
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
        </div>
        <div className="info_box_card back h-[420px] w-[400px] overflow-hidden rounded-2xl border-2 border-black bg-primary-10 shadow-card">
          <div className="flex items-center justify-center text-center">
            <Link href="https://www.match-point.co.kr/">
              <p className="text-[20px] font-extrabold">프로젝트 페이지</p>
              <div className="flex items-center justify-center gap-[4px]">
                <p className="text-[20px] font-extrabold">방문하기</p>
                <MdArrowOutward size={20} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="info_box_card">
        <div className="h-[420px] w-[400px] overflow-hidden rounded-2xl border-2 border-black bg-primary-10 shadow-card">
          <div className="relative h-[230px] w-[400px] overflow-hidden">
            <Image src="/북스포일러.png" fill={true} alt="프로젝트 이미지" />
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
        </div>
        <div className="info_box_card back h-[420px] w-[400px] overflow-hidden rounded-2xl border-2 border-black bg-primary-10 shadow-card">
          <div className="flex items-center justify-center text-center">
            <Link href="https://oz-02-collabo-004.vercel.app/">
              <p className="text-[20px] font-extrabold">프로젝트 페이지</p>
              <div className="flex items-center justify-center gap-[4px]">
                <p className="text-[20px] font-extrabold">방문하기</p>
                <MdArrowOutward size={20} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
