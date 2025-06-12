import React from "react";
import { Link } from "react-router-dom";

function ConfirmedBooking() {
  return (
    <section className="booking-confirmation">
      <h1>Confirmed Reservation!</h1>
      <p>Thank you for booking with Little Lemon.</p>
      <Link to="/">Return to home page</Link>
    </section>
  );
}

export default ConfirmedBooking;
