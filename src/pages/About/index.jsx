import styles from './style.module.scss'

import { motion } from 'motion/react'

export default function index() {

  return (
    <div className={styles.about}>
      <div className={styles.about__content}>
        <motion.h1
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: .6, delay: .2, ease: [0.35, 1, 0.65, 1] }}
        >
          Informations
        </motion.h1>
        <div className={styles.about__info}>
          <div className={styles.about__text}>
            <motion.h2
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: .6, delay: .4, ease: [0.35, 1, 0.65, 1] }}
            >
              Conception & Direction Artistique
            </motion.h2>
            <motion.p
              initial={{ y: '50%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: .6, delay: .5, ease: [0.35, 1, 0.65, 1] }}
            >
              Image de marque et identité visuelle, Direction artistique, Contenu réseaux sociaux, Motion design, Packaging, Photographie, Retouche photo, Signalétique, Vitrophanie, Design textile.
            </motion.p>
          </div>
          <div className={styles.about__text}>
            <motion.span
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: .6, delay: .5, ease: [0.35, 1, 0.65, 1] }}
            >
              Axelle Lepage
            </motion.span>
            <motion.div
              initial={{ y: '50%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: .6, delay: .6, ease: [0.35, 1, 0.65, 1] }}
            >
              <p>axellelepage1@gmail.com</p>
              <p>+33 (0)6 03 66 17 02</p>
              <a href='https://www.behance.net/axellelpg' target='_blank'>Behance</a>
              <a href='https://www.instagram.com/axellelepage_/' target='_blank'>Instagram</a>
            </motion.div>
          </div>
          <div className={styles.about__text}>
            <motion.span
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: .6, delay: .6, ease: [0.35, 1, 0.65, 1] }}
            >
              Germain Dutay
            </motion.span>
            <motion.div
              initial={{ y: '50%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: .6, delay: .7, ease: [0.35, 1, 0.65, 1] }}
            >
              <p>gdutay1@gmail.com</p>
              <p>+33 (0)6 25 05 72 06</p>
              <a href='https://www.behance.net/germaindutay1' target='_blank'>Behance</a>
              <a href='https://www.instagram.com/germaindutay/' target='_blank'>Instagram</a>
            </motion.div>
          </div>
        </div>
      </div>
    </div >
  )
}
