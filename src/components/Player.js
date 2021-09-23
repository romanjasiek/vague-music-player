import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight,faPause } from '@fortawesome/free-solid-svg-icons';

const Player = ({ audioRef, currentSong, isPlaying, setIsPlaying, setSongInfo, songInfo, songs, setCurrentSong, setSongs }) => {

    const activeLibraryHandler = (nextPrev) => {
        const newSongs = songs.map((song) =>{
            if(song.id === nextPrev.id){
                return{
                    ...song,
                    active: true
                }
            }else{
                return{
                    ...song,
                    active: false
                }
            }
        })
        setSongs(newSongs);
    }

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

    const skipTrackHandler = async (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if(direction === 'skip-forward'){
            // Find the actual index and add +1 to go to the next song. When matching the number of songs in the array, go back to 0
            await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
        }
        if(direction === 'skip-back'){
            // Prevents crashing when skipping beyond the first song because we don't have a -1 index
            if((currentIndex - 1) % songs.length === -1){
                await setCurrentSong(songs[songs.length -1]);
                activeLibraryHandler(songs[songs.length -1]);
                if(isPlaying) audioRef.current.play();
                return;
            }
            await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
        }
        if(isPlaying) audioRef.current.play();
    }
    // Add the styles
    const trackAnim = {
        transform: `translateX(${songInfo.animationPercentage}%)`
    }

    return(
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}} className="track">
                <input  min={0} // Every song starts at 0
                        max={songInfo.duration || 0} // Duration cannot be longer than the duration of a song
                        value={songInfo.currentTime} // The actual value is based on the current time position of a song
                        onChange={dragHandler}
                        type="range" />
                        <div style={trackAnim} className="animate-track"></div>
                </div>
                <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
            </div>
            <div className="play-control">
                {/* The arrow function prevents the function from being executed instantly */}
                <FontAwesomeIcon 
                    onClick={() => {skipTrackHandler('skip-back')}}
                    className="skip-back" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon 
                    onClick={playSongHandler}
                    className="play" size="2x"
                    icon={isPlaying ? faPause : faPlay}
                    />
                <FontAwesomeIcon 
                    onClick={() => {skipTrackHandler('skip-forward')}} 
                    className="skip-forward" size="2x" icon={faAngleRight} />
            </div>
        </div>
    );
};

export default Player;