import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectList = () => {
  return (
    <div className="flex w-full flex-col items-center gap-[100px] px-[140px] pb-[150px] pt-[50px]">
      <h1 className="text-[50px] font-bold">프로젝트</h1>
      <ProjectCard />
    </div>
  );
};

export default ProjectList;
