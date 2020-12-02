import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import css from "./templatePage.module.css";

const TemplatePage = () => {
    const history = useHistory()

  return (
    <>
    <div className={css.templatePageWrapper}>

      <h2>Nothing but a template</h2>
      <button onClick={history.goBack}>Back</button>
    </div>
    </>
  );
};

export default withRouter(TemplatePage);
