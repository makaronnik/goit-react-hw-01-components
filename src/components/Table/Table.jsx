import PropTypes from 'prop-types';
import TableStyled from './TableStyled';
import TableHead from './TableHead/TableHead';
import TableRow from './TableRow/TableRow';

const Table = ({
  keyPropName,
  data,
  options = {
    showColId: true,
    colWidth: 'auto',
    stripped: false,
    hovered: false,
    theadTextTransform: 'none',
    tbodyTextTransform: 'none',
    tbodyTextAlign: 'left',
    theadBackgroundColor: '#ebebeb',
    tbodyTextColor: '#000',
  },
}) => {
  let colNames = Object.keys(data[0]);

  if (!options.showColId) {
    colNames = colNames.filter(colName => colName !== keyPropName);
  }

  return (
    <TableStyled options={options}>
      <TableHead colNames={colNames} options={options}></TableHead>
      <tbody>
        {data.map(item => {
          const data = { ...item };
          const id = data[keyPropName];

          if (!options.showColId) {
            delete data[keyPropName];
          }

          return <TableRow key={id} data={data} options={options}></TableRow>;
        })}
      </tbody>
    </TableStyled>
  );
};

Table.propTypes = {
  keyPropName: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
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

export default Table;
