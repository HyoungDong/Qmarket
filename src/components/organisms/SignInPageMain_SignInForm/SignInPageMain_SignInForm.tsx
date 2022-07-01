import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestSignIn } from '../../../store/SignIn/action';
import { NormalButton } from '../../atoms';
import { SignInPageMain_InputForm } from '../../molecules';
import {
  ButtonContainer,
  buttonStyle,
  buttonStyle2,
  Container,
  InputFormContainer,
  SignInFormContainer,
} from './styles';
import { RootState } from '../../../store/rootReducer';
import { useNavigate } from 'react-router';

const selectChanged = (f: string, type: string) => {
  if (f === type)
    return {
      ...buttonStyle,
      color: '#707070',
      background: '#fff',
    };
  else return { ...buttonStyle, color: '#fff', background: '#a8a8a8' };
};
function SignInPageMain_SignInForm() {
  const [selected, setSelected] = useState('admin');
  const isSignIn = useSelector(
    (state: RootState) => state.authReducer.isSignIn,
  );
  const history = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({ id: '', pw: '' });
  const onChange = useCallback(({ target: { name, value } }) => {
    setInput(prev => ({
      ...prev,
      [name]: value,
    }));
  }, []);
  const onReset = useCallback(() => {
    setInput({ id: '', pw: '' });
  }, []);
  const onClickManager = useCallback(() => {
    setSelected('admin');
    onReset();
  }, []);
  const onClickOwner = useCallback(() => {
    setSelected('partner');
    onReset();
  }, []);

  const onClickSubmit = useCallback(() => {
    dispatch(requestSignIn({ id: input.id, pw: input.pw, authType: selected }));
  }, [input.id, input.pw, selected]);

  const Style1 = useMemo(() => selectChanged(selected, 'admin'), [selected]);
  const Style2 = useMemo(() => selectChanged(selected, 'partner'), [selected]);
  useEffect(() => {
    console.log(isSignIn);
    if (isSignIn) history('/');
  }, [isSignIn]);
  return (
    <Container>
      <SignInFormContainer>
        <ButtonContainer>
          <NormalButton onClick={onClickManager} Style={Style1}>
            관리자 아이디 로그인
          </NormalButton>
          <NormalButton onClick={onClickOwner} Style={Style2}>
            마트 사장님 로그인
          </NormalButton>
        </ButtonContainer>
        <InputFormContainer>
          <SignInPageMain_InputForm input={input} onChange={onChange} />
        </InputFormContainer>
      </SignInFormContainer>
      <NormalButton Style={buttonStyle2} onClick={onClickSubmit}>
        로그인
      </NormalButton>
    </Container>
  );
}

export default SignInPageMain_SignInForm;
