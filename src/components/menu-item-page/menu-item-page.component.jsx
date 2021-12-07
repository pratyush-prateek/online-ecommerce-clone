import React from "react";
import { withRouter } from "react-router";

const MenuItemPage = (props) => {
  const { title } = props;
  return (
    <div>
      <h1>{title.toUpperCase()}</h1>
    </div>
  );
};

export default withRouter(MenuItemPage);
