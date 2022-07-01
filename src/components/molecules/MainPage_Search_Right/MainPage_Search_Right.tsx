import React from 'react';
import { Input } from '../../atoms';
import {
  Container,
  ContentContainer,
  InputContainer,
  inputStyle,
  Title,
} from './styles';

function MainPage_Search_Right() {
  return (
    <Container>
      <ContentContainer>
        <Title>카테고리 검색</Title>
        <InputContainer>
          <Input
            placeholder="관심 분야 제품 정보를 쉽게 찾아보세요."
            Style={inputStyle}
          />
        </InputContainer>
      </ContentContainer>
    </Container>
  );
}

export default MainPage_Search_Right;
