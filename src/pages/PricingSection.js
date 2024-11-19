import React from 'react';
import PricingCard from './PricingCard';

const plans = [
  {
    plan: "BASIC",
    price: { current: 2.95, renewal: 11.99, discount: "75%" },
    features: ["10 Websites", "10 GB NVMe Storage", "100 Concurrent Visitors", "24/7 Chat Support",],
    highlight: false,
  },
  {
    plan: "CHOICE PLUS",
    price: { current: 3.95, renewal: 21.99, discount: "82%" },
    features: ["50 Websites", "100 GB NVMe Storage", "500 Concurrent Visitors", "24/7 Chat Support", "Priority Support", 
      "Dedicated IP Address", "Enhanceed DDos Protecton", "Malware Scanner"],
    highlight: true,
  },
  {
    plan: "ONLINE STORE",
    price: { current: 6.25, renewal: 26.99, discount: "77%" },
    features: ["50 Websites", "50 GB NVMe Storage", "500 Concurrent Visitors", "24/7 Chat Support", "24/7 Phone Support", "Free SSL, Lets's Encrypt", "DDOs Protecton", "Free CDN"],
    highlight: false,
  },
  {
    plan: "PRO",
    price: { current: 13.95, renewal: 28.99, discount: "52%" },
    features: ["100 Websites", "100 GB NVMe Storage", "1000 Concurrent Visitors", "24/7 Chat Support","24/7 Phone Support",  "24/7 Phone Support", "Free SSL, Lets's Encrypt", "DDOs Protecton", "Free CDN"],
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-12 px-6 bg-gray-100">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800">Building and hosting your website just got easier.</h1>
        <p className="mt-4 text-gray-600">With our hosting plans, you get all the tools and guidance you need to build and launch a truly impressive website.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            plan={plan.plan}
            price={plan.price}
            features={plan.features}
            otherFeatures={plan.otherFeatures}
            highlight={plan.highlight}
          />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
