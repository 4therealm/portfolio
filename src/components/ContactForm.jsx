import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef();
  const [notification, setNotification] = useState(null);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const isValid = formValues.name && formValues.email && formValues.message;
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

    if (!isValid) {
      setNotification("Please fill in all fields");
      return;
    }

    emailjs.sendForm('service_r2w1mrn', 'template_6s3orqh', form.current, '3NrOG-LpSDt65wu1M')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  const handleSubmit = (e) => {
    sendEmail(e);
  };

  return (
    <div className="form-container">
      <form ref={form} id="contact" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          value={formValues.name}
          onChange={handleNameChange}
          onBlur={() => handleBlur("name")}
          required
        />
        {touched.name && !formValues.name && <p>Please fill in the name field</p>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={formValues.email}
          onChange={handleEmailChange}
          onBlur={() => handleBlur("email")}
          required
        />
        {touched.email && !formValues.email && <p>Please fill in the email field</p>}

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={formValues.message}
          onChange={handleMessageChange}
          onBlur={() => handleBlur("message")}
          required
        />
        {touched.message && !formValues.message && <p>Please fill in the message field</p>}

        <button type="submit">Send</button>
        {touched.name && touched.email && touched.message && (isValid ? "✅" : "❌")}
        {notification && <p>{notification}</p>}
      </form>
    </div>
  );
}
