// Contact.jsx

import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // State to manage form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally handle form submission, e.g., sending the data to a server
    console.log("Form submitted:", formData);
    setIsSubmitted(true); // Set submitted state to true
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    // Clear the success message after a longer delay
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000); // 5 seconds delay
  };

  return (
    <section>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && (
        <p className="success-message">
          Thank you for your message! I will get back to you soon.
        </p>
      )}
    </section>
  );
}

export default Contact;
