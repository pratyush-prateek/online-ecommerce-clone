import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component.jsx";
import MenuItemPage from "../../pages/menu-item-page/menu-item-page.component.jsx";
import { Route, Switch } from "react-router-dom";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          size: "normal",
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          size: "normal",
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          size: "normal",
          linkUrl: "shop/sneakers",
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
      ],
    };
  }

  getMenuItem = (itemObj) => {
    const { id, ...attrs } = itemObj;
    return <MenuItem key={id} {...attrs} />;
  };

  getMenuItems = () => {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map((item) => {
          return this.getMenuItem(item);
        })}
      </div>
    );
  };

  render() {
    const { sections } = this.state;
    return (
      <Switch>
        <Route exact={true} path="/" render={this.getMenuItems} />
        {sections.map((item) => {
          return (
            <Route
              key={item.id}
              exact={true}
              path={`/${item.linkUrl}`}
              render={(props) => <MenuItemPage title={item.title} />}
            />
          );
        })}
      </Switch>
    );
  }
}

export default Directory;
