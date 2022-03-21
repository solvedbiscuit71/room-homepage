import NavBar from "./components/NavBar";
import Slide from "./components/Slide";

function App(props) {
  return (
    <>
      <NavBar />

      <div className="main-grid">
        <Slide />

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
            <img src="images/svg/arrow.svg" alt="right pointing arrow" />
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