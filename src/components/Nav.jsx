import React from 'react'
import logo from '../assets/Logo.svg'

function Nav() {
  return (
    <>
      <nav>
        <ul>
          <img src={logo} alt='Logo do Little Lemon'/>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">MENU</a>
          </li>
          <li>
            <a href="#">RESERVATION</a>
          </li>
          <li>
            <a href="#">ORDER ONLINE</a>
          </li>
          <li>
            <a href="#">LOGIN</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav
