"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button/Button";
import { BiSolidChevronRightCircle } from "react-icons/bi";
import { BiSolidChevronLeft } from "react-icons/bi";
import { BiSolidChevronRight } from "react-icons/bi";
import { FiExternalLink } from "react-icons/fi";
import { PROJECT_DATA } from "./data";
import { FiXCircle } from "react-icons/fi";
import ProjectModal from "../ProjectModal/ProjectModal";

const ProjectCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [counter, setCounter] = useState(0);

  const handleLeftClick = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleRightClick = () => {
    if (counter < PROJECT_DATA.length - 1) {
      setCounter(counter + 1);
    }
  };

  return (
    <div className="flex h-full w-full flex-col justify-center">
      <div className="flex h-[300px] w-full justify-center">
        <div
          className="flex h-full items-center justify-center text-primary-30"
          onClick={handleLeftClick}
        >
          <BiSolidChevronLeft size={40} />
        </div>
        <div className="flex w-[850px] overflow-hidden">
          {PROJECT_DATA &&
            PROJECT_DATA.map((project) => (
              <div
                key={project.id}
                className="flex w-full items-center justify-center gap-[70px] px-[60px] transition-all duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${850 * counter}px)`,
                }}
              >
                <div className="flex h-[80%] w-[420px] items-center overflow-hidden rounded-lg">
                  <Image
                    className="h-full w-[420px]"
                    src={project.imageUrl}
                    alt={project.name}
                    width={500}
                    height={500}
                  />
                </div>

                <div className="flex h-full w-[340px] flex-col justify-center gap-[20px]">
                  <p className="h-[30px] text-[25px] font-bold text-primary-60">
                    {project.name}
                  </p>
                  <p className="h-[80px] text-primary-70">
                    {project.description}
                  </p>
                  <div className="flex w-full flex-row gap-[10px]">
                    <div className="w-[150px]">
                      <Link href={project.url}>
                        <Button className="flex gap-[5px] rounded-lg">
                          <span className="text-[15px]">Visit Site</span>
                          <FiExternalLink size={20} />
                        </Button>
                      </Link>
                    </div>
                    {isOpen ? (
                      <div
                        className="w-[150px]"
                        onClick={() => setIsOpen(false)}
                      >
                        <Button className="flex gap-[5px] rounded-lg">
                          <span className="text-[15px]">close</span>
                          <FiXCircle size={20} />
                        </Button>
                      </div>
                    ) : (
                      <div
                        className="w-[150px]"
                        onClick={() => setIsOpen(true)}
                      >
                        <Button className="flex gap-[5px] rounded-lg">
                          <span className="text-[15px]">View more</span>
                          <BiSolidChevronRightCircle size={20} />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div
          className="flex h-full items-center justify-center text-primary-30"
          onClick={handleRightClick}
        >
          <BiSolidChevronRight size={40} />
        </div>
      </div>
      <div className="flex w-full justify-center gap-[10px] pb-[40px] pt-[20px]">
        {PROJECT_DATA &&
          PROJECT_DATA.map((project) => (
            <div
              key={project.id}
              className={`h-[9px] w-[9px] rounded-full bg-primary-70 ${
                project.id === counter + 1 ? "pageActive" : ""
              }`}
            ></div>
          ))}
      </div>
      <div className="flex h-full w-full justify-center">
        <div className="flex w-[850px] overflow-hidden">
          <div
            className="flex w-full items-center justify-center transition-all duration-500 ease-in-out"
            style={{
              transform: `translateX(-${850 * counter}px)`,
            }}
          >
            {isOpen && <ProjectModal />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
