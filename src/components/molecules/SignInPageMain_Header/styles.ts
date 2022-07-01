import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;
`;
const First_Content = styled.div`
  margin: 45px auto 0 auto;
  font-size: 35px;
  width: 400px;
  height: 40px;
  color: #707070;
  text-align: center;
`;
const Second_Content = styled.div`
  margin: 50px auto 0 auto;
  font-size: 14px;
  width: 415px;
  flex: 1;
  line-height: 1.93;
  letter-spacing: 0.14px;
  color: #707070;
  text-align: center;
`;

const textButtonStyle = {
  fontSize: '14px',
  color: '#e7713f',
  textDecoration: 'underline',
};

export { Container, First_Content, Second_Content, textButtonStyle };
