import styled from 'styled-components';

const FriendItemStyled = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;

  width: 240px;
  padding: 5px 10px;

  font-size: 18px;
  font-weight: 500;

  border-radius: 1px;

  -webkit-box-shadow: 0px 2px 4px 0px rgba(69, 69, 69, 0.55);
  box-shadow: 0px 2px 4px 0px rgba(69, 69, 69, 0.55);

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &:hover {
    -webkit-box-shadow: 0px 4px 8px 0px rgba(69, 69, 69, 0.65);
    box-shadow: 0px 4px 8px 0px rgba(69, 69, 69, 0.65);
    transform: translateY(-3px);
  }

  .status {
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;

    &.isOnline {
      background-color: green;
    }
  }

  .avatar {
    display: block;

    width: 48px;
    height: 48px;

    border-radius: 3px;
    background-color: #e8e8e8;
  }
`;

export default FriendItemStyled;
