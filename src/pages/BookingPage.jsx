import React from "react";
import BookingForm from "../components/BookingForm";
import BookingTable from "../components/BookingTable"; 
import { bookingData } from "../data/bookingData";

function BookingPage({ availableTimes, dispatch }) {
  return (
    <section className="booking-form">
      <h1>Make your reservations</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />

      <h2>Existing reservations</h2>
      <BookingTable data={bookingData} />
    </section>
  );
}

export default BookingPage;
