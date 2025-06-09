import React, { useState } from 'react'
import logo from '../assets/Logo.svg'

function Nav() {
    const [menuAberto, setMenuAberto] = useState(false)

    const toggleMenu = () => {
        setMenuAberto(!menuAberto)
    }

  return (
    <>
      <nav>
        <img src={logo} alt="Logo do Little Lemon" />
        <span
          className="material-symbols-outlined menu-icon"
          onClick={toggleMenu}
        >
          menu
        </span>
        <ul className={menuAberto ? 'nav-links open' : 'nav-links'} >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Reservation</a>
          </li>
          <li>
            <a href="#">Order Online</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav
