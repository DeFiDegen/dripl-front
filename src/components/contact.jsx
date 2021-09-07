/* eslint-disable react/no-unused-state */
/* eslint-disable no-alert */
/* eslint-disable class-methods-use-this */

import React from "react";
import emailjs from "emailjs-com";

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


  handleSubmit(event) {
    event.preventDefault();
    emailjs.sendForm('Dripl - Contact Page', 'template_edp48fo', event.target, 'user_c1XSQZnKnV3t0QkiJmWPA')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    event.target.reset();
    alert("Your message has been successfully sent!");
  }

  render() {
    const { name, email, message } = this.props;
    return (
      <div className="box">
        <h2>Contact</h2>
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" name="name" value={name} onChange={this.onNameChange.bind(this)} />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" name="email" value={email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <div className="form-group" id="form-mesage">
            <label>Message</label>
            <textarea className="form-control" rows="5" name="message" value={message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <button
            type="submit"
            disabled={this.state.name && this.state.email && this.state.message ? "" : "true"}
            className={this.state.name && this.state.email && this.state.message ? "" : "disabled"}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Contact;
