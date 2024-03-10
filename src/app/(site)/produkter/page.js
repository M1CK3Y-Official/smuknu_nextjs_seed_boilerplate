"use client"
import Header from '@/components/header/header'
import styles from './page.module.css'

export default function Page() {

  const headerConfig = {

    header: {
      top: {
        text: 'Skønne',
        color: '#fff'
      },
      bottom: {
        text: 'Produkter',
        color: '#fff'
      }
    },

    image: '/headers/products.jpg',

    body: {
      text: `<p>Herunder finder du alle vores produkter</p>`,
      color: '#fff'
    },
    bodyBackground: 'var(--color-shadow)',
  }

  return (
    <main className={styles.page} >
      <Header config={headerConfig} />
    </main>
  )
}

