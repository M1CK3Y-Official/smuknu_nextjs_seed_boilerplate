'use client';
import { useRef } from 'react';
import styles from './contactform.module.css';
import Image from 'next/image';
import Link from 'next/link';

const ContactForm = () => {

    const messageRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted');
        e.target.style.display = 'none';

        messageRef.current.style.display = 'block';
    }

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

            <div className={styles.container} ref={messageRef}>
                <h1 className={styles.title}>Tak!</h1>
                <p className={styles.name}>Birthe Marie Hansen</p>
                <p className={styles.thank}>Vi er enormt glade for at få dig som medlem.</p>
                <Image className={styles.image} src="/products/product_8281992819.jpg" alt="product" width={200} height={200} />
                <p className={styles.gift}>Kig i din indbox vi har sendt en lille velkomst gave.</p>
                <Link href={'/'}><button className={styles.btn}>Til Forsiden</button></Link>
            </div>


        </div>
    )

}

export default ContactForm;