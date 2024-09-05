import React from "react";

const ExperienceCard = () => {
  return (
    <div className="flex flex-col gap-[5px]">
      <div>
        <p className="text-[25px] font-extrabold text-primary-30">EXERIENCE</p>
      </div>
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-col gap-[1px]">
          <p className="text-[18px] font-semibold text-primary-60">
            인스브룩크
          </p>
          <div className="flex items-center gap-[10px]">
            <div className="h-2 w-2 rounded-full bg-primary-30"></div>
            <p className="text-[15px] font-normal text-primary-60">
              생활용품 MD
            </p>
          </div>
          <p className="text-[15px] font-normal text-primary-70">
            2020.05 - 2022.12
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
