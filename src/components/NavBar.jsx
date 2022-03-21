import React, { useState } from 'react';

function NavBar(props) {
  const [show, setShow] = useState(false);

  return (
    <div className={`navbar ${show ? "navbar--show" : ""}`}>
      <div className="toggle-navbar">
        <img onClick={() => setShow(true)} src="images/svg/hamburger.svg" alt="hamburger menu" />
        <img onClick={() => setShow(false)} src="images/svg/close.svg" alt="close menu" />
      </div>

      <img src="images/svg/logo.svg" alt="Room's logo" className="logo" />

      <div className="nav">
        <div className="nav-list">
          <div className="nav-element">home</div>
          <div className="nav-element">shop</div>
          <div className="nav-element">about</div>
          <div className="nav-element">contact</div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;