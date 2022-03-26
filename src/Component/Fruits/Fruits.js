import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Fruits.css'

const Fruits = (props) => {
    const { name, img, price } = props.product;
    const { handleAddToCart } = props;
    return (
        <div className='fruits'>

            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>${price}</p>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Fruits;