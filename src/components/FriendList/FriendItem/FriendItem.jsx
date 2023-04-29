import clsx from 'clsx';
import PropTypes from 'prop-types';
import FriendItemStyled from './FriendItemStyled';

const FriendItem = ({ avatar, name, isOnline }) => {
  const spanClasses = clsx('status', { isOnline });

  return (
    <FriendItemStyled>
      <span className={spanClasses}></span>
      <img className="avatar" src={avatar} alt={name + ' avatar'} width="48" />
      <p className="name">{name}</p>
    </FriendItemStyled>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendItem;
