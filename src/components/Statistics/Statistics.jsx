import PropTypes from 'prop-types';
import StatisticsStyled from './StatisticsStyled';
import StatList from './StatList/StatList';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsStyled>
      {title && <h2 className="title">{title}</h2>}
      <StatList stats={stats} />
    </StatisticsStyled>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,

  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
