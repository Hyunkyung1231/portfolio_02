import React from "react";
import "../styles/globals.css";
import MainPage from "@/components/MainPage/MainPage";
import AboutMe from "@/components/AboutMe/AboutMe";
import SideBar from "@/components/SideBar/Sidebar";
import Footer from "@/components/Footer/Footer";
import ProjectPage from "@/components/ProjectPage/ProjectPage";

interface HomeProps {
  flex: string;
}

const Home: React.FC<HomeProps> = ({ flex }) => {
  return (
    <div className="h-full w-full">
      <MainPage />
      <div className="absolute left-[120px] top-[200px]">
        <SideBar flex="flex-col" />
      </div>
      <AboutMe />
      <ProjectPage />
      <Footer />
    </div>
  );
};

export default Home;
