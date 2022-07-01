import React from 'react';
import {
  MainPageFooter,
  MainPageHeader,
  MainPageMain,
  MainPage_Search,
} from '../../components/organisms';
import { Container } from './styles';

function MainPage() {
  return (
    <Container>
      <MainPageHeader />
      <MainPage_Search />
      <MainPageMain />
      <MainPageFooter />
    </Container>
  );
}

export default MainPage;
