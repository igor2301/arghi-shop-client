import React from 'react';
import bemClass from '@utils/bemClass';

const b = bemClass('ag-button');

export class Button extends React.Component {
  render() {
    return <button className={b()}>Click me!</button>;
  }
}
