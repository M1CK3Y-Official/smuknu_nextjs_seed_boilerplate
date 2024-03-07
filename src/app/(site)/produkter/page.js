"use client"
import Header from '@/components/header/header'
import styles from './page.module.css'

export default function Page() {

  const headerConfig = {
    image: '/headers/products.jpg'
  }

  return (
    <main className={styles.page} >
      <Header config={headerConfig} />
    </main>
  )
}

