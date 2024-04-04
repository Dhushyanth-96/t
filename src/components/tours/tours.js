import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './tours.css';

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const toursPerPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    const getToursDetails = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/tours", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch tours details");
        }

        const toursDetails = await response.json();
        setTours(toursDetails);
      } catch (error) {
        console.error("Error fetching tours details:", error.message);
      }
    };

    getToursDetails();
  }, []);

  const token = localStorage.getItem('authToken');

  const getPrizeDetails = async (id) => {
    try {
      if (!token) {
        throw new Error("Please log in to view prize details");
      }

      const response = await fetch(`http://localhost:4000/api/tours/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch prize details");
      }

      const data = await response.json();
      console.log('API response:', data);

      // Navigate to Booking component with tour data as state
      navigate('/booking', { state: { tourData: data } });
    } catch (error) {
      setErrorMessage(error.message);
      console.error("Error fetching prize details:", error.message);
    }
  }

  const indexOfLastTour = currentPage * toursPerPage;
  const indexOfFirstTour = indexOfLastTour - toursPerPage;
  const currentTours = tours.slice(indexOfFirstTour, indexOfLastTour);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Tour List</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="card-container">
        {currentTours.map(tour => (
          <div key={tour._id} className="card">
            <img src={tour.photo[0]} alt={tour.title} width="600" height="400" />
            <div className="desc">
              <h2>{tour.title}</h2>
              <p>City: {tour.city}</p>
              <p>Address: {tour.address}</p>
              <p>Distance: {tour.distance}</p>
              <p>Price: {tour.price}</p>
              <p>Max Group Size: {tour.maxGroupSize}</p>
              <p>Description: {tour.desc}</p>
              <button onClick={() => getPrizeDetails(tour._id)}>Prize</button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(tours.length / toursPerPage) }).map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>{index + 1}</button>
        ))}
      </div>
    </div>
  );
};

export default Tours;