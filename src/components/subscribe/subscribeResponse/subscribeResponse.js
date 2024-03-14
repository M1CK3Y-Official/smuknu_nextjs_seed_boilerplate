import styles from "./subscribeResponse.module.css"
import Image from "next/image"
import Link from "next/link"

const SubscribeResponse = ({name}) => {

    return (

        <div className={styles.container}>
                <h1 className={styles.title}>Tak!</h1>
                <p className={styles.name}>{name}</p>
                <p className={styles.thank}>Vi er enormt glade for at få dig som medlem.</p>
                <Image className={styles.image} src="/products/product_8281992819.jpg" alt="product" width={200} height={200} />
                <p className={styles.gift}>Kig i din indbox vi har sendt en lille velkomst gave.</p>
                <Link href={'/'}><button className={styles.btn}>Til Forsiden</button></Link>
            </div>

    )

}

export default SubscribeResponse;