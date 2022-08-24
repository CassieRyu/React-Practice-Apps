
import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = props => {
    const cartContext = useContext(CartContext);
    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
    const hasItemInCart = cartContext.items.length > 0;
    const AddItemInCartHandler = item => {

    };
    const removeItemInCartHandler = id => { };

    const cartItems = <ul className={classes["cart-items"]}>
        {cartContext.items.map(item => (
            <CartItem
                name={item.name}
                price={item.price}
                amount={item.amount}
                key={item.id}
                onAdd={AddItemInCartHandler.bind(null, item.id)}
                onRemove={removeItemInCartHandler.bind(null, item)}
            />
        )

        )}</ul>;
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
                {hasItemInCart && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
}

export default Cart;