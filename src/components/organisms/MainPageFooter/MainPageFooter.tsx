import React from 'react';
import { Img } from '../../atoms';
import { MainPageFooter_NavLink } from '../../molecules';
import Logo from '../../../assets/images/Logo.png';
import {
  Container,
  Content,
  ContentContainer,
  imgStyle,
  InfoContainer,
} from './styles';

function MainPageFooter() {
  return (
    <Container>
      <MainPageFooter_NavLink />
      <InfoContainer>
        ASWEMAKE ㈜는 통신판매중개자이며, 통신판매의 당사자가 아닙니다. 상품,
        상품정보, 거래에 관한 의무와 책임은 판매자에게 있습니다. 또한 판매자와
        구매자간의 직거래에 대하여 당사는 관여하지 않기 때문에 거래에 대해서는
        책임을 지지 않습니다.
      </InfoContainer>
      <InfoContainer>
        사업자등록번호 : 220-81-62517 통신판매업신고번호 :
        제2006-경기성남-0692호 대표이사 : 손수영
      </InfoContainer>
      <InfoContainer style={{ marginTop: '13.1px' }}>
        주소 : 경기도 성남시 분당구 불정로 6 네이버 그린팩토리 13561
      </InfoContainer>
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

export default MainPageFooter;
