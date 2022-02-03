import React from "react";
import "./checkout-page.styles.scss";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../redux/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = (props) => {
  const { cartItems, totalPrice } = props;
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} cartItem={item} />;
      })}
      <div className="total">
        <span>{`$${totalPrice}`}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
    totalPrice: selectCartItemsTotal(state),
  };
};

export default connect(mapStateToProps)(CheckoutPage);
