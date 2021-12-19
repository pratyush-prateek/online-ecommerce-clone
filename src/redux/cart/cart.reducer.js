const INITIAL_STATE = {
  displayCart: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_CART":
      return {
        ...state,
        displayCart: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
