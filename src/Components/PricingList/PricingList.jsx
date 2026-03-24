import React, { use } from 'react';
import PricingCard from './PricingCard/PricingCard';

const PricingList = ({pricingDataPromise}) => {
  const pricingData = use(pricingDataPromise);

  return (
    <div>
      <h2 className='mb-10 text-5xl font-semibold text-center'>Our Package</h2>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
        {
          pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
        }
      </div>
    </div>
  );
};

export default PricingList;