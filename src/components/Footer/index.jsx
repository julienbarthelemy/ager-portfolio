import styles from './style.module.scss'

export default function index() {

  return (
    <div className={styles.footer}>
      <div className={styles.footer__text}>
        <div className={styles.footer__contact}>
          <span>Axelle Lepage</span>
          <a href='mailto:axellelepage1@gmail.com'>axellelepage1@gmail.com</a>
          <span>+33 (0)6 03 66 17 02</span>
          <a href='https://www.instagram.com/axellelepage_' target='_blank'>Instagram</a>
        </div>
        <div className={styles.footer__contact}>
          <span>Germain Dutay</span>
          <a href='mailto:gdutay1@gmail.com'>gdutay1@gmail.com</a>
          <span>+33 (0)6 25 05 72 06</span>
          <a href='https://www.instagram.com/germaindutay' target='_blank'>Instagram</a>
        </div>
      </div>
      <p>Tous droits réservés - © 2025 Ager</p>
    </div>
  )
}
