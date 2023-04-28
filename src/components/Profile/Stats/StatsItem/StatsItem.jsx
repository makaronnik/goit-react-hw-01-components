import StatsItemStyled from './StatsItemStyled';

export const StatsItem = ({ label, quantity }) => {
  const labelNormalized = label[0].toUpperCase() + label.slice(1);

  return (
    <StatsItemStyled>
      <span className="label">{labelNormalized}</span>
      <span className="quantity">{quantity}</span>
    </StatsItemStyled>
  );
};
