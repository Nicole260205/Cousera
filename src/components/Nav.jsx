import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";

function Nav() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="Logo do Little Lemon" />
      </Link>

      <span
        className="material-symbols-outlined menu-icon"
        onClick={toggleMenu}
      >
        menu
      </span>
      <ul className={menuAberto ? "nav-links open" : "nav-links"}>
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/menu" className="nav-link">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/booking" className="nav-link">
            Reservations
          </Link>
        </li>
        <li>
          <Link to="/order" className="nav-link">
            Order Online
          </Link>
        </li>
        <li>
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
