import React, { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tours from './components/tours/tours';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import RegistrationForm from './components/re/registrationForm';
import LoginForm from './components/re/loginForm';
import Booking from './components/re/booking';
import BookingDetails from './components/bookingDetails/bookingDetails';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userId = localStorage.getItem('userId');
  
    if (token && userId) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = (token,userId) => {
    setLoggedIn(true);
    localStorage.setItem('authToken', token);
    localStorage.setItem('userId', userId);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem('authToken');
  };

  return (
    <Router>
      <Header loggedIn={loggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/registrationForm" element={<RegistrationForm />} />
        <Route path="/booking" element={<Booking />} /> {/* Render Booking component */}
        <Route path="/loginForm" element={<LoginForm onLogin={handleLogin} />} />
        <Route path="/bookingDetails" element={<BookingDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;