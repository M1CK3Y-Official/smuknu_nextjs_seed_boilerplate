'use client';
import styles from './navigation.module.css';
import { FaBars, FaShoppingBag } from "react-icons/fa";
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';


const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);

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
                    <FaShoppingBag className={styles.bag} />
                </div>

            </div>

            <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
                {menu.map((item) => {
                    return <Link key={item.name} href={item.path} className={styles.menuLink}><div className={styles.dropdownMenu}>{item.name}</div></Link>
                })}
            </div>
        </div>
    )

}

export default Navigation;