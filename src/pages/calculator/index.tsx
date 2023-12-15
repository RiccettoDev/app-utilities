import React, { useState } from "react"
import LayoutPage from "@/components/LayoutPage"
import styles from './Calculator.module.scss'

export default function Calculadora() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }

  const clear = () => {
    setResult("");
  }

  const back = () => {
    setResult(result.slice(0, result.length -1));
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch(error) {
      setResult("Error");
    }
  }

  return(
    <>
      <LayoutPage>
        <div className={styles.container}>
          <div className={styles.subContainer}>
            <div className={styles.containerCalc}>
              <div className={styles.containerLine}>
                <div className={styles.display}>
                  <form>
                    <input className={styles.input} type="text" value={result}/>
                  </form>
                </div>
              </div>
              <div className={styles.containerLine}>
                <button className={styles.buttonNumberSpecialBig} id="clear" onClick={clear}>Clear</button>
                <button className={styles.buttonNumberSpecial} id="back" onClick={back}>c</button>
                <button className={styles.buttonNumberSpecial} name="/" onClick={handleClick}>&divide;</button>
              </div>
              <div className={styles.containerLine}>
                <button className={styles.buttonNumber} name="7" onClick={handleClick}>7</button>
                <button className={styles.buttonNumber} name="8" onClick={handleClick}>8</button>
                <button className={styles.buttonNumber} name="9" onClick={handleClick}>9</button>
                <button className={styles.buttonNumberSpecial} name="*" onClick={handleClick}>&times;</button>
              </div>
              <div className={styles.containerLine}>
                <button className={styles.buttonNumber} name="4" onClick={handleClick}>4</button>
                <button className={styles.buttonNumber} name="5" onClick={handleClick}>5</button>
                <button className={styles.buttonNumber} name="6" onClick={handleClick}>6</button>
                <button className={styles.buttonNumberSpecial} name="-" onClick={handleClick}>&ndash;</button>
              </div>
              <div className={styles.containerLine}>
                <button className={styles.buttonNumber} name="1" onClick={handleClick}>1</button>
                <button className={styles.buttonNumber} name="2" onClick={handleClick}>2</button>
                <button className={styles.buttonNumber} name="3" onClick={handleClick}>3</button>
                <button className={styles.buttonNumberSpecial} name="+" onClick={handleClick}>+</button>
              </div>
              <div className={styles.containerLine}>
                <button className={styles.buttonNumber} name="0" onClick={handleClick}>0</button>
                <button className={styles.buttonNumberSpecial} name="." onClick={handleClick}>.</button>
                <button className={styles.buttonNumberSpecialBig} name="=" onClick={calculate}>=</button>
              </div>
            </div>
          </div>
        </div>
      </LayoutPage>
    </>
  )
}