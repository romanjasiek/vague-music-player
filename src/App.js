import React, { useState, useRef } from 'react';
//Import styles
import './styles/app.scss';
// Adding components
import Player from './components/Player';
import Song from './components/Song';
import Nav from './components/Nav'
// Importing Songs
import data from './data';
import Library from './components/Library';

function App() {
  // Ref
      const audioRef = useRef(null);
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0
        })
  const [libraryStatus, setLibraryStatus] = useState(false);

  const timeUpdateHandler = (e) => {
          const current = e.target.currentTime;
          const duration = e.target.duration;
          setSongInfo({...songInfo, currentTime: current, duration })
        }

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player 
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}

      />
      <Library 
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong} 
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}

        />
      <audio 
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
                ref={audioRef}
                src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
