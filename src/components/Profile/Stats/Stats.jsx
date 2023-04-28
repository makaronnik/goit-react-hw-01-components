import { StatsItem } from './StatsItem/StatsItem';
import StatsStyled from './StatsStyled';

const Stats = props => {
  const keys = Object.keys(props);
  const values = Object.values(props);

  return (
    <StatsStyled>
      {keys.map((key, index) => (
        <StatsItem key={key} label={key} quantity={values[index]} />
      ))}
    </StatsStyled>
  );
};

export default Stats;
