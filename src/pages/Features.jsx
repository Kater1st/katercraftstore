import React from 'react';
import Services from '../components/Services';
import FadeIn from '../components/FadeIn'; // Reusable fade-in component

const Features = () => {
    <Services />
  const services = [
    {
      icon: "/assets/images/iphone-svgrepo-com.svg",
      title: "Phone Repair",
      description: "We repair all major phone brands including Apple, Samsung, and Google.",
    },
    {
      icon: "/assets/images/tablet-svgrepo-com.svg",
      title: "Tablet Repair",
      description: "Get your tablets fixed with fast turnaround times.",
    },
    {
      icon: "/assets/images/macbook-pro-svgrepo-com.svg",
      title: "Laptop Repair",
      description: "Expert solutions for hardware and software issues.",
    },
    {
      icon: "/assets/images/software-svgrepo-com.svg",
      title: "Software Repair",
      description: "Operating system repairs, virus removal, and software installation.",
    },
  ];

  const testimonials = [
    {
      quote: "Fantastic service! My phone was repaired in no time.",
      author: "Sarah T.",
    },
    {
      quote: "GadgetFix saved my laptop. Highly recommend!",
      author: "James R.",
    },
    {
      quote: "Affordable, quick, and professional. Best in town!",
      author: "Emily W.",
    },
  ];

  const faqs = [
    {
      question: "How long does a repair take?",
      answer: "Most repairs are completed within 24-48 hours.",
    },
    {
      question: "Do you use original parts?",
      answer: "Yes, we use high-quality original or OEM parts.",
    },
    {
      question: "Is there a warranty on repairs?",
      answer: "Yes, we offer a 6-month warranty on all repairs.",
    },
  ];

  return (
    <div>
      {/* Features Section */}
      <section className="container text-center fade-in">
        <FadeIn>
          <h1>Why Choose GadgetFix?</h1>
          <p className="lead">Discover why we are the preferred choice for gadget repairs.</p>
        </FadeIn>
        <Services />
      </section>

      
      
      {/* Testimonials Section */}
      <section className="container mt-5 fade-in">
        <FadeIn>
          <h2 className="text-center">What Our Customers Say</h2>
        </FadeIn>
        <div className="row text-center">
          {testimonials.map((testimonial, index) => (
            <div className="col-lg-4" key={index}>
              <FadeIn>
                <p>"{testimonial.quote}" - {testimonial.author}</p>
              </FadeIn>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mt-5 fade-in">
        <FadeIn>
          <h2 className="text-center">Frequently Asked Questions</h2>
        </FadeIn>
        <ul>
          {faqs.map((faq, index) => (
            <li key={index}>
              <FadeIn>
                <strong>{faq.question}</strong> {faq.answer}
              </FadeIn>
            </li>
          ))}
        </ul>
      </section>
      
        
    </div>
  );
};

export default Features;