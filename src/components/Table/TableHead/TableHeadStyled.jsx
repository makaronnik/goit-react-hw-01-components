import styled from 'styled-components';

const TableHeadStyled = styled.thead`
  color: ${({ options }) => options.theadTextColor || '#000'};

  & th {
    padding: 15px;

    text-align: center;
    font-weight: 500;
    font-size: 16px;

    text-transform: ${({ options }) => options.theadTextTransform || 'none'};

    background-color: ${({ options }) =>
      options.theadBackgroundColor || '#ebebeb'};

    &:first-child {
      border-top-left-radius: 3px;
    }

    &:last-child {
      border-top-right-radius: 3px;
    }

    &:not(:last-child) {
      border-right: 1px solid #ebebeb;
    }
  }
`;

export default TableHeadStyled;
