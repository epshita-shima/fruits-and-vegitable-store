import React, { useEffect, useState } from 'react';
import Fruits from '../Fruits/Fruits';
import './Products.css';

const Products = () => {
    // const products = [
    //     { id: 1, name: 'Cherry', img: 'https://img.freepik.com/free-photo/selective-focus-shot-ripe-juicy-cherries-with-waterdrops-wooden-background_181624-55849.jpg?t=st=1648260727~exp=1648261327~hmac=dd79876fdf77d2f3270f2992660e546a3ed2badfb4d1d4f85fc46ef0dae2751e&w=996' },
    //     { id: 2, name: 'Tomato', img: 'https://img.freepik.com/free-photo/closeup-fresh-ripe-tomatoes-with-water-droplets-black-granite-kitchen-counter-surface_181624-28590.jpg?w=900' },
    //     { id: 3, name: 'Mango', img: 'https://img.freepik.com/free-photo/mango-white-background_35662-1456.jpg?w=996' },
    //     { id: 4, name: 'Rep Mango', img: 'https://as2.ftcdn.net/v2/jpg/02/14/30/43/1000_F_214304332_IcxCpPJtslqgGA37MyPqXmTXI5I1aCxj.jpg' },
    //     { id: 5, name: 'Rambutan', img: 'https://as2.ftcdn.net/v2/jpg/01/10/81/43/1000_F_110814322_CotBAnf5YLFMwOpvYviJvKC0ixTL78e9.jpg' },
    //     { id: 6, name: 'Apple', img: 'https://img.freepik.com/free-photo/apple-white-background_35662-1285.jpg?w=996' },
    //     { id: 7, name: 'Green Mango', img: 'https://as2.ftcdn.net/v2/jpg/02/02/94/03/1000_F_202940369_nlalrtdNJhrefk47iukkezBnLLzlYTFB.jpg' },
    //     { id: 8, name: 'Capsicum', img: 'https://as2.ftcdn.net/v2/jpg/02/82/83/53/1000_F_282835316_FJxC39WvqrQq5vrGDsphwe6QXbclk3Pq.jpg' },
    //     { id: 9, name: 'Orange', img: 'https://img.freepik.com/free-photo/cut-orange-parts-whole-fruit-with-green-leaves_74855-5381.jpg?t=st=1648261423~exp=1648262023~hmac=e6852e988a34093cb77c8e696128b18b0d80e1e7b4ad71d584f3f8acf4ba8652&w=996' },
    //     { id: 10, name: 'Lemon', img: 'https://img.freepik.com/free-photo/fresh-yellow-lemons_144627-9633.jpg?t=st=1648261508~exp=1648262108~hmac=7d943fff8650d022e4fa2fca4ee4c6b61118107dd9cbc2392caa8b8b6a5d2ec6&w=996' },
    //     { id: 11, name: 'Strawberry', img: 'https://img.freepik.com/free-photo/ripe-strawberries-with-leaves-isolated-white_80510-464.jpg?w=996' },
    //     { id: 12, name: 'Banana', img: 'https://img.freepik.com/free-photo/banana-white-background_88281-24.jpg?w=996' },
    // ];

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <div className='store-container'>
            <div className='product-container'>
                {
                    products.map(product => <Fruits
                        key={product.id}
                        product={product}
                    ></Fruits>)
                }
            </div>
        </div>
    );
};

export default Products;