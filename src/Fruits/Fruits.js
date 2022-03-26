import React from 'react';
import './Fruits.css'

const Fruits = (props) => {
    const { name, img, id } = props.product;
    return (
        <div className='fruits'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Product id: {id}</p>
        </div>
    );
};

export default Fruits;