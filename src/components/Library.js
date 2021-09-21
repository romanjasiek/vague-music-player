import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({ songs }) => {
    return(
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                {/* Loop through the songs and render out each library song */}
                {songs.map((song => <LibrarySong song={song} />))}
            </div>
        </div>
    )
}

export default Library;