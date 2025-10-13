import styles from './style.module.scss'

import { Link } from 'react-router'
import projectContent from '../../data/projectData.json'
import { motion } from 'motion/react'

export default function index() {

  return (
    <div className={styles.home}>
      <div className={styles.home__grid}>
        {
          projectContent.map((item, idx) => {
            return (
              <Link to={`/projet/${item.id}`} className={styles.card} key={idx}>
                <motion.div
                  className={styles.card__img}
                  initial={{ y: '10%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: .8, delay: .2 + 0.1 * idx, ease: [0.35, 1, 0.65, 1] }}
                >
                  <img src={`/project/${item.id}/${item.preview}`} alt="" />
                  <img src={`/project/${item.id}/${item.survol}`} alt="" />
                </motion.div>
                <motion.div
                  className={styles.card__text}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: .8, delay: .6 + 0.1 * idx, ease: [0.16, 1, 0.36, 1] }}
                >
                  <h1>{item.marque}</h1>
                  <h3>{item.type}</h3>
                </motion.div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}
