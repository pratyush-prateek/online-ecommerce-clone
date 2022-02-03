import {
  addItemToCart,
  removeItemFromCart,
  decreaseQuantityCartItem,
} from "./cart.utils.js";

const INITIAL_STATE = {
  displayCart: false,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_CART":
      return {
        ...state,
        displayCart: action.payload,
      };
    case "ADD_ITEM":
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        cartItems: decreaseQuantityCartItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
