import { preparePlayerData, addWinsToPlayers } from '../helpers/playerHelpers';
import { Player } from '../index';

function PlayerList(props) {
  const players = preparePlayerData(props.playerData);
  const parsedPlayerData = addWinsToPlayers(players, props.matchData);

  const playersSection = parsedPlayerData.map((player) => <Player key={player.gamerTag} {...player} />);

  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {playersSection}
    </section>
  );
};

export default PlayerList;