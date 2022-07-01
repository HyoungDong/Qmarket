import React from 'react';
import { TextButton } from '../../atoms';
import {
  Container,
  First_Content,
  Second_Content,
  textButtonStyle,
} from './styles';

function SignInPageMain_Header() {
  return (
    <Container>
      <First_Content>관리자 / 마트 사장님 로그인</First_Content>
      <Second_Content>
        관리자 / 마트 사장님 아이디로
        <TextButton Style={textButtonStyle}>로그인</TextButton>해 주세요.
        <br /> 아이디, 비밀번호를 잊으신 분은
        <TextButton Style={textButtonStyle}>0507-1314-9657</TextButton>에
        연락해주세요.
      </Second_Content>
    </Container>
  );
}

export default React.memo(SignInPageMain_Header);
