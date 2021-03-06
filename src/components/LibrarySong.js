import React from 'react';

const LibrarySong = ({  song, songs, setCurrentSong, id, audioRef, isPlaying, setSongs }) => {
    const songSelectHandler = async () => {
        await setCurrentSong(song); // Checking if the thing we click on equals to some item in our songs database
        // setCurrentSong(selectedSong[0]);

        // Set active state
        const newSongs = songs.map((song) =>{
            if(song.id === id){
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
        // Check if song is playing
        if(isPlaying) audioRef.current.play();
    };
  
    return(
        <div id={song.id} onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ""}`} >
            <img src={song.cover} alt={song.name +" by " + song.artist}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;