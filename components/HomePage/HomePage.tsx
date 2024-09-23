"use client";
import React from "react";
import MainPage from "@/components/MainPage/MainPage";
import AboutMe from "@/components/AboutMe/AboutMe";
import SideBar from "@/components/SideBar/Sidebar";
import Footer from "@/components/Footer/Footer";
import ProjectPage from "@/components/ProjectPage/ProjectPage";
import ContactPage from "@/components/ContactPage/ContactPage";
import Navbar from "@/components/Navbar/Navbar";
import useMoveScroll from "@/utils/useMoveScroll";

const HomePage = () => {
  const mainPageRef = useMoveScroll();
  const aboutMeRef = useMoveScroll();
  const projectPageRef = useMoveScroll();
  const contactPageRef = useMoveScroll();

  return (
    <div className="h-full w-full">
      <div className="fixed top-[0px] z-[999] w-full max-w-[1680px]">
        <Navbar
          element={[mainPageRef, aboutMeRef, projectPageRef, contactPageRef]}
        />
      </div>
      <div ref={mainPageRef.element}>
        <MainPage element={[aboutMeRef, contactPageRef]} />
      </div>
      <div className="absolute left-[120px] top-[200px]">
        <div className="flex h-full flex-col justify-around gap-[20px] py-[80px]">
          <SideBar location="app" />
        </div>
      </div>
      <div ref={aboutMeRef.element}>
        <AboutMe />
      </div>
      <div ref={projectPageRef.element}>
        <ProjectPage />
      </div>
      <div ref={contactPageRef.element}>
        <ContactPage />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
