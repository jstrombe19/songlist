import React, {Component} from 'react';

class AddSongForm extends Component {

  state = {
    title: ""
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { addSong } = this.props
    addSong(this.state);
    this.setState({ title: "" });
  }

  render() {
    return(
      <div className="add-song-form">
        <form onSubmit={this.handleSubmit}>
          <input name="title" value={this.state.title} onChange={this.handleChange} placeholder="Enter the song title"/>
          <input type="submit" value="Add Song" />
        </form>
      </div>
    )
  }
}

export default AddSongForm;
