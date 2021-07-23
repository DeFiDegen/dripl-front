import React from 'react';
import { Link, withRouter } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="left-nav">
        <Link to="/">
          <img src="../../assets/images/navLogo.jpg" alt="" className="logo" />
          <button type="button">Dripl</button>
        </Link>
      </div>
      <div className="right-nav">
        <Link to="/create">
          <button type="button">Create</button>
        </Link>
        <Link to="/contact">
          <button type="button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
