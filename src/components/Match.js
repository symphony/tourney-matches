const Match = ({ players, winner, scoreDifference }) => (
  <article className="Match">
    <h1>{players[0]} <span>vs</span> {players[1]}</h1>

    {!scoreDifference ? (
      <h2 className="noWinner">No winners yet!</h2>
    ) : (
      <h2 className="winner">{winner} is the winner by {scoreDifference}!</h2>
    )}
  </article>
);

export default Match;