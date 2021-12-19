import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component.jsx";
import { connect } from "react-redux";
import { ADD_ITEM } from "../../redux/cart/cart.actions.js";

const CollectionItem = (props) => {
  const { item, addItem } = props;
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{`$${price}`}</span>
      </div>
      <CustomButton
        inverted={true}
        onClick={() => {
          addItem(item);
        }}
      >
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => {
      dispatch({ type: ADD_ITEM, payload: item });
    },
  };
};

export default connect(null, mapDispatchToProps)(CollectionItem);
