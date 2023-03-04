import React, { useState } from "react";
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [notification, setNotification] = useState(null);

  const handleNameChange = (evt) => {
    setFormValues({ ...formValues, name: evt.target.value });
  };

  const handleEmailChange = (evt) => {
    setFormValues({ ...formValues, email: evt.target.value });
  };

  const handleMessageChange = (evt) => {
    setFormValues({ ...formValues, message: evt.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const { name, email, message } = formValues;
  
    if (!name || !email || !message) {
      setNotification("Please fill in all fields");
      return;
    }
  
    const serviceId = 'service_r2w1mrn';
    const templateId = 'template_xzwplgc';
    const userId = '3NrOG-LpSDt65wu1M';
  
    const url = `https://api.emailjs.com/api/v1.0/email/${serviceId}/${templateId}`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: userId,
        template_params: {
          name,
          email,
          message
        }
      })
    };
  
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setFormValues({
        name: "",
        email: "",
        message: "",
      });
      setNotification("Message sent successfully!");
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    } catch (error) {
      setNotification("Something went wrong. Please try again later.");
    }
  };
  

  const handleSubmit = (e) => {
    sendEmail(e);
  };

  const isValid = formValues.name !== "" && formValues.email !== "" && formValues.message !== "";
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
    if (formValues[field] === "") {
      setNotification(`Please fill in the ${field} field`);
    }
  };
  
    return (
      <div className="form-container">
        <form id="contact" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={formValues.name}
            onChange={handleNameChange}
            onBlur={() => handleBlur("name")}
            required
          />
          {touched.name && formValues.name === "" && <p>Please fill in the name field</p>}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formValues.email}
            onChange={handleEmailChange}
            onBlur={() => handleBlur("email")}
            required
          />
          {touched.email && formValues.email === "" && <p>Please fill in the email field</p>}
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={formValues.message}
            onChange={handleMessageChange}
            onBlur={() => handleBlur("message")}
            required
          />
          {touched.message && formValues.message === "" && <p>Please fill in the message field</p>}
          <button type="submit">Send</button>
          {touched.name && touched.email && touched.message && (isValid ? "✅" : "❌")}
          {notification && <p>{notification}</p>}
        </form>
      </div>
    );
  }
