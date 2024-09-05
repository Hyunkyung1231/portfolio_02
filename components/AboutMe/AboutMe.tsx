import React from "react";
import Link from "next/link";
import EducationCard from "../EducationCard/EducationCard";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import SkillsCard from "../SkillsCard/SkillsCard";

const AboutMe = () => {
  return (
    <div className="flex w-full flex-col justify-center gap-[70px] bg-primary-20 px-[220px] py-[100px]">
      <div className="flex flex-col items-center justify-center">
        <p className="text-[40px] font-semibold text-primary-60">About Me</p>
        <p className="text-[17px] font-semibold text-primary-60">
          My Introduction
        </p>
      </div>
      <div className="flex w-full justify-center gap-[20px]">
        <div className="flex h-[350px] w-[280px] items-start justify-start gap-[10px] rounded-sm bg-primary-10 px-[25px] pt-[20px] shadow-card">
          <ExperienceCard />
        </div>
        <div className="flex h-[350px] w-[280px] items-start justify-start gap-[10px] rounded-sm bg-primary-10 px-[25px] pt-[20px] shadow-card">
          <EducationCard />
        </div>
        <div className="flex h-[350px] w-[280px] items-start justify-start gap-[10px] rounded-sm bg-primary-10 px-[25px] pt-[20px] shadow-card">
          <SkillsCard />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
