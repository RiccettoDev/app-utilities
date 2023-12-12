import Image from 'next/image'
import Link from 'next/link'

import styles from './Header.module.scss'

import Logo from '../../../public/assets/logo.png'

export default function Header() {
  return(
    <nav>
      <div className={styles.container}>
        <div className={styles.containerLogo}>
          <div className={styles.logo}>
            <Image src={Logo} alt='logo' className={styles.logoImage}/>
          </div>
          <div>
            <Link href="/">Utilities</Link>
          </div>
        </div>
        <div className={styles.menu}>
          <Link href="./calculadora">Calculadora</Link>
          <Link href="/">Timer</Link>
          <Link href="/">IMC</Link>
        </div>
      </div>
    </nav>
  )
}