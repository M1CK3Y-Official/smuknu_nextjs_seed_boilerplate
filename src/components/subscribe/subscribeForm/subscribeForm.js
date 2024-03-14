'use client';
import styles from './subscribeForm.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';


const SubscribeForm = ({setFormSubmitted, setSubscriberName}) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        let dataToSend = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        }

        fetch(`/api/subscriber`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend),
        }).then(res => res.json()).then(data => {
            console.log(data);
            setSubscriberName(data.name);
            setFormSubmitted(true);
        
        });

    };

    return ( <div>
            <form className={styles.form} id='form' onSubmit={handleSubmit}>
                <div className={styles.field}>
                    <label>Fulde Navn <b style={{color : 'var(--color-pink)'}}>*</b></label>
                    <input type="text" name='name' required/>
                </div>

                <div className={styles.field}>
                    <label>E-mail <b style={{color : 'var(--color-pink)'}}>*</b></label>
                    <input type="email" name='email' required/>
                </div>

                <div className={styles.field}>
                    <label>Ris og/eller ros</label>
                    <textarea name='message'></textarea>
                </div>

                <button className={styles.submitBtn}  type="submit">Opret</button>
            </form>



        </div>
    )

}

export default SubscribeForm;