import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectPage = () => {
  return (
    <div className="flex w-full flex-col justify-center gap-[70px] bg-primary-20 px-[220px] py-[100px]">
      <div className="flex flex-col items-center justify-center">
        <p className="text-[40px] font-semibold text-primary-60">Project</p>
        <p className="text-[17px] font-semibold text-primary-60">
          Most recent work
        </p>
      </div>
      <div className="flex w-full justify-center gap-[20px]">
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectPage;
