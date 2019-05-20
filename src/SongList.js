import React from 'react';
import Song from './Song.js';

const SongList = ({ songs }) => {
  const songList = songs.map(song => <Song key={song.id} {...song} />)

  return(
    <div>
      {songList}
    </div>
  )
}

export default SongList;
