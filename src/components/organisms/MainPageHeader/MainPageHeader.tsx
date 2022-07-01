import React, { useCallback } from 'react';
import {
  buttonStyle,
  Container,
  ImgStyle,
  LeftContainer,
  LeftContainer_Content,
  LeftContainer_Content2,
  RightContainer,
  RightContainer_Content,
} from './styles';
import Logo from '../../../assets/images/Logo.png';
import { Img, TextButton } from '../../atoms';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/rootReducer';
import { signOut } from '../../../store/Auth/action';
import { useNavigate } from 'react-router';

function MainPageHeader() {
  const isSignIn = useSelector(
    (state: RootState) => state.authReducer.isSignIn,
  );
  const dispatch = useDispatch();
  const history = useNavigate();
  const onClick = useCallback(() => {
    if (isSignIn) {
      dispatch(signOut());
    }
    history('/SignIn');
  }, [isSignIn]);
  return (
    <Container>
      <LeftContainer>
        <Img src={Logo} Style={ImgStyle} />
        <LeftContainer_Content>
          사장님의 <br />
          거래를 관리하는
        </LeftContainer_Content>
        <LeftContainer_Content2>최종관리자 페이지</LeftContainer_Content2>
      </LeftContainer>
      <RightContainer>
        <RightContainer_Content>
          <TextButton Style={buttonStyle} onClick={onClick}>
            {isSignIn ? '로그아웃' : '로그인'}
          </TextButton>
        </RightContainer_Content>
      </RightContainer>
    </Container>
  );
}

export default MainPageHeader;
