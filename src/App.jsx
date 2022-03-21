import NavBar from "./components/NavBar";
import Slide from "./components/Slide";
import React, { useState, useEffect } from 'react';

function App(props) {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1200px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 1200px)")
    .addEventListener('change', event => setMatches( event.matches ));
  }, []);

  return (
    <>
      <NavBar isDesktop={matches} />

      <div className="main-grid">
        <Slide isDesktop={matches} />

        <div className="intro">
          <h1>Discover innovative ways to decorate</h1>
          <p>
            We provide unmatched quality, comfort, and style for property
            owners across the country. Our experts combine form and
            function in bringing your vision to life. Create a room in your own
            style with our collection and make your property a reflection of
            you and what you love.
          </p>
          <div className="arrow-btn">
            <span>Shop now</span>
            <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fillRule="nonzero"/></svg>
          </div>
        </div>

        <img src="images/about-dark.jpg" alt="illustration image (dark)" className="illustration-dark" />

        <div className="about">
          <h2>ABOUT OUR FURNITURE</h2>
          <p>
            Our multifunctional collection blends design and function to suit your individual
            taste. Make each room unique, or pick a cohesive theme that best express your
            interests and what inspires you. Find the furniture pieces you need, from
            traditional to contemporary styles or anything in between. Product specialists
            are available to help you create your dream space.
          </p>
        </div>

        <img src="images/about-light.jpg" alt="illustration image (light)" className="illustration-light" />
      </div>
    </>
  );
}

export default App;