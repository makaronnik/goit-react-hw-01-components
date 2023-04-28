import PropTypes from 'prop-types';
import StatsItem from './StatsItem/StatsItem';
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

Stats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Stats;
