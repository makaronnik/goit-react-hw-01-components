import styled from 'styled-components';

const StatsItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 25px 0;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: #eaeaea;
  }

  .label {
    font-size: 16px;
    font-weight: 600;

    color: #8a8a8a;
    margin-bottom: 10px;
  }

  .quantity {
    font-size: 18px;
    font-weight: 700;

    color: #2a2a2a;
  }
`;

export default StatsItemStyled;
