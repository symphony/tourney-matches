export const preparePlayerData = (playerData) => {
  return Object.values(playerData);
};

export const addWinsToPlayers = (players, matchData) => {
  return players.map((player) => {
    player.wins = matchData.reduce((wins, match) => {
      return wins + Number(match.winner === player.gamerTag);
    }, 0);

    return player;
  });
};