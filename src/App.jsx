import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import Slide from "./components/Slide";
import React, { useState, useEffect } from 'react';

function App(props) {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1200px)").matches
  )  

  const [slide,changeSlide] = useState(1)
  const handleClick = (operation) => {
    switch (operation) {
      case "+":
        if (slide + 1 < 4) {
          changeSlide(slide + 1)
        }else {
          changeSlide(1)
        }
        break;
      case "-":
        if (slide - 1 > 0) {
          changeSlide(slide - 1)
        }else {
          changeSlide(3)
        }
        break;
    }
  }

  useEffect(() => {
    window
    .matchMedia("(min-width: 1200px)")
    .addEventListener('change', event => setMatches( event.matches ));
  }, []);

  return (
    <>
      <NavBar isDesktop={matches} />

      <div className="main-grid">
        <Slide isDesktop={matches} slide={slide} handleClick={handleClick} />
        <Intro slide={slide} />

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