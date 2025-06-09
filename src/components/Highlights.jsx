import React from 'react'
import GreekSalad from '../assets/greek salad.jpg'
import LemonDessert from "../assets/lemon dessert.jpg";
import Bruchetta from "../assets/bruchetta.png";
import motinha from "../assets/moped_24dp_323232_FILL0_wght400_GRAD0_opsz24.svg";

function Highlights() {
  return (
    <>
      <div className="top-part">
        <h1>This weeks specials!</h1>
        <button>Online Menu</button>
      </div>
      <div className="cards">
        <div className="card">
          <img src={GreekSalad} className="card-img" />
          <div className="top">
            <p className="card-title">Greek salad</p>
            <p className="card-price">$ 12, 99</p>
          </div>
          <p className="card-text">
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta chesse, garnished with crunchy garlic and
            rosemary croutons.
          </p>
          <p className="bottom">
            Order a delivery <img src={motinha} alt="" />
          </p>
        </div>
        <div className="card">
          <img src={Bruchetta} className="card-img" />
          <div className="top">
            <p className="card-title">Bruchetta</p>
            <p className="card-price">$ 5,99</p>
          </div>
          <p className="card-text">
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasonded with salt and olive oil.
          </p>
          <p className="bottom">
            Order a delivery <img src={motinha} alt="" />
          </p>
        </div>
        <div className="card">
          <img src={LemonDessert} className="card-img" />
          <div className="top">
            <p className="card-title">Lemon Dessert</p>
            <p className="card-price">$ 5,00</p>
          </div>
          <p className="card-text">
            This comes straight from grandma's recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </p>
          <p className="bottom">
            Order a delivery <img src={motinha} alt="" />
          </p>
        </div>
      </div>
    </>
  );
}

export default Highlights
