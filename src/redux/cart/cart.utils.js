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
