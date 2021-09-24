import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ setLibraryStatus, libraryStatus }) => {
    return(
        <nav>
            <h1>Coding Tunes</h1>
            {/* Set LibraryStatus to the opposite to whatever it is now (by default, it is false) */}
            <button onClick={() => setLibraryStatus(!libraryStatus)}>
                Library <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    )
}

export default Nav;