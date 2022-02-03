export const addItemToCart = (cartItems, newItem) => {
  const cartItem = cartItems.find((item) => item.id === newItem.id);
  if (cartItem) {
    return cartItems.map((item) => {
      return item.id === cartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : item;
    });
  }

  return [...cartItems, { ...newItem, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemoveId) => {
  return cartItems.filter((item) => {
    return item.id !== itemToRemoveId;
  });
};

export const decreaseQuantityCartItem = (cartItems, itemToDecrease) => {
  return cartItems.map((item) => {
    return item.id === itemToDecrease.id
      ? { ...itemToDecrease, quantity: itemToDecrease.quantity - 1 }
      : item;
  });
};
