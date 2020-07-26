import React from "react";

class BadgeForm extends React.Component {
  // state = {};

  // props.onChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };

  handleClick = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <h1>New Badge</h1>
        <form action="">
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
              id=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
              id=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
              id=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
              id=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
              id=""
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
