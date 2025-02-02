import React from 'react';

const Pricing = () => {
  const pricingPlans = [
    {
      title: "5 Kilometer Radius",
      price: "$0",
      description: ["Clients who are", "5km Radius from the shop", "will pay extra", "$15"],
    },
    // Add more pricing plans here
  ];

  return (
    <div className="container">
      <div className="price-card">
        {pricingPlans.map((plan, index) => (
          <div className="card mb-4 box-shadow" key={index}>
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">{plan.title}</h4>
            </div>
            <div className="card-body my_card">
              <h1 className="card-title pricing-card-title">
                {plan.price} <small className="text-muted">/ mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                {plan.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-primary">
                Contact Us
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;