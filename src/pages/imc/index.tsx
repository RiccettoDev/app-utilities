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

  var classStyleLine1 = styles.item
  var classStyleLine2 = styles.item
  var classStyleLine3 = styles.item
  var classStyleLine4 = styles.item
  var classStyleLine5 = styles.item

  if(result < 18.5 && result != 0){
    var classStyleLine1 = styles.itemPress
  }
  if(result >= 18.5 && result <= 24.9){
    var classStyleLine2 = styles.itemPress
  }
  if(result >= 25 && result <= 29.9){
    var classStyleLine3 = styles.itemPress
  }
  if(result >= 30 && result <= 39.9){
    var classStyleLine4 = styles.itemPress
  }
  if(result > 40){
    var classStyleLine5 = styles.itemPress
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
              <div className={classStyleLine1}>MENOR QUE 18,5</div>
              <div className={classStyleLine2}>ENTRE 18,5 E 24,9</div>
              <div className={classStyleLine3}>ENTRE 25,0 E 29,9</div>
              <div className={classStyleLine4}>ENTRE 30,0 E 39,9</div>
              <div className={classStyleLine5}>MAIOR QUE 40,0</div>
            </div>
            <div className={styles.subContainer}>
              <div className={styles.index}>CLASSIFICAÇÃO</div>
              <div className={classStyleLine1}>MAGREZA</div>
              <div className={classStyleLine2}>NORMAL</div>
              <div className={classStyleLine3}>SOBREPESO</div>
              <div className={classStyleLine4}>OBESIDADE</div>
              <div className={classStyleLine5}>OBESIDADE GRAVE</div>
            </div>
            <div className={styles.subContainer}>
              <div className={styles.index}>OBESIDADE</div>
              <div className={classStyleLine1}>0</div>
              <div className={classStyleLine2}>0</div>
              <div className={classStyleLine3}>I</div>
              <div className={classStyleLine4}>II</div>
              <div className={classStyleLine5}>III</div>
            </div>
          </div>
          <div className={styles.result}>Resultado do seu IMC: {result.toFixed(2)}</div>
        </div>
      </div>
    </LayoutPage>
  )
}