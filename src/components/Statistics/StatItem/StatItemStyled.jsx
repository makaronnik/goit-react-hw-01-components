import PropTypes from 'prop-types';
import styled from 'styled-components';

const StatItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  flex: 1;
  min-width: 70px;

  padding: 50px 20px 15px;

  color: rgb(255, 255, 255, 0.9);
  background-color: ${({ bgColor }) => bgColor || '#2b86d6'};

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  transform: translateY(-40px);

  :first-child {
    border-bottom-left-radius: 3px;
  }

  :last-child {
    border-bottom-right-radius: 3px;
  }

  :hover {
    transform: translateY(0);

    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  .label {
    margin-bottom: 5px;

    font-size: 14px;
  }

  .percentage {
    font-size: 18px;
    font-weight: 600;
  }
`;

StatItemStyled.propTypes = {
  bgColor: PropTypes.string,
};

export default StatItemStyled;
