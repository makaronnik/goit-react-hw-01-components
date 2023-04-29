import PropTypes from 'prop-types';
import TableHeadStyled from './TableHeadStyled';

const TableHead = ({ colNames }) => {
  return (
    <TableHeadStyled>
      <tr>
        {colNames.map(colName => (
          <th key={colName}>{colName}</th>
        ))}
      </tr>
    </TableHeadStyled>
  );
};

TableHead.propTypes = {
  colNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TableHead;
