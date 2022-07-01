import styled from 'styled-components';

const Container = styled.div`
  margin-top: 200px;
`;
const InfoContainer = styled.div`
  width: 1090px;
  margin: 0 auto;
  margin-top: 31px;
  font-family: NanumGothicOTF;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1px;
  text-align: center;
  color: #707070;
`;
const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px auto 100px auto;
  padding-bottom: 100px;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px;
`;
const imgStyle = {
  width: '80px',
  height: '20px',
  margin: '0 12px 0 0',
};
export { Container, InfoContainer, imgStyle, Content, ContentContainer };
