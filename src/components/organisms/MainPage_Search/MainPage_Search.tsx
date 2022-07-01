import React from 'react';
import { MainPage_Search_Left, MainPage_Search_Right } from '../../molecules';
import { Container } from './styles';

function MainPage_Search() {
  return (
    <Container>
      <MainPage_Search_Left />
      <MainPage_Search_Right />
    </Container>
  );
}

export default MainPage_Search;
