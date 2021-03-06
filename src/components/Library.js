import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import LibrarySong from './LibrarySong';

const Library = ({ songs, setCurrentSong, audioRef, isPlaying, setSongs, setLibraryStatus, libraryStatus }) => {
    return(
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library <FontAwesomeIcon className="close-button" icon={faTimesCircle} onClick={() => setLibraryStatus(!libraryStatus)}/></h2>
            <div className="library-songs">
                {/* Loop through the songs and render out each library song */}
                {songs.map((song => <LibrarySong    songs={songs}  //Pass down all the songs from the state
                                                    setCurrentSong={setCurrentSong}
                                                    song={song} // Each individual song and their information
                                                    id={song.id} // This one is a bit redundant because we can already access this information (it's included in 'songs')
                                                    key={song.id}
                                                    audioRef={audioRef}
                                                    isPlaying={isPlaying}
                                                    setSongs={setSongs} />))}
            </div>
        </div>
    )
}

export default Library;