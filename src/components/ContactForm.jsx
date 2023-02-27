import React, { useState } from "react";



function ContactForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [notification, setNotification] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formValues;

    if (!name || !email || !message) {
      setNotification("Please fill in all fields");
      return;
    }

    // Send email using formValues

    // Clear form and show success message
    setFormValues({
      name: "",
      email: "",
      message: "",
    });
    setNotification("Message sent successfully!");
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <div className="form-container">
      <form id="contact" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          value={formValues.name}
          onChange={(e) =>
            setFormValues({ ...formValues, name: e.target.value })
          }
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={formValues.email}
          onChange={(e) =>
            setFormValues({ ...formValues, email: e.target.value })
          }
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={formValues.message}
          onChange={(e) =>
            setFormValues({ ...formValues, message: e.target.value })
          }
          required
        />
        <button type="submit">Send</button>
        {notification && <p>{notification}</p>}
      </form>
    </div>
  );
}




export default ContactForm;
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
 
// const EmailContactForm = () => {
//  const form = useRef();
 
//  const sendEmail = (e) => {
//    e.preventDefault(); // prevents the page from reloading when you hit “Send”
 
//    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//      .then((result) => {
//          // show the user a success message
//      }, (error) => {
//          // show the user an error
//      });
//  };
 
//  return (
//    <form ref={form} onSubmit={sendEmail}>
//      <label>Name</label>
//      <input type="text" name="user_name" />
//      <label>Email</label>
//      <input type="email" name="user_email" />
//      <label>Message</label>
//      <textarea name="message" />
//      <input type="submit" value="Send" />
//    </form>
//  );
// };
 
// export default EmailContactForm;