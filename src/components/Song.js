import React from 'react';

const Song = ({currentSong}) => {
    return(
        <div className="song-container">
            <img src={currentSong.cover} alt={currentSong.name +" by " + currentSong.artist}></img>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
            <p>{currentSong.credits}</p>
            <p><a href={currentSong.link} target="_blank">{currentSong.link}</a></p>
        </div>
    )
}

export default Song;