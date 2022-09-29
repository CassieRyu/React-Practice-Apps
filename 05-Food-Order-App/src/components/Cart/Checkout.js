import { useRef } from 'react';
import useInput from '../../hooks/useInput';
import classes from './Checkout.module.css';

const isNotEmpty = (value) => value.trim() !== '';
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
    const {
        value: nameInputValue,
        isValid: nameInputValidity,
        valueChangeHandler: nameChangeHandler,
        reset: nameReset,
    } = useInput(isNotEmpty);
    const {
        value: streetInputValue,
        isValid: streetInputValidity,
        valueChangeHandler: streetChangeHandler,
        reset: streetReset,
    } = useInput(isNotEmpty);
    const {
        value: postalCodeInputValue,
        isValid: postalCodeInputValidity,
        valueChangeHandler: postalCodeChangeHandler,
        reset: postalCodeReset,
    } = useInput(isFiveChars);
    const {
        value: cityInputValue,
        isValid: cityInputValidity,
        valueChangeHandler: cityChangeHandler,
        reset: cityReset,
    } = useInput(isNotEmpty);

    const formValidity =
        nameInputValidity &&
        streetInputValidity &&
        postalCodeInputValidity &&
        cityInputValidity;

    const confirmHandler = (event) => {
        event.preventDefault();
        if (!formValidity) {
            return;
        }
        // Submit order operations
        console.log('Submit order');
        nameReset();
        streetReset();
        postalCodeReset();
        cityReset();
    };

    return (
        <form
            className={classes.form}
            onSubmit={confirmHandler}
        >
            <div className={classes.control}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    value={nameInputValue}
                    onChange={nameChangeHandler}
                />
                {!nameInputValidity && <p>Please input a valid name.</p>}
            </div>
            <div className={classes.control}>
                <label htmlFor="street">Street</label>
                <input
                    type="text"
                    id="street"
                    value={streetInputValue}
                    onChange={streetChangeHandler}
                />
                {!streetInputValidity && <p>Please input a valid steert.</p>}
            </div>
            <div className={classes.control}>
                <label htmlFor="postal">Postal Code</label>
                <input
                    type="text"
                    id="postal"
                    value={postalCodeInputValue}
                    onChange={postalCodeChangeHandler}
                />
                {!postalCodeInputValidity && (
                    <p>Please input a valid postal code (5 charactors).</p>
                )}
            </div>
            <div className={classes.control}>
                <label htmlFor="city">City</label>
                <input
                    type="text"
                    id="city"
                    value={cityInputValue}
                    onChange={cityChangeHandler}
                />
                {!cityInputValidity && <p>Please input a valid city name.</p>}
            </div>
            <div className={classes.actions}>
                <button
                    type="button"
                    onClick={props.onCancel}
                >
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;
