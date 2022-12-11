import styles from '../styles/Container.module.scss'

export default function Container({children, className}) {
  return (
    <div className={`${styles.parent} ${className}`}>
      <div className={styles.container}>
        {children}
      </div>
      <div className={styles.top}></div>
      <div className={styles.bottom}></div>
    </div>
  )
}