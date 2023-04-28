import Description from './Description/Description';
import ProfileStyled from './ProfileStyled';
import Stats from './Stats/Stats';

const Profile = ({ stats, ...description }) => {
  return (
    <ProfileStyled>
      <Description {...description}></Description>
      <Stats {...stats}></Stats>
    </ProfileStyled>
  );
};

export default Profile;
