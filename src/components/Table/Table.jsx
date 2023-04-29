import PropTypes from 'prop-types';
import TableStyled from './TableStyled';
import TableHead from './TableHead/TableHead';
import TableRow from './TableRow/TableRow';

const Table = ({ keyPropName, data, showIdCol = true }) => {
  let colNames = Object.keys(data[0]);

  if (!showIdCol) {
    colNames = colNames.filter(colName => colName !== keyPropName);
  }

  return (
    <TableStyled>
      <TableHead colNames={colNames}></TableHead>
      <tbody>
        {data.map(item => {
          const data = { ...item };
          const id = data[keyPropName];

          if (!showIdCol) {
            delete data[keyPropName];
          }

          return <TableRow key={id} data={data}></TableRow>;
        })}
      </tbody>
    </TableStyled>
  );
};

Table.propTypes = {
  keyPropName: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
