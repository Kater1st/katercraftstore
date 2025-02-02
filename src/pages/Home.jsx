import React from 'react';
import Services from '../components/Services';
import Hero from '../assets/images/laptop-2.webp';

const Home = () => {
  return (
    <div>
      <section className="container text-center fade-in">
        <h1>Fixing gadgets quickly with guaranteed quality</h1>
        <p className="lead">
          Your trusted partner in expert device repair. Where quality meets precision, and your gadgets find a second life!
        </p>
        <img src={Hero} className="img-fluid mt-3" alt="Laptop Repair" />
      </section>
      <Services />
    </div>
  );
};

export default Home;