function Player(props) {
  const { firstName, lastName, gamerTag, wins } = props;

  return (
    <article className="Player" key={gamerTag}>
      <h1>
        {firstName} <span>"{gamerTag}"</span> {lastName}
      </h1>

      {!wins && <h2 className="zero">Currently with no wins :(</h2>}

      {wins === 1 && <h2>Currently at 1 win</h2>}

      {wins > 1 && <h2>Currently at 1+ wins</h2>}
    </article>
  );
};

export default Player;