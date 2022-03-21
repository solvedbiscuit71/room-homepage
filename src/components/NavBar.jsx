function NavBar(props) {
  return (
    <div className="navbar">
      <div className="show-navbar">
        <img src="images/svg/hamburger.svg" alt="hamburger menu" />
        <img src="images/svg/close.svg" alt="close menu" />
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