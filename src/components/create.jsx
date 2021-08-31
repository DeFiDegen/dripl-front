import React from "react";

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
    console.log(this.state);
  }

  handleMusic = (event) => {
    const music = event.target.files[0];
    this.setState({
      selectedMusic: music
    });
    console.log(this.state);
  }

  handleSubmit = () => {
    console.log(this.state);
  }

  render() {
    return (
      <div className="box">
        <input type="file" name="image" onChange={this.handleImage} />
        <input type="file" name="music" onChange={this.handleMusic} />
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}


export default Create;
