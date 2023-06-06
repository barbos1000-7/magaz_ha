import React from 'react';
import s from './ShoppingCart.module.css'
import {ShoppinCartContainer} from "./shoppCarts/ShoppinCartContainer";
const ShoppingCart = () => {
    return (
        <div className={s.shop}>
            <ShoppinCartContainer />
        </div>
    );
};

export default ShoppingCart;