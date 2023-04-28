import Description from './Description/Description';
import ProfileStyled from './ProfileStyled';
import Stats from './Stats/Stats';

const Profile = () => {
  return (
    <ProfileStyled>
      <Description></Description>
      <Stats></Stats>
    </ProfileStyled>
  );
};

export default Profile;
