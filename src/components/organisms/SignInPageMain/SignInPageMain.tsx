import React from 'react';
import { SignInPageMain_Header } from '../../molecules';
import SignInPageMain_SignInForm from '../SignInPageMain_SignInForm';
import { Container } from './styles';

function SignInPageMain() {
  return (
    <Container>
      <SignInPageMain_Header />
      <SignInPageMain_SignInForm />
    </Container>
  );
}

export default React.memo(SignInPageMain);
