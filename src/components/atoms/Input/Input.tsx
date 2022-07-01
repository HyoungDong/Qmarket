import React from 'react';
import InputArea from './styles';

type InputProps = {
  Style?: {
    display?: string;
    padding?: string;
    margin?: string;
    fontSize?: string;
    background?: string;
    borderRadius?: string;
    border?: string;
    width?: string;
    flex?: string;
    focused?: {
      transform?: string;
      fontSize?: string;
      transition?: string;
    };
    placeholder?: {
      fontStyle?: string;
      opacity?: string;
      color?: string;
      fontWeight?: string;
    };
  };
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
  placeholder?: string;
};

function Input({
  Style,
  value,
  onChange,
  type,
  name,
  placeholder,
}: InputProps) {
  return (
    <InputArea
      Style={Style}
      value={value}
      onChange={onChange}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
}

Input.defaultProps = {
  Style: {},
  value: '',
  onChange: '',
  type: '',
  name: '',
  placeholder: '',
};

export default React.memo(Input);
