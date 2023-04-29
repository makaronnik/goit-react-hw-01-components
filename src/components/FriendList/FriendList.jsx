import PropTypes from 'prop-types';
import FriendItem from './FriendItem/FriendItem';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ id, ...props }) => (
        <FriendItem key={id.toString()} {...props}></FriendItem>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendList;
