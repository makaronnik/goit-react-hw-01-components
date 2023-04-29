import styled from 'styled-components';

const TableRowStyled = styled.tr`
  & td {
    padding: 15px;

    width: ${({ options }) => options.colWidth || 'auto'};
    text-transform: ${({ options }) => options.tbodyTextTransform || 'none'};
    text-align: ${({ options }) => options.tbodyTextAlign || 'left'};

    border-left: 1px solid #ebebeb;

    &:last-child {
      border-right: 1px solid #ebebeb;
    }
  }
`;

export default TableRowStyled;
