import React from 'react';
import Button from './styles';

type NormalButtonProps = {
  Style?: {
    width?: string;
    height?: string;
    background?: string;
    color?: string;
    fontSize?: string;
    margin?: string;
  };
  onClick?: (e: React.MouseEvent<Element>) => void;
  children?: string;
};

function NormalButton({ Style, onClick, children }: NormalButtonProps) {
  return (
    <Button Style={Style} onClick={onClick}>
      {children}
    </Button>
  );
}

NormalButton.defaultProps = {
  name: 'temp',
};

export default React.memo(NormalButton);
