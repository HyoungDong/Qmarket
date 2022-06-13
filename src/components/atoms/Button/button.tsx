import React from 'react';

type buttonProps = {
  name: string;
};

function button({ name }: buttonProps) {
  return <div>{name}</div>;
}

button.defaultProps = {};

export default button;
