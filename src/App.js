import React from 'react';
import SongList from './SongList.js';
import AddSongForm from './AddSongForm.js';

class App extends React.Component {

  state = {
    songs: [{
      id: 1,
      title: "Call Me Maybe"
    }, {
      id: 2,
      title: "For Whom the Bell Tolls"
    }]
  }

  addSong = song => {
    const { songs } = this.state;
    const newSong = {...song, id: Date.now()};
    const songList = [...songs, newSong];
    this.setState({
      songs: songList
    });
  }

  render() {
    const { songs } = this.state;
    return (
      <div className="App">
        <AddSongForm addSong={this.addSong} />
        <SongList songs={songs} />
      </div>
    );
  }
}

export default App;
