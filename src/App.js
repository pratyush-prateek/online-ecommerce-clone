import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop-page/shop-page.component.jsx";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/shop" exact={true} component={ShopPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  );
}

export default App;
