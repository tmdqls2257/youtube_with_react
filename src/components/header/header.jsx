import styles from './header.module.css'

import React, { memo, useRef } from 'react'

const Header = memo(({ onSearch }) => {
  const inputRef = useRef()

  const handleClick = () => {
    const value = inputRef.current.value
    console.log(value)
    onSearch(value)
  }

  const onClick = () => {
    handleClick()
  }

  const onkeyPress = event => {
    if (event.code === 'Enter') {
      handleClick()
    }
  }

  return (
    <header className={styles.header}>
      <section className={styles.logo}>
        <i className="fas fa-bars"></i>
        <i className="fab fa-youtube"></i>
        <h1>YouTube</h1>
      </section>

      <section className={styles.search}>
        <input
          ref={inputRef}
          className={styles.input}
          onKeyPress={onkeyPress}
          type="search"
          placeholder="Search"
        />
        <button className={styles.button} onClick={onClick}>
          <i className="fas fa-search"></i>
        </button>
      </section>

      <section className={styles.logo}>
        <i className="fas fa-video"></i>
        <i className="fas fa-caret-square-down"></i>
        <i className="fas fa-bell"></i>
      </section>
    </header>
  )
})

export default Header
