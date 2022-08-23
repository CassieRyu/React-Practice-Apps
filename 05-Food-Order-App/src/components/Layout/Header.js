import React, { Fragment } from 'react';
import classes from './Header.module.css';
import mealsImg from '../../assets/meals.jpeg'
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>33 Store Meals</h1>
<<<<<<< HEAD
                <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
=======
                <HeaderCartButton>Cart</HeaderCartButton>
>>>>>>> ed16c5b9e24071d105f0ffd5608dcd1b64c5c596
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImg} alt="A table full of delicious food!" />
            </div>
        </Fragment>

    );
}

export default Header;