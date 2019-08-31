const findMatchingCartItem = (cartItems, cartItemToFind) => {
  return cartItems.find(cartItem => cartItem.id === cartItemToFind.id);
};

export const addUniqueItemsToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = findMatchingCartItem(cartItems, cartItemToAdd);

  if (existingCartItem) {
    return cartItems.map(cartItem => {
      return cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = findMatchingCartItem(cartItems, cartItemToRemove);

  if (existingCartItem.quantity === 1) {
    return clearItemFromCart(cartItems, cartItemToRemove);
  } else {
    return cartItems.map(cartItem => {
      return cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem;
    });
  }
};

export const clearItemFromCart = (cartItems, cartItemToRemove) => {
  return cartItems.filter(cartItem => {
    return cartItem.id !== cartItemToRemove.id;
  });
};
