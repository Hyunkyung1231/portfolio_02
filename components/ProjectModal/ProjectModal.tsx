import React from "react";
import { PROJECT_DATA } from "@/components/ProjectCard/data";
import DashedLine from "../DashedLine/DashedLine";
import { FaCircle } from "react-icons/fa";

const ProjectModal = () => {
  return (
    <div className="relative flex h-[300px] w-full justify-start">
      {PROJECT_DATA &&
        PROJECT_DATA.map((project) => (
          <div
            key={project.id}
            className="flex h-full w-full rounded-2xl border-[1px] border-primary-30"
          >
            <div className="flex h-full w-full justify-start gap-[10px] rounded-2xl bg-primary-20 px-[30px] pt-[45px]">
              <div className="flex h-full w-[200px] flex-col justify-start gap-[30px]">
                <div className="flex items-center justify-center">
                  <div className="flex h-full w-full items-center justify-start text-primary-30">
                    <FaCircle size={15} />
                  </div>
                  <div className="flex h-full w-full gap-[3px] px-[20px] text-primary-70">
                    <DashedLine />
                  </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div>
                    <p className="text-[25px] font-extrabold text-primary-60">
                      SKILLS
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[14px] font-normal text-primary-60">
                      {project.skiis}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex h-full w-[200px] flex-col justify-start gap-[30px]">
                <div className="flex items-center justify-center">
                  <div className="flex h-full w-full items-center justify-start text-primary-30">
                    <FaCircle size={15} />
                  </div>
                  <div className="flex h-full w-full gap-[3px] px-[20px] text-primary-70">
                    <DashedLine />
                  </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div>
                    <p className="text-[25px] font-extrabold text-primary-60">
                      기간
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[14px] font-normal text-primary-60">
                      {project.startDate} - {project.endDate}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex h-full w-[200px] flex-col justify-start gap-[30px]">
                <div className="flex items-center justify-center">
                  <div className="flex h-full w-full items-center justify-start text-primary-30">
                    <FaCircle size={15} />
                  </div>
                  <div className="flex h-full w-full gap-[3px] px-[20px] text-primary-70">
                    <DashedLine />
                  </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div>
                    <p className="text-[25px] font-extrabold text-primary-60">
                      개발인원 & 역할
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[14px] font-normal text-primary-60">
                      - {project.resource}
                    </p>
                    <p className="text-[14px] font-normal text-primary-60">
                      - {project.role}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex h-full w-[200px] flex-col justify-start gap-[30px]">
                <div className="flex items-center justify-center">
                  <div className="flex h-full w-full items-center justify-start text-primary-30">
                    <FaCircle size={15} />
                  </div>
                  <div className="flex h-full w-full gap-[3px] px-[20px] text-primary-70">
                    <DashedLine />
                  </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div>
                    <p className="text-[25px] font-extrabold text-primary-60">
                      담당
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[14px] font-normal text-primary-60">
                      - {project.part}
                    </p>
                    <p className="text-[14px] font-normal text-primary-60">
                      - {project.part2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProjectModal;
