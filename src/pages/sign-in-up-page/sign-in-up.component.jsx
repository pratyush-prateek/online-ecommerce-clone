import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./sign-in-up.component.scss";

const SignInUp = (props) => {
  return (
    <div className="sign-in-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInUp;
