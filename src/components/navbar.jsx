import React from 'react';
import { Link, withRouter } from "react-router-dom";

const Navbar = () => {
  const createClickHandle = () => {
    console.log('Create BTN clicked');
  };

  const contactClickHandle = () => {
    console.log('Contact BTN clicked');
  };

  const homeClickHandle = () => {
    console.log('Home BTN clicked');
  };

  return (
    <div className="navbar">
      <div className="left-nav">
        <Link to="/">
          <img src="../../assets/images/navLogo.jpg" alt="" className="logo" onClick={homeClickHandle} />
          <button type="button" onClick={homeClickHandle}>Dripl</button>
        </Link>
      </div>
      <div className="right-nav">
        <Link to="/create">
          <button type="button" onClick={createClickHandle}>Create</button>
        </Link>
        <Link to="/contact">
          <button type="button" onClick={contactClickHandle}>Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
