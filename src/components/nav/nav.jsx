import styles from './nav.module.css'

import React from 'react'

const Nav = ({ display }) => {
  const displayType = display === 'none' ? styles.none : styles.visable

  return (
    <aside className={`${styles.container} ${displayType}`}>
      <a className={styles.icon} href="#">
        <i class="fas fa-home"></i>
        <span>홈</span>
      </a>

      <a className={styles.icon} href="#">
        <i class="fas fa-compass"></i>
        <span>탐색</span>
      </a>

      <a className={styles.icon} href="#">
        <i class="fab fa-youtube-square"></i>
        <span>구독</span>
      </a>

      <a className={styles.icon} href="#">
        <i class="fas fa-box"></i>
        <span>보관함</span>
      </a>
    </aside>
  )
}

export default Nav
