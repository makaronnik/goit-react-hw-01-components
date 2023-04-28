import styled, { css } from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px;

  padding-top: 50px;
  padding-bottom: 50px;

  h1 {
    font-size: 32px;
    font-weight: 700;

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

export default Section;
