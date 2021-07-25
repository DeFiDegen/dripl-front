import React from 'react';
import { Link, withRouter } from "react-router-dom";

// .banner image is imported as inline styling due to unsolved error mentioned in banner.scss
const Home = () => {
  return (
    <>
      <div className="banner" style={{ backgroundImage: "url('../../assets/images/homeBackgroundArt.jpeg')" }}>
        <Link to="/create">
          <button type="button" id="call-to-action-btn">Dripl your art</button>
        </Link>
      </div>
      <div className="box">
        <div className="about-section">
          <div className="about-item">
            <p>Upload a beat</p>
            <img src="../../assets/images/driplMusicIcon.jpg" alt="" />
          </div>
          <div className="about-item">
            <p>Upload an image</p>
            <img src="../../assets/images/driplPhotoIcon.png" alt="" />
          </div>
          <div className="about-item">
            <p>Dripl</p>
            <img src="../../assets/images/driplDripIcon.png" alt="" />
          </div>
        </div>
        <p style={{ textAlign: 'center', fontSize: '24px', margin: "8px auto" }}> IT'S THAT EASY</p>
      </div>
    </>
  );
};

export default withRouter(Home);
