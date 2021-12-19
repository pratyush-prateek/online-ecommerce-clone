import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component.jsx";
import { connect } from "react-redux";

const CartDropdown = (props) => {
  const { displayCart } = props;
  return (
    <div
      className="cart-dropdown"
      style={{
        display: `${displayCart ? "" : "none"}`,
      }}
    >
      <div className="cart-items"></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    displayCart: state.cart.displayCart,
  };
};

export default connect(mapStateToProps)(CartDropdown);
