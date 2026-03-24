import React from 'react';
import Features from './Features';


const PricingCard = ({pricing}) => {
  const {name, price, duration, features} = pricing;
  return (
    <div className='p-5 bg-base-300 shadow-md border border-primary rounded-lg flex flex-col'>
      <h3 className='text-primary text-3xl font-bold'>{name}</h3>

      <div className='mt-2 mb-5 flex flex-col text-xl font-bold'>
        <span>Price: {price}$</span>
        <span>Duration: {duration}</span>
      </div>
      
      <div className='space-y-2 flex-1'>
        {
          features.map((feature, index) => <Features key={index} feature={feature}></Features>)
        }
      </div>

      <button className='mt-4 btn btn-primary w-full'>
        Subscribe
      </button>
    </div>
  );
};

export default PricingCard;