import React from "react";

const EducationCard = () => {
  return (
    <div className="flex flex-col gap-[5px]">
      <div>
        <p className="text-[25px] font-extrabold text-primary-30">EDUCATION</p>
      </div>
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-col gap-[1px]">
          <p className="text-[18px] font-semibold text-primary-60">
            오즈코딩스쿨
          </p>
          <div className="flex items-center gap-[10px]">
            <div className="h-2 w-2 rounded-full bg-primary-30"></div>
            <p className="text-[15px] font-normal text-primary-60">
              초격차캠프 - 프론트엔드
            </p>
          </div>
          <p className="text-[15px] font-normal text-primary-70">
            2023.12 - 2024.06
          </p>
        </div>
        <div className="flex flex-col gap-[2px]">
          <p className="text-[18px] font-semibold text-primary-60">
            가천대학교
          </p>
          <div className="flex items-center gap-[10px]">
            <div className="h-2 w-2 rounded-full bg-primary-30"></div>
            <p className="text-[15px] font-normal text-primary-60">
              유럽어문학과
            </p>
          </div>
          <p className="text-[15px] font-normal text-primary-70">
            2014.03 - 2019.08
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
