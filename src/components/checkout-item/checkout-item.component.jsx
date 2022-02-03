import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
  ADD_ITEM,
  DECREASE_QUANTITY,
  REMOVE_ITEM,
} from "../../redux/cart/cart.actions";

const CheckoutItem = (props) => {
  const { cartItem, removeItemFromCart, addItem, decreaseItemQuantity } = props;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={cartItem.imageUrl} />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => {
            if (cartItem.quantity === 1) removeItemFromCart(cartItem.id);
            else decreaseItemQuantity(cartItem);
          }}
        >
          &#10094;
        </div>
        <span className="value">{cartItem.quantity}</span>
        <div
          className="arrow"
          onClick={() => {
            addItem(cartItem);
          }}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{`$${cartItem.price}`}</span>
      <div
        className="remove-button"
        onClick={() => {
          removeItemFromCart(cartItem.id);
        }}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItemFromCart: (itemId) => {
      dispatch({ type: REMOVE_ITEM, payload: itemId });
    },
    addItem: (item) => {
      dispatch({ type: ADD_ITEM, payload: item });
    },
    decreaseItemQuantity: (item) => {
      dispatch({ type: DECREASE_QUANTITY, payload: item });
    },
  };
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
