import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop-page/shop-page.component.jsx";
import Header from "./components/header/header.component";
import SignInUp from "./pages/sign-in-up-page/sign-in-up.component";
import { Route, Switch } from "react-router-dom";
import { auth } from "./firebase/firebase.utils.js";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route path="/signin" exact={true} component={SignInUp} />
          <Route path="/shop" exact={true} component={ShopPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
