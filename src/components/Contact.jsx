import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // New state for success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    // Send email using EmailJS
    emailjs
      .sendForm(
        'service_7llhvrw', // Your EmailJS service ID
        'template_w5nvbza', // Your EmailJS template ID
        e.target, // Form element
        'MDCDvxDP9mneIqThN' // Your EmailJS user ID
      )
      .then(
        (result) => {
          setIsSubmitted(true); // Show success message
          console.log(result.text);
          setTimeout(() => setIsSubmitted(false), 3000); // Hide after 3 seconds
        },
        (error) => {
          alert('There was an error sending your message. Please try again later.');
          console.log(error.text);
        }
      );

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="Contact" className="contact--section">
      {isSubmitted && (
        <div className="success-message">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>Message Sent Successfully!</span>
        </div>
      )}
      <div>
        <p className="sub--title"></p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Email: hyoitchi@gmail.com
        </p>
      </div>
      <form className="contact--form--container" onSubmit={handleSubmit}>
        <label htmlFor="name" className="contact--label">
          <span className="text-md">Name</span>
          <input
            type="text"
            className="contact--input text-md"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="email" className="contact--label">
          <span className="text-md">Email</span>
          <input
            type="email"
            className="contact--input text-md"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            placeholder="Type your message..."
            required
          />
        </label>
        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}