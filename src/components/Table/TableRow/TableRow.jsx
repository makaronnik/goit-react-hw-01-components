import PropTypes from 'prop-types';
import TableRowStyled from './TableRowStyled';

const TableRow = ({ data, options }) => {
  return (
    <TableRowStyled options={options}>
      {Object.values(data).map((value, index) => (
        <td key={index}>{value}</td>
      ))}
    </TableRowStyled>
  );
};

TableRow.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ).isRequired,
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
export default TableRow;
