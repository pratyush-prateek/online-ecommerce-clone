import React from "react";
import "./cart-dropdown.styles.scss";
import { withRouter } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component.jsx";
import CartItem from "../cart-item/cart-item.component.jsx";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { TOGGLE_CART } from "../../redux/cart/cart.actions";

const getCartItemCard = (cartItem) => {
  const { id, ...attrs } = cartItem;
  return <CartItem key={id} {...attrs} />;
};

const CartDropdown = (props) => {
  const { displayCart, cartItems, history, dispatch } = props;
  return (
    <div
      className="cart-dropdown"
      style={{
        display: `${displayCart ? "" : "none"}`,
      }}
    >
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            return getCartItemCard(item);
          })
        ) : (
          <span className="empty-message">YOUR CART IS EMPTY</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("checkout");
          dispatch({ type: TOGGLE_CART, payload: false });
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    displayCart: state.cart.displayCart,
    cartItems: selectCartItems(state),
  };
};

export default withRouter(connect(mapStateToProps)(CartDropdown));
