import React from 'react';
import IconCappuccino from '../assets/icons/cappuccino.svg';
import IconColdBrew from '../assets/icons/cold-brew.svg';
import IconExpresso from '../assets/icons/expresso.svg';

export const categories = [
  {
    id: 1,
    name: 'Cappuccino',
    icon: (props: any) => <IconCappuccino {...props} />,
  },
  {
    id: 2,
    name: 'Cold Brew',
    icon: (props: any) => <IconColdBrew {...props} />,
  },
  {
    id: 3,
    name: 'Expresso',
    icon: (props: any) => <IconExpresso {...props} />,
  },
];
