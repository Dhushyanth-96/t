import React, { useState } from "react";
import './registrationFornStyling.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });

  const getUserDetails = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch user details");
      }
  
      const userDetails = await response.json();
      // Handle user details, such as setting them in state
      console.log("User details:", userDetails);
      return userDetails;
    } catch (error) {
      // Handle errors
      console.error("Error fetching user details:", error.message);
      return null;
    }
  };

  const [message, setMessage] = useState("");

  const submitForm = async () => {
    try {
      // Check if name or password is already taken
      const userDetails = await getUserDetails();
      if (userDetails) {
        const { name } = formData;
        const nameExists = userDetails.some(user => user.name === name);
        if (nameExists) {
          setMessage("Name is already taken");
          return;
        }
      }
  
      // Proceed with registration if name is available
      const response = await fetch("http://localhost:4000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error("Failed to register");
      }
  
      setFormData({
        name: "",
        email: "",
        number: "",
        password: "",
        confirmPassword: "",
      });
      // Redirect to login page
      window.location.href = "/loginForm";
  
      console.log("Registration successful");
    } catch (error) {
      console.error("Error registering:", error.message);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitForm();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="registration-form-container">
  <form className="registration-form" onSubmit={handleSubmit}>
    <h2 className="register-heading">Register</h2>
    <div className="form-group">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="round-input"
      />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="round-input"
      />
    </div>
    <div className="form-group">
      <label htmlFor="number">Number:</label>
      <input
        type="number"
        id="number"
        name="number"
        value={formData.number}
        onChange={handleChange}
        className="round-input"
      />
    </div>
    <div className="form-group">
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        className="round-input"
      />
    </div>
    <div className="form-group">
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        className="round-input"
      />
    </div>
    <button type="submit" className="register-button">Register</button>
  </form>
  {message && <div className="message">{message}</div>}
</div>
  );
};

export default RegistrationForm;