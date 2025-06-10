import React from 'react'
import Estrela from '../assets/estrelas.png'
import Lucas from '../assets/Lucas G.png'
import Sarah from "../assets/Sarah M.png";
import Emily from "../assets/Emily R.png";
import John from "../assets/John P.png";


function Testimonials() {
  return (
    <>
      <div className="testimonials-title">
        <h1>Testimonials</h1>
      </div>
      <div className="testimonials-cards">
        <div className="cartao">
          <div className="partedecima">
            <img src={Estrela} />
            <img src={Lucas} className="avatar" />
          </div>
          <h4>Lucas G</h4>
          <p>
            Loved the cozy atmosphere and the friendly staff. Definitely coming
            back!
          </p>
        </div>
        <div className="cartao">
          <div className="partedecima">
            <img src={Estrela} />
            <img src={Sarah} className="avatar" />
          </div>
          <h4>Sarah M.</h4>
          <p>
            The best Mediterranean food I’ve ever had! The Greek Salad was
            unbelievably fresh
          </p>
        </div>
        <div className="cartao">
          <div className="partedecima">
            <img src={Estrela} />
            <img src={Emily} className="avatar" />
          </div>
          <h4>Emily R.</h4>
          <p>Bruschetta was to die for. Perfect texture and flavor!</p>
        </div>
        <div className="cartao">
          <div className="partedecima">
            <img src={Estrela} />
            <img src={John} className="avatar" />
          </div>
          <h4>John P.</h4>
          <p>
            The lemon dessert was the star of the night. Sweet, tangy, and
            nostalgic
          </p>
        </div>
      </div>
    </>
  );
}

export default Testimonials
