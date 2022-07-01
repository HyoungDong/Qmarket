import React from 'react';
import { Img } from '../../atoms';
import Logo from '../../../assets/images/Logo.png';
import { Container, ImgStyle } from './styles';

function SignInPageHeader() {
  return (
    <Container>
      <Img src={Logo} Style={ImgStyle} />
    </Container>
  );
}

export default React.memo(SignInPageHeader);
