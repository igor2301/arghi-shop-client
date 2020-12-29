import AGIcon from '@shared/AGIcon';
import React from 'react';
import AGButton from '@shared/AGButton';
import { AGButtonType } from '@shared/AGButton/AGButton';
import { AGIconType } from '@shared/AGIcon/AGIcon';

export class LendingPage extends React.Component {
  componentDidMount() {
    fetch('http://localhost:52027/api/home', { method: 'GET' })
      .then((res) => res.json())
      .then((res) => console.log(res));
  }

  render() {
    return (
      <>
        <h1>Headline1</h1>
        <h2>Headline2</h2>
        <h3>Headline3</h3>
        <div className="base-text">paragraph1</div>
        <div className="small-text">paragraph2</div>
        <AGIcon icon={AGIconType.Envelop}></AGIcon>
        <AGIcon icon={AGIconType.Heart}></AGIcon>
        <AGIcon icon={AGIconType.Home}></AGIcon>
        <AGIcon icon={AGIconType.Plus}></AGIcon>
        <AGIcon icon={AGIconType.Search}></AGIcon>
        <AGIcon icon={AGIconType.Star}></AGIcon>
        <AGIcon icon={AGIconType.User}></AGIcon>
        <AGButton label={'button'} type={AGButtonType.Primary}></AGButton>
        <AGButton label={'button'} type={AGButtonType.Secondary}></AGButton>
      </>
    );
  }
}
