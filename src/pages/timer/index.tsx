import LayoutPage from "@/components/LayoutPage"
import Image from "next/image"
import styles from './Timer.module.scss'

import TimerImage from '../../../public/assets/timer.png'

export default function Timer() {
  return(
    <LayoutPage>
      <div className={styles.container}>
        <Image src={TimerImage} alt="timer image" className={styles.timerImage}/>
        <div className={styles.circle}>
          <h1 className={styles.number}>20:30</h1>
        </div>
      </div>
    </LayoutPage>
  )
}