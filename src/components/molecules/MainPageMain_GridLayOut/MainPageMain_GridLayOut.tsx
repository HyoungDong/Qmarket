import React from 'react';
import { Container } from './styles';
import metorTruck from '../../../assets/images/metroTruck.png';
import cashRegister from '../../../assets/images/cashRegister.png';
import MainPageMain_GridItem from '../MainPageMain_GridItem';

const items = [
  {
    icon: cashRegister,
    title: '마트별 결제내역',
    info: '마트별 결제 내역을 열람 할 수 있습니다.',
  },
  {
    icon: metorTruck,
    title: '마트별 배송내용',
    info: '마트별 배송상황을 열람 할 수 있습니다.',
  },
  {
    icon: '',
    title: 'Q&A',
    info: '고객님들의 문의사항을 열람 할 수 있습니다.',
  },
  {
    icon: '',
    title: '마트별 정산',
    info: '마트별 정산 정보를 열람 할 수 있습니다.',
  },
  {
    icon: '',
    title: '환불',
    info: '고객님들의 환불사항을 열람 할 수 있습니다.',
  },
  {
    icon: '',
    title: '리뷰',
    info: '고객님들의 상품리뷰를 관리 할 수 있습니다.',
  },
];

function MainPageMain_GridLayOut() {
  return (
    <Container>
      {items.map((item, idx) => (
        <MainPageMain_GridItem
          key={idx}
          icon={item.icon}
          title={item.title}
          info={item.info}
        />
      ))}
    </Container>
  );
}

export default MainPageMain_GridLayOut;
