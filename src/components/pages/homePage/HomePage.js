import React from "react";
import css from "./homePage.module.css";
import {NavLink, withRouter} from "react-router-dom"

const HomePage = () => {
  return (
    <>
      <div className={css.homePageWrapper}>
        <h1>Homepage</h1>
        <h2>Seems like you succesfully ran this code</h2>
        <NavLink to="/template">to some other page</NavLink>
      </div>
    </>
  );
};

export default withRouter(HomePage);
