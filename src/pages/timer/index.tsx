import React, { useState, useEffect } from "react"
import LayoutPage from "@/components/LayoutPage"
import Image from "next/image"
import styles from './Timer.module.scss'

import TimerImage from '../../../public/assets/timer.png'

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  var timer: any;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds+1);
      if(seconds===59){
        setMinutes(minutes+1);
        setSeconds(0);
      }
      if(minutes===59){
        setHours(hours+1);
        setMinutes(0);
      }
    },1000)

    return () => clearInterval(timer);
  })

  const stop = () => {
    clearInterval(timer);
  }

  const restart = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  }

  return(
    <LayoutPage>
      <div className={styles.container}>
        <Image src={TimerImage} alt="timer image" className={styles.timerImage}/>
        <div className={styles.circle}>
          <div className={styles.containerNumber}>
            <h1 className={styles.number}>
              {hours<10? "0"+hours: hours}:
              {minutes<10? "0"+minutes: minutes}:
              {seconds<10? "0"+seconds: seconds}
            </h1>
          </div>
        </div>
      </div>
      <div className={styles.containerButton}>
        <button className={styles.button} onClick={restart}>Restart</button>
        <button className={styles.button} onClick={stop}>Stop</button>
      </div>
    </LayoutPage>
  )
}