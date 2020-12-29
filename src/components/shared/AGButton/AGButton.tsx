import React from 'react';
import bemClass from '@utils/bemClass';

const b = bemClass('ag-button');

export enum AGButtonType {
  Primary = 'primary',
  Secondary = 'secondary'
}

export interface AGButtonProps {
  label: string;
  type: AGButtonType;
}

export class AGButton extends React.Component<AGButtonProps> {
  render() {
    return (
      <button className={b({ [this.props.type]: true })}>
        <h3>{this.props.label}</h3>
      </button>
    );
  }
}
