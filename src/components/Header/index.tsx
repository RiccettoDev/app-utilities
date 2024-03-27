import Image from 'next/image'
import Link from 'next/link'

import styles from './Header.module.scss'

import Logo from '../../../public/assets/logo.png'

export default function Header() {
  return(
    <nav>
      <div className={styles.container}>
        <div className={styles.containerLogo}>
          <div>
            <Link href="/">
              <div className={styles.logo}>
                <Image src={Logo} alt='logo' className={styles.logoImage}/>
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.menu}>
          <Link href="./calculator">Calculator</Link>
          <Link href="./timer">Timer</Link>
          <Link href="/imc">IMC</Link>
        </div>
      </div>
    </nav>
  )
}