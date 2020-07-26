import React from "react";
import "../styles/NavBar.css";
import logo from "../images/logo-react.png";

class NavBar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <a className="Navbar__brand" href="/">
            <img className="Navbar__brand-logo" src={logo} alt="" />
            <span className="font-weight-light">Badges</span>
            <span className="font-weight-bold">App</span>
          </a>
        </div>
      </div>
    );
  }
}

export default NavBar;
