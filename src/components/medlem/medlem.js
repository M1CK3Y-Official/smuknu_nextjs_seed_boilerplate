import Link from 'next/link';
import styles from './medlem.module.css'
import Image from 'next/image';

const Medlem = () => {

    return (

        <div className={styles.medlem}>

            <div className={styles.text}>

                <h1 className={styles.title}>medlem?</h1>
                <p className={styles.subtitle}>
                    Vær med i kundeklubben for nye videoer, rabatkoder og mere!
                </p>

                <Link className={styles.btnLink} href="/bliv-medlem">
                    <button className={`${styles.btn} ${styles.sm}`}>Bliv medlem af kundeklubben</button>
                    <button className={`${styles.btn} ${styles.md}`}>Bliv medlem</button>
                </Link>

            </div>

            <div className={styles.images}>

                <Image src='/reviews/kathrine_udgaard.jpg' alt={'kathrine_udgaard'} width={150} height={150} />
                <Image src='/reviews/phoebe_larsen.jpg' alt={'phoebe_larsen'} width={150} height={150} />
                <Image src='/reviews/phoebe_larsen.jpg' alt={'phoebe_larsen'} width={150} height={150} />
                <Image src='/reviews/kathrine_udgaard.jpg' alt={'kathrine_udgaard'} width={150} height={150} />
            </div>

        </div>

    )

}

export default Medlem;