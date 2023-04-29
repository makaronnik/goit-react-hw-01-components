import PropTypes from 'prop-types';
import StatItemStyled from './StatItemStyled';

const StatItem = ({ label, percentage, bgColor }) => {
  return (
    <StatItemStyled bgColor={bgColor}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </StatItemStyled>
  );
};

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  bgColor: PropTypes.string,
};

export default StatItem;
