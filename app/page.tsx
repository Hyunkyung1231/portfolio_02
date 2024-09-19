import React from "react";
import "../styles/globals.css";
import MainPage from "@/components/MainPage/MainPage";
import AboutMe from "@/components/AboutMe/AboutMe";
import SideBar from "@/components/SideBar/Sidebar";
import Footer from "@/components/Footer/Footer";
import ProjectPage from "@/components/ProjectPage/ProjectPage";
import ContactPage from "@/components/ContactPage/ContactPage";

const Home = () => {
  return (
    <div className="h-full w-full">
      <MainPage />
      <div className="absolute left-[120px] top-[200px]">
        <div className="flex h-full flex-col justify-around gap-[20px] py-[80px]">
          <SideBar location="app" />
        </div>
      </div>
      <AboutMe />
      <ProjectPage />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default Home;
