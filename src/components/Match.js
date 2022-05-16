function Match(props) {
  const { matchNumber, players, winner, scoreDifference } = props;

  return (
    <article className="Match" key={matchNumber}>
      <h1>{players[0]} <span>vs</span> {players[1]}</h1>

      {scoreDifference === 1 && <h2 className="winner">{winner} is the winner by {scoreDifference}!</h2>}

      {scoreDifference > 1 && <h2 className="noWinner">No winners yet!</h2>}
    </article>
  );
};

export default Match;