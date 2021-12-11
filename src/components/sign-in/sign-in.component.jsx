import React from "react";
import CustomButton from "../custom-button/custom-button.component.jsx";
import FormInput from "../form-input/form-input.component.jsx";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  render() {
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
            value={this.state.email}
            required
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            required
          />
          <CustomButton type="submit" value="Submit Form">
            SIGN IN
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;