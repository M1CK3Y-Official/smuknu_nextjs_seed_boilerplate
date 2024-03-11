'use client';
import styles from './navigation.module.css';
import { FaBars, FaShoppingBag } from "react-icons/fa";
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { useBasket } from '@/context/basket';
import Basket from '@/components/basket/basket';


const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const {basket} = useBasket();

    let menu = [
        {
            name: 'Forsiden',
            path: '/'
        },
        {
            name: 'Vores Produkter',
            path: '/produkter'
        },
        {
            name: 'Spørg om sundhed',
            path: '/sundhed'
        },
        {
            name: 'Bliv medlem',
            path: '/bliv-medlem'
        }
    ];

    return (
        <div className={styles.nav}>
            <div className={styles.navBar}>

                <div className={styles.logo}>
                    <Link href='/' className={styles.link}>
                        <Image src="/smuknu_logo.png" alt="logo" width={4989} height={1349} />
                    </Link>
                </div>

                <div className={styles.actions}>
                    <FaBars className={styles.bars} onClick={ () => setIsOpen(!isOpen) } />

                    <div onClick={ () => setIsCartOpen(!isCartOpen)}>
                        <div className={styles.cartContainer}>
                            <FaShoppingBag className={styles.cart} style={{color : basket.length === 0 ? 'var(--color-light-gray)' : 'var(--color-pink)'}} />

                            <div className={styles.amountContainer}>
                                <p className={styles.cartAmount}>{basket.length}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
                {menu.map((item) => {
                    return <Link key={item.name} href={item.path} className={styles.menuLink}><div className={styles.dropdownMenu}>{item.name}</div></Link>
                })}
            </div>

            <div className={`${styles.cartDropdown} ${isCartOpen ? styles.open : ''}`} style={{minHeight : basket.length === 0 ? '0' : '50vh'}}>

                <Basket className={styles.basket} />

            </div>

        </div>
    )

}

export default Navigation;