import React from "react";
import "../styles/globals.css";
import MainPage from "@/components/MainPage/MainPage";
import InfoList from "@/components/InfoList/InfoList";
import ProjectList from "@/components/ProjectList/ProjectList";
import Footer from "@/components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <MainPage />
      <InfoList />
      <ProjectList />
      <Footer />
    </div>
  );
};

export default Home;
