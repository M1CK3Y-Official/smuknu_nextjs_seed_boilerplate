'use client'
import styles from './product.module.css'
import Image from "next/image";

export const DiscountBox = ({percent}) => {

    return <span className={styles.percent}>{percent}%</span>
  
}

const Product = ({ product }) => {

    return (
        <div className={styles.productCard} >
            <div className={styles.productImage}>
                <Image className={styles.productPic} src={product.image} alt={product.title} width={300} height={300} />
                <div className={styles.productDiscount} style={{display: product.discountInPercent > 0 ? 'block' : 'none'}}>SPAR<br/><DiscountBox percent={product.discountInPercent}></DiscountBox></div>
            </div>

            <div className={styles.productInfo}>
                <p className={styles.productTitle}>{product.title} </p>
                <div className={styles.priceBox}>
                    <p className={styles.productPrice}>{product.price},00 kr.</p>
                    <button className={styles.productBuyBtn} onClick={ () => addToBasket(product._id, product.amount)}>Køb</button>
                </div>
            </div>
        </div>
    );

}

export default Product;