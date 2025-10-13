import styles from './style.module.scss'

export default function index() {

  return (
    <div className={styles.footer}>
      <div className={styles.footer__text}>
        <div className={styles.footer__contact}>
          <span>Axelle Lepage</span>
          <span>axellelepage1@gmail.com</span>
          <span>+33 (0)6 03 66 17 02</span>
          <a href='https://www.instagram.com/axellelepage_' target='_blank'>Instagram</a>
        </div>
        <div className={styles.footer__contact}>
          <span>Germain Dutay</span>
          <span>gdutay1@gmail.com</span>
          <span>+33 (0)6 25 05 72 06</span>
          <a href='https://www.instagram.com/germaindutay' target='_blank'>Instagram</a>
        </div>
      </div>
      <p>Tous droits réservés - © 2025 Ager</p>
    </div>
  )
}
