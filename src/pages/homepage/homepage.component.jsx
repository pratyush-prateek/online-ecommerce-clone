import React from "react";
import "./homepage.styles.scss";
import { withRouter } from "react-router";
import Directory from "../../components/directory/directory.component.jsx";

const HomePage = (props) => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default withRouter(HomePage);
