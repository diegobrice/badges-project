import React from "react";
import logo from "../images/logo-react.png";
import user from "../images/user.png";
import "../styles/Badge.css";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={logo} alt="Logo" />
        </div>
        <div className="Badge__section-name">
          <img className="Badge__avatar" src={user} alt="profile" />
          <h1>
            {this.props.firstName} <br />
            {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>

        <div className="Badge__footer">Badges App</div>
      </div>
    );
  }
}

export default Badge;
