import React from 'react';

import EnvelopIcon from '@images/icon-envelop.svg';
import HeartIcon from '@images/icon-heart.svg';
import HomeIcon from '@images/icon-home.svg';
import PlusIcon from '@images/icon-plus.svg';
import SearchIcon from '@images/icon-search.svg';
import UserIcon from '@images/icon-user.svg';
import StarIcon from '@images/icon-star.svg';

export enum AGIconType {
  Envelop = 'envelop',
  Heart = 'heart',
  Home = 'home',
  Plus = 'plus',
  Search = 'search',
  Star = 'star',
  User = 'user'
}

const iconMap = {
  [AGIconType.Envelop]: EnvelopIcon,
  [AGIconType.Heart]: HeartIcon,
  [AGIconType.Home]: HomeIcon,
  [AGIconType.Plus]: PlusIcon,
  [AGIconType.Search]: SearchIcon,
  [AGIconType.Star]: StarIcon,
  [AGIconType.User]: UserIcon
};

export interface AGIconProps {
  icon?: AGIconType;
  custom?: any;
}

function getIconFromProps(props: AGIconProps) {
  const { icon, custom } = props;

  if (icon) {
    return iconMap[icon];
  }

  return custom;
}

export const AGIcon: React.FC<AGIconProps> = (props) => {
  const Svg = getIconFromProps(props);

  return <Svg />;
};
