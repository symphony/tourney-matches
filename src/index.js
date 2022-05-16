import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// component exports
import PlayerList from './components/PlayerList';
import MatchList from './components/MatchList';
import Player from './components/Player';
import Match from './components/Match';
import playerData from './components/playerData';
import matchData from './components/matchData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

export { PlayerList, MatchList, Player, Match, playerData, matchData };