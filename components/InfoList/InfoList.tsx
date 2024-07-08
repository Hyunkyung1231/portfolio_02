import React from "react";
import InfoCard from "@/components/InfoCard/InfoCard";
import Image from "next/image";

const InfoList = () => {
  return (
    <div className="flex justify-between px-[140px] py-[110px]">
      <div>
        <InfoCard width={400} height={450}>
          <div className="flex flex-col gap-[15px]">
            <div>
              <p className="text-[30px] font-extrabold">EXERIENCE</p>
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="text-[20px] font-semibold">인스브룩크</p>
              <div className="flex items-center gap-[10px]">
                <div className="h-2 w-2 rounded-full bg-black"></div>
                <p className="text-[15px] font-normal">생활용품 MD</p>
              </div>
              <p className="text-[15px] font-normal text-slate-600">
                2020.05 - 2023.12
              </p>
            </div>
          </div>
        </InfoCard>
      </div>
      <div className="flex flex-col justify-between">
        <InfoCard width={700} height={200}>
          <div className="flex flex-col gap-[15px]">
            <div>
              <p className="text-[30px] font-extrabold">EDUCATION</p>
            </div>
            <div className="flex gap-[170px]">
              <div className="flex flex-col gap-[2px]">
                <p className="text-[20px] font-semibold">오즈코딩스쿨</p>
                <div className="flex items-center gap-[10px]">
                  <div className="h-2 w-2 rounded-full bg-black"></div>
                  <p className="text-[15px] font-normal">
                    초격차캠프 - 프론트엔드
                  </p>
                </div>
                <p className="text-[15px] font-normal text-slate-600">
                  2023.12 - 2024.06
                </p>
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="text-[20px] font-semibold">가천대학교</p>
                <div className="flex items-center gap-[10px]">
                  <div className="h-2 w-2 rounded-full bg-black"></div>
                  <p className="text-[15px] font-normal">유럽어문학과</p>
                </div>
                <p className="text-[15px] font-normal text-slate-600">
                  2014.03 - 2019.08
                </p>
              </div>
            </div>
          </div>
        </InfoCard>
        <InfoCard width={700} height={200}>
          <div className="flex flex-col gap-[30px]">
            <div>
              <p className="text-[30px] font-extrabold">SKILLS ABILITY</p>
            </div>
            <div className="flex w-full justify-evenly">
              <Image src="/icon/HTML.png" alt="HTML" width={60} height={60} />
              <Image src="/icon/CSS.png" alt="CSS" width={60} height={60} />
              <Image
                src="/icon/JavaScript.png"
                alt="JavaScript"
                width={60}
                height={60}
              />
              <Image
                src="/icon/TypeScript.png"
                alt="TypeScript"
                width={60}
                height={60}
              />
              <Image
                src="/icon/React-Dark.png"
                alt="react"
                width={60}
                height={60}
              />
              <Image
                src="/icon/TailwindCSS-Dark.png"
                alt="짜증남"
                width={60}
                height={60}
              />

              <Image
                src="/icon/NextJS-Dark.png"
                alt="짜증남"
                width={60}
                height={60}
              />
            </div>
          </div>
        </InfoCard>
      </div>
    </div>
  );
};

export default InfoList;
