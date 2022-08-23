
import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = props => {
    const cartContext = useContext(CartContext);

    const cartItems = <ul>{[
        { id: 'c1', name: "Sushi", amount: 2, price: 12.00 },
        { id: 'c2', name: "Cocktail", amount: 1, price: 8.98 }].map(item => (
            <li>{item.name}</li>
        ))}</ul>;
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{cartContext.totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
}

export default Cart;