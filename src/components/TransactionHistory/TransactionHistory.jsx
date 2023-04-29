import Table from 'components/Table/Table';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <Table
      keyPropName="id"
      data={items}
      options={{
        sowColId: true,
        colWidth: '300px',
        stripped: true,
        hovered: true,
        theadTextTransform: 'uppercase',
        tbodyTextTransform: 'capitalize',
        tbodyTextAlign: 'center',
        theadBackgroundColor: '#00bcd5',
        theadTextColor: '#fff',
      }}
    ></Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
