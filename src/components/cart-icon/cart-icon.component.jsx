import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toogleCartHidden } from "../../redux/cart/cart.actions";

function CartIcon({ toogleCartHidden }) {
  return (
    <div className="cart-icon" onClick={toogleCartHidden}>
      <ShopingIcon className="shopping-icon"></ShopingIcon>
      <span className="item-count">0</span>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  toogleCartHidden: dispatch(toogleCartHidden()),
});

export default connect(
  null,
  mapDispatchToProps,
)(CartIcon);
