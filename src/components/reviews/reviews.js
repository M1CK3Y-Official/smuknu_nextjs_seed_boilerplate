'use client';

import Image from 'next/image';
import styles from './reviews.module.css'
import { useState, useEffect } from 'react'

const Reviews = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {

        const getReviews = async () => {

            const response = await fetch('/api/reviews')
            const data = await response.json()
            setReviews(data)

        }

        getReviews();

    }, [])


    return (
        <div>
            <h1 className={styles.heading}>Skønheder Udtaler</h1>

            <div className={styles.list}>
                {reviews.map((review) => (

                    <div className={styles.review} key={review._id}>

                        <div className={styles.image}>
                            <Image className={styles.reviewImage} src={review.image} alt={review.name} width={150} height={150} />

                            <div className={styles.reviewText}>
                                <div className={`${styles.reviewByline} ${styles.md}`}>
                                    <p>{review.name}</p>
                                    <p>{review.byline}</p>
                                </div>
                            </div>

                        </div>

                        <div className={styles.reviewText}>
                            <p>{review.description}</p>

                            <div className={`${styles.reviewByline} ${styles.sm}`}>
                                <p>{review.name}</p>
                                <p>{review.byline}</p>
                            </div>
                        </div>

                    </div>

                ))}
            </div>
        </div>
    )

}

export default Reviews