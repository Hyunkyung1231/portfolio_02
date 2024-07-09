import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiCloseLine } from "react-icons/ri";

interface ProjectModalProps {
  setIsOpen: (value: boolean) => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ setIsOpen }) => {
  return (
    <div className="absolute left-0 top-[250px] z-50 flex h-full w-full items-center justify-center py-[50px]">
      <div className="flex h-[1050px] w-[900px] flex-col items-center justify-center gap-[20px] rounded-xl border-2 border-black bg-primary-80 px-[60px] py-[50px] shadow-card">
        <div className="flex w-full flex-col gap-[4px]">
          <p className="text-[17px]">Project</p>
          <p className="text-[30px] font-extrabold">매치포인트</p>
        </div>
        <div className="flex h-full w-full">
          <Image
            src="/매치포인트.png"
            alt="프로젝트 이미지"
            width={800}
            height={800}
          />
        </div>
        <div className="flex w-full gap-[40px]">
          <p className="flex text-[20px] font-extrabold">프로젝트 소개</p>
          <div className="flex flex-col gap-[4px]">
            <div className="flex w-[450px] items-center justify-start text-[15px] font-light">
              테니스 클럽과 대회의 관리를 도우며, 참가자들의 성적에 기반한
              실시간 랭킹 플랫폼 서비스를 제공
            </div>
          </div>
        </div>
        <div className="flex w-full gap-[100px]">
          <p className="text-[20px] font-extrabold">SKILLS</p>
          <div className="flex gap-[4px]">
            <div className="flex w-[100px] items-center justify-center rounded-md bg-primary-40 text-[15px] font-light">
              React
            </div>
            <div className="flex w-[100px] items-center justify-center rounded-md bg-primary-50 text-[15px] font-light">
              Next.js
            </div>
            <div className="flex w-[130px] items-center justify-center rounded-md bg-primary-60 text-[15px] font-light">
              Tailwind CSS
            </div>
          </div>
        </div>
        <div className="flex w-full gap-[96px]">
          <p className="text-[20px] font-extrabold">TOOLS</p>
          <div className="flex gap-[4px]">
            <div className="flex w-[100px] items-center justify-center rounded-md bg-primary-70 text-[15px] font-light">
              VS CODE
            </div>
          </div>
        </div>
        <div className="flex w-full gap-[83px]">
          <p className="text-[20px] font-extrabold">개발기간</p>
          <div className="flex gap-[4px]">
            <div className="flex w-full items-center justify-center text-[15px] font-light">
              2024.05.24 - 2024.06.21
            </div>
          </div>
        </div>
        <div className="flex w-full gap-[83px]">
          <p className="text-[20px] font-extrabold">진행인원</p>
          <div className="flex gap-[4px]">
            <div className="flex w-full items-center justify-center text-[15px] font-light">
              프론트엔드 3명, 백엔드 4명
            </div>
          </div>
        </div>
        <div className="flex w-full gap-[120px]">
          <p className="flex text-[20px] font-extrabold">역할</p>
          <div className="flex flex-col gap-[4px]">
            <div className="flex w-[350px] items-center justify-start text-[15px] font-light">
              대회상세보기 페이지, 내가 참가한 대회 페이지 구현
            </div>
            <div className="flex w-[450px] items-center justify-start text-[15px] font-light">
              Suspense를 사용하여 데이터 로딩 상태를 관리하고 로딩스피너를
              표시하여 사용자 경험을 개선
            </div>
          </div>
        </div>
        <div className="flex w-full gap-[83px]">
          <p className="text-[20px] font-extrabold">배포링크</p>
          <div className="flex gap-[4px]">
            <Link href="https://www.match-point.co.kr/">
              <div className="flex w-full items-center justify-center text-[15px] font-light">
                https://www.match-point.co.kr/
              </div>
            </Link>
          </div>
        </div>
        <div
          className="absolute right-[300px] top-[-170px] cursor-pointer"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <RiCloseLine size={45} />
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
