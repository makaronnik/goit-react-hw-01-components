import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px;

  padding-top: 70px;
  padding-bottom: 70px;

  h1 {
    margin: 0;
    margin-bottom: 30px;

    font-size: 32px;
    font-weight: 700;
    line-height: 0;

    color: #2a2a2a;
  }

  ${({ grey }) =>
    grey &&
    css`
      background-color: #e2e2e2;
    `}

  ${({ bordered }) =>
    bordered &&
    css`
      border-bottom: 1px dashed #fff;
    `}
`;

Section.propTypes = {
  grey: PropTypes.bool,
  bordered: PropTypes.bool,
};

export default Section;
