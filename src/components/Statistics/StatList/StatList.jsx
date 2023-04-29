import PropTypes from 'prop-types';
import StatListStyled from './StatListStyled';
import StatItem from '../StatItem/StatItem';

const StatList = ({ stats }) => {
  return (
    <StatListStyled>
      {stats.map(({ id, label, percentage }) => (
        <StatItem key={id} label={label} percentage={percentage} />
      ))}
    </StatListStyled>
  );
};

StatList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default StatList;
