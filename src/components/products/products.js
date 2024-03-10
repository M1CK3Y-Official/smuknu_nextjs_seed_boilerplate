'use client';
import { useState, useEffect } from 'react';
import Product from './product/product';
import styles from './products.module.css';

const Products = ({recommended}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const getProducts = async () => {

            const response = await fetch('/api/products');
            const data = await response.json();
            let filteredData = recommended ? data.filter((product) => product.recommended === true) : data;
            setProducts(filteredData);

        }

        getProducts();

    }, []);


    return (
        <div className={styles.list}>
        {products.map((product) => (
            <Product key={product._id} product={product} />
        ))}
        </div>
    )

}

export default Products;