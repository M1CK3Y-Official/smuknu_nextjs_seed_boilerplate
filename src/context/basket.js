'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const BasketContext = createContext();

export const BasketContextProvider = ({ children }) => {

    const [basket, setBasket] = useState([]);
    const [name, setName] = useState('Hest');

    useEffect( () => {

        const basket = localStorage.getItem('basket');
        if(basket) {
            setBasket(JSON.parse(basket));
        }

    }, []);


    const addToBasket = (id, amount = 1) => {
        


        let basket = localStorage.getItem('basket');

        if(basket) {
            basket = JSON.parse(basket);
            const existingItem = basket.find((item) => item.id === id);
            if (existingItem) {
                existingItem.amount += amount;
            } else {
                basket.push(
                    {
                        id: id,
                        amount: amount
                    }
                );
            }
        } else {
            basket = [];
            basket.push(
                {
                    id: id,
                    amount: amount
                }
            );
        }


        localStorage.setItem('basket', JSON.stringify(basket));
        setBasket(basket);

    }

    return (
        <BasketContext.Provider value={{ basket, addToBasket, name }}>
            {children}
        </BasketContext.Provider>
    )

}

export const useBasket = () => useContext(BasketContext);