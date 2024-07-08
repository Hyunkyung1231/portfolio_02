import React from "react";
import "../styles/globals.css";
import MainPage from "@/components/MainPage/MainPage";
import InfoList from "@/components/InfoList/InfoList";

const Home = () => {
  return (
    <div>
      <MainPage />
      <InfoList />
    </div>
  );
};

export default Home;
