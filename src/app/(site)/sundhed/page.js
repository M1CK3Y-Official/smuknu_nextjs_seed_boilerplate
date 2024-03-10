"use client"
import Header from '@/components/header/header'
import styles from './page.module.css'
import Accordions from '@/components/accordions/accordions/'

export default function Page() {

  const headerConfig = {

    header: {
      top: {
        text: 'Spørg Om',
        color: '#fff'
      },
      bottom: {
        text: 'Sundhed',
        color: '#fff'
      }
    },

    image: '/headers/health.jpg',

    body: {
      text: `<p>Herunder har vi samlet spørgsmål og svar om sundhed. <br/><br/>Mange spørgsmål kommer fra medlemmer af smuknu.dk og andre er gode råd valgt af vores skønhedsredaktion</p>`,
      color: '#fff'
    },
    bodyBackground: 'var(--color-pink)',

  }

  return ( <div>
      <Header config={headerConfig} />
        <div className={'page'} >
          <Accordions />
        </div>
    </div>
  )
}

