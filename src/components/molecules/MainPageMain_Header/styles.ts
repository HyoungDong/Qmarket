import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;
const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  &:hover div {
    display: flex;
  }
`;
const BubbleContainer = styled.div`
  position: absolute;
  left: 50%;
  display: none;
  justify-content: center;
  align-items: center;
  width: 410px;
  height: 55px;
  padding: 0px;
  background: #ffffff;
  -webkit-border-radius: 18px;
  -moz-border-radius: 18px;
  border-radius: 18px;
  border: #ccc solid 1px;

  &:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 10px 20px 10px 0;
    border-color: transparent #ffffff;
    display: block;
    width: 0;
    z-index: 1;
    left: -20px;
    top: 17px;
  }

  &:before {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 10px 20px 10px 0;
    border-color: transparent #ccc;
    display: block;
    width: 0;
    z-index: 0;
    left: -21px;
    top: 17px;
  }
`;
const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 72px;
`;
const Content = styled.div`
  position: relative;
  width: 440px;
  text-align: center;
  font-size: 52.5px;
  font-weight: normal;
`;
const ImgContainer = styled.div`
  position: absolute;
  width: 158px;
  height: 158px;
  left: 141px;
  top: 0;
`;
const buttonStyle = {
  fontSize: '27px',
  fontWeight: 'normal',
  color: '#e7713f',
  textDecoration: 'underline',
};
const imgStyle = {
  width: '100%',
  height: '100%',
};
export {
  Container,
  ButtonContainer,
  ContentContainer,
  buttonStyle,
  BubbleContainer,
  Content,
  ImgContainer,
  imgStyle,
};
