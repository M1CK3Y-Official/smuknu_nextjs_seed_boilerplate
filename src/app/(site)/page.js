"use client"
import Header from '@/components/header/header'
import styles from './page.module.css'
import Medlem from '@/components/medlem/medlem'
import Products from '@/components/products/products'
import Reviews from '@/components/reviews/reviews'

export default function Home() {

  const headerConfig = {

    header: {
      top: {
        text: 'Skønhed',
        color: '#000'
      },
      bottom: {
        text: 'For alle',
        color: '#000'
      }
    },

    image: '/headers/front.jpg',

    body: {
      text: `<p>Alt hvad du behøver... <br/>SMUK NU</p>`,
      color: '#000'
    },
    bodyBackground: 'var(--color-light-pink)',

    button: {
      path: '#products',
      text: 'Se udvalgte produkter'
    },


  }
  

  return ( <div>
      <Header config={headerConfig} />
      <div className={'page'}>
        <h1 className={'heading'}>Udvalgt Skønhed</h1>
        <Products recommended={true}></Products>
        <Reviews />
      </div>
      <Medlem />
  </div>
  )
}

