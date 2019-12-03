import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <nav className="nav_section">
        <NavLink exact to="/" className="logo">
          GENTLEMONSTER
        </NavLink>
        <ul className="nav_item">
          <li>
            <NavLink to="/product/0">
              <span>선글라스</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/product/1">
              <span>안경</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/store">
              <span>매장</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/stories">
              <span>스토리</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/service">
              <span>서비스</span>
            </NavLink>
          </li>
        </ul>
        <div className="logo">GENTLEMONSTER</div>
      </nav>
    );
  }
}

export default Header;
