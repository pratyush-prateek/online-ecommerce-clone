import { createSelector } from "reselect";

const selectCart = (state) => {
  return state.cart;
};

export const selectCartItems = createSelector([selectCart], (cart) => {
  return cart.cartItems;
});

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
  }
);

export const selectCartItemsTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }
);
