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

  // // **____INCOMPLETE____**
  handleUpload = (event) => {
    event.preventDefault();
    console.log(this.state);
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
        <h2>Create</h2>
        <form id="create-form" onSubmit={this.handleUpload}>
          <div className="form-group">
            <label>Image</label>
            <input type="file" className="form-control" name="image" onChange={this.handleImage} />
          </div>
          <div className="form-group">
            <label>Music</label>
            <input type="file" className="form-control" name="music" onChange={this.handleMusic} />
          </div>
          <button type="submit">Upload</button>
        </form>
      </div>
    );
  }
}


export default Create;
