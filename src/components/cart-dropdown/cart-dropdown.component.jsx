import React, { Component } from "react";
import CustomButton from "../custom-button/custom-button.component";

class CartDropdown extends Component {
  render() {
    return (
      <div className="cart-dropdown">
        <div className="cart-items">
          <CustomButton>Go to checkout</CustomButton>
        </div>
      </div>
    );
  }
}

export default CartDropdown;
