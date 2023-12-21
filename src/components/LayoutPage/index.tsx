import Header from "../Header"
import Footer from "../Footer"

import styles from './LayoutPage.module.scss'

export default function LayoutPage({ children } :any) {
  return(
    <>
      <div className={styles.container}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )
}