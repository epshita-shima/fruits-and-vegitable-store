import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const { img, name } = props.cart;
    return (
        <div className='cart-product'>
            <img src={img} alt="" />
            <h4>{name}</h4>
        </div>
    );
};

export default Cart;