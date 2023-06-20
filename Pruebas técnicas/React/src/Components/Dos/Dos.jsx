import React, { useState } from "react";
import "./Dos.css";
import leftArrow from "../../assets/arrow-left.svg";
import { useNavigate } from "react-router-dom";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Please enter your name";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Please enter your email";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.message.trim() === "") {
      newErrors.message = "Please enter your message";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log(formData);
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setErrors({});
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="contactForm">
      <div className="headerContainer">
        <button className="buttonBack" onClick={goBack}>
          <img src={leftArrow} alt="Arrow Left" />
        </button>
        <h2 className="titleHeader">Contact Form</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label className="labelForm" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="inputForm"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email" className="labelForm">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="inputForm"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message" className="labelForm">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="inputForm"
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <button className="buttonForm" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
