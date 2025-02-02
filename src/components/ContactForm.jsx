import React from 'react';

const ContactForm = () => {
  return (
    <form className="container mt-5">
      <h1 className="text-center">Contact Us</h1>
      <div className="row justify-content-center">
        <div className="col-md-6 contact-form">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;