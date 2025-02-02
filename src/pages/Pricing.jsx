import React from 'react';
import FadeIn from '../components/FadeIn'; // Reusable fade-in component
import Price1 from "../assets/images/screen-replacement.webp";
import Price2 from  '../assets/images/battery-replacement.webp';
import Price3 from  '../assets/images/water-dameged.webp';
import Price4 from  '../assets/images/data-recovery.webp';
import Price5 from  '../assets/images/Charging-repaire.webp';
import Price6 from  '../assets/images/keyboard-replacement.webp';
import Price7 from  '../assets/images/Ram-upgrade.webp';
import Price8 from  '../assets/images/virus-removal.webp';



const Pricing = () => { 
  const services2 = [
    {
      image: Price1,
      title: "Screen Repair",
      description: "Replacing the display screen of an electronic device, such as a smartphone, tablet, laptop, or television.",
      price: "From $30.00",
      time: "Estimated 10 minutes",
    },
    {
      image: Price2,
      title: "Battery Replacement",
      description: "Over time, batteries can degrade, leading to decreased performance, reduced battery life, or even complete failure.",
      price: "From $10.00",
      time: "Estimated 5 minutes",
    },
    {
      image: Price3,
      title: "Water Damage Repair",
      description: "It can be particularly detrimental to electronic components, causing corrosion, short circuits, and other issues.",
      price: "From $30.00",
      time: "Estimated 1 - 3 days",
    },
    {
      image: Price4,
      title: "Data Recovery",
      description: "Retrieving or restoring inaccessible, lost, corrupted, or accidentally deleted data from storage.",
      price: "From $30.00",
      time: "Estimated 1 - 3 days",
    },
    {
      image: Price5,
      title: "Charging Port Repair",
      description: "Over time, charging ports can become damaged or wear out due to frequent use, which can lead to issues.",
      price: "From $8.00",
      time: "Estimated 10 minutes",
    },
    {
      image: Price6,
      title: "Keyboard Replacement",
      description: "Removing a damaged or malfunctioning keyboard from an electronic device and installing a new one.",
      price: "From $25.00",
      time: "Estimated 1 - 3 days",
    },
    {
      image: Price7,
      title: "RAM Upgrade",
      description: "Increasing the amount of memory modules, providing more space for the system to quickly access data.",
      price: "From $15.00",
      time: "10 minutes",
    },
    {
      image: Price8,
      title: "Virus/Malware Removal",
      description: "Viruses, malware, and other types of malicious software can compromise the security and functionality of a system.",
      price: "From $30.00",
      time: "Estimated 1 - 3 days",
    },
  ];

  const pricingPlans = [
    {
      title: "5 Kilometer Radius",
      price: "$0",
      description: ["Clients who are", "5km Radius from the shop", "will pay extra", "$15"],
    },
    {
      title: "20 Kilometer Radius",
      price: "$15",
      description: ["Clients who are", "20km Radius from the shop", "will pay extra", "$15"],
    },
    {
      title: "40 Kilometer Radius",
      price: "$20",
      description: ["Clients who are", "40km Radius from the shop", "will pay extra", "$35"],
    },
  ];

  return (
    <div>
      {/* Pricing Header */}
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <FadeIn>
          <h1 className="display-4">Pricing</h1>
          <p className="lead">
            Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.
          </p>
        </FadeIn>
      </div>

      {/* Services Section */}
      <div className="services">
        <div className="row g-4">
          {services2.map((service, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <FadeIn>
                <div className="bg-dark-2 text-light h-100 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <p className="d-inline bg-blur abs abs-center px-2 rounded-3 text-center bottom-10 z-1000 text-white mb-0 fs-14">
                      {service.time}
                    </p>
                    <img src={service.image} className="img-fluid hover-scale-1-1 img_tab" alt={service.title} />
                    <div className="de-overlay-gradient-dark op-5 h-50 top-50"></div>
                  </div>
                  <div className="p-30">
                    <h4 className="border-bottom-1-light pb-3">{service.title}</h4>
                    <p className="mb-0">{service.description}</p>
                    <br />
                    <p>{service.price}</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>

      <hr />

      {/* Pricing Cards Section */}
      <div className="container">
        <div className="price-card">
          {pricingPlans.map((plan, index) => (
            <div className="card mb-4 box-shadow" key={index}>
              <FadeIn>
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
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;