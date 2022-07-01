import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background: white;
  z-index: 1;
  border-top-left-radius: 19.5px;
  border-bottom-left-radius: 19.5px;
  box-shadow: -10px 20px 20px gray;
`;
const ContentContainer = styled.div`
  width: 574px;
  height: 112px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: #000;
  text-align: left;
`;

const InputContainer = styled.div`
  display: flex;
  margin-top: 15.5px;
  height: 60px;
  width: 574px;
  font-size: 17.5px;
  font-weight: normal;
  color: #191919;
  border-bottom: 2.5px solid #000;
  padding-left: 15px;
  box-sizing: border-box;
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  cursor: pointer;
`;

const imgStyle = {
  width: '37.8px',
  height: '35.5px',
};

const inputStyle = {
  flex: '1',
};

export {
  Container,
  Title,
  InputContainer,
  ContentContainer,
  IconContainer,
  imgStyle,
  inputStyle,
};
