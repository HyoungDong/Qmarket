import React, { ChangeEvent } from 'react';
import { Input } from '../../atoms';
import {
  Container,
  IDContainer,
  inputStyle,
  PlaceHolder,
  PWContainer,
} from './styles';

type SignInPageMain_InputFormProps = {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  input?: {
    id: string;
    pw: string;
  };
};

function SignInPageMain_InputForm({
  onChange,
  input,
}: SignInPageMain_InputFormProps) {
  return (
    <Container>
      <IDContainer>
        <Input
          Style={inputStyle}
          name="id"
          onChange={onChange}
          value={input?.id}
        />
        <PlaceHolder value={input?.id}>아이디 또는 이메일 주소</PlaceHolder>
      </IDContainer>
      <PWContainer>
        <Input
          Style={inputStyle}
          name="pw"
          type="password"
          onChange={onChange}
          value={input?.pw}
        />
        <PlaceHolder value={input?.pw}>비밀번호</PlaceHolder>
      </PWContainer>
    </Container>
  );
}

SignInPageMain_InputForm.defaultProps = {
  name: 'temp',
};

export default React.memo(SignInPageMain_InputForm);
