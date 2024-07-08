import React from "react";

interface InfoCardProps {
  width: number;
  height: number;
  children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ width, height, children }) => {
  return (
    <div
      className={`bg-primary-10 h-${height}px w-${width}px rounded-2xl border-2 border-black px-[30px] py-[25px] shadow-card`}
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      {children}
    </div>
  );
};

export default InfoCard;
