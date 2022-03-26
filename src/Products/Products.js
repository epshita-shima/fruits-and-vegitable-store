import React, { useEffect, useState } from 'react';
import Fruits from '../Fruits/Fruits';
import Cart from '../Cart/Cart';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    const reset = () => {
        setCart([]);
    }
    return (
        <div className='store-container'>
            <div className='product-container'>
                {
                    products.map(product => <Fruits
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Fruits>)
                }
            </div>
            <div>
                <h3>Select summary</h3>
                <p>Selected items:{cart.length}</p>
                {
                    cart.map(cart => <Cart
                        key={cart.id}
                        cart={cart}
                    ></Cart>)
                }
                <button >
                    <p>Choose item</p>
                </button>
                <button onClick={reset} className='btn-reset'>
                    <p>Choose Again</p>
                </button>
            </div>
        </div>
    );
};

export default Products;