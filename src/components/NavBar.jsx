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
        <ul>
          <li>home</li>
          <li>shop</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;