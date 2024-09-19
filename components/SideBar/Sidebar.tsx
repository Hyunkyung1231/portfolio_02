import React from "react";
import { FiFileText } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import Link from "next/link";

interface SideBarProps {
  location: string;
}

const SideBar: React.FC<SideBarProps> = ({ location }) => {
  const backgroundColor =
    location === "footer"
      ? "bg-primary-10 text-primary-30 hover_footer_sidebar"
      : "bg-primary-30 text-primary-10 hover_app_sidebar";

  return (
    <>
      <div
        className={`flex h-[35px] w-[35px] items-center justify-center rounded-full ${backgroundColor}`}
      >
        <Link href="https://www.rallit.com/hub/resumes/1227014/%EC%9D%B4%ED%98%84%EA%B2%BD?isExpanded=true">
          <FiFileText size={23} />
        </Link>
      </div>
      <div
        className={`flex h-[35px] w-[35px] items-center justify-center rounded-full ${backgroundColor}`}
      >
        <Link href="https://github.com/Hyunkyung1231">
          <FiGithub size={23} />
        </Link>
      </div>
      <div
        className={`flex h-[35px] w-[35px] items-center justify-center rounded-full ${backgroundColor}`}
      >
        <Link href="https://www.instagram.com/h_y_unkyung/">
          <FiInstagram size={23} />
        </Link>
      </div>
    </>
  );
};

export default SideBar;
