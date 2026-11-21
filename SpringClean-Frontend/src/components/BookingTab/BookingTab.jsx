import React from "react";
import "./BookingTab.css";
import { Link } from "react-router-dom";

export default function BookingTab({ customer, date, status }) {
  return (
    <div className="bookingTab_container">
      <div className="booking-details">
        <div className="customer-info">
          <h3>Customer: {customer}</h3>
          <p>Date: {date}</p>
          <p>Status: {status}</p>
        </div>
        <div className="booking-actions">
          <Link to="/cleaner/bookings">
            <button className="booking-button">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
