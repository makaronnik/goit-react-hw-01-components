import styled from 'styled-components';

const StatsStyled = styled.ul`
  display: flex;

  background-color: #f1efef;

  li:not(:last-child) {
    border-right: 1px solid #e2e2e2;
  }
`;

export default StatsStyled;
