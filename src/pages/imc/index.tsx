import LayoutPage from "@/components/LayoutPage";
import styles from './IMC.module.scss'
import { useState } from "react";

export default function IMC() {
  const [result, setResult]= useState(0);
  const [weigth, setWeigth]= useState('');
  const [heigth, setHeigth]= useState('');

  const calc = () => {
    var value1 = Number(weigth);
    var value2 = Number(heigth);
    setResult((value1/value2)/value2);
  }

  const clean = () => {    
    setResult(0);
    setWeigth('')
    setHeigth('');
  }

  return (
    <LayoutPage>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <div>
            <h2>Calculadora IMC</h2>
          </div>
          <div className={styles.container}>
            <input 
              type="text"
              placeholder="Peso" 
              id="weigth"
              className={styles.input}
              value={weigth} 
              onChange={(e)=> {setWeigth(e.target.value)}}
            />
            <input 
              type="text"
              placeholder="Altura"
              id="heigth" 
              className={styles.input}
              value={heigth}
              onChange={(e)=> {setHeigth(e.target.value)}}
            />
          </div>
          <div className={styles.container}>
            <button className={styles.button} onClick={calc}>Calculate</button>
            <button className={styles.button} onClick={clean}>Clean</button>
          </div>
          <div>INTERPRETAÇÃO DO IMC</div>
          <div className={styles.container}>
            <div className={styles.subContainer}>
              <div className={styles.index}>IMC</div>
              <div className={styles.item}>MENOR QUE 18,5</div>
              <div className={styles.item}>ENTRE 18,5 E 24,9</div>
              <div className={styles.item}>ENTRE 25,0 E 29,9</div>
              <div className={styles.item}>ENTRE 30,0 E 39,9</div>
              <div className={styles.item}>MAIOR QUE 40,0</div>
            </div>
            <div className={styles.subContainer}>
              <div className={styles.index}>CLASSIFICAÇÃO</div>
              <div className={styles.item}>MAGREZA</div>
              <div className={styles.item}>NORMAL</div>
              <div className={styles.item}>SOBREPESO</div>
              <div className={styles.item}>OBESIDADE</div>
              <div className={styles.item}>OBESIDADE GRAVE</div>
            </div>
            <div className={styles.subContainer}>
              <div className={styles.index}>OBESIDADE</div>
              <div className={styles.item}>0</div>
              <div className={styles.item}>0</div>
              <div className={styles.item}>I</div>
              <div className={styles.item}>II</div>
              <div className={styles.item}>III</div>
            </div>
          </div>
          <div className={styles.result}>Resultado do seu IMC: {result.toFixed(2)}</div>
        </div>
      </div>
    </LayoutPage>
  )
}