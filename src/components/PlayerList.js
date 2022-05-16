import { preparePlayerData, addWinsToPlayers } from '../helpers/playerHelpers';
import { Player } from '../index';

const PlayerList = ({ playerData, matchData }) => {
  const players = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(players, matchData);

  const playersSection = parsedPlayerData.map((player) => <Player key={player.gamerTag} {...player} />);

  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {playersSection}
    </section>
  );
};

export default PlayerList;