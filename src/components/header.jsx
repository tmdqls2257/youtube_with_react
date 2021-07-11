import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <section className='logo'>
        <i class="fas fa-bars"></i>
        <i class="fab fa-youtube"></i>
        <h1>YouTube</h1>
        </section>

        <section className='search'>
          <div className='search__form'>
          <input type="text" placeholder='Search'/>
          </div>
          <button>
          <i class="fas fa-search"></i>
          </button>
        </section>

        <section className=''>
        <i class="fas fa-video"></i>
        <i class="fas fa-caret-square-down"></i>
        <i class="fas fa-bell"></i>
        </section>
      </nav>
    );
  }
}

export default Header;