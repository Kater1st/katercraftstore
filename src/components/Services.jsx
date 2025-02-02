import React from 'react';
import Icon1 from '../assets/images/iphone-svgrepo-com.svg';
import Icon2 from '../assets/images/tablet-svgrepo-com.svg';
import Icon3 from '../assets/images/macbook-pro-svgrepo-com.svg';
import Icon4 from '../assets/images/software-svgrepo-com.svg';
const Services = () => {
  const services = [
    {
      icon: Icon1,
      title: "Phone Repair",
      description: "We repair all major phone brands including Apple, Samsung, and Google.",
    },
    {
      icon: Icon2,
      title: "Tablet Repair",
      description: "Get your tablets fixed with fast turnaround times.",
    },
    {
      icon: Icon3,
      title: "Laptop",
      description: "Expert solutions for hardware and software issues.",
    },
    {
      icon: Icon4,
      title: "Software",
      description: "Operating system repairs, virus removal, and software installation.",
    },
    
    
  ];

  return (
    <section className="container mt-5">
      <h2 className="text-center">Our Services</h2>
      <div className="row text-center">
        {services.map((service, index) => (
          <div className="col-lg-3 " key={index}>
            <img src={service.icon} className="item-icon" alt={service.title} />
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;