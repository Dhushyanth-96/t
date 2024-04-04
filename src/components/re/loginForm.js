import React, { useState } from "react";
import "./loginFormStyling.css";


const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log('data',data);
      onLogin(data.token, data.userId); // Pass userId along with the token
      setMessage("Login successful");
      window.location.href = "/tours";
    } catch (error) {
      console.error("Error logging in:", error.message);
      setMessage("Invalid username or password");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="login-form-container">
  <form className="login-form" onSubmit={submitForm}>
    <h2 className="login-heading">Login</h2>
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
    <button type="submit" className="login-button">Login</button>
    {message && <p>{message}</p>}
    <div className="register-link">
      <h3>Click here to <a href="/registrationForm">register</a></h3>
    </div>
  </form>
</div>
  );
};

export default LoginForm;