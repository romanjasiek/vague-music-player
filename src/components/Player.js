import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight,faPause } from '@fortawesome/free-solid-svg-icons';

const Player = ({ audioRef, currentSong, isPlaying, setIsPlaying, setSongInfo, songInfo }) => {
    //Event Handlers
    const playSongHandler = () => {
        if(isPlaying) {
            audioRef.current.pause();
            // Switching between true and false
            setIsPlaying(!isPlaying);
        }else {
            audioRef.current.play();
            // Switching between true and false again
            setIsPlaying(!isPlaying);
        }
    }

    const getTime = (time) => {
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value}) //Whatever is inside songInfo, keep it, but update the current time
    }

    return(
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input  min={0} // Every song starts at 0
                        max={songInfo.duration} // Duration cannot be longer than the duration of a song
                        value={songInfo.currentTime} // The actual value is based on the current time position of a song
                        onChange={dragHandler}
                        type="range" />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} />
            </div>
        </div>
    );
};

export default Player;