import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <div className="contact-form">
        <div>
          <label className="contact-name">Name</label>
          <input type="text" className="contact-field" required />
        </div>
        <div>
          <label className="contact-name">Email</label>
          <input type="text" className="contact-field" required />
        </div>
        <div>
          <label className="contact-name">Message</label>
          <textarea className="contact-field contact-message"></textarea>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
