import React from 'react';
import { Img } from '../../atoms';
import { Container, Content, ContentContainer, imgStyle } from './styles';
import Logo from '../../../assets/images/Logo.png';

function SignInPageFooter() {
  return (
    <Container>
      <ContentContainer>
        <Content>
          <Img src={Logo} Style={imgStyle} />
          Copyright © <span style={{ fontWeight: 'bold' }}>
            ASWEMAKE Corp.
          </span>{' '}
          All rights reserved.
        </Content>
      </ContentContainer>
    </Container>
  );
}

export default SignInPageFooter;
