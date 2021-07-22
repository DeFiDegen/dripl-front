import React from 'react';

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
        <img src="../../assets/images/navLogo.jpg" alt="" className="logo" onClick={homeClickHandle} />
        <button type="button" onClick={homeClickHandle}>Dripl</button>
      </div>
      <div className="right-nav">
        <button type="button" onClick={createClickHandle}>Create</button>
        <button type="button" onClick={contactClickHandle}>Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
