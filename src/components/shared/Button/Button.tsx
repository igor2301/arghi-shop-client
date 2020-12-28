import React from 'react';
import bemClass from '@utils/bemClass';

const b = bemClass('ag-button');

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary'
}

export interface ButtonProps {
  label: string;
  type: ButtonType;
}

export class Button extends React.Component<ButtonProps> {
  render() {
    return <button className={b({[this.props.type]: true})}>{this.props.label}</button>;
  }
}
