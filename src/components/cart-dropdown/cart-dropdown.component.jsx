import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component.jsx";
import CartItem from "../cart-item/cart-item.component.jsx";
import { connect } from "react-redux";

const getCartItemCard = (cartItem) => {
  const { id, ...attrs } = cartItem;
  return <CartItem key={id} {...attrs} />;
};

const CartDropdown = (props) => {
  const { displayCart, cartItems } = props;
  return (
    <div
      className="cart-dropdown"
      style={{
        display: `${displayCart ? "" : "none"}`,
      }}
    >
      <div className="cart-items">
        {cartItems.map((item) => {
          return getCartItemCard(item);
        })}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    displayCart: state.cart.displayCart,
    cartItems: state.cart.cartItems,
  };
};

export default connect(mapStateToProps)(CartDropdown);
