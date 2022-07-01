import styled from 'styled-components';

const Container = styled.div`
  margin: 50px auto 0 auto;
  width: 670px;
`;
const SignInFormContainer = styled.div`
  height: 265px;
  width: 100;
  border: 0.5px solid #cbcbcb;
  display: flex;
  flex-direction: column;
`;
const ButtonContainer = styled.div`
  width: 100%;
  height: 73px;
`;
const InputFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const buttonStyle = {
  width: '50%',
  height: '100%',
  fontSize: '20px',
};
const buttonStyle2 = {
  width: '670px',
  height: '72px',
  background: '#e7713f',
  fontSize: '20px',
  color: 'white',
  margin: '24px 0 0 0',
};
export {
  Container,
  ButtonContainer,
  buttonStyle,
  InputFormContainer,
  buttonStyle2,
  SignInFormContainer,
};
