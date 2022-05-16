import { Match } from '../index';

const MatchList = ({matchData}) => {
  const matches = matchData.map((match) => <Match key={match.matchNumber} {...match} />);

  return (
    <section className="MatchList">
      <h1>Match list</h1>
      {matches}
    </section>
  );
};

export default MatchList;