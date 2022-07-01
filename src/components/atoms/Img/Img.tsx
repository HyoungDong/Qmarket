import React from 'react';
import Image from './styles';

type ImgProps = {
  Style?: {
    width?: string;
    height?: string;
    objectFit?: string;
    borderRadius?: string;
    textIndent?: string;
    border?: string;
    minHeight?: string;
    maxWidth?: string;
    verticalAlign?: string;
    margin?: string;
    filter?: string;
  };
  src: string;
  alt?: string;
};

function Img({ Style, src, alt }: ImgProps) {
  return <Image Style={Style} src={src} alt={alt} />;
}

Img.defaultProps = {
  Style: {},
  src: '',
  alt: '',
};

export default Img;
