import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { TOGGLE_CART } from "../../redux/cart/cart.actions.js";

const CartIcon = (props) => {
  const { displayCart, toggleCart, totalItems } = props;
  return (
    <div
      className="cart-icon"
      onClick={() => {
        toggleCart(!displayCart);
      }}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalItems}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCart: (value) => {
      dispatch({ type: TOGGLE_CART, payload: value });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    displayCart: state.cart.displayCart,
    totalItems: state.cart.cartItems.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
