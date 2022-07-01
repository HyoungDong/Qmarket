import React from 'react';
import { SignInPageFooter } from '../../components/organisms';
import SignInPageHeader from '../../components/organisms/SignInPageHeader';
import SignInPageMain from '../../components/organisms/SignInPageMain';
import { Container } from './style';

function SignInPage() {
  return (
    <Container>
      <SignInPageHeader />
      <SignInPageMain />
      <SignInPageFooter />
    </Container>
  );
}

export default SignInPage;
