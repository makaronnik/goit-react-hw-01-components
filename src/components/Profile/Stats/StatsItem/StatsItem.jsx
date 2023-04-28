import StatsItemStyled from './StatsItemStyled';

import PropTypes from 'prop-types';

const StatsItem = ({ label, quantity }) => {
  const labelNormalized = label[0].toUpperCase() + label.slice(1);

  return (
    <StatsItemStyled>
      <span className="label">{labelNormalized}</span>
      <span className="quantity">
        {Number.parseInt(quantity).toLocaleString('en-US')}
      </span>
    </StatsItemStyled>
  );
};

StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default StatsItem;
