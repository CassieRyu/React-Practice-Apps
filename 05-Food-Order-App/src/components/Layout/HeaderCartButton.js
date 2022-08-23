import React from "react";
import Cart from "../Cart/Cart";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = props => {
    const openCartHandler = event => {
        return <Cart />
    }
    return (
        <button className={classes.button} onClick={openCartHandler}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                3
            </span>
        </button>
    );
}

export default HeaderCartButton;