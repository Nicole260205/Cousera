import React from 'react'
import food from '../assets/restauranfood.jpg'

function Hero() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-left">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className='hero-button'>Reserve a table</button>
        </div>
        <div className="hero-right">
          <img
            src={food}
            alt="a photo of one of the restaurant's meal"
            className="hero-img"
          />
        </div>
      </section>
    </>
  );
}

export default Hero
