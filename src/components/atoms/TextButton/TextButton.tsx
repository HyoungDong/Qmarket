import React from 'react';
import Button from './styles';

type TextButtonProps = {
  Style?: {
    display?: string;
    position?: string;
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
    fontSize?: string;
    fontWeight?: string;
    margin?: string;
    padding?: string;
    textDecoration?: string;
    outline?: string;
    color?: string;
    background?: string;
    cursor?: string;
    border?: string;
    transition?: string;
    Hover?: {
      fontSize?: string;
      transition?: string;
    };
  };
  onClick?: (e: React.MouseEvent<Element>) => void;
  children: string;
};

function TextButton({ Style, onClick, children }: TextButtonProps) {
  return (
    <Button Style={Style} onClick={onClick}>
      {children}
    </Button>
  );
}

TextButton.defaultProps = {
  name: 'temp',
};

export default React.memo(TextButton);
