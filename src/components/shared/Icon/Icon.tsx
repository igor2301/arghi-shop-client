import React from 'react';

interface Props {
  data: any;
}

export const Icon: React.FC<Props> = (props) => {
  const { data } = props;
  const Svg = data;

  return (
    <svg width="24" height="24">
      <Svg />
    </svg>
  );
};
