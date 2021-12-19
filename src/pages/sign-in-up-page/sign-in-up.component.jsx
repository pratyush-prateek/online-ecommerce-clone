import React from "react";
import { connect } from "react-redux";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./sign-in-up.component.scss";

const SignInUp = (props) => {
  const { currentUser } = props;
  return (
    <div>
      {!currentUser ? (
        <div className="sign-in-up">
          <SignIn />
          <SignUp />
        </div>
      ) : (
        <div className="sign-in-up">You are already signed in</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(SignInUp);
