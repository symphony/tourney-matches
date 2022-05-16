const Player = ({ firstName, lastName, gamerTag, wins }) => (
  <article className="Player">
    <h1>
      {firstName} <span>"{gamerTag}"</span> {lastName}
    </h1>

    {!wins ? (
      <h2 className="zero">Currently with no wins :(</h2>
    ) : (
      <h2>Currently at {wins} win{wins > 1 ? 's' : ''}</h2>
    )}
  </article>
);

export default Player;