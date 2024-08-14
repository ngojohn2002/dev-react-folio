// Challenge: Create a contact form that allows users to input their name, email, and a message. When the form is submitted, the data should be stored in the component's state. 

// Import the useState hook from React so that we can use state in our component. 
import React, { useState } from "react";

// Define the Contact component that will be rendered in the App component. 
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Define the handleChange function that will update the form data when the user types in the input fields. 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Define the handleSubmit function that will handle the form submission. 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

// Export the Contact component so that it can be imported and used in the App component. 
export default Contact;
