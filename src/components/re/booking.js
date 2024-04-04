import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import './bookingStyling.css';

const Booking = () => {
    const location = useLocation();
    const tourData = location.state?.tourData;
    const serviceCharges = tourData ? (tourData.price * 2) / 100 : 0;
    const totalValue = tourData ? parseFloat(tourData.price) + parseFloat(serviceCharges) : 0;
    const userId = localStorage.getItem("userId");
    
    const [formData, setFormData] = useState({
        userId: userId, // Set user ID if available
        name: "",
        number: "",
        fromDate: "",
        toDate: "",
        total: totalValue
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:4000/api/booking", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Booking failed");
            }

            // Handle success
            console.log("Booking successful");
            window.location.href = "/tours";
        } catch (error) {
            console.error("Error booking:", error.message);
        }
    };


    return (
        <div className="containerOne">
   <div className="left-section">
    <div className="image-container">
        <img src={tourData.photo} alt={tourData.title} />
    </div>
    <div className="details-container">
        <div className="details-container-in">
            <h2>{tourData && tourData.city}</h2>
            <p>Distance: 100km</p>
            <p>People Travelled: 1000</p>
        </div>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
</div>
    <div className="right-section">
        <div className="prize-form-container">
            <h3>Prize</h3>
            <p>Price: ${tourData && tourData.price} /Per person</p>
            <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="number">Number:</label>
                        <input
                            type="text"
                            id="number"
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fromDate">From Date:</label>
                        <input
                            type="date"
                            id="fromDate"
                            name="fromDate"
                            value={formData.fromDate}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="toDate">To Date:</label>
                        <input
                            type="date"
                            id="toDate"
                            name="toDate"
                            value={formData.toDate}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <div>
                            <label>Service charges: ${serviceCharges}</label>
                        </div>
                        <div>
                            <label htmlFor="total">Total: ${totalValue} </label>
                            
                        </div>
                    </div>
                    <button type="submit">Book Now</button>
            </form>
        </div>
    </div>
    <div className="review-container">
            <h3>Reviews</h3>
            <input type="text" placeholder="Write a review..." />
            <button type="submit">Submit</button>
        </div>
</div>
    );
};

export default Booking;