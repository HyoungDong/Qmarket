import React from 'react';
import { MainPageMain_GridLayOut, MainPageMain_Header } from '../../molecules';
import { Container } from './styles';

function MainPageMain() {
  return (
    <Container>
      <MainPageMain_Header />
      <MainPageMain_GridLayOut />
    </Container>
  );
}

export default MainPageMain;
