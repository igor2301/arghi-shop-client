import Icon from '@shared/Icon';
import React from 'react';
import CoinIcon from '@images/icon-coin.svg';
import Button from '@shared/Button';

export class LendingPage extends React.Component {
  componentDidMount() {
    fetch('http://localhost:52027/api/home', { method: 'GET' })
      .then((res) => res.json())
      .then((res) => console.log(res));
  }

  render() {
    return (
      <>
        <div>Hello!</div>
        <Icon data={CoinIcon}></Icon>
        <Button></Button>
      </>
    );
  }
}
