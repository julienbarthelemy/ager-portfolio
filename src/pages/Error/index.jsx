import styles from './style.module.scss'

export default function index() {

  return (
    <div className={styles.error}>
      <h1>404</h1>
      <h3>Cette page n'existe pas</h3>
    </div>
  )
}
