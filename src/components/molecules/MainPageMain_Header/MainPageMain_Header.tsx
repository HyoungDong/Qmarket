import React from 'react';
import { Img, TextButton } from '../../atoms';
import {
  BubbleContainer,
  ButtonContainer,
  buttonStyle,
  Container,
  Content,
  ContentContainer,
  ImgContainer,
  imgStyle,
} from './styles';
import Arrow from '../../../assets/images/arrow.png';

function MainPageMain_Header() {
  return (
    <Container>
      <ButtonContainer>
        <TextButton Style={buttonStyle}>마트 사장님 가입 안내</TextButton>
        <BubbleContainer>
          안내가 필요하신 분은 &nbsp;
          <span style={{ color: '#e7713f', textDecoration: 'underline' }}>
            0507-1314-9657
          </span>
          &nbsp; 에 연락주세요.
        </BubbleContainer>
      </ButtonContainer>
      <ContentContainer>
        <Content>
          매출 , 주문 , 재고까지 큐마켓 관리 서비스
          <ImgContainer>
            <Img src={Arrow} Style={imgStyle} />
          </ImgContainer>
        </Content>
      </ContentContainer>
    </Container>
  );
}

export default React.memo(MainPageMain_Header);
