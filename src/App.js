import React, { useState } from 'react';
//Import styles
import './styles/app.scss';
// Adding components
import Player from './components/Player';
import Song from './components/Song';
// Importing Songs
import data from './data';
import Library from './components/Library';

function App() {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player 
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}

      />
      <Library songs={songs} />
    </div>
  );
}

export default App;
