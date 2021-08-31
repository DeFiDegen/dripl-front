import React from "react";
import axios from "axios";

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: null,
      selectedMusic: null
    };
  }

  handleImage = (event) => {
    const image = event.target.files[0];
    this.setState({
      selectedImage: image
    });
  }

  handleMusic = (event) => {
    const music = event.target.files[0];
    this.setState({
      selectedMusic: music
    });
  }

  // **____INCOMPLETE____** ]
  handleUpload = () => {
    // console.log(this.state);
    // create new FormData object, then store component state inside
    const data = new FormData();
    data.append("image", this.state.selectedImage, this.state.selectedImage.name);
    data.append("music", this.state.selectedMusic, this.state.selectedMusic.name);
    // call axios post method to server endpoint, then console log response from the server
    // ___IMPORTANT___ must setup up api endpoint for this to work
    axios.post("url", data)
      .then((response) => {
        console.log(response);
      });
  }

  render() {
    return (
      <div className="box">
        <input type="file" name="image" onChange={this.handleImage} />
        <input type="file" name="music" onChange={this.handleMusic} />
        <button type="submit" id="upload-btn" onClick={this.handleUpload}>Upload</button>
      </div>
    );
  }
}


export default Create;
