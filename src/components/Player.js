function Player(props) {
  const { firstName, lastName, gamerTag, wins } = props;

  return (
    <article className="Player">
      <h1>
        {firstName} <span>"{gamerTag}"</span> {lastName}
      </h1>

      {(() => {
        if (!wins) return <h2 className="zero">Currently with no wins :(</h2>;
        return <h2>Currently at {wins} win{wins > 1 ? 's' : ''}</h2>;
      })()}
    </article>
  );
};

export default Player;