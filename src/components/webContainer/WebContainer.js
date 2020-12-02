import React from "react";
import HomePage from "../pages/homePage/HomePage";
import TemplatePage from "../pages/templatePage/TemplatePage";
import css from "./webContainer.module.css";

const WebContainer = () => {
  return (
    <>
      <HomePage />
      <TemplatePage />
    </>
  );
};

export default WebContainer;
