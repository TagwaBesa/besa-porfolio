// Form.js

import React, { useState } from "react";
import classes from "../../styles/form.module.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email sent successfully");
        // Optionally, reset the form after successful submission
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Unable to send email");
      }
    } catch (error) {
      console.error("Unable to send email", error);
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.form__group}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={classes.form__group}>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className={classes.form__group}>
        <textarea
          name="message"
          rows={5}
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <button className="primary__btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default Form;
