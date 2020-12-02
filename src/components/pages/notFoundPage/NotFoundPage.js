import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import css from "./notFoundPage.module.css";

const NotFoundPage = () => {
  const history = useHistory();
  
  return (
    <>
      <div className={css.notFoundPageWrapper}>
        <h2>404</h2>
        <button onClick={() => history.push("/")}>to home page</button>
      </div>
    </>
  );
};

export default withRouter(NotFoundPage);
