import React from 'react';
import { Link, withRouter } from "react-router-dom";

const Navbar = ({ location }) => {

  return (
    <div className="navbar">
      <div className="left-nav">
        <Link to="/">
          <img src="../../assets/images/navLogo.jpg" alt="" className="logo" />
          <button type="button" className={`${location.pathname === "/" ? "active" : ""}`}>Dripl</button>
        </Link>
      </div>
      <div className="right-nav">
        <Link to="/create">
          <button type="button" className={`${location.pathname === "/create" ? "active" : ""}`}>Create</button>
        </Link>
        <Link to="/contact">
          <button type="button" className={`${location.pathname === "/contact" ? "active" : ""}`}>Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
