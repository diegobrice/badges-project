import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="Home">
      <div className="container">
        <div className="row">
          <div className="Home__col col-12">
            <p className="display-2">
              Error 404
              <br />
              <span className="font-weight-bold"> Not Found</span>
            </p>
            <Link className="btn btn-primary" to="/badges">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
