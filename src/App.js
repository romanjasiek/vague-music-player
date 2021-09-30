import React, { useState, useRef,useEffect } from 'react';
//Import styles
import './styles/app.scss';
// Adding components
import Player from './components/Player';
import Song from './components/Song';
import Nav from './components/Nav';
import Footer from './components/Footer';
// Importing Songs
import data from './data';
import Library from './components/Library';

function App() {
  // Ref
      const audioRef = useRef(null);
  // State
  const [isRandom, setIsRandom] = useState(false);

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
        animationPercentage: 0
        })
  const [libraryStatus, setLibraryStatus] = useState(false);
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  useEffect(()=>{
    if(isRandom){
      const randomIndex = getRandomInt(0, songs.length - 2)
      setCurrentSong(songs[randomIndex])
   
      // reflected the songs randomly in library here
      /**
       setSongs(reflected the songs randomly)
       */
       setSongs(shuffle(data()))
    }else{
      setCurrentSong(songs[0])
      setSongs(data())
    }

  },[isRandom])

  useEffect(()=>{
    const activeSong = songs?.find((i)=>i.active == true)
    const activeId = activeSong?.id
    if(activeId){
        const activeElement = document.getElementById(activeId)
        activeElement.scrollIntoView({ behavior: 'smooth' })
    }
   },[songs])

  let currentIndex =isRandom? getRandomInt(0, songs.length - 1) : songs.findIndex((song) => song.id === currentSong.id);
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  const timeUpdateHandler = (e) => {
          const current = e.target.currentTime;
          const duration = e.target.duration;

          // Calculate Percentage
          const roundedCurrent = Math.round(current); // Get rid of all decimals
          const roundedDuration = Math.round(duration);
          const animation = Math.round((roundedCurrent / roundedDuration) * 100);

          setSongInfo({...songInfo, currentTime: current, duration, animationPercentage: animation })
        }
  const songEndHandler = async () => {

    await setCurrentSong(songs[(isRandom?currentIndex:currentIndex + 1) % songs.length]);
    if(isPlaying) audioRef.current.play()
  }

  return (
    <div className={`App ${libraryStatus ? 'library-active' : ''}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player 
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        isRandom={isRandom}
        setIsRandom={setIsRandom}
        currentIndex={currentIndex}

      />
      <Library 
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong} 
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}

        />
        <Footer />
      <audio 
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
                ref={audioRef}
                src={currentSong.audio}
                onEnded={songEndHandler}
                ></audio>
    </div>
  );
}

export default App;