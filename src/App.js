import React from 'react';
//Import styles
import './styles/app.scss';
// Adding components
import Player from './components/Player';
import Song from './components/Song';

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
