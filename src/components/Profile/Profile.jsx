import PropTypes from 'prop-types';
import Stats from './Stats/Stats';
import Description from './Description/Description';
import ProfileStyled from './ProfileStyled';

const Profile = ({ stats, ...description }) => {
  return (
    <ProfileStyled>
      <Description {...description}></Description>
      <Stats {...stats}></Stats>
    </ProfileStyled>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,

  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
