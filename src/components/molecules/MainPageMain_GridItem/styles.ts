import styled from 'styled-components';

const Container = styled.div`
  width: 377px;
  height: 248px;
  border-radius: 8px;
  box-shadow: 0 2.5px 5px 0 rgba(0, 0, 0, 0.16);
  border: solid 0.5px #ccc;
  cursor: pointer;
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 36.6px;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-size: 36px;
  font-weight: normal;
  text-align: center;
  color: #000;
`;
const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto 0 auto;
  text-align: center;
  font-size: 19px;
  font-weight: normal;
  color: #707070;
  width: 164px;
  height: 47.5px;
`;
const imgStyle = {
  width: '50px',
  height: '50px',
};
export { Container, IconContainer, TitleContainer, InfoContainer, imgStyle };
