import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faMinus } from '@fortawesome/free-solid-svg-icons';

const PricingCard = ({ plan, price, features,otherFeatures, highlight }) => {
  return (
    <div className={`p-6 border rounded-lg shadow-lg ${highlight ? 'bg-blue-100 border-blue-950' : 'bg-white'}`}>
      <h3 className="text-lg font-bold">{plan}</h3>
      <p className="text-sm text-gray-600 mt-2">Save {price.discount}</p>
      <p className="text-3xl font-extrabold text-blue-600 mt-4">${price.current}/Month</p>
      <p className="text-sm text-gray-500">Renews at ${price.renewal}/Month</p>
      <button className="w-full py-2 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Choose Plan
      </button>
      <ul className="mt-6 space-y-2 text-gray-700">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
         <span className="material-icons text-gray-700 mr-2"><FontAwesomeIcon icon={faCheck} className='h-5 w-5'/></span>
            {feature}
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
