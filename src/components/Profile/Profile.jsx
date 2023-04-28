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

export default Profile;
