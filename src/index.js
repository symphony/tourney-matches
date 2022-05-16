import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


export { PlayerList, MatchList, Player, Match, playerData, matchData };