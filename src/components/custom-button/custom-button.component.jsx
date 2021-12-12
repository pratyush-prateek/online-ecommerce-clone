import React from "react";
import "./custom-button.styles.scss";

const CustomButton = (props) => {
  const { children, isGoogleSignInButton, ...attrs } = props;
  return (
    <button
      className={`${
        isGoogleSignInButton ? "google-sign-in" : ""
      } custom-button`}
      {...attrs}
    >
      {children}
    </button>
  );
};
export default CustomButton;
