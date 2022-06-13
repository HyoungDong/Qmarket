import React from 'react';

type utilProps = {
  name: string;
};

function util({ name }: utilProps) {
  return <div>{name}</div>;
}

util.defaultProps = {};

export default util;
