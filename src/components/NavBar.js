import React from "react";
import "../styles/NavBar.css";
import logo from "../images/logo-react.png";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={logo} alt="" />
            <span className="font-weight-light">Badges</span>
            <span className="font-weight-bold">App</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
