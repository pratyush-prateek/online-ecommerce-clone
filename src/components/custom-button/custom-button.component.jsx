import React from "react";
import "./custom-button.styles.scss";

const CustomButton = (props) => {
  const { children, isGoogleSignInButton, inverted, ...attrs } = props;
  return (
    <button
      className={`${inverted ? "inverted" : ""}${
        isGoogleSignInButton ? "google-sign-in" : ""
      } custom-button`}
      {...attrs}
    >
      {children}
    </button>
  );
};
export default CustomButton;
