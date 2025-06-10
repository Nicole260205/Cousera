import MarioAndrian from "../assets/Mario and Adrian b.jpg";

function Footer() {
  return (
    <>
      <footer>
        <div className="img-container">
          <img src={MarioAndrian} />
        </div>

        <div className="footer-column">
          <h4>Doormat Navigation</h4>
          <ul>
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
