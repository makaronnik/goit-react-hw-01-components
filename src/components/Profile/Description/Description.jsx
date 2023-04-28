import PropTypes from 'prop-types';
import DescriptionStyled from './DescriptionStyled';

const Description = ({ username, tag, location, avatar }) => {
  return (
    <DescriptionStyled>
      <img src={avatar} alt={username + ' avatar'} className="avatar" />
      <p className="name">{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </DescriptionStyled>
  );
};

Description.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Description;
