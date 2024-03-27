import styles from './Footer.module.scss'

export default function Footer() {
  return(
    <footer className={styles.container}>
      <p>
        <a href="https://portfolio-ten-lime-67.vercel.app/" target='_blanck'>
          <span>&copy; 2023 - Eduardo Riccetto</span> 
        </a>
      </p>
    </footer>
  )
}