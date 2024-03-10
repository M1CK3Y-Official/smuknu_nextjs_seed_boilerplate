'use client';
import styles from './accordion.module.css'
import { FaQuestion } from "react-icons/fa";
import { useState } from 'react';


const Accordion = ({question, answer}) => {

    const [isOpen, setIsOpen] = useState(false)

    return <div>

        <div className={styles.wrapper}>

            <div className={styles.accordion} onClick={ () => setIsOpen(!isOpen) }>
                <FaQuestion className={`${styles.icon} ${isOpen ? styles.open : ''}`}></FaQuestion>
                <h1 className={`${styles.title} ${isOpen ? styles.open : ''}`}>{question}</h1>
            </div>

            <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
                <span className={`${styles.answer} ${isOpen ? styles.open : ''}`}>{answer}</span>
            </div>

        </div>

    </div>

}

export default Accordion;