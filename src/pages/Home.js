import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../styles/Home.css";
import react from "../images/react_transparent.png";
// import astronautsImage from "../images/astronauts.svg";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-4">
              <p className="h1">
                Badges
                <span className="font-weight-bold">App</span>
              </p>
              <Link className="btn btn-primary" to="/badges">
                Start
              </Link>
            </div>

            <div className="Home__col d-none d-md-block col-md-8">
              <img src={react} alt="Astronauts" className="img-fluid p-4" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
