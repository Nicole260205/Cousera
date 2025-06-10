import MarioAdrian from '../assets/Mario and Adrian A 1.png'
import Comida from '../assets/image 4.png'

function About() {
  return (
    <>
      <div className="about-section">
        <div className="about-left">
          <div className="image-stack">
            <img src={Comida} className="img-base" />
            <img src={MarioAdrian} className="img-top" />
          </div>
        </div>
        <div className="about-right">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Nestled in the heart of Chicago, Little Lemon is a cozy
            Mediterranean restaurant founded by two passionate chefs. Our
            mission is to bring timeless Mediterranean flavors to your table,
            with ingredients locally sourced and recipes passed down for
            generations. Whether you're dining in or ordering online, we
            guarantee a flavorful and memorable experience.
          </p>
        </div>
      </div>
    </>
  );
}

export default About
