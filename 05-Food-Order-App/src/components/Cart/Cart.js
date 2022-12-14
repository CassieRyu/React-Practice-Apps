import React, {useContext, useState} from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props) => {
    const [isCheckout, setIscheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const cartContext = useContext(CartContext);
    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
    const hasItemInCart = cartContext.items.length > 0;

    const AddItemInCartHandler = (item) => {
        cartContext.addItem({...item, amount: 1});
    };
    const removeItemInCartHandler = (id) => {
        cartContext.removeItem(id);
    };

    const orderHandler = () => {
        setIscheckout(true);
    };

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true);
        await fetch(
            'https://react-practice-apps-b9377-default-rtdb.firebaseio.com/order.json',
            {
                method: 'POST',
                body: JSON.stringify({
                    user: userData,
                    orderedItems: cartContext.items,
                }),
            }
        );
        setIsSubmitting(false);
        setDidSubmit(true);
        cartContext.clearCart();
    };

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartContext.items.map((item) => (
                <CartItem
                    name={item.name}
                    price={item.price}
                    amount={item.amount}
                    key={item.id}
                    onAdd={AddItemInCartHandler.bind(null, item)}
                    onRemove={removeItemInCartHandler.bind(null, item.id)}
                />
            ))}
        </ul>
    );

    const cartActions = (
        <div className={classes.actions}>
            <button
                className={classes['button--alt']}
                onClick={props.onClose}>
                Close
            </button>
            {hasItemInCart && (
                <button
                    className={classes.button}
                    onClick={orderHandler}>
                    Order
                </button>
            )}
        </div>
    );

    const cartModalContent = (
        <React.Fragment>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>

            {isCheckout && (
                <Checkout
                    onConfirm={submitOrderHandler}
                    onCancel={props.onClose}
                />
            )}
            {!isCheckout && cartActions}
        </React.Fragment>
    );

    const isSubmittingModalContent = <p>Sending order data... </p>;
    const didSubmitModalContent = (
        <React.Fragment>
            <p>Successfullly sent the order! </p>
            <div className={classes.actions}>
                <button
                    className={classes.button}
                    onClick={props.onClose}>
                    Close
                </button>
            </div>
        </React.Fragment>
    );

    return (
        <Modal onClose={props.onClose}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting && didSubmit && didSubmitModalContent}
        </Modal>
    );
};

export default Cart;
