import { Link } from "react-router-dom";
import food from "../assets/restauranfood.jpg";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link
          to="/booking"
          className="hero-button"
          aria-label="Submit reservation form"
        >
          Reserve a table
        </Link>
      </div>
      <div className="hero-right">
        <img
          src={food}
          alt="A photo of one of the restaurant's meals"
          className="hero-img"
        />
      </div>
    </section>
  );
}

export default Hero;
