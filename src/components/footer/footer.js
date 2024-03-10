import Link from 'next/link';
import styles from './footer.module.css'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {

    return (
        <div className={styles.footer}>
            <div className={styles.socials}>
                <Link className={styles.icon} href="/"><FaFacebook/></Link>
                <Link className={styles.icon} href="/"><FaInstagram/></Link>
                <Link className={styles.icon} href="/"><FaPinterest/></Link>
                <Link className={styles.icon} href="/"><FaTwitter/></Link>
                <Link className={styles.icon} href="/"><FaYoutube/></Link>

            </div>

            <div className={styles.contacts}>
                <p>mail@smuk.nu</p>
                <p>+45 123 345 33</p>
            </div>
        </div>
    )

}

export default Footer;