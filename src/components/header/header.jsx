import React, { Component } from 'react';
import styles from './header.module.css';

class Header extends Component {
  render() {
    return (
      <nav>
        <section className={styles.logo}>
        <i className="fas fa-bars"></i>
        <i className="fab fa-youtube"></i>
        <h1>YouTube</h1>
        </section>

        <section className={styles.search}>
          <div className={styles.search__form}>
          <input type="text" placeholder='Search'/>
          </div>
          <button>
          <i className="fas fa-search"></i>
          </button>
        </section>

        <section className={styles.logo}>
        <i className="fas fa-video"></i>
        <i className="fas fa-caret-square-down"></i>
        <i className="fas fa-bell"></i>
        </section>
      </nav>
    );
  }
}

export default Header;