import CartActionTypes from "./cart.reducer.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItemToCart = item => ({
  type: CartActionTypes.ADD_ITEM_TO_CART,
  payload: item,
});

export const removeItemFromCart = item => ({
  type: CartActionTypes.REMOVE_ITEM_FROM_CART,
  payload: item,
});

export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});
