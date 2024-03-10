"use client"
import Header from '@/components/header/header'
import styles from './page.module.css'

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
        
      </div>
  </div>
  )
}

