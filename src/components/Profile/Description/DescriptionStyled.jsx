import styled from 'styled-components';

const DescriptionStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 40px 100px;

  background-color: #fff;
  border-bottom: 1px solid #e2e2e2;

  .avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 30px;

    background-color: #eee;
  }

  .name {
    font-size: 24px;
    font-weight: 700;

    color: #2a2a2a;
    margin-bottom: 15px;
  }

  .tag,
  .location {
    font-size: 16px;
    font-weight: 600;

    color: #afadad;
    margin-bottom: 10px;
  }

  .location {
    margin-bottom: 0;
  }
`;

export default DescriptionStyled;
