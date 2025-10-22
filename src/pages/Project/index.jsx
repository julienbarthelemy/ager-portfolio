import styles from './style.module.scss'

import { Link } from 'react-router'
import projectContent from '../../data/projectData.json'
import { useParams } from 'react-router'
import { motion } from 'motion/react'
import Footer from '../../components/Footer'

export default function index() {

  const { id } = useParams()
  let project = projectContent.find(project => project.id === parseInt(id))
  var projectnext = projectContent.filter(number => number.id !== project.id)

  return (
    <div className={styles.project}>
      <div className={styles.project__header}>
        <div className={styles.project__title}>
          <motion.h1
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: .6, delay: .2, ease: [0.35, 1, 0.65, 1] }}
          >
            {project.marque}
          </motion.h1>
          <motion.h3
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: .6, delay: .4, ease: [0.35, 1, 0.65, 1] }}
          >
            {project.type}
          </motion.h3>
        </div>
        <motion.p
          initial={{ y: '50%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: .7, delay: .6, ease: [0.35, 1, 0.65, 1] }}
        >
          {project.description}
        </motion.p>
      </div>
      <div className={styles.project__grid}>
        {
          project.content.map((item, idx) => {
            if (item.full == false) {
              return (
                <motion.div
                  className={`${styles.project__card}`} key={idx}
                  initial={{ y: '10%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: .8, delay: .2 + 0.1 * idx, ease: [0.35, 1, 0.65, 1] }}
                >
                  <div className={styles.card__img}>
                    <img src={`/project/${project.id}/${item.src}`} alt="" />
                  </div>
                </motion.div>
              )
            }
            else if (item.video == true) {
              return (
                <motion.div
                  className={`${styles.project__card} ${styles.full}`} key={idx}
                  initial={{ y: '10%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: .8, delay: .2 + 0.1 * idx, ease: [0.35, 1, 0.65, 1] }}
                >
                  <div className={styles.card__img}>
                    <video controls src={`/project/${project.id}/${item.src}`} />
                  </div>
                </motion.div>
              )
            }
            else {
              return (
                <motion.div
                  className={`${styles.project__card} ${styles.full}`} key={idx}
                  initial={{ y: '10%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: .8, delay: .2 + 0.1 * idx, ease: [0.35, 1, 0.65, 1] }}
                >
                  <div className={styles.card__img}>
                    <img src={`/project/${project.id}/${item.src}`} alt="" />
                  </div>
                </motion.div>
              )
            }
          })
        }
        <div className={styles.project__credits}>
          {
            project.credits.map((item, idx) => {
              return (
                <span key={idx}>{item}</span>
              )
            })
          }
        </div>
      </div>
      <div className={styles.project__next}>
        <Link to={`/`}><h3 className={styles.next__title}>VOIR PLUS</h3></Link>
        <div className={styles.project__next__container}>
          {

            projectnext.slice(0, 4).map((item, idx) => {
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
                  </motion.div>
                </Link>
              )
            })
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}
