import Image from 'next/image';
import styles from './header.module.css';
import Link from 'next/link';
const Header = ({config}) => {

    return (
        <div className={styles.header}>

            <Image src={config.image} alt="header" width={1024} height={683} />

            <div className={styles.text} style={{backgroundColor : config?.bodyBackground}}>

                <div className={styles.title}>
                    <h1 style={{color : config.header.top.color}}>{config.header.top.text}</h1>
                    <h1 style={{color : config.header.bottom.color}}>{config.header.bottom.text}</h1>
                </div>

                <div className={styles.body}>
                    <div style={{color : config.body.color}} dangerouslySetInnerHTML={{__html: config.body.text}}></div>
                </div>

                {config.button?.path ? <Link className={styles.btnLink} href={config.button?.path}><button className={styles.btn}>{config.button?.text}</button></Link> : ''}

            </div>

        </div>
    )

}

export default Header;