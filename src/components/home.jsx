import React from 'react';
import { Link, withRouter } from "react-router-dom";

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
            <img src="../../assets/images/driplMusicIcon.jpg" alt="" className="home-icon" />
          </div>
          <div className="about-item">
            <p>Upload an image</p>
            <img src="../../assets/images/driplPhotoIcon.png" alt="" className="home-icon" />
          </div>
          <div className="about-item">
            <p>Dripl</p>
            <img src="../../assets/images/driplDripIcon.png" alt="" className="home-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Home);
