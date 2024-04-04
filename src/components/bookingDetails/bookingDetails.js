import React, { useState, useEffect } from 'react';
import './bookingDetailsStyling.css';

const BookingDetails = () => {
    const [bookingDetails, setBookingDetails] = useState(null);
    const userId = localStorage.getItem('userId'); // Assuming you stored the userId in localStorage

    const fetchBookingDetails = async () => {
        try {
            const response = await fetch(`http://localhost:4000/api/bookingDetails/${userId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch booking details');
            }
            const data = await response.json();
            if (data.length === 0) {
                setBookingDetails([]);
            } else {
                setBookingDetails(data);
            }
        } catch (error) {
            console.error('Error fetching booking details:', error.message);
        }
    };

    useEffect(() => {
        if (userId) {
            fetchBookingDetails();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId]);

    const deleteBooking = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/api/booking/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Failed to delete booking');
            }
            const data = await response.json();
            console.log(data.message); // Log the success message
            // Fetch the updated list of bookings after deleting
            fetchBookingDetails();
        } catch (error) {
            console.error('Error deleting booking:', error.message);
        }
    };

    return (
            <div className="booking-details-container">
                {bookingDetails && bookingDetails.length > 0 ? (
                    bookingDetails.map((booking) => (
                        <div key={booking._id} className="booking-details-card">
                            <h2>Booking Details</h2>
                    <p><strong>Booking Id:</strong> {booking._id}</p>
                    <p><strong>Booking Name:</strong> {booking.name}</p>
                    <p><strong>Number:</strong> {booking.number}</p>
                    <p><strong>From Date:</strong> {booking.fromDate}</p>
                    <p><strong>To Date:</strong> {booking.toDate}</p>
                    <p><strong>Total:</strong> ${booking.total}</p>
                    <button onClick={() => deleteBooking(booking._id)}>Cancel trip</button>
                        </div>
                    ))
                ) : (
                    <p>No bookings</p>
                )}
            </div>
    );
};

export default BookingDetails;