import React from 'react';
import { Link, withRouter } from "react-router-dom";

// .banner image is imported as inline styling due to unsolved error mentioned in banner.scss
const Home = () => {
  return (
    <>
      <div className="banner" style={{ backgroundImage: "url('../../assets/images/homeBackgroundArt.jpeg')" }}>
        <Link to="/create">
          <button type="button" id="call-to-action-btn">dripl your art</button>
        </Link>
      </div>
      <div className="box">
        <div className="about-section">
          <div className="about-item">
            <p>Upload a Beat</p>
            <img src="../../assets/images/driplMusicIconBlue.svg" alt="" />
          </div>
          <div className="about-item">
            <p>Upload an Image</p>
            <img src="../../assets/images/driplPhotoIconBlue.svg" alt="" />
          </div>
          <div className="about-item">
            <p>Dripl</p>
            <img src="../../assets/images/driplDripIconBlue.svg" alt="" />
          </div>
        </div>
        <p className="slogan">IT'S THAT EASY</p>
      </div>
    </>
  );
};

export default withRouter(Home);
