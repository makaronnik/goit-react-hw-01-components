import PropTypes from 'prop-types';
import TableHeadStyled from './TableHeadStyled';

const TableHead = ({ colNames, options }) => {
  return (
    <TableHeadStyled options={options}>
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
  options: PropTypes.shape({
    showColId: PropTypes.bool,
    colWidth: PropTypes.string,
    stripped: PropTypes.bool,
    hovered: PropTypes.bool,
    theadTextTransform: PropTypes.string,
    tbodyTextTransform: PropTypes.string,
    tbodyTextAlign: PropTypes.string,
    theadBackgroundColor: PropTypes.string,
    tbodyTextColor: PropTypes.string,
  }),
};

export default TableHead;
