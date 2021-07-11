import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <aside>
        <a className="icon" href="#">
        <i class="fas fa-home"></i>
        <span>홈</span>
        </a>

        <a className="icon" href="#">
        <i class="fas fa-compass"></i>
        <span>탐색</span>
        </a>

        <a className="icon" href="#">
        <i class="fab fa-youtube-square"></i>
        <span>구독</span>
        </a>

        <a className="icon" href="#">
        <i class="fas fa-box"></i>
        <span>보관함</span>
        </a>

      </aside>
    );
  }
}

export default Nav;