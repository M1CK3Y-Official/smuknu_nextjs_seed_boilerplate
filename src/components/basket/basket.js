import { useEffect, useState } from 'react';
import styles from './basket.module.css';
import { useBasket } from '@/context/basket';
import Image from 'next/image';
const Basket = () => {

    const {basket, name} = useBasket();
    const [basketItems, setBasketItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {

        let price = 0;
        basketItems.map((item) => {
            price += item.price * item.amount;
        });
        setTotalPrice(price);

    }, [basketItems]);



    useEffect(() => {

        const getProductsByRange = async () => {
            let idRange = basket.map((item) => item.id);

            if(idRange.length > 0) {

                let products = await fetch('/api/products?range=' + idRange);
                products = await products.json();

                products.map((product) => {

                    let basketAmount = basket.find( (item) => item.id === product._id );

                    console.log(basket, basketAmount)

                    if(basketAmount) {
                        product.amount = basketAmount.amount;
                    }

                    console.log('Kurv af varer', products)

                })
                setBasketItems(products);

            } 
            
        }

        getProductsByRange();

    }, [basket]);

    return (
        <div className={styles.container}>
            {basketItems.length === 0 ? (
                <div className={styles.empty}><p>Der er ingen produkter i kurven</p></div>
            ) : (
                <>
                    {basketItems.map((basketItem) => {
                        return (
                            <div key={basketItem._id} className={styles.itemContainer}>
                                <div className={styles.imageContainer}>
                                    <Image src={basketItem.image} alt={basketItem.title} width={100} height={100} />
                                </div>
                                <div className={styles.itemInfo}>
                                    <p className={styles.title}>{basketItem.title}</p>
                                    {/* <p>Pris: {basketItem.price},00 kr.</p> */}
                                    <p className={styles.amount}>Antal: {basketItem.amount} stk.</p>
                                    <p className={styles.price}>{basketItem.amount * basketItem.price},00 kr.</p>
                                </div>
                            </div>
                        )
                    })}
                    <div className={styles.totalPriceContainer}>
                        <div className={styles.totalPrice}>
                            <p className={styles.total}>ialt</p> <p><b>{totalPrice},00 kr.</b></p>
                        </div>
                    </div>
                </>
            )}
        </div>
    )

}

export default Basket;