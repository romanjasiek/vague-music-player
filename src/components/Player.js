import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
  faRandom,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  audioRef,
  currentSong,
  isPlaying,
  setIsPlaying,
  setSongInfo,
  songInfo,
  songs,
  setCurrentSong,
  setSongs,
  setIsRandom,
  isRandom,
  currentIndex
}) => {
  const [isLoop, setIsLoop] = useState(false);
  const activeLibraryHandler = (nextPrev) => {
    const newSongs = songs.map((song) => {
      if (song.id === nextPrev.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  };
  useEffect(() => {
    audioRef.current.loop = isLoop;
  }, [isLoop]);
  //Event Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      // Switching between true and false
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();

      // Switching between true and false again
      setIsPlaying(!isPlaying);
    }
  };

  // Shuffle songs
  // const shuffleSongs = () => {
  //     function shuffleArray(array) {
  //         for (let i = array.length - 1; i > 0; i--) {
  //             const j = Math.floor(Math.random() * (i + 1));
  //             [array[i], array[j]] = [array[j], array[i]];
  //         }
  //     }
  //   };

  /*const repeatSong = () => {
    let myAudio = audioRef.current.play;
    myAudio = new Audio(currentSong);
    if (typeof myAudio.loop == "boolean") {
      myAudio.loop = true;
    } else {
      myAudio.addEventListener(
        "ended",
        function () {
          this.currentTime = 0;
          this.play();
        },
        false
      );
    }
    myAudio.play();
  };*/

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value }); //Whatever is inside songInfo, keep it, but update the current time
  };

  const skipTrackHandler = async (direction) => {
 
    if (direction === "skip-forward") {
      // Find the actual index and add +1 to go to the next song. When matching the number of songs in the array, go back to 0
      await setCurrentSong(songs[(isRandom?currentIndex:currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(isRandom?currentIndex:currentIndex + 1) % songs.length]);
    }
    if (direction === "skip-back") {
      // Prevents crashing when skipping beyond the first song because we don't have a -1 index
      if ((isRandom?currentIndex:currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        activeLibraryHandler(songs[songs.length - 1]);
        if (isPlaying) audioRef.current.play();
        return;
      }
      await setCurrentSong(songs[(isRandom?currentIndex:currentIndex - 1) % songs.length]);
      activeLibraryHandler(songs[(isRandom?currentIndex:currentIndex - 1) % songs.length]);
    }
    if (isPlaying) audioRef.current.play();
  };
  // Add the styles
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            min={0} // Every song starts at 0
            max={songInfo.duration || 0} // Duration cannot be longer than the duration of a song
            value={songInfo.currentTime} // The actual value is based on the current time position of a song
            onChange={dragHandler}
            type="range"
          />
          <div style={trackAnim} className="animate-track"></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control play-control__shadow">
        {/* The arrow function prevents the function from being executed instantly */}
        <FontAwesomeIcon
          onClick={() => {
            skipTrackHandler("skip-back");
          }}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => {
            skipTrackHandler("skip-forward");
          }}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
        <FontAwesomeIcon
          onClick={() => setIsRandom(!isRandom)}
          className="random-repeat"
          size="2x"
          icon={faRandom}
          style={{ color: isRandom ? "#E9C46A" : "" }}
        />
        <FontAwesomeIcon
          onClick={() => setIsLoop(!isLoop)}
          className="random-repeat"
          size="2x"
          icon={faRedo}
          style={{ color: isLoop ? "#E9C46A" : "" }}
        />
      </div>
    </div>
  );
};

export default Player;