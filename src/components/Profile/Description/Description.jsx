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

export default Description;
