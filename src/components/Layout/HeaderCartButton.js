import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import React from 'react';

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Yuour cart</span>
        <span className={classes.badge}>3</span>
    </button>
  )
}

export default HeaderCartButton;