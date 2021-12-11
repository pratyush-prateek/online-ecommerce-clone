import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop-page/shop-page.component.jsx";
import Header from "./components/header/header.component";
import SignInUp from "./pages/sign-in-up-page/sign-in-up.component";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/signin" exact={true} component={SignInUp} />
        <Route path="/shop" exact={true} component={ShopPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
