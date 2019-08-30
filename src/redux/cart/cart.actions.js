import { CartActionTypes } from "./cart.reducer.types";

export const toogleCartHidden = user => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
