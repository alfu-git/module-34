import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const Features = ({feature}) => {
  return (
    <span className='flex gap-2 items-center'>
      <span className='text-green-600'><CircleCheckBig></CircleCheckBig></span>
      <p className='text-lg font-semibold'>{feature}</p>
    </span>
  );
};

export default Features;