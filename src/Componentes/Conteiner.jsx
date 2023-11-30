import styles from './Conteiner.module.css'


export default function Conteiner({children}) {
  return (
    <div className={styles.boxConteiner}>
          {children}
    </div>
  )
}
