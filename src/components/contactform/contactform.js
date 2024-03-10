import styles from './contactform.module.css'

const ContactForm = () => {

    return (
        <form className={styles.form}>
            <div className={styles.field}>
                <label>Fulde Navn</label>
                <input type="text" />
            </div>

            <div className={styles.field}>
                <label>E-mail</label>
                <input type="email" />
            </div>

            <div className={styles.field}>
                <label>Ris og/eller ros</label>
                <textarea></textarea>
            </div>

            <button className={styles.btn} type="submit">Opret</button>
        </form>
    )

}

export default ContactForm;