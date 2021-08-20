import React from "react";

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoUploaded: false,
      songUploaded: false,
    };
  }

  render() {
    return (
      <div className="box">
        <div className="image-box">
          <button type="button" id="upload-btn">Upload Image</button>
        </div>
        <div className="song-box">
          <button type="button" id="upload-btn">Upload Music</button>
        </div>
      </div>
    );
  }
}


export default Create;
