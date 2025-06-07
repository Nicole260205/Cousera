import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <img />
        <div className="footer-column">
          <h4>Doormat Navigation</h4>
          <ul>
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
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <p>Adress</p>
          <p>Phone number</p>
          <p>email</p>
        </div>
        <div className="footer-column">
          <h4>Social Media Links</h4>
          <p>Adress</p>
          <p>Phone number</p>
          <p>email</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
