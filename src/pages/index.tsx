import LayoutPage from "@/components/LayoutPage"
import Image from "next/image"

import styles from './Home.module.scss'

import Logo from '../../public/assets/logo.png'

export default function Home() {
  return(
    <>
      <LayoutPage>
        <div className={styles.container}>
          <div className={styles.subContainer}>
            <Image src={Logo} alt="logo"className={styles.logo}/>
            <h1>Conjunto de aplicações de utilidades diárias</h1>
          </div>
        </div>
      </LayoutPage>
    </>
  )
}
