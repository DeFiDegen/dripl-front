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
            <p>upload a beat</p>
            <img src="../../assets/images/driplMusicIcon.svg" alt="" />
          </div>
          <div className="about-item">
            <p>upload an image</p>
            <img src="../../assets/images/driplPhotoIcon.svg" alt="" />
          </div>
          <div className="about-item">
            <p>dripl</p>
            <img src="../../assets/images/driplDripIcon.svg" alt="" />
          </div>
        </div>
        <p style={{ textAlign: 'center', fontSize: '24px', margin: "8px auto" }}> IT'S THAT EASY</p>
      </div>
    </>
  );
};

export default withRouter(Home);
