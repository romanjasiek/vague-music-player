import React from 'react';

const Song = ({currentSong}) => {
    return(
        <>
        <div class="vinyl-container">
        <div className="case">
	            <div className="overlay"></div>
	                <img className="cover" src={currentSong.cover} alt={currentSong.name +" by " + currentSong.artist}/>
			    <div class="slotwrapper">
		    <div class="slot"></div>
	        </div>
	        <div className="vinyl"></div>
        </div>
        </div>
        <div className="song-container">
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
            <p>{currentSong.credits}</p>
            <p><a href={currentSong.link} target="_blank" rel="noreferrer">{currentSong.link}</a></p>
        </div>
        </>
        
        // <div className="song-container">
        //     <img src={currentSong.cover} alt={currentSong.name +" by " + currentSong.artist}></img>
        //     <h2>{currentSong.name}</h2>
        //     <h3>{currentSong.artist}</h3>
        //     <p>{currentSong.credits}</p>
        //     <p><a href={currentSong.link} target="_blank" rel="noreferrer">{currentSong.link}</a></p>
        // </div>
    )
}

export default Song;