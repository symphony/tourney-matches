import './App.css';
import { PlayerList, MatchList, playerData, matchData } from './index';

function App() {
  return (
    <div className="App">
      <h1>
        Tourney Matches <span>Where Coding and Tournaments found their Match!</span>
      </h1>

      <PlayerList playerData={playerData} matchData={matchData} />
      <MatchList matchData={matchData} />
    </div>
  );
};

export default App;