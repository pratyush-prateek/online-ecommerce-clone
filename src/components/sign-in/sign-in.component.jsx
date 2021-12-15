import React from "react";
import CustomButton from "../custom-button/custom-button.component.jsx";
import FormInput from "../form-input/form-input.component.jsx";
import "./sign-in.styles.scss";
//Firebase auth imports
import { auth, signInWithGoogle } from "../../firebase/firebase.utils.js";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        value: "",
        error: "",
      },
      password: {
        value: "",
        error: ",",
      },
      isSubmitDisabled: true,
    };
  }

  getEmailValidationMessage = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
      ? ""
      : "Please enter a valid email";
  };

  validateFieldAndChangeValue = (fieldName, fieldValue) => {
    if (fieldName === "email") {
      const emailValidationMessage = this.getEmailValidationMessage(fieldValue);
      this.setState(
        {
          [fieldName]: {
            value: fieldValue,
            error: emailValidationMessage,
          },
        },
        () => {
          const {
            email: { value: emailValue, error: emailError },
            password: { value: passwordValue, error: passwordError },
          } = this.state;
          const signInEnabled =
            emailValue && passwordValue && !emailError && !passwordError;
          this.setState({
            isSubmitDisabled: !signInEnabled,
          });
        }
      );
    } else if (fieldName == "password") {
      //For now, no password strength calculation
      this.setState(
        {
          [fieldName]: {
            value: fieldValue,
            error: "",
          },
        },
        () => {
          const {
            email: { value: emailValue, error: emailError },
            password: { value: passwordValue, error: passwordError },
          } = this.state;
          const signInEnabled =
            emailValue && passwordValue && !emailError && !passwordError;
          this.setState({
            isSubmitDisabled: !signInEnabled,
          });
        }
      );
    }
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const {
      email: { value: emailValue },
      password: { value: passwordValue },
    } = this.state;
    try {
      await auth.signInWithEmailAndPassword(emailValue, passwordValue);
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({
        email: {
          value: "",
          error: "",
        },
        password: {
          value: "",
          error: "",
        },
      });
    }
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.validateFieldAndChangeValue(name, value);
  };

  render() {
    const {
      email: { value: emailValue, error: emailError },
      password: { value: passwordValue, error: passwordError },
      isSubmitDisabled,
    } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={emailValue}
            errorMessage={emailError}
            required
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={passwordValue}
            errorMessage={passwordError}
            required
          />
          <div className="buttons">
            <CustomButton
              type="submit"
              value="Submit Form"
              disabled={isSubmitDisabled}
            >
              SIGN IN
            </CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              value="Sign in with Google"
              isGoogleSignInButton
            >
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
