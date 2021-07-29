import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  // handleSubmit funciton needs to be changed in order to handle post request to server
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    const { name, email, message } = this.props;
    return (
      <div className="box">
        <h2>Contact</h2>
        <form id="contact-form" method="POST" onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" value={name} onChange={this.onNameChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <div className="form-group" id="form-mesage">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" value={message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Contact;
