"use client"
import Header from '@/components/header/header'
import styles from './page.module.css'
import Medlem from '@/components/medlem/medlem'
import Products from '@/components/products/products'

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

  return ( <div>
      <Header config={headerConfig} />
      <div className={'page'}>
      <h1 className={'heading'}>ALT ER SKØNHED</h1>
        <Products recommended={false} />
      </div>
      <Medlem />
  </div>
  )
}

