import { Match } from '../index';

function MatchList(props) {
  const matches = props.matchData.map((match) => <Match {...match} />);

  return (
    <section className="MatchList">
      <h1>Match list</h1>
      {matches}
    </section>
  );
};

export default MatchList;