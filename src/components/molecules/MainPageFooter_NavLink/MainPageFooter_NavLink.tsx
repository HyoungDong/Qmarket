import React from 'react';
import { Container, Link, LinkContainer } from './styles';

const links = [
  {
    title: '이용약관',
    to: '/',
  },
  {
    title: '전자금융거래',
    to: '/',
  },
  {
    title: '이용약관',
    to: '/',
  },
  {
    title: '개인정보처리방침',
    to: '/',
  },
  {
    title: '청소년보호정책',
    to: '/',
  },
  {
    title: '책임의 한계와 법적고지',
    to: '/',
  },
  {
    title: '안전거래가이드',
    to: '/',
  },
  {
    title: '고객센터',
    to: '/',
  },
  {
    title: '이용약관',
    to: '/',
  },
];

function MainPageFooter_NavLink() {
  return (
    <Container>
      <LinkContainer>
        {links.map((link, idx) => (
          <Link key={idx}>{link.title}</Link>
        ))}
      </LinkContainer>
    </Container>
  );
}

export default MainPageFooter_NavLink;
