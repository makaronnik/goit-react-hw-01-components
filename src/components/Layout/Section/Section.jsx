import styled, { css } from 'styled-components';

const Section = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;

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

export default Section;
