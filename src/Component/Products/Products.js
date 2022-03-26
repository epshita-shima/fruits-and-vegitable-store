import React, { useEffect, useState } from 'react';
import Fruits from '../Fruits/Fruits';
import Cart from '../Cart/Cart';
import './Products.css';
import Choose from '../Choose/Choose';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [items, setItem] = useState([]);
    console.log(items);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    const handleAddToCart = (product) => {
        if (cart.length > 3) {
            alert('text');
        }
        else {
            const newCart = [...cart, product];
            setCart(newCart);
        }
    }
    const chooseItem = () => {
        let items = 0;
        if (!items !== undefined) {
            setItem(items)
            const carts = Math.floor(Math.random() * 3 + 1);
            items = cart[carts];
            console.log(items);
            setItem(items);

        }
    }
    const reset = () => {
        setCart([]);
        setItem([]);
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
                <h3>Select product</h3>
                {
                    cart.map(cart => <Cart
                        key={cart.id}
                        cart={cart}
                    ></Cart>)
                }
                {
                    <Choose
                        item={items}
                    ></Choose>
                }
                <button onClick={chooseItem} className='btn-choose'>
                    <p>Choose item</p>
                </button>
                <br />
                <button onClick={reset} className='btn-reset'>
                    <p>Choose Again</p>
                </button>
            </div>
        </div>
    );
};

export default Products;