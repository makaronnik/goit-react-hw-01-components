import PropTypes from 'prop-types';

const TableRow = ({ data }) => {
  return (
    <tr>
      {Object.values(data).map((value, index) => (
        <td key={index}>{value}</td>
      ))}
    </tr>
  );
};

TableRow.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ).isRequired,
};
export default TableRow;
