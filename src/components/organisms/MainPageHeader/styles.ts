import styled from 'styled-components';

const Container = styled.header`
  width: 100%;
  height: 813px;
  display: flex;
`;
const LeftContainer = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  //box-shadow: inset -20px 20px 20px 0 #eff0f1;
  background: linear-gradient(to right, white, #eff0f1);
`;
const LeftContainer_Content = styled.div`
  position: absolute;
  width: 700px;
  height: 140px;
  font-size: 55px;
  font-weight: 300;
  color: #191919;
  top: 387.5px;
  left: 190px;
  line-height: 1.09;
`;
const LeftContainer_Content2 = styled.div`
  position: absolute;
  width: 700px;
  height: 260px;
  font-size: 90px;
  font-weight: bold;
  color: #191919;
  top: 547px;
  left: 190px;
  line-height: 1.11;
`;
const RightContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
`;
const RightContainer_Content = styled.div`
  position: absolute;
  top: 68.5px;
  right: 164px;
`;
const ImgStyle = {
  width: '147px,',
  height: '36.5px',
  margin: '164px 0 0 68px',
};
const buttonStyle = {
  fontSize: '25px',
  fontWeight: '300',
  color: '#191919',
};

export {
  Container,
  LeftContainer,
  RightContainer,
  ImgStyle,
  LeftContainer_Content,
  LeftContainer_Content2,
  buttonStyle,
  RightContainer_Content,
};
