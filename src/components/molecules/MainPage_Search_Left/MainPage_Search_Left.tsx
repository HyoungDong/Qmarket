import React from 'react';
import { Img, Input } from '../../atoms';
import {
  Container,
  ContentContainer,
  IconContainer,
  imgStyle,
  InputContainer,
  inputStyle,
  Title,
} from './styles';
import Icon from '../../../assets/images/SearchIcon.png';

function MainPage_Search_Left() {
  return (
    <Container>
      <ContentContainer>
        <Title>빠른 제품 검색</Title>
        <InputContainer>
          <Input
            placeholder="제품명이나 브랜드명을 입력하세요."
            Style={inputStyle}
          />
          <IconContainer>
            <Img src={Icon} Style={imgStyle} />
          </IconContainer>
        </InputContainer>
      </ContentContainer>
    </Container>
  );
}

export default React.memo(MainPage_Search_Left);
