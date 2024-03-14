"use client"
import Header from '@/components/header/header'
import styles from './page.module.css'
import Subscribe from '@/components/subscribe/subscribe';

export default function Page() {

  const headerConfig = {

    header: {
      top: {
        text: 'Bliv',
        color: 'var(--color-pink)'
      },
      bottom: {
        text: 'Medlem',
        color: 'var(--color-pink)'
      }
    },

    image: '/headers/subscribers.jpg',

    body: {
      text: `<p>Opret dig som medlem og få flere fordele og nyheder I det øjeblik vi har dem.<br/><br/>Send gerne ris eller ros med når du melder dig ind, vi er altid parate til dialog.</p>`,
      color: '#000'
    },
    bodyBackground: 'var(--color-white)',

  }

  return ( <div>
      <Header config={headerConfig} />
        <Subscribe />
  </div>
  )
}

