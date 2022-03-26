import React from 'react';
import './Fruits.css'

const Fruits = (props) => {
    const { name, img } = props.product;
    const { handleAddToCart } = props;
    return (
        <div className='fruits'>

            <img src={img} alt="" />
            <h3>{name}</h3>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
            </button>
        </div>
    );
};

export default Fruits;