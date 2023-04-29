import styled, { css } from 'styled-components';

const TableStyled = styled.table`
  overflow: hidden;

  border-collapse: collapse;

  -webkit-box-shadow: 0px 1px 3px -1px rgba(0, 0, 0, 0.14);
  box-shadow: 0px 1px 3px -1px rgba(0, 0, 0, 0.14);

  & tbody {
    color: #414141;

    ${({ options }) =>
      options.stripped
        ? css`
            & tr:nth-child(2n) {
              background-color: #f5f5f5;
            }
          `
        : css`
            & tr:not(:last-child) {
              border-bottom: 1px solid #ebebeb;
            }
          `}

    & tr:last-child {
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      overflow: hidden;

      border-bottom: 2px solid #ebebeb;
    }

    & tr {
      ${({ options }) =>
        options.hovered &&
        css`
          &:hover {
            background-color: #ebebeb;
          }
        `}
    }
  }

  border-bottom: 1px solid #ebebeb;
`;

export default TableStyled;
