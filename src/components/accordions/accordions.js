'use client';
import Accordion from '@/components/accordions/accordion/accordion'
import { useEffect, useState } from 'react'
import styles from './accordions.module.css'

const Accordions = () => {

    const [accordions, setAccordions] = useState([]);

    useEffect(() => {

        const getQuestions = async () => {

            const response = await fetch('/api/questions');
            const data = await response.json();
            setAccordions(data);

        }

        getQuestions();

    }, []);

    return ( <div>

            <hr className={styles.line}/>
            
            {accordions.map((accordion) => {
                return <Accordion key={accordion._id} question={accordion.question} answer={accordion.answer} />
            })}
        </div>
    )

}

export default Accordions;