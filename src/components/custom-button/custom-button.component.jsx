import React from "react";
import "./custom-button.styles.scss";

const CustomButton = (props) => {
  const { children, ...attrs } = props;
  return (
    <button className="custom-button" {...attrs}>
      {children}
    </button>
  );
};
export default CustomButton;
