import DescriptionStyled from './DescriptionStyled';

const Description = () => {
  return (
    <DescriptionStyled>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
        alt="User avatar"
        class="avatar"
      />
      <p class="name">Petra Marica</p>
      <p class="tag">@pmarica</p>
      <p class="location">Salvador, Brasil</p>
    </DescriptionStyled>
  );
};

export default Description;
